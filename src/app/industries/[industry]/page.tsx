export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustryPage from "@/views/IndustryPage";
import { allIndustries, getIndustryBySlug } from "@/data/industryData";

export async function generateStaticParams() {
  return allIndustries.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const industryData = getIndustryBySlug(industry);
  const title = industryData?.metaTitle || `Managed AI Chatbot for ${industry} UK Businesses | AIVized`;
  const description = industryData?.metaDescription || `Get a managed AI chatbot service for ${industry} UK businesses. Capture leads and automate support 24/7. Fully installed by AIVized from £29/month.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.aivized.com/industries/${industry}` },
    openGraph: {
      title,
      description,
      url: `https://www.aivized.com/industries/${industry}`,
      type: "website",
      images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const industryData = getIndustryBySlug(industry);

  const schema = industryData
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
              { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.aivized.com/industries" },
              { "@type": "ListItem", "position": 3, "name": industryData.industry, "item": `https://www.aivized.com/industries/${industryData.slug}` },
            ],
          },
          {
            "@type": "Service",
            "@id": `https://www.aivized.com/industries/${industryData.slug}#service`,
            "name": `AI Chatbot for ${industryData.industry}`,
            "description": industryData.description,
            "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
            "serviceType": "AI Chatbot Management",
            "areaServed": { "@type": "Country", "name": "United Kingdom" },
            "url": `https://www.aivized.com/industries/${industryData.slug}`,
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "GBP",
              "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" }
            }
          },
        ],
      }
    : null;

  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <IndustryPage />
    </>
  );
}
