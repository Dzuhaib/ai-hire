export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import LocationPage from "@/views/LocationPage";
import { ukLocations } from "@/data/locationData";

export async function generateStaticParams() {
  return ukLocations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `AI Chatbot ${cityName} | Managed AI Service for ${cityName} Businesses`,
    description: `Get a fully managed AI chatbot for your ${cityName} business from £29/month. 24/7 lead generation and customer support.`,
    alternates: { canonical: `https://www.aivized.com/locations/${city}` },
    openGraph: {
      title: `AI Chatbot ${cityName} | Managed AI Service for ${cityName} Businesses`,
      description: `Get a fully managed AI chatbot for your ${cityName} business from £29/month. 24/7 lead generation and customer support.`,
      url: `https://www.aivized.com/locations/${city}`,
    },
  };
}

export default function Page() {
  return <LocationPage />;
}
