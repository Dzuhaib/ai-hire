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
    const { clerkUserId, email, fullName, avatarUrl, planName, priceAmount } = await req.json();

    if (!clerkUserId || !planName || !priceAmount) {
      throw new Error("Missing required fields");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Ensure profile exists
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("clerk_user_id")
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

    if (!existingProfile) {
      const { error: profileError } = await supabase.from("profiles").insert({
        clerk_user_id: clerkUserId,
        email: email || "",
        full_name: fullName || "",
        avatar_url: avatarUrl || "",
      });
      if (profileError) {
        console.error("Profile error:", profileError);
        throw new Error("Failed to create profile");
      }
    }

    // Check for existing active subscription
    const { data: existingSub } = await supabase
      .from("subscriptions")
      .select("id, status")
      .eq("clerk_user_id", clerkUserId)
      .in("status", ["active", "trial", "pending_payment"])
      .maybeSingle();

    if (existingSub) {
      return new Response(
        JSON.stringify({ success: false, error: "already_subscribed", message: "You already have an active plan or trial." }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create trial subscription (3 days)
    const trialEndsAt = new Date();
    trialEndsAt.setDate(trialEndsAt.getDate() + 3);

    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    const { error: subError } = await supabase.from("subscriptions").insert({
      clerk_user_id: clerkUserId,
      plan_name: `aivized ${planName}`,
      plan_price: priceAmount,
      status: "trial",
      trial_ends_at: trialEndsAt.toISOString(),
      expires_at: expiresAt.toISOString(),
    });

    if (subError) {
      console.error("Subscription error:", subError);
      throw new Error("Failed to create trial subscription");
    }

    // Record trial start in billing history
    await supabase.from("billing_history").insert({
      clerk_user_id: clerkUserId,
      amount: 0,
      currency: "GBP",
      description: `${planName} - Free Trial Started (3 days)`,
      status: "trial",
      paid_at: new Date().toISOString(),
    });

    // Send admin email notification
    await sendEmailNotification(EMAILJS_ADMIN_TEMPLATE, {
      to_email: ADMIN_EMAIL,
      subject: `🚀 New Trial Started - ${fullName || "Unknown"}`,
      message_body: `${fullName || "Unknown"} (${email}) just started a free trial.\nPlan: ${planName}\nTrial ends: ${trialEndsAt.toLocaleDateString("en-GB")}`,
    });

    return new Response(
      JSON.stringify({ success: true, trialEndsAt: trialEndsAt.toISOString() }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Trial error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});