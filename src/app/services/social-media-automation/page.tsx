export const revalidate = 86400;
import type { Metadata } from "next";
import SocialMediaAutomationPage from "@/views/services/SocialMediaAutomationPage";

export const metadata: Metadata = {
  title: "Social Media Automation for UK Businesses | AIVized",
  description: "AIVized offers social media automation for UK businesses — managing Instagram, Facebook, and LinkedIn DMs, content scheduling, and audience engagement 24/7.",
  alternates: { canonical: "https://www.aivized.com/services/social-media-automation" },
  openGraph: {
    title: "Social Media Automation for UK Businesses | AIVized",
    description: "AIVized offers social media automation for UK businesses — managing Instagram, Facebook, and LinkedIn DMs, content scheduling, and audience engagement 24/7.",
    url: "https://www.aivized.com/services/social-media-automation",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Social Media Automation for UK Businesses",
      "description": "Fully managed social media automation service for UK small businesses. AIVized automates DM responses, content scheduling, and engagement across Instagram, Facebook, and LinkedIn.",
      "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "email": "aivized.com@gmail.com" },
      "serviceType": "Social Media Automation",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "url": "https://www.aivized.com/services/social-media-automation",
      "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "aivized.com@gmail.com" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What social media platforms does AIVized automate?", "acceptedAnswer": { "@type": "Answer", "text": "AIVized currently automates Instagram, Facebook, and LinkedIn. This covers DM responses, comment monitoring, and content scheduling across all three platforms from a single managed setup." } },
        { "@type": "Question", "name": "Do I need to provide the content or do you create it?", "acceptedAnswer": { "@type": "Answer", "text": "We work with whatever you prefer. You can supply your own content and we schedule and publish it, or we can discuss a content creation arrangement as part of your setup. Either way, we handle the technical side — publishing, timing, and platform management." } },
        { "@type": "Question", "name": "How are DMs handled automatically?", "acceptedAnswer": { "@type": "Answer", "text": "We train an AI on your business, products, and common enquiries. When a customer sends a DM on Instagram or Facebook, the AI responds instantly with accurate, on-brand answers. Complex or sensitive conversations are flagged for your team to handle directly." } },
        { "@type": "Question", "name": "How do I get started with social media automation?", "acceptedAnswer": { "@type": "Answer", "text": "Email us at aivized.com@gmail.com with a brief description of your business and which platforms you want to automate. We will respond within one working day with next steps and a setup timeline." } },
        { "@type": "Question", "name": "Is social media automation suitable for small UK businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — it is most valuable for small businesses that receive regular DMs or enquiries on social media but do not have dedicated staff to respond promptly. Automation ensures every message gets an instant reply, regardless of when it arrives." } }
      ]
    },
    {
      "@type": "WebPage",
      "url": "https://www.aivized.com/services/social-media-automation",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aivized.com/#services" },
        { "@type": "ListItem", "position": 3, "name": "Social Media Automation", "item": "https://www.aivized.com/services/social-media-automation" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SocialMediaAutomationPage />
    </>
  );
}
