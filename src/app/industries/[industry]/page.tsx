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
          {
            "@type": "FAQPage",
            "mainEntity": industryData.faqs.map((faq) => ({
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
      <IndustryPage />
    </>
  );
}
