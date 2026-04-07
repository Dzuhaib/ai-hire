export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustryPage from "@/views/IndustryPage";
import { allIndustries } from "@/data/industryData";

export async function generateStaticParams() {
  return allIndustries.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const industryName = industry
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `AI Chatbot for ${industryName} UK | AI Vized`,
    description: `Managed AI chatbot for ${industryName} businesses in the UK. 24/7 customer support and lead generation from £29/month.`,
    alternates: { canonical: `https://www.aivized.com/industries/${industry}` },
    openGraph: {
      title: `AI Chatbot for ${industryName} UK | AI Vized`,
      description: `Managed AI chatbot for ${industryName} businesses in the UK. 24/7 customer support and lead generation from £29/month.`,
      url: `https://www.aivized.com/industries/${industry}`,
    },
  };
}

export default function Page() {
  return <IndustryPage />;
}
