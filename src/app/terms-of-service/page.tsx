export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import TermsOfService from "@/views/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the AIVized terms of service and usage agreement for our managed AI chatbot service.",
  alternates: { canonical: "https://www.aivized.com/terms-of-service" },
  openGraph: {
    title: "Terms of Service",
    description: "Read the AIVized terms of service and usage agreement for our managed AI chatbot service.",
    url: "https://www.aivized.com/terms-of-service",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Terms of Service",
      "url": "https://www.aivized.com/terms-of-service",
      "description": "AIVized terms of service covering usage, subscriptions, and cancellation.",
      "publisher": { "@id": "https://www.aivized.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.aivized.com/terms-of-service" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <TermsOfService />
    </>
  );
}
