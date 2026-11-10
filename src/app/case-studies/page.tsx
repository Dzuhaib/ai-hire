export const revalidate = 86400;
import type { Metadata } from "next";
import CaseStudiesPage from "@/views/CaseStudiesPage";
import { engagementExamples } from "@/data/caseStudiesData";
import { ORG_ID, SITE_URL, WEBSITE_ID, breadcrumbSchema } from "@/lib/schema";

const title = "Example Engagements | AI, Automation & Digital Projects | AIVized";
const description =
  "Explore illustrative examples of AI systems, automation, SEO, web development, and software projects we deliver for UAE businesses. Client names and specific results are withheld.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "AI project examples",
    "automation examples",
    "SEO case studies",
    "web development projects",
    "AI systems for UAE businesses",
  ],
  alternates: { canonical: "https://www.aivized.com/case-studies" },
  openGraph: {
    title,
    description,
    url: "https://www.aivized.com/case-studies",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.aivized.com/og-image.png"] },
};

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Example Engagements", item: `${SITE_URL}/case-studies` },
      ]),
      "@id": `${SITE_URL}/case-studies#breadcrumb`,
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/case-studies#collectionpage`,
      "name": "Example Engagements: AI, Automation & Digital Projects",
      "description":
        "Illustrative examples of AI systems, workflow automation, SEO, web development, and software projects for UAE businesses.",
      "url": `${SITE_URL}/case-studies`,
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "publisher": { "@id": ORG_ID },
      "mainEntity": { "@id": `${SITE_URL}/case-studies#engagements` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/case-studies#engagements`,
      "name": "Example Engagements",
      "numberOfItems": engagementExamples.length,
      "itemListElement": engagementExamples.map((example, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": example.title,
          "description": example.challenge,
          "about": [example.industry, example.businessType],
          "url": `${SITE_URL}/case-studies#${example.slug}`,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }} />
      <CaseStudiesPage />
    </>
  );
}
