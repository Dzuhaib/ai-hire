export const revalidate = 86400;
import type { Metadata } from "next";
import LocationsPage from "@/views/LocationsPage";
import { uaeLocations } from "@/data/locationData";
import { services } from "@/data/servicesData";
import { ORG_ID, SITE_URL, WEBSITE_ID, breadcrumbSchema } from "@/lib/schema";

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
      "@id": `${SITE_URL}/locations#collectionpage`,
      "name": "AI, Automation & Digital Services Across the UAE",
      "description":
        "AIVized delivers AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for businesses across the UAE.",
      "url": `${SITE_URL}/locations`,
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "publisher": { "@id": ORG_ID },
      "mainEntity": { "@id": `${SITE_URL}/locations#cities` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/locations#cities`,
      "name": "AIVized locations",
      "numberOfItems": uaeLocations.length,
      "itemListElement": uaeLocations.map((loc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": `AI, Automation & Digital Services in ${loc.city}`,
        "url": `${SITE_URL}/locations/${loc.slug}`,
      })),
    },
    {
      "@type": "OfferCatalog",
      "@id": `${SITE_URL}/locations#services`,
      "name": "AIVized Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "serviceType": service.title,
          "provider": { "@id": ORG_ID },
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
          "url": `${SITE_URL}/services#${service.slug}`,
        },
      })),
    },
    {
      ...breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Locations", item: `${SITE_URL}/locations` },
      ]),
      "@id": `${SITE_URL}/locations#breadcrumb`,
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
