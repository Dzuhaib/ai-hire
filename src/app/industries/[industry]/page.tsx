export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustryPage from "@/views/IndustryPage";
import { allIndustries, getIndustryBySlug } from "@/data/industryData";
import {
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";

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
  const title = industryData?.metaTitle || `AI Agency for ${industry} UAE | AI & Automation Services`;
  const description = industryData?.metaDescription || `AIVized is an AI agency serving ${industry} UAE businesses. Fully managed AI and automation services. Capture leads, automate support, and grow.`;
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

  const url = `${SITE_URL}/industries/${industryData?.slug}`;

  const schema = industryData
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            ...breadcrumbSchema([
              { name: "Home", item: SITE_URL },
              { name: "Industries", item: `${SITE_URL}/industries` },
              { name: industryData.industry, item: url },
            ]),
            "@id": `${url}#breadcrumb`,
          },
          {
            ...serviceSchema({
              name: `AI Agency for ${industryData.industry} | AIVized`,
              description: industryData.description,
              url,
              serviceType: `AI Agency Services for ${industryData.industry}`,
            }),
            "provider": { "@id": ORG_ID },
          },
          faqPageSchema(industryData.faqs, `${url}#faq`),
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
