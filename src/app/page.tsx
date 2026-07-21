export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndexPage from "@/views/Index";

export const metadata: Metadata = {
  title: "Managed AI Chatbot for UK Small Businesses",
  description:
    "Get a managed AI chatbot for your UK small business from £29/month. 24/7 lead generation and customer support. We install everything. Start your free trial.",
  keywords:
    "managed AI chatbot service, AI chatbot for small business UK, lead generation chatbot UK, 24/7 customer support chatbot, affordable AI chatbot, fully managed chatbot, AIVized",
  alternates: { canonical: "https://www.aivized.com/" },
  openGraph: {
    url: "https://www.aivized.com/",
    title: "Managed AI Chatbot for UK Small Businesses",
    description:
      "Get a managed AI chatbot for your UK small business from £29/month. 24/7 lead generation and customer support. We install everything. Start your free trial.",
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
      "description": "Managed AI chatbot service for UK small businesses from £29/month.",
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
      "description": "Fully managed AI chatbot service for UK small businesses. 24/7 lead generation from £29/month.",
      "foundingDate": "2025",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "info@aivized.com", "availableLanguage": "English", "areaServed": "GB" },
      "sameAs": [
        "https://www.linkedin.com/company/ai-vized/",
        "https://twitter.com/aivized",
        "https://www.facebook.com/aivized",
        "https://www.instagram.com/aivized"
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://www.aivized.com/#founder",
        "name": "Zuhaib Ahmed",
        "jobTitle": "Founder",
        "url": "https://www.linkedin.com/in/zuhaibah/",
        "sameAs": ["https://www.linkedin.com/in/zuhaibah/"]
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.aivized.com/#product",
      "name": "AIVized AI Chatbot",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "ChatBot",
      "operatingSystem": "Web",
      "description": "Fully managed AI chatbot for UK small businesses. Handles 24/7 lead generation, customer enquiries, and appointment booking. Installed and managed by AIVized.",
      "url": "https://www.aivized.com",
      "provider": { "@id": "https://www.aivized.com/#organization" },
      "offers": [
        { "@type": "Offer", "name": "Starter", "price": "29", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" } },
        { "@type": "Offer", "name": "Professional", "price": "79", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitCode": "MON" } },
        { "@type": "Offer", "name": "Business", "price": "149", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitCode": "MON" } }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.aivized.com/#localbusiness",
      "name": "AIVized - Managed AI Chatbot Service",
      "url": "https://www.aivized.com",
      "email": "info@aivized.com",
      "description": "Fully managed AI chatbot service for UK small businesses. We install, monitor, and optimise your chatbot 24/7.",
      "priceRange": "£29 - £149/month",
      "image": "https://www.aivized.com/og-image.png",
      "address": { "@type": "PostalAddress", "addressCountry": "GB", "addressLocality": "London" },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Manchester" },
        { "@type": "City", "name": "Birmingham" },
        { "@type": "City", "name": "Leeds" },
        { "@type": "City", "name": "Glasgow" },
        { "@type": "City", "name": "Edinburgh" },
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Bristol" },
        { "@type": "City", "name": "Sheffield" },
        { "@type": "City", "name": "Newcastle" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "parentOrganization": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://www.aivized.com/#service",
      "name": "Managed AI Chatbot Service",
      "description": "Fully managed AI chatbot installation, training, monitoring, and optimisation for UK small businesses. 24/7 lead capture and customer enquiry automation from £29/month.",
      "provider": { "@id": "https://www.aivized.com/#organization" },
      "serviceType": "AI Chatbot Management",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AIVized Chatbot Plans",
        "itemListElement": [
          { "@type": "Offer", "name": "Starter Plan", "description": "Basic lead capture and FAQ handling for UK small businesses. Up to 500 conversations/month.", "price": "29", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Professional Plan", "description": "Advanced customisation with priority support, up to 2,500 conversations/month.", "price": "79", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Business Plan", "description": "Enterprise-grade AI with dedicated account manager, unlimited conversations, and SLA guarantee.", "price": "149", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitCode": "MON" } }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aivized.com/#webpage",
      "url": "https://www.aivized.com",
      "name": "Managed AI Chatbot for Small Business UK",
      "description": "Get a fully managed AI chatbot for your UK small business from £29/month. 24/7 lead generation. We install everything. No technical skills needed.",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "about": { "@id": "https://www.aivized.com/#service" },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#services", "#how-it-works", "#pricing", "#faq"] }
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
