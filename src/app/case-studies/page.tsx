export const revalidate = 86400;
import type { Metadata } from "next";
import CaseStudiesPage from "@/views/CaseStudiesPage";
import { engagementExamples } from "@/data/caseStudiesData";

const title = "Example Engagements | AI, Automation & Digital Projects | AIVized";
const description =
  "Explore illustrative examples of AI systems, automation, SEO, web development, and software projects we deliver for UK businesses. Client names and specific results are withheld.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "AI project examples",
    "automation examples",
    "SEO case studies",
    "web development projects",
    "AI systems for UK businesses",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.aivized.com/case-studies#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Example Engagements",
          "item": "https://www.aivized.com/case-studies",
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.aivized.com/case-studies#collectionpage",
      "name": "Example Engagements: AI, Automation & Digital Projects",
      "description":
        "Illustrative examples of AI systems, workflow automation, SEO, web development, and software projects for UK businesses.",
      "url": "https://www.aivized.com/case-studies",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "publisher": { "@id": "https://www.aivized.com/#organization" },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.aivized.com/case-studies#engagements",
      "name": "Example Engagements",
      "itemListElement": engagementExamples.map((example, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": example.title,
          "description": example.challenge,
          "about": [example.industry, example.businessType],
          "url": `https://www.aivized.com/case-studies#${example.slug}`,
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
