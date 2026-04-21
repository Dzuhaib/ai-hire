export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | AIVized",
  description: "Read the AIVized privacy policy. We are committed to protecting your personal data in compliance with UK GDPR.",
  alternates: { canonical: "https://www.aivized.com/privacy-policy" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Privacy Policy | AIVized",
      "url": "https://www.aivized.com/privacy-policy",
      "description": "AIVized privacy policy covering data collection, usage, and UK GDPR compliance.",
      "publisher": { "@id": "https://www.aivized.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.aivized.com/privacy-policy" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PrivacyPolicy />
    </>
  );
}
