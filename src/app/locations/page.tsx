export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import LocationsPage from "@/views/LocationsPage";
import { ukLocations } from "@/data/locationData";

export const metadata: Metadata = {
  title: "Managed AI Chatbot Services Across the United Kingdom",
  description:
    "Get premium managed AI chatbot services in London, Manchester, Birmingham, and across the UK. Capture leads and automate support 24/7 from £29/month.",
  alternates: { canonical: "https://www.aivized.com/locations" },
  openGraph: {
    title: "Managed AI Chatbot Services Across the United Kingdom",
    description: "Get premium managed AI chatbot services in London, Manchester, Birmingham, and across the UK. Capture leads and automate support 24/7 from £29/month.",
    url: "https://www.aivized.com/locations",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.aivized.com/locations#collectionpage",
      "name": "AIVized UK Locations: Managed AI Chatbot by City",
      "description": "Managed AI chatbot service available across all major UK cities. AIVized installs and maintains your chatbot wherever your business is based.",
      "url": "https://www.aivized.com/locations",
      "publisher": { "@id": "https://www.aivized.com/#organization" },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": ukLocations.map((loc, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": `Managed AI Chatbot ${loc.city}`,
          "url": `https://www.aivized.com/locations/${loc.slug}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.aivized.com/locations" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }} />
      <LocationsPage />
    </>
  );
}
