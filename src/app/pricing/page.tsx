export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PricingPage from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | AI Vized - Affordable AI Chatbot Plans from £29/mo",
  description:
    "View AI Vized pricing plans. Managed AI chatbot for UK small businesses from just £29/month. No upfront costs, no long-term contracts.",
  alternates: { canonical: "https://www.aivized.com/pricing" },
};

export default function Page() {
  return <PricingPage />;
}
