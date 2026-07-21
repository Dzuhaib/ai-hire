import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

async function verifyWebhook(req: NextRequest, body: string): Promise<boolean> {
  if (!WEBHOOK_SECRET) return false;

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) return false;

  const signedContent = `${svixId}.${svixTimestamp}.${body}`;
  const encoder = new TextEncoder();
  const keyData = encoder.encode(WEBHOOK_SECRET);
  const messageData = encoder.encode(signedContent);

  const cryptoKey = await crypto.subtle.importKey(
    "raw", keyData, { name: "HMAC", hash: "SHA-256" },
    false, ["sign"]
  );

  const expectedSig = Array.from(new Uint8Array(await crypto.subtle.sign("HMAC", cryptoKey, messageData)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const receivedSigs = svixSignature.split(" ").map((s) => s.split(",")[1] || s);
  return receivedSigs.some((sig) => sig === expectedSig);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const valid = await verifyWebhook(req, body);
    if (!valid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(body);
    const type = payload.type;

    if (type !== "user.created") {
      return NextResponse.json({ received: true });
    }

    const data = payload.data;
    const clerkUserId = data.id;
    const email = data.email_addresses?.[0]?.email_address || "";
    const fullName = `${data.first_name || ""} ${data.last_name || ""}`.trim() || email.split("@")[0];
    const avatarUrl = data.image_url || "";

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!serviceRoleKey) {
      return NextResponse.json({ error: "Service role key not set" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabase.from("profiles").upsert(
      {
        clerk_user_id: clerkUserId,
        email,
        full_name: fullName,
        avatar_url: avatarUrl,
      },
      { onConflict: "clerk_user_id" }
    );

    if (error) {
      return NextResponse.json({ error: "Failed to create profile" }, { status: 500 });
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
