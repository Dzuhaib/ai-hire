export const revalidate = 86400;
import type { Metadata } from "next";
import BusinessAutomationPage from "@/views/services/BusinessAutomationPage";

export const metadata: Metadata = {
  title: "Business Process Automation for UK Small Businesses | AIVized",
  description: "AIVized automates your repetitive workflows — lead follow-up sequences, appointment reminders, customer onboarding, and internal notifications. Get in touch to find out more.",
  alternates: { canonical: "https://www.aivized.com/services/business-automation" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Business Process Automation for UK Small Businesses",
      "description": "Fully managed business process automation service for UK small businesses. AIVized automates lead follow-up sequences, appointment reminders, customer onboarding messages, and internal notifications.",
      "provider": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "email": "aivized.com@gmail.com" },
      "serviceType": "Business Process Automation",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "url": "https://www.aivized.com/services/business-automation",
      "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "aivized.com@gmail.com" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What business processes can AIVized automate?", "acceptedAnswer": { "@type": "Answer", "text": "AIVized automates the repetitive, rule-based tasks that consume your team's time: lead follow-up sequences, appointment reminders, customer onboarding messages, booking confirmations, review request emails, and internal notifications when a new enquiry arrives. If a task happens the same way every time, it can likely be automated." } },
        { "@type": "Question", "name": "Do I need technical skills to set up business process automation?", "acceptedAnswer": { "@type": "Answer", "text": "No. AIVized handles the full setup — identifying which workflows to automate, connecting the tools, configuring the triggers, and testing before go-live. You describe how your business currently works and we build the automation around it." } },
        { "@type": "Question", "name": "How is business process automation different from your AI chatbot service?", "acceptedAnswer": { "@type": "Answer", "text": "The AI chatbot focuses on customer-facing conversations — answering enquiries on your website or WhatsApp in real time. Business process automation handles the behind-the-scenes workflows — what happens after a lead arrives, how customers are followed up, and how your team is notified. The two services complement each other." } },
        { "@type": "Question", "name": "How long does it take to get automation running?", "acceptedAnswer": { "@type": "Answer", "text": "Most automations are live within three to five working days of your initial briefing. Simple workflows like appointment reminders or lead notifications can be set up within 24 hours. We confirm timelines after understanding your specific requirements." } },
        { "@type": "Question", "name": "How do I get started with business process automation?", "acceptedAnswer": { "@type": "Answer", "text": "Email us at aivized.com@gmail.com with a description of the repetitive tasks you want to automate. We will schedule a brief call or email exchange to understand your workflow, then confirm scope and timelines." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aivized.com/#services" },
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
