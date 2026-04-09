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
  // Use city-specific heroTagline/heroSubtext for unique titles and descriptions
  const title = location
    ? `${location.heroTagline} | AIVized`
    : `AI Chatbot ${city} | Managed AI Service`;
  const description = location
    ? location.heroSubtext.slice(0, 160)
    : `Get a fully managed AI chatbot for your ${city} business from £29/month. 24/7 lead generation and customer support.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.aivized.com/locations/${city}` },
    openGraph: {
      title,
      description,
      url: `https://www.aivized.com/locations/${city}`,
    },
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
            "name": `AIVized - ${location.city}`,
            "description": location.description,
            "url": `https://www.aivized.com/locations/${location.slug}`,
            "email": "aivized.com@gmail.com",
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
            "name": `Managed AI Chatbot Service — ${location.city}`,
            "description": `Fully managed AI chatbot for ${location.city} businesses. 24/7 lead capture, customer enquiry automation, and ongoing optimisation from £29/month.`,
            "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
            "serviceType": "AI Chatbot Management",
            "areaServed": { "@type": "City", "name": location.city },
            "url": `https://www.aivized.com/locations/${location.slug}`,
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "GBP",
              "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" }
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": location.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
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
