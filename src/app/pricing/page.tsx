export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PricingPage from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | AIVized - Managed AI Chatbot Plans from £29/mo",
  description:
    "Compare AIVized managed AI chatbot plans from £29/month. Starter, Professional, and Business plans include full installation and support. 3-day free trial, no contracts.",
  alternates: { canonical: "https://www.aivized.com/pricing" },
  openGraph: {
    title: "AIVized Pricing — Managed AI Chatbot Plans from £29/month",
    description: "Compare AIVized managed AI chatbot plans from £29/month. Starter, Professional, and Business plans include full installation and support. 3-day free trial, no contracts.",
    url: "https://www.aivized.com/pricing",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.aivized.com/pricing#product",
      "url": "https://www.aivized.com/pricing",
      "name": "AIVized Managed AI Chatbot Service",
      "description": "Fully managed AI chatbot installation and maintenance for UK small businesses.",
      "brand": {
        "@type": "Brand",
        "name": "AIVized"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "29",
          "priceCurrency": "GBP",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitText": "MONTH" },
          "description": "Managed AI chatbot for small businesses. Up to 500 conversations per month.",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": { "@type": "Country", "name": "United Kingdom" }
        },
        {
          "@type": "Offer",
          "name": "Professional",
          "price": "79",
          "priceCurrency": "GBP",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitText": "MONTH" },
          "description": "Lead generation chatbot for growing businesses. Up to 2,500 conversations per month.",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": { "@type": "Country", "name": "United Kingdom" }
        },
        {
          "@type": "Offer",
          "name": "Business",
          "price": "149",
          "priceCurrency": "GBP",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitText": "MONTH" },
          "description": "Enterprise-grade managed AI chatbot with dedicated account manager. Unlimited conversations.",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": { "@type": "Country", "name": "United Kingdom" }
        }
      ]
    },
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is there a setup fee?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, there is a one-time £50 setup fee on the Starter, Professional, and Business plans. This covers installation, training, and initial configuration." } },
        { "@type": "Question", "name": "Can I cancel at any time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All AIVized plans are month to month with no minimum commitment. You can cancel any time from your account." } },
        { "@type": "Question", "name": "Is VAT included in the prices shown?", "acceptedAnswer": { "@type": "Answer", "text": "Prices shown are exclusive of VAT. Standard UK VAT applies." } },
        { "@type": "Question", "name": "What happens after the 3-day free trial?", "acceptedAnswer": { "@type": "Answer", "text": "If you continue, the monthly plan fee plus the £50 setup charge applies. If you cancel within the trial period, no payment is taken." } },
        { "@type": "Question", "name": "Can I upgrade or downgrade my plan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can change your plan at any time. Upgrades take effect immediately. Downgrades apply from the next billing cycle." } }
      ]
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
