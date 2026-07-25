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
  const title = industryData?.metaTitle || `AI Agency for ${industry} UK | AI Chatbot & Automation Services`;
  const description = industryData?.metaDescription || `AIVized is an AI agency serving ${industry} UK businesses. Fully managed AI chatbot and automation services. Capture leads and automate support 24/7 from £29/month.`;
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
            "name": `AI Agency for ${industryData.industry} | AIVized`,
            "description": industryData.description,
            "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
            "serviceType": "AI Agency Services",
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
