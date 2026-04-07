export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import LocationsPage from "@/views/LocationsPage";

export const metadata: Metadata = {
  title: "AI Chatbot UK Locations | AI Vized",
  description:
    "AI Vized managed AI chatbot services across all major UK cities. Find your local AI chatbot service.",
  alternates: { canonical: "https://www.aivized.com/locations" },
};

export default function Page() {
  return <LocationsPage />;
}
