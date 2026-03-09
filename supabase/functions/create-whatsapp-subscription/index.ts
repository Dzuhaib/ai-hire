import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const EMAILJS_SERVICE_ID = "service_57jwo4o";
const EMAILJS_PUBLIC_KEY = "MqaarR3vYud1QmXz7";
const EMAILJS_ADMIN_TEMPLATE = "template_uoosd5n";
const ADMIN_EMAIL = "admin@aivized.com";

async function sendEmailNotification(templateId: string, params: Record<string, string>) {
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: templateId,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: params,
      }),
    });
    console.log("[EmailJS] Send result:", res.status, await res.text());
  } catch (e) {
    console.error("[EmailJS] Failed:", e);
  }
}

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

    // Find existing trial or expired trial subscription to update
    const { data: existingSub } = await supabase
      .from("subscriptions")
      .select("id, status, plan_name")
      .eq("clerk_user_id", clerkUserId)
      .in("status", ["trial", "expired"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingSub) {
      // Update existing subscription to pending_payment
      const { error: updateError } = await supabase
        .from("subscriptions")
        .update({ status: "pending_payment" })
        .eq("id", existingSub.id);

      if (updateError) {
        console.error("Update subscription error:", updateError);
        throw new Error("Failed to update subscription");
      }
    } else {
      // No existing trial - create a new pending_payment subscription
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
        console.error("Subscription error:", subError);
        throw new Error("Failed to create subscription");
      }
    }

    // Add billing history record
    await supabase.from("billing_history").insert({
      clerk_user_id: clerkUserId,
      amount: priceAmount,
      currency: "GBP",
      description: `${planName} - Payment Request via WhatsApp (Awaiting Approval)`,
      status: "pending",
      paid_at: new Date().toISOString(),
    });

    // Get user profile for notification
    const { data: profile } = await supabase
      .from("profiles")
      .select("email, full_name")
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

    // Notify admin
    if (profile) {
      await sendEmailNotification(EMAILJS_ADMIN_TEMPLATE, {
        to_email: ADMIN_EMAIL,
        subject: `💳 Payment Request - ${profile.full_name || "Unknown"}`,
        message_body: `${profile.full_name || "Unknown"} (${profile.email}) has requested to pay for ${planName} (£${priceAmount}/month) via WhatsApp.\n\nPlease verify payment and approve in the admin dashboard.`,
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Subscription error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
