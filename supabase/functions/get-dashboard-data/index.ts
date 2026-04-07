import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.aivized.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { clerkUserId } = await req.json();

    if (!clerkUserId) {
      throw new Error("Missing clerkUserId");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Auto-expire trials that have passed their trial_ends_at
    const now = new Date().toISOString();
    const { data: expiredTrials } = await supabase
      .from("subscriptions")
      .select("id, clerk_user_id, plan_name, trial_ends_at")
      .eq("clerk_user_id", clerkUserId)
      .eq("status", "trial")
      .lt("trial_ends_at", now);

    if (expiredTrials && expiredTrials.length > 0) {
      for (const trial of expiredTrials) {
        // Update subscription to expired
        await supabase
          .from("subscriptions")
          .update({ status: "expired" })
          .eq("id", trial.id);

        // Add billing history record for trial ended
        await supabase.from("billing_history").insert({
          clerk_user_id: trial.clerk_user_id,
          amount: 0,
          currency: "GBP",
          description: `${trial.plan_name} - Free Trial Ended`,
          status: "expired",
          paid_at: trial.trial_ends_at,
        });
      }
    }

    // Fetch subscription (including expired ones so user can see status)
    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .in("status", ["active", "pending_payment", "trial", "expired"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    // Fetch billing history (all records)
    const { data: billingHistory } = await supabase
      .from("billing_history")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .order("created_at", { ascending: false })
      .limit(50);

    return new Response(
      JSON.stringify({ subscription, billingHistory: billingHistory || [] }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Dashboard data error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
