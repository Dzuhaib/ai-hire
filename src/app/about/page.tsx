export const revalidate = 86400;
import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "Managed AI Chatbot Service for UK Businesses | AIVized",
  description: "Learn how AIVized provides a managed AI chatbot service to UK small businesses, automating customer service and capturing leads 24/7. Plans from £29/mo.",
  alternates: { canonical: "https://www.aivized.com/about" },
  openGraph: {
    title: "About AIVized: Managed AI Chatbot for UK Small Businesses",
    description: "Learn how AIVized provides a managed AI chatbot service to UK small businesses, automating customer service and capturing leads 24/7. Plans from £29/mo.",
    url: "https://www.aivized.com/about",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.aivized.com/about",
      "name": "About AIVized",
      "description": "AIVized is a managed AI chatbot service for UK small businesses. We install, train, and maintain chatbots on websites and WhatsApp so business owners can focus on running their business.",
      "url": "https://www.aivized.com/about",
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.aivized.com/#organization",
        "name": "AIVized",
        "url": "https://www.aivized.com",
        "email": "aivized.com@gmail.com",
        "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" },
        "description": "Fully managed AI chatbot service for UK small businesses. 24/7 lead generation and customer enquiry automation from £29/month.",
        "foundingDate": "2025",
        "areaServed": { "@type": "Country", "name": "United Kingdom" },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "aivized.com@gmail.com",
          "availableLanguage": "English",
          "areaServed": "GB"
        },
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
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.aivized.com/#founder",
      "name": "Zuhaib Ahmed",
      "jobTitle": "Founder",
      "worksFor": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
      "url": "https://www.linkedin.com/in/zuhaibah/",
      "sameAs": ["https://www.linkedin.com/in/zuhaibah/"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.aivized.com/about" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AboutPage />
    </>
  );
}
