export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustriesPage from "@/views/IndustriesPage";

export const metadata: Metadata = {
  title: "AI Chatbot by Industry | AI Vized - Restaurant, Real Estate, E-Commerce",
  description:
    "Managed AI chatbot solutions for every UK industry. Restaurants, real estate, e-commerce, healthcare, legal, fitness and more.",
  alternates: { canonical: "https://www.aivized.com/industries" },
};

export default function Page() {
  return <IndustriesPage />;
}
