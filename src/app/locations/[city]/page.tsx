export const revalidate = 86400;
import type { Metadata } from "next";
import LocationPage from "@/views/LocationPage";
import { uaeLocations, getLocationBySlug } from "@/data/locationData";
import { getLocationFaqs } from "@/data/locationContent";
import { services } from "@/data/servicesData";

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

  const schema = location
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": `https://www.aivized.com/locations/${location.slug}#breadcrumb`,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
              { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.aivized.com/locations" },
              {
                "@type": "ListItem",
                "position": 3,
                "name": location.city,
                "item": `https://www.aivized.com/locations/${location.slug}`,
              },
            ],
          },
          {
            "@type": "ProfessionalService",
            "@id": `https://www.aivized.com/locations/${location.slug}#service`,
            "name": `AIVized - AI, Automation & Digital Services in ${location.city}`,
            "description": `AIVized provides AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for businesses in ${location.city}, ${location.region}.`,
            "url": `https://www.aivized.com/locations/${location.slug}`,
            "email": "info@aivized.com",
            "areaServed": { "@type": "City", "name": location.city },
            "provider": { "@id": "https://www.aivized.com/#organization" },
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
                  "provider": { "@id": "https://www.aivized.com/#organization" },
                  "areaServed": { "@type": "City", "name": location.city },
                  "url": `https://www.aivized.com/services#${service.slug}`,
                },
              })),
            },
          },
          {
            "@type": "FAQPage",
            "@id": `https://www.aivized.com/locations/${location.slug}#faq`,
            "mainEntity": getLocationFaqs(location.city).map((faq) => ({
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
