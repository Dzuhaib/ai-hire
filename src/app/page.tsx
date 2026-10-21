export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndexPage from "@/views/Index";
import { services } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "AI Systems, Automation & Digital Growth Agency UK | AIVized",
  description:
    "AIVized is a UK agency delivering AI systems, business automations, SEO and GEO, digital marketing, web development, and desktop software development.",
  keywords:
    "AI agency UK, AI systems, business automation UK, SEO and GEO, generative engine optimisation, digital marketing agency, web development UK, desktop software development, AIVized",
  alternates: { canonical: "https://www.aivized.com/" },
  openGraph: {
    url: "https://www.aivized.com/",
    title: "AI Systems, Automation & Digital Growth Agency UK | AIVized",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for UK businesses.",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.aivized.com/#website",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "description":
        "AI systems, business automation, SEO and GEO, digital marketing, web development, and desktop software for UK businesses.",
      "publisher": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png", "width": 512, "height": 512 },
      "image": "https://www.aivized.com/og-image.png",
      "email": "info@aivized.com",
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
            "serviceType": service.title,
            "provider": { "@id": "https://www.aivized.com/#organization" },
            "areaServed": { "@type": "Country", "name": "United Kingdom" },
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
      "url": "https://www.linkedin.com/in/zuhaibah/",
      "sameAs": ["https://www.linkedin.com/in/zuhaibah/"],
      "description":
        "Founder of AIVized, a UK agency delivering AI systems, automation, SEO and GEO, digital marketing, web development, and desktop software."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aivized.com/#webpage",
      "url": "https://www.aivized.com",
      "name": "AI Systems, Automation & Digital Growth Agency UK",
      "description":
        "AIVized builds AI systems, automations, search visibility, marketing, websites, and desktop software for UK businesses.",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "about": { "@id": "https://www.aivized.com/#organization" },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#services", "#how-it-works", "#faq"] }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <IndexPage />
    </>
  );
}
