export const revalidate = 86400;
import type { Metadata } from "next";
import SocialMediaAutomationPage from "@/views/services/SocialMediaAutomationPage";

export const metadata: Metadata = {
  title: "AI Agency for Social Media Automation | UK Business Automation",
  description: "AIVized is an AI agency offering social media automation for UK businesses — Instagram, Facebook, and LinkedIn DM management, content scheduling, and audience engagement.",
  alternates: { canonical: "https://www.aivized.com/services/social-media-automation" },
  openGraph: {
    title: "AI Agency for Social Media Automation | UK Business Automation",
    description: "AIVized is an AI agency offering social media automation for UK businesses — Instagram, Facebook, and LinkedIn DM management, content scheduling, and audience engagement.",
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
      "name": "AI Agency for Social Media Automation | AIVized",
      "description": "AI agency offering fully managed social media automation for UK small businesses. AIVized automates DM responses, content scheduling, and engagement across Instagram, Facebook, and LinkedIn.",
      "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "email": "info@aivized.com" },
      "serviceType": "Social Media Automation",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "url": "https://www.aivized.com/services/social-media-automation",
      "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "info@aivized.com" }
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
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aivized.com/services/social-media-automation" },
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
