export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import RefundPolicy from "@/views/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | AIVized",
  description: "Read the AIVized refund and cancellation policy for managed AI chatbot subscriptions.",
  alternates: { canonical: "https://www.aivized.com/refund-policy" },
  openGraph: {
    title: "Refund Policy | AIVized",
    description: "Read the AIVized refund and cancellation policy for managed AI chatbot subscriptions.",
    url: "https://www.aivized.com/refund-policy",
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
      "name": "Refund Policy | AIVized",
      "url": "https://www.aivized.com/refund-policy",
      "description": "AIVized refund and cancellation policy for monthly managed AI chatbot subscriptions.",
      "publisher": { "@id": "https://www.aivized.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Refund Policy", "item": "https://www.aivized.com/refund-policy" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <RefundPolicy />
    </>
  );
}
