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
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `AI Chatbot ${cityName} | Managed AI Service for ${cityName} Businesses`,
    description: `Get a fully managed AI chatbot for your ${cityName} business from £29/month. 24/7 lead generation and customer support.`,
    alternates: { canonical: `https://www.aivized.com/locations/${city}` },
    openGraph: {
      title: `AI Chatbot ${cityName} | Managed AI Service for ${cityName} Businesses`,
      description: `Get a fully managed AI chatbot for your ${cityName} business from £29/month. 24/7 lead generation and customer support.`,
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
