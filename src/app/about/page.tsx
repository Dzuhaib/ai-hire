export const revalidate = 86400;
import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";
import { services } from "@/data/servicesData";
import {
  ORG_ID,
  SITE_URL,
  WEBSITE_ID,
  ORG_DESCRIPTION,
  organizationSchema,
  founderSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "About AIVized | AI, Automation & Digital Growth for UAE Businesses" },
  description:
    "Learn about AIVized and how we deliver AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for growing UAE businesses.",
  keywords:
    "about AIVized, AI agency UAE, automation agency, SEO GEO agency, digital marketing agency, web development agency, desktop software development UAE",
  alternates: { canonical: "https://www.aivized.com/about" },
  openGraph: {
    title: "About AIVized | AI, Automation & Digital Growth for UAE Businesses",
    description:
      "AIVized delivers AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses.",
    url: "https://www.aivized.com/about",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#aboutpage`,
      "name": "About AIVized",
      "description": ORG_DESCRIPTION,
      "url": `${SITE_URL}/about`,
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "publisher": { "@id": ORG_ID }
    },
    {
      ...organizationSchema,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
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
            "url": `${SITE_URL}/services#${service.slug}`
          }
        }))
      }
    },
    founderSchema,
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "About", item: `${SITE_URL}/about` },
    ])
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AboutPage />
    </>
  );
}
