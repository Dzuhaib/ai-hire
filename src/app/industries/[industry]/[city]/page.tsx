export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustryCityPage from "@/views/IndustryCityPage";
import { allIndustries } from "@/data/industryData";
import { ukLocations } from "@/data/locationData";

export async function generateStaticParams() {
  const params: { industry: string; city: string }[] = [];
  for (const industry of allIndustries) {
    for (const location of ukLocations) {
      params.push({ industry: industry.slug, city: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; city: string }>;
}): Promise<Metadata> {
  const { industry, city } = await params;
  const industryName = industry
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `AI Chatbot for ${industryName} in ${cityName} | AI Vized`,
    description: `Managed AI chatbot for ${industryName} businesses in ${cityName}. 24/7 lead generation and customer support from £29/month.`,
    alternates: { canonical: `https://www.aivized.com/industries/${industry}/${city}` },
    openGraph: {
      title: `AI Chatbot for ${industryName} in ${cityName} | AI Vized`,
      description: `Managed AI chatbot for ${industryName} businesses in ${cityName}. 24/7 lead generation and customer support from £29/month.`,
      url: `https://www.aivized.com/industries/${industry}/${city}`,
    },
  };
}

export default function Page() {
  return <IndustryCityPage />;
}
