import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { clerkUserId, subscriptionId } = await req.json();

    if (!clerkUserId || !subscriptionId) {
      throw new Error("Missing required fields");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Verify the subscription belongs to the user
    const { data: sub } = await supabase
      .from("subscriptions")
      .select("id, clerk_user_id")
      .eq("id", subscriptionId)
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

    if (!sub) {
      throw new Error("Subscription not found");
    }

    // Get full subscription details for billing record
    const { data: fullSub } = await supabase
      .from("subscriptions")
      .select("plan_name, plan_price")
      .eq("id", subscriptionId)
      .single();

    const { error } = await supabase
      .from("subscriptions")
      .update({
        status: "cancelled",
        cancelled_at: new Date().toISOString(),
      })
      .eq("id", subscriptionId);

    if (error) throw error;

    // Record cancellation in billing history
    if (fullSub) {
      await supabase.from("billing_history").insert({
        clerk_user_id: clerkUserId,
        amount: 0,
        currency: "GBP",
        description: `${fullSub.plan_name} - Subscription Cancelled`,
        status: "cancelled",
        paid_at: new Date().toISOString(),
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Cancel error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
