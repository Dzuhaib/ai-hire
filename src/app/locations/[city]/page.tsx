export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import LocationPage from "@/views/LocationPage";
import { ukLocations, getLocationBySlug } from "@/data/locationData";

export async function generateStaticParams() {
  return ukLocations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  const title = location
    ? `AI Agency ${location.city} | AI Chatbot & Automation Services | AIVized`
    : `AI Agency UK | AI Chatbot & Automation Services | AIVized`;
  const description = location
    ? `AIVized is a leading AI agency in ${location.city}, offering fully managed AI chatbot and automation services for local businesses. Capture leads 24/7, automate support from £29/month.`
    : `AIVized is a UK AI agency offering fully managed AI chatbot and automation services. Capture leads 24/7, automate support from £29/month.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.aivized.com/locations/${city}` },
    openGraph: {
      title,
      description,
      url: `https://www.aivized.com/locations/${city}`,
      type: "website",
      images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  const schema = location
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
              { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.aivized.com/locations" },
              { "@type": "ListItem", "position": 3, "name": location.city, "item": `https://www.aivized.com/locations/${location.slug}` },
            ],
          },
          {
            "@type": "LocalBusiness",
            "@id": `https://www.aivized.com/locations/${location.slug}#localbusiness`,
            "name": `AIVized - AI Agency ${location.city}`,
            "description": `AI agency in ${location.city} offering managed chatbot and automation services. ${location.description}`,
            "url": `https://www.aivized.com/locations/${location.slug}`,
            "email": "info@aivized.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.city,
              "addressRegion": location.region,
              "addressCountry": "GB",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": location.coordinates.lat,
              "longitude": location.coordinates.lng,
            },
            "areaServed": { "@type": "City", "name": location.city },
            "priceRange": "£29-£149",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59",
              },
            ],
          },
          {
            "@type": "Service",
            "@id": `https://www.aivized.com/locations/${location.slug}#service`,
            "name": `AI Agency Services in ${location.city} | AIVized`,
            "description": `AIVized is a leading AI agency in ${location.city}, providing fully managed AI chatbot, lead generation, and customer service automation for local businesses. From £29/month.`,
            "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
            "serviceType": "AI Agency Services",
            "areaServed": { "@type": "City", "name": location.city },
            "url": `https://www.aivized.com/locations/${location.slug}`,
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "GBP",
              "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" }
            }
          },
        ],
      }
    : null;

  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <LocationPage />
    </>
  );
}
