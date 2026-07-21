import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { sendEmail } from "../_shared/email.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.aivized.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "info@aivized.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, clerkUserId } = await req.json();

    if (!clerkUserId || !type) {
      throw new Error("Missing required fields");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: profile } = await supabase
      .from("profiles")
      .select("email, full_name")
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .in("status", ["active", "trial", "expired"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const displayName = profile?.full_name || profile?.email?.split("@")[0] || "there";

    switch (type) {
      case "trial_ending": {
        if (!subscription?.trial_ends_at) throw new Error("No trial ending date");
        const endDate = new Date(subscription.trial_ends_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

        await Promise.allSettled([
          sendEmail({
            to: ADMIN_EMAIL,
            subject: `Trial Ending Soon - ${profile?.full_name || "Unknown"}`,
            html: `<h2>Trial Ending Soon</h2><p><strong>${profile?.full_name || "Unknown"}</strong> (${profile?.email})'s ${subscription.plan_name} trial ends on ${endDate}.</p><p><a href="https://www.aivized.com/admin" style="display:inline-block;padding:12px 24px;background-color:#D95A2B;color:#fff;text-decoration:none;border-radius:8px;">Admin Dashboard</a></p>`,
          }),
          sendEmail({
            to: profile?.email || "",
            subject: `Your aivized Trial Ends in 3 Days`,
            html: `<h2>Trial Ending Soon</h2><p>Hi ${displayName},</p><p>Your <strong>${subscription.plan_name}</strong> trial ends on <strong>${endDate}</strong>.</p><p>Subscribe now to keep your AI employee running!</p><p><a href="https://www.aivized.com/dashboard" style="display:inline-block;padding:12px 24px;background-color:#D95A2B;color:#fff;text-decoration:none;border-radius:8px;">Upgrade Now</a></p>`,
          }),
        ]);
        break;
      }

      case "subscription_expiring": {
        if (!subscription?.expires_at) throw new Error("No expiry date");
        const expDate = new Date(subscription.expires_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

        await Promise.allSettled([
          sendEmail({
            to: ADMIN_EMAIL,
            subject: `Subscription Expiring Soon - ${profile?.full_name || "Unknown"}`,
            html: `<h2>Subscription Expiring</h2><p><strong>${profile?.full_name || "Unknown"}</strong> (${profile?.email})'s ${subscription.plan_name} subscription expires on ${expDate}.</p>`,
          }),
          sendEmail({
            to: profile?.email || "",
            subject: `Your aivized Subscription Expires in 3 Days`,
            html: `<h2>Subscription Expiring</h2><p>Hi ${displayName},</p><p>Your <strong>${subscription.plan_name}</strong> subscription expires on <strong>${expDate}</strong>.</p><p>Renew now to avoid interruption.</p><p><a href="https://www.aivized.com/dashboard" style="display:inline-block;padding:12px 24px;background-color:#D95A2B;color:#fff;text-decoration:none;border-radius:8px;">View Dashboard</a></p>`,
          }),
        ]);
        break;
      }

      default:
        throw new Error(`Unknown notification type: ${type}`);
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
