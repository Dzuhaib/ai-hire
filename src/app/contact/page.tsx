export const revalidate = 86400;
import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

const title = "Contact Us | AIVized | Let's Build Something Better";
const description =
  "Get in touch with AIVized to discuss AI systems, automation, SEO and GEO, digital marketing, web development, or desktop software for your UK business.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.aivized.com/contact" },
  openGraph: {
    title,
    description,
    url: "https://www.aivized.com/contact",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.aivized.com/og-image.png"] },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.aivized.com/contact#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.aivized.com/contact",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.aivized.com/contact#contactpage",
      "name": "Contact AIVized",
      "url": "https://www.aivized.com/contact",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "about": { "@id": "https://www.aivized.com/#organization" },
      "publisher": { "@id": "https://www.aivized.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@aivized.com",
        "areaServed": "GB",
        "availableLanguage": ["English"],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactPage />
    </>
  );
}
