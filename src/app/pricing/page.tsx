export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PricingPage from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "AI Agency Pricing | AI Chatbot Plans from £29/mo",
  description:
    "View AIVized AI agency pricing. Fully managed AI chatbot and automation plans from £29/month. Starter, Professional, and Business — no contracts, 24/7 support included.",
  alternates: { canonical: "https://www.aivized.com/pricing" },
  openGraph: {
    title: "AI Agency Pricing | AI Chatbot Plans from £29/mo",
    description: "View AIVized AI agency pricing. Fully managed AI chatbot and automation plans from £29/month. Starter, Professional, and Business — no contracts, 24/7 support included.",
    url: "https://www.aivized.com/pricing",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const returnPolicyRef = { "@id": "https://www.aivized.com/refund-policy#returnPolicy" };

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
          "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
          "hasMerchantReturnPolicy": returnPolicyRef
        },
        {
          "@type": "Offer",
          "name": "Professional",
          "price": "79",
          "priceCurrency": "GBP",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitText": "MONTH" },
          "description": "Lead generation chatbot for growing businesses. Up to 2,500 conversations per month.",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
          "hasMerchantReturnPolicy": returnPolicyRef
        },
        {
          "@type": "Offer",
          "name": "Business",
          "price": "149",
          "priceCurrency": "GBP",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitText": "MONTH" },
          "description": "Enterprise-grade managed AI chatbot with dedicated account manager. Unlimited conversations.",
          "availability": "https://schema.org/InStock",
          "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
          "hasMerchantReturnPolicy": returnPolicyRef
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
      "@id": "https://www.aivized.com/refund-policy#returnPolicy",
      "@type": "MerchantReturnPolicy",
      "name": "AIVized 3-Day Free Trial and Refund Policy",
      "description": "All AIVized plans include a 3-day free trial. Cancel anytime with no long-term contracts.",
      "applicableCountry": "GB",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 3,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
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
