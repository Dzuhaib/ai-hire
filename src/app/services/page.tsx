export const revalidate = 86400;
import type { Metadata } from "next";
import ServicesPage from "@/views/ServicesPage";
import { services } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services | AI Systems, Automation, SEO & Software",
  description:
    "Explore AIVized services: AI systems, business automations, SEO and GEO, digital marketing, web development, and desktop software development for UK businesses.",
  keywords:
    "AI systems UK, business automation agency, SEO and GEO services, digital marketing agency UK, web development UK, desktop software development, AIVized services",
  alternates: { canonical: "https://www.aivized.com/services" },
  openGraph: {
    title: "Services | AI Systems, Automation, SEO & Software | AIVized",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for UK businesses.",
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
      "@id": "https://www.aivized.com/services",
      "url": "https://www.aivized.com/services",
      "name": "AIVized Services",
      "description":
        "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for UK businesses.",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "about": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "email": "info@aivized.com",
      "description":
        "AIVized is a UK AI and digital agency delivering AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software.",
      "areaServed": { "@type": "Country", "name": "United Kingdom" }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.aivized.com/services#catalog",
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
          "areaServed": { "@type": "Country", "name": "United Kingdom" },
          "url": `https://www.aivized.com/services#${service.slug}`
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aivized.com/services" }
      ]
    }
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
