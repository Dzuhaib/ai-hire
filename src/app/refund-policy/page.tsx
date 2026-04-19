export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import RefundPolicy from "@/views/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | AIVized",
  description: "Read the AIVized refund and cancellation policy.",
  alternates: { canonical: "https://www.aivized.com/refund-policy" },
};

export default function Page() {
  return <RefundPolicy />;
}
