export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndexPage from "@/views/Index";
import { services } from "@/data/servicesData";
import { faqs } from "@/data/faqData";
import {
  ORG_ID,
  SITE_URL,
  WEBSITE_ID,
  ORG_DESCRIPTION,
  organizationSchema,
  founderSchema,
  faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "AI Systems, Automation & Digital Growth for UAE Businesses | AIVized" },
  description:
    "AIVized delivers AI systems, business automations, SEO and GEO, digital marketing, web development, and desktop software development for UAE businesses.",
  keywords:
    "AI agency UAE, AI systems, business automation UAE, SEO and GEO, generative engine optimisation, digital marketing agency, web development UAE, desktop software development, AIVized, AI automation agency Dubai, AI automation agency, AI chatbot cost Dubai, AI automation cost UAE, AI visibility services, AI chatbot agency Dubai, AI automation services UAE, Artificial Intelligence Automation Agency, AI Automation Company in UAE, Best Chatbots Service Provider UAE, AI Services Dubai",
  alternates: { canonical: "https://www.aivized.com/" },
  openGraph: {
    url: "https://www.aivized.com/",
    title: "AI Systems, Automation & Digital Growth for UAE Businesses | AIVized",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software development for UAE businesses.",
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
      "@id": WEBSITE_ID,
      "name": "AIVized",
      "url": SITE_URL,
      "description": ORG_DESCRIPTION,
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
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      "url": SITE_URL,
      "name": "AI Systems, Automation & Digital Growth for UAE Businesses",
      "description":
        "AIVized builds AI systems, automations, search visibility, marketing, websites, and desktop software for UAE businesses.",
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#services", "#how-it-works", "#faq"] }
    },
    faqPageSchema(faqs, `${SITE_URL}/#faq`)
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
