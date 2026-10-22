import { NextRequest, NextResponse } from "next/server";
import { escapeHtml, isRateLimited } from "@/lib/contact";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@aivized.com";
const EMAIL_FROM = process.env.CONTACT_FROM_EMAIL || "AIVized Website <notifications@aivized.com>";

const VALID_SUBJECTS = [
  "General Inquiry",
  "AI Systems",
  "Automations",
  "SEO & GEO",
  "Digital Marketing",
  "Web Development",
  "Desktop Software",
  "Partnership",
  "Support",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many messages. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const data = await req.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const subject = String(data.subject ?? "").trim();
    const message = String(data.message ?? "").trim();
    const honeypot = String(data.company ?? "").trim();

    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
    }
    if (!isValidEmail(email) || email.length > 200) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!VALID_SUBJECTS.includes(subject)) {
      return NextResponse.json({ ok: false, error: "Please choose a subject." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Please write a message between 10 and 5000 characters." },
        { status: 400 },
      );
    }

    if (!RESEND_API_KEY) {
      console.error("Contact form: RESEND_API_KEY is not set");
      return NextResponse.json(
        { ok: false, error: "Email is not configured. Please contact us directly at info@aivized.com." },
        { status: 500 },
      );
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#111">
        <h2 style="margin:0 0 16px">New contact enquiry</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#666;width:110px">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Subject</td><td style="padding:8px 0">${escapeHtml(subject)}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Received</td><td style="padding:8px 0">${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (GST)</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0" />
        <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Contact form: ${subject} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Contact form: Resend error", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "We could not send your message. Please email info@aivized.com directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email info@aivized.com." },
      { status: 500 },
    );
  }
}
