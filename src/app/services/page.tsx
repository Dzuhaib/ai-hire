export const revalidate = 86400;
import type { Metadata } from "next";
import ServicesPage from "@/views/ServicesPage";
import { services } from "@/data/servicesData";
import {
  ORG_ID,
  SITE_URL,
  WEBSITE_ID,
  organizationSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services | AI Systems, Automation, SEO & Software",
  description:
    "Explore AIVized services: AI systems, business automations, SEO and GEO, digital marketing, web development, and desktop software development for UAE businesses.",
  keywords:
    "AI systems UAE, business automation agency, SEO and GEO services, digital marketing agency UAE, web development UAE, desktop software development, AIVized services, AI automation agency Dubai, AI automation services, AI chatbot agency Dubai, AI services Dubai, AI automation company in Dubai, Business Automation Services, Automation Services, AI visibility services, AI chatbot services Dubai, AI automation services in Dubai",
  alternates: { canonical: "https://www.aivized.com/services" },
  openGraph: {
    title: "Services | AI Systems, Automation, SEO & Software | AIVized",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for UAE businesses.",
    url: "https://www.aivized.com/services",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/services#collectionpage`,
      "url": `${SITE_URL}/services`,
      "name": "AIVized Services",
      "description":
        "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for UAE businesses.",
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "mainEntity": { "@id": `${SITE_URL}/services#catalog` }
    },
    organizationSchema,
    {
      "@type": "OfferCatalog",
      "@id": `${SITE_URL}/services#catalog`,
      "name": "AIVized Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "@id": `${SITE_URL}/services#${service.slug}`,
          "name": service.title,
          "description": service.description,
          "serviceType": service.title,
          "provider": { "@id": ORG_ID },
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
          "url": `${SITE_URL}/services#${service.slug}`
        }
      }))
    },
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Services", item: `${SITE_URL}/services` },
    ])
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <ServicesPage />
    </>
  );
}
