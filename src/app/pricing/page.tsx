export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PricingPage from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing - Managed AI Chatbot Plans from £29/mo",
  description:
    "Compare AIVized managed AI chatbot plans from £29/mo. Starter, Professional, and Business packages include 24/7 lead capture and full setup. No contracts.",
  alternates: { canonical: "https://www.aivized.com/pricing" },
  openGraph: {
    title: "AIVized Pricing: Managed AI Chatbot Plans from £29/month",
    description: "Compare AIVized managed AI chatbot plans from £29/mo. Starter, Professional, and Business packages include 24/7 lead capture and full setup. No contracts.",
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
