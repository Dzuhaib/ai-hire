export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PricingPage from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | AI Vized - Affordable AI Chatbot Plans from £29/mo",
  description:
    "View AI Vized pricing plans. Managed AI chatbot for UK small businesses from just £29/month. No upfront costs, no long-term contracts.",
  alternates: { canonical: "https://www.aivized.com/pricing" },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.aivized.com/pricing" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.aivized.com/#service",
      "name": "Managed AI Chatbot Service",
      "description": "Fully managed AI chatbot service for UK small businesses. We install, configure, monitor and optimise your chatbot 24/7. No technical skills required.",
      "url": "https://www.aivized.com/pricing",
      "provider": { "@id": "https://www.aivized.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "serviceType": "AI Chatbot Managed Service",
      "category": "Software as a Service",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AIVized Pricing Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter Plan",
            "description": "Perfect for small businesses wanting 24/7 lead capture. We handle everything.",
            "url": "https://www.aivized.com/pricing",
            "price": "29",
            "priceCurrency": "GBP",
            "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON", "billingIncrement": 1 },
            "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Professional Plan",
            "description": "For growing businesses. Full customisation with priority managed support.",
            "url": "https://www.aivized.com/pricing",
            "price": "79",
            "priceCurrency": "GBP",
            "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitCode": "MON", "billingIncrement": 1 },
            "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Business Plan",
            "description": "Enterprise-grade managed AI with dedicated account manager. Unlimited conversations and custom integrations.",
            "url": "https://www.aivized.com/pricing",
            "price": "149",
            "priceCurrency": "GBP",
            "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitCode": "MON", "billingIncrement": 1 },
            "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <PricingPage />
    </>
  );
}
