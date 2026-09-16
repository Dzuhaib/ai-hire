export const revalidate = 86400;
import type { Metadata } from "next";
import CaseStudiesPage from "@/views/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies | AIVized — Real Results for UK Businesses",
  description:
    "See how AIVized has helped UK businesses in London, Manchester, Birmingham, and more capture more leads, reduce costs, and automate customer service. Real case studies with measurable results.",
  alternates: { canonical: "https://www.aivized.com/case-studies" },
  openGraph: {
    title: "Case Studies | AIVized — Real Results for UK Businesses",
    description: "See how AIVized has helped UK businesses capture more leads, reduce costs, and automate customer service with measurable results.",
    url: "https://www.aivized.com/case-studies",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.aivized.com/case-studies" }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.aivized.com/case-studies#collectionpage",
      "name": "AIVized Case Studies — Real Results for UK Businesses",
      "description": "Real case studies and success stories from UK businesses using AIVized's managed AI chatbot service.",
      "url": "https://www.aivized.com/case-studies",
      "publisher": { "@id": "https://www.aivized.com/#organization" }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }} />
      <CaseStudiesPage />
    </>
  );
}
