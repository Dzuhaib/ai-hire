export const revalidate = 86400;
import type { Metadata } from "next";
import LocationPage from "@/views/LocationPage";
import { uaeLocations, getLocationBySlug } from "@/data/locationData";
import { getLocationFaqs } from "@/data/locationContent";
import { services } from "@/data/servicesData";
import {
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/schema";

export async function generateStaticParams() {
  return uaeLocations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  const title = location
    ? `AI, Automation & Digital Services ${location.city} | AIVized`
    : "AI, Automation & Digital Services Across the UAE | AIVized";
  const description = location
    ? `AIVized provides AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for businesses in ${location.city}, ${location.region}.`
    : "AIVized provides AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses.";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `https://www.aivized.com/locations/${city}` },
    openGraph: {
      title,
      description,
      url: `https://www.aivized.com/locations/${city}`,
      type: "website",
      images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["https://www.aivized.com/og-image.png"] },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  const url = `${SITE_URL}/locations/${location?.slug}`;

  const schema = location
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            ...breadcrumbSchema([
              { name: "Home", item: SITE_URL },
              { name: "Locations", item: `${SITE_URL}/locations` },
              { name: location.city, item: url },
            ]),
            "@id": `${url}#breadcrumb`,
          },
          {
            ...localBusinessSchema({
              type: "ProfessionalService",
              name: `AIVized - AI, Automation & Digital Services in ${location.city}`,
              description: `AIVized provides AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for businesses in ${location.city}, ${location.region}.`,
              url,
              city: location.city,
              region: location.region,
              lat: location.coordinates.lat,
              lng: location.coordinates.lng,
            }),
            "@id": `${url}#service`,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `Services available in ${location.city}`,
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "serviceType": service.title,
                  "provider": { "@id": ORG_ID },
                  "areaServed": { "@type": "City", "name": location.city },
                  "url": `${SITE_URL}/services#${service.slug}`,
                },
              })),
            },
          },
          faqPageSchema(getLocationFaqs(location.city), `${url}#faq`),
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
