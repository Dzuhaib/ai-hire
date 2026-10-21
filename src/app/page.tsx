export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndexPage from "@/views/Index";
import { services } from "@/data/servicesData";
import { faqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: { absolute: "AI Systems, Automation & Digital Growth for UAE Businesses | AIVized" },
  description:
    "AIVized delivers AI systems, business automations, SEO and GEO, digital marketing, web development, and desktop software development for UAE businesses.",
  keywords:
    "AI agency UAE, AI systems, business automation UAE, SEO and GEO, generative engine optimisation, digital marketing agency, web development UAE, desktop software development, AIVized",
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
      "@id": "https://www.aivized.com/#website",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "description":
        "AI systems, business automation, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses.",
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
        "AIVized delivers AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses.",
      "foundingDate": "2025",
      "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@aivized.com",
        "availableLanguage": "English",
        "areaServed": "AE"
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
            "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
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
        "Founder of AIVized, which delivers AI systems, automation, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aivized.com/#webpage",
      "url": "https://www.aivized.com",
      "name": "AI Systems, Automation & Digital Growth for UAE Businesses",
      "description":
        "AIVized builds AI systems, automations, search visibility, marketing, websites, and desktop software for UAE businesses.",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "about": { "@id": "https://www.aivized.com/#organization" },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#services", "#how-it-works", "#faq"] }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.aivized.com/#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
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
