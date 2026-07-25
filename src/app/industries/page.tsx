export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustriesPage from "@/views/IndustriesPage";
import { allIndustries } from "@/data/industryData";

export const metadata: Metadata = {
  title: "AI Agency for UK Industries | AI Chatbot Solutions by Sector",
  description:
    "AIVized is an AI agency serving every UK industry: restaurants, real estate, healthcare, legal, fitness, e-commerce, and more. Fully managed AI from £29/month.",
  alternates: { canonical: "https://www.aivized.com/industries" },
  openGraph: {
    title: "AI Agency for UK Industries | AI Chatbot Solutions by Sector",
    description: "AIVized is an AI agency serving every UK industry: restaurants, real estate, healthcare, legal, fitness, e-commerce, and more. Fully managed AI from £29/month.",
    url: "https://www.aivized.com/industries",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const industriesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.aivized.com/industries" }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.aivized.com/industries#collectionpage",
      "name": "AI Agency for UK Industries | AIVized",
      "description": "Industry-trained AI agency solutions for UK small businesses. Covering restaurants, real estate, e-commerce, healthcare, legal, fitness, and travel.",
      "url": "https://www.aivized.com/industries",
      "publisher": { "@id": "https://www.aivized.com/#organization" },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": allIndustries.map((ind, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": `AI Chatbot for ${ind.industry}`,
          "url": `https://www.aivized.com/industries/${ind.slug}`
        }))
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }} />
      <IndustriesPage />
    </>
  );
}
