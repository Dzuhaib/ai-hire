export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustriesPage from "@/views/IndustriesPage";
import { allIndustries } from "@/data/industryData";
import { ORG_ID, SITE_URL, WEBSITE_ID, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Agency for UAE Industries | AI & Automation Solutions by Sector",
  description:
    "AIVized is an AI agency serving every UAE industry: restaurants, real estate, healthcare, legal, fitness, e-commerce, and more. Fully managed AI & automation.",
  alternates: { canonical: "https://www.aivized.com/industries" },
  openGraph: {
    title: "AI Agency for UAE Industries | AI & Automation Solutions by Sector",
    description: "AIVized is an AI agency serving every UAE industry: restaurants, real estate, healthcare, legal, fitness, e-commerce, and more. Fully managed AI & automation.",
    url: "https://www.aivized.com/industries",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const industriesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Industries", item: `${SITE_URL}/industries` },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/industries#collectionpage`,
      "name": "AI Agency for UAE Industries | AIVized",
      "description": "Industry-trained AI agency solutions for UAE small businesses. Covering restaurants, real estate, e-commerce, healthcare, legal, fitness, and travel.",
      "url": `${SITE_URL}/industries`,
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "publisher": { "@id": ORG_ID },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": allIndustries.length,
        "itemListElement": allIndustries.map((ind, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": `AI Agency for ${ind.industry}`,
          "url": `${SITE_URL}/industries/${ind.slug}`
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
