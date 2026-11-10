export const revalidate = 86400;
import type { Metadata } from "next";
import BusinessAutomationPage from "@/views/services/BusinessAutomationPage";
import { businessAutomationFaqs } from "@/data/serviceFaqs";
import { ORG_ID, SITE_URL, breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Agency for Business Automation | UAE Process Automation",
    description: "AIVized is an AI agency delivering business process automation for UAE businesses — automated follow-ups, appointment reminders, customer onboarding, and more. Fully managed and tailored to your business.",
    keywords: ["AI automation agency Dubai", "AI automation company in Ajman", "AI automation cost UAE", "CRM automation agency Dubai", "Business Process Automation Dubai", "AI automation services in Dubai"],
  alternates: { canonical: "https://www.aivized.com/services/business-automation" },
  openGraph: {
    title: "AI Agency for Business Automation | UAE Process Automation",
  description: "AIVized is an AI agency delivering business process automation for UAE businesses — automated follow-ups, appointment reminders, customer onboarding, and more. Fully managed and tailored to your business.",
    url: "https://www.aivized.com/services/business-automation",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const URL_PATH = `${SITE_URL}/services/business-automation`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...serviceSchema({
        name: "AI Agency for Business Automation | AIVized",
        description: "AI agency offering fully managed business process automation for UAE small businesses. AIVized automates lead follow-up sequences, appointment reminders, customer onboarding messages, and internal notifications.",
        url: URL_PATH,
        serviceType: "Business Process Automation",
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
        { name: "Business Process Automation", item: URL_PATH },
      ]),
      "@id": `${URL_PATH}#breadcrumb`,
    },
    faqPageSchema(businessAutomationFaqs, `${URL_PATH}#faq`),
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
