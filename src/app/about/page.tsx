export const revalidate = 86400;
import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";
import { services } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "About AIVized | AI, Automation & Digital Agency UK",
  description:
    "Learn about AIVized, a UK agency delivering AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for growing businesses.",
  keywords:
    "about AIVized, AI agency UK, automation agency, SEO GEO agency, digital marketing agency, web development agency, desktop software development UK",
  alternates: { canonical: "https://www.aivized.com/about" },
  openGraph: {
    title: "About AIVized | AI, Automation & Digital Agency UK",
    description:
      "A UK agency delivering AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software.",
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
      "@id": "https://www.aivized.com/about",
      "name": "About AIVized",
      "description":
        "AIVized is a UK AI and digital agency providing AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for small and medium-sized businesses.",
      "url": "https://www.aivized.com/about",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "publisher": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "email": "info@aivized.com",
      "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" },
      "description":
        "AIVized is a UK AI and digital agency delivering AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software.",
      "foundingDate": "2025",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@aivized.com",
        "availableLanguage": "English",
        "areaServed": "GB"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ai-vized/",
        "https://twitter.com/aivized",
        "https://www.facebook.com/aivized",
        "https://www.instagram.com/aivized"
      ],
      "founder": { "@id": "https://www.aivized.com/#founder" },
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
            "url": `https://www.aivized.com/services#${service.slug}`
          }
        }))
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.aivized.com/#founder",
      "name": "Zuhaib Ahmed",
      "jobTitle": "Founder",
      "worksFor": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
      "url": "https://www.linkedin.com/in/zuhaibah/",
      "sameAs": ["https://www.linkedin.com/in/zuhaibah/"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.aivized.com/about" }
      ]
    }
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
