export const revalidate = 86400;
import type { Metadata } from "next";
import BusinessAutomationPage from "@/views/services/BusinessAutomationPage";

export const metadata: Metadata = {
  title: "AI Agency for Business Automation | UK Process Automation",
  description: "AIVized is an AI agency delivering business process automation for UK businesses — automated follow-ups, appointment reminders, customer onboarding, and more. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/services/business-automation" },
  openGraph: {
    title: "AI Agency for Business Automation | UK Process Automation",
    description: "AIVized is an AI agency delivering business process automation for UK businesses — automated follow-ups, appointment reminders, customer onboarding, and more. From £29/month.",
    url: "https://www.aivized.com/services/business-automation",
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
      "name": "AI Agency for Business Automation | AIVized",
      "description": "AI agency offering fully managed business process automation for UK small businesses. AIVized automates lead follow-up sequences, appointment reminders, customer onboarding messages, and internal notifications.",
      "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "email": "info@aivized.com" },
      "serviceType": "Business Process Automation",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "url": "https://www.aivized.com/services/business-automation",
      "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "info@aivized.com" }
    },
    {
      "@type": "WebPage",
      "url": "https://www.aivized.com/services/business-automation",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aivized.com/services/business-automation" },
        { "@type": "ListItem", "position": 3, "name": "Business Process Automation", "item": "https://www.aivized.com/services/business-automation" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BusinessAutomationPage />
    </>
  );
}
