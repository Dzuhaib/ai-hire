export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustriesPage from "@/views/IndustriesPage";
import { allIndustries } from "@/data/industryData";

export const metadata: Metadata = {
  title: "AI Chatbot by Industry | AI Vized - Restaurant, Real Estate, E-Commerce",
  description:
    "Managed AI chatbot solutions for every UK industry. Restaurants, real estate, e-commerce, healthcare, legal, fitness and more.",
  alternates: { canonical: "https://www.aivized.com/industries" },
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
      "name": "AI Chatbot by Industry — AIVized",
      "description": "Industry-trained AI chatbot solutions for UK small businesses. Covering restaurants, real estate, e-commerce, healthcare, legal, fitness, and travel.",
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
