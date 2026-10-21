export const revalidate = 86400;
import type { Metadata } from "next";
import LocationsPage from "@/views/LocationsPage";
import { uaeLocations } from "@/data/locationData";
import { services } from "@/data/servicesData";

const title = "AI, Automation & Digital Services Across the UAE | AIVized";
const description =
  "AIVized works with businesses across the UAE, delivering AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software. Explore services by city.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "AI services UAE",
    "automation services UAE",
    "SEO and GEO UAE",
    "digital marketing UAE",
    "web development UAE",
    "desktop software development UAE",
  ],
  alternates: { canonical: "https://www.aivized.com/locations" },
  openGraph: {
    title,
    description,
    url: "https://www.aivized.com/locations",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.aivized.com/og-image.png"] },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.aivized.com/locations#collectionpage",
      "name": "AI, Automation & Digital Services Across the UAE",
      "description":
        "AIVized delivers AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for businesses across the UAE.",
      "url": "https://www.aivized.com/locations",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "publisher": { "@id": "https://www.aivized.com/#organization" },
      "mainEntity": {
        "@type": "ItemList",
        "name": "AIVized locations",
        "itemListElement": uaeLocations.map((loc, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `AI, Automation & Digital Services in ${loc.city}`,
          "url": `https://www.aivized.com/locations/${loc.slug}`,
        })),
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.aivized.com/locations#services",
      "name": "AIVized Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "serviceType": service.title,
          "provider": { "@id": "https://www.aivized.com/#organization" },
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
          "url": `https://www.aivized.com/services#${service.slug}`,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aivized.com/locations#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://www.aivized.com/locations",
        },
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
