export const revalidate = 86400;
import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | AIVized — Let's Build Your AI Chatbot",
  description:
    "Get in touch with AIVized to discuss your AI chatbot needs. We'll help you design, deploy, and manage a custom AI chatbot for your UK business from £29/month.",
  alternates: { canonical: "https://www.aivized.com/contact" },
  openGraph: {
    title: "Contact Us | AIVized — Let's Build Your AI Chatbot",
    description: "Get in touch with AIVized to discuss your AI chatbot needs. We'll help you design, deploy, and manage a custom AI chatbot for your UK business from £29/month.",
    url: "https://www.aivized.com/contact",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.aivized.com/contact" }
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.aivized.com/contact#contactpage",
      "name": "Contact AIVized",
      "url": "https://www.aivized.com/contact",
      "publisher": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+44-0000000000",
        "email": "info@aivized.com",
        "areaServed": "GB",
        "availableLanguage": ["English"]
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactPage />
    </>
  );
}
