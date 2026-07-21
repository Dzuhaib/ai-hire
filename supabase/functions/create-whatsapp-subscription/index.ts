import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { sendEmail } from "../_shared/email.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.aivized.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ADMIN_EMAIL = "info@aivized.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { clerkUserId, planName, priceAmount } = await req.json();

    if (!clerkUserId || !planName || !priceAmount) {
      throw new Error("Missing required fields");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: existingSub } = await supabase
      .from("subscriptions")
      .select("id, status, plan_name")
      .eq("clerk_user_id", clerkUserId)
      .in("status", ["trial", "expired"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingSub) {
      const { error: updateError } = await supabase
        .from("subscriptions")
        .update({ status: "pending_payment" })
        .eq("id", existingSub.id);

      if (updateError) {
        throw new Error("Failed to update subscription");
      }
    } else {
      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + 1);

      const { error: subError } = await supabase.from("subscriptions").insert({
        clerk_user_id: clerkUserId,
        plan_name: `aivized ${planName}`,
        plan_price: priceAmount,
        status: "pending_payment",
        expires_at: expiresAt.toISOString(),
      });

      if (subError) {
        throw new Error("Failed to create subscription");
      }
    }

    await supabase.from("billing_history").insert({
      clerk_user_id: clerkUserId,
      amount: priceAmount,
      currency: "GBP",
      description: `${planName} - Payment Request via WhatsApp (Awaiting Approval)`,
      status: "pending",
      paid_at: new Date().toISOString(),
    });

    const { data: profile } = await supabase
      .from("profiles")
      .select("email, full_name")
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

    if (profile) {
      await sendEmail({
        to: ADMIN_EMAIL,
        subject: `Payment Request - ${profile.full_name || "Unknown"}`,
        html: `<h2>Payment Request</h2><p><strong>${profile.full_name || "Unknown"}</strong> (${profile.email}) has requested to pay for <strong>${planName}</strong> (£${priceAmount}/month) via WhatsApp.</p><p><a href="https://www.aivized.com/admin" style="display:inline-block;padding:12px 24px;background-color:#D95A2B;color:#fff;text-decoration:none;border-radius:8px;">Approve in Admin</a></p>`,
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
