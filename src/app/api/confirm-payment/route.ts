import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  // Verify the request comes from a signed-in Clerk user
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { clerkUserId, planName, priceAmount, orderRef } = body;

  // The signed-in user must match the clerkUserId in the payload
  if (!clerkUserId || clerkUserId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Basic validation
  if (!planName || typeof planName !== "string") {
    return NextResponse.json({ error: "planName required" }, { status: 400 });
  }
  if (typeof priceAmount !== "number" || priceAmount <= 0) {
    return NextResponse.json(
      { error: "priceAmount must be a positive number" },
      { status: 400 }
    );
  }

  // Use service role key so writes bypass RLS
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    return NextResponse.json(
      { error: "Server misconfiguration: SUPABASE_SERVICE_ROLE_KEY not set" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Verify user profile exists
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("clerk_user_id")
    .eq("clerk_user_id", clerkUserId)
    .maybeSingle();

  if (profileError || !profile) {
    return NextResponse.json({ error: "User profile not found" }, { status: 404 });
  }

  // Idempotency: don't create duplicate subscription for the same order ref
  if (orderRef) {
    const { data: existing } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("twocheckout_order_ref", orderRef)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ success: true, duplicate: true });
    }
  }

  // Create subscription server-side
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
    return NextResponse.json(
      { error: "Failed to create subscription" },
      { status: 500 }
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

  return NextResponse.json({ success: true });
}
