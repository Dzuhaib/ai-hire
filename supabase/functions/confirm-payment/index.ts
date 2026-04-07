import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.aivized.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { clerkUserId, planName, priceAmount, orderRef } = await req.json();

    // Validate required fields
    if (!clerkUserId || typeof clerkUserId !== "string") {
      return new Response(
        JSON.stringify({ error: "clerkUserId required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!planName || typeof planName !== "string") {
      return new Response(
        JSON.stringify({ error: "planName required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (typeof priceAmount !== "number" || priceAmount <= 0) {
      return new Response(
        JSON.stringify({ error: "priceAmount must be a positive number" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify user profile exists
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("clerk_user_id, email, full_name")
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

    if (profileError) {
      return new Response(
        JSON.stringify({ error: "Failed to verify user" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!profile) {
      return new Response(
        JSON.stringify({ error: "User profile not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check for duplicate: don't create a second active subscription for the same order ref
    if (orderRef) {
      const { data: existing } = await supabase
        .from("subscriptions")
        .select("id")
        .eq("twocheckout_order_ref", orderRef)
        .maybeSingle();

      if (existing) {
        return new Response(
          JSON.stringify({ success: true, duplicate: true }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Create subscription (server-side, service role key)
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    const { error: subError } = await supabase.from("subscriptions").insert({
      clerk_user_id: clerkUserId,
      plan_name: planName,
      plan_price: priceAmount,
      status: "active",
      twocheckout_order_ref: orderRef ?? null,
      expires_at: expiresAt.toISOString(),
    });

    if (subError) {
      console.error("Subscription insert error:", subError);
      return new Response(
        JSON.stringify({ error: "Failed to create subscription" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create billing history record
    await supabase.from("billing_history").insert({
      clerk_user_id: clerkUserId,
      amount: priceAmount,
      currency: "GBP",
      description: `${planName} - Monthly subscription`,
      status: "paid",
      twocheckout_ref: orderRef ?? null,
      paid_at: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
