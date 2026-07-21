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
    const { clerkUserId, email, fullName, avatarUrl, planName, priceAmount } = await req.json();

    if (!clerkUserId || !planName || !priceAmount) {
      throw new Error("Missing required fields");
    }

    const trialEligiblePlans = ["Starter", "Professional"];
    if (!trialEligiblePlans.includes(planName)) {
      return new Response(
        JSON.stringify({ success: false, error: "trial_not_available", message: "Free trial is not available for this plan. Please contact us to get started." }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

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
        throw new Error("Failed to create profile");
      }
    }

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
      throw new Error("Failed to create trial subscription");
    }

    await supabase.from("billing_history").insert({
      clerk_user_id: clerkUserId,
      amount: 0,
      currency: "GBP",
      description: `${planName} - Free Trial Started (3 days)`,
      status: "trial",
      paid_at: new Date().toISOString(),
    });

    const displayName = fullName || email?.split("@")[0] || "there";
    const trialEndDate = trialEndsAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    await Promise.allSettled([
      sendEmail({
        to: ADMIN_EMAIL,
        subject: `New Trial Started - ${displayName}`,
        html: `<h2>New Trial Started</h2><p><strong>${displayName}</strong> (${email}) just started a free trial.</p><p><strong>Plan:</strong> ${planName}<br><strong>Trial ends:</strong> ${trialEndDate}</p>`,
      }),
      sendEmail({
        to: email,
        subject: `Your 3-Day Free Trial for ${planName} is Ready!`,
        html: `<h2>Welcome to aivized!</h2><p>Hi ${displayName},</p><p>Your <strong>3-day free trial</strong> for the ${planName} plan has started.</p><p><strong>Trial ends:</strong> ${trialEndDate}</p><p>Share your website details with us on WhatsApp to get your AI employee set up.</p><p><a href="https://www.aivized.com/dashboard" style="display:inline-block;padding:12px 24px;background-color:#D95A2B;color:#fff;text-decoration:none;border-radius:8px;">Go to Dashboard</a></p>`,
      }),
    ]);

    return new Response(
      JSON.stringify({ success: true, trialEndsAt: trialEndsAt.toISOString() }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
