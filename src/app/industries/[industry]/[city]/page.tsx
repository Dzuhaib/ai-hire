export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustryCityPage from "@/views/IndustryCityPage";
import { allIndustries, getIndustryBySlug } from "@/data/industryData";
import { ukLocations } from "@/data/locationData";
import { getIndustryCityData } from "@/data/industryCityData";

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
  const data = getIndustryCityData(industry, city);
  // Use pre-crafted unique metadata from data if available; fallback to template
  const title = data?.metaTitle ?? `AI Chatbot for ${industry} in ${city} | AI Vized`;
  const description = data?.metaDescription ?? `Managed AI chatbot for ${industry} businesses in ${city}. 24/7 lead generation from £29/month.`;
  const keywords = data?.metaKeywords;
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: `https://www.aivized.com/industries/${industry}/${city}` },
    openGraph: {
      title,
      description,
      url: `https://www.aivized.com/industries/${industry}/${city}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ industry: string; city: string }>;
}) {
  const { industry, city } = await params;
  const cityData = getIndustryCityData(industry, city);
  const parentIndustry = getIndustryBySlug(industry);

  const schema =
    cityData && parentIndustry
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
                { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.aivized.com/industries" },
                { "@type": "ListItem", "position": 3, "name": parentIndustry.industry, "item": `https://www.aivized.com/industries/${industry}` },
                { "@type": "ListItem", "position": 4, "name": cityData.cityName, "item": `https://www.aivized.com/industries/${industry}/${city}` },
              ],
            },
            {
              "@type": "Service",
              "name": `AI Chatbot for ${parentIndustry.industry} in ${cityData.cityName}`,
              "description": `Fully managed AI chatbot for ${parentIndustry.industry.toLowerCase()} businesses in ${cityData.cityName}. 24/7 lead capture and customer enquiry automation from £29/month.`,
              "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
              "serviceType": "AI Chatbot Management",
              "areaServed": { "@type": "City", "name": cityData.cityName },
              "url": `https://www.aivized.com/industries/${industry}/${city}`,
              "offers": {
                "@type": "Offer",
                "price": "29",
                "priceCurrency": "GBP",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" }
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": cityData.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
              })),
            },
          ],
        }
      : null;

  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <IndustryCityPage />
    </>
  );
}
