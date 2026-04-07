export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import RefundPolicy from "@/views/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | AI Vized",
  description: "Read the AI Vized refund and cancellation policy.",
  alternates: { canonical: "https://www.aivized.com/refund-policy" },
};

export default function Page() {
  return <RefundPolicy />;
}
