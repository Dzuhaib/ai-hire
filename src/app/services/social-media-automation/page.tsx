export const revalidate = 86400;
import type { Metadata } from "next";
import SocialMediaAutomationPage from "@/views/services/SocialMediaAutomationPage";
import { socialMediaAutomationFaqs } from "@/data/serviceFaqs";
import { ORG_ID, SITE_URL, breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Agency for Social Media Automation | UAE Business Automation",
  description: "AIVized is an AI agency offering social media automation for UAE businesses — Instagram, Facebook, and LinkedIn DM management, content scheduling, and audience engagement.",
  alternates: { canonical: "https://www.aivized.com/services/social-media-automation" },
  openGraph: {
    title: "AI Agency for Social Media Automation | UAE Business Automation",
    description: "AIVized is an AI agency offering social media automation for UAE businesses — Instagram, Facebook, and LinkedIn DM management, content scheduling, and audience engagement.",
    url: "https://www.aivized.com/services/social-media-automation",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const URL_PATH = `${SITE_URL}/services/social-media-automation`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...serviceSchema({
        name: "AI Agency for Social Media Automation | AIVized",
        description: "AI agency offering fully managed social media automation for UAE small businesses. AIVized automates DM responses, content scheduling, and engagement across Instagram, Facebook, and LinkedIn.",
        url: URL_PATH,
        serviceType: "Social Media Automation",
      }),
      "provider": { "@id": ORG_ID },
      "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "info@aivized.com" },
    },
    {
      "@type": "WebPage",
      "@id": `${URL_PATH}#webpage`,
      "url": URL_PATH,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": ORG_ID },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] }
    },
    {
      ...breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Services", item: `${SITE_URL}/services` },
        { name: "Social Media Automation", item: URL_PATH },
      ]),
      "@id": `${URL_PATH}#breadcrumb`,
    },
    faqPageSchema(socialMediaAutomationFaqs, `${URL_PATH}#faq`),
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
