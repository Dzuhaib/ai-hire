export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import ReduceMissedLeadsBlog from "@/views/blog/ReduceMissedLeadsBlog";

export const metadata: Metadata = {
  title: "Reduce Missed Leads from Your Website | AI Vized",
  description: "How to stop losing leads from your website with a managed AI chatbot. 24/7 lead capture for UK businesses.",
  alternates: { canonical: "https://www.aivized.com/blog/reduce-missed-leads-website" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "How to Reduce Missed Leads from Your Website with AI Chatbots",
      "description": "Discover why UK small businesses miss up to 60% of website leads and how an AI chatbot captures enquiries 24/7. Practical tips to stop losing customers.",
      "image": "https://www.aivized.com/assets/blog/reduce-missed-leads-hero.png",
      "author": { "@type": "Person", "name": "AIVized Editorial Team", "url": "https://www.aivized.com/blog" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/reduce-missed-leads-website"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How many leads does a typical small business website miss?", "acceptedAnswer": { "@type": "Answer", "text": "Research shows that UK small businesses miss up to 60% of potential leads because visitors leave without making contact. Most website visits happen outside office hours, and without a way to engage those visitors, the leads simply vanish." } },
        { "@type": "Question", "name": "Can a chatbot really capture leads as well as a human?", "acceptedAnswer": { "@type": "Answer", "text": "A well-configured AI chatbot can actually capture more leads than a human team because it works 24/7 without breaks. It instantly engages every visitor, asks qualifying questions, and collects contact details—something even the best human teams struggle to do consistently." } },
        { "@type": "Question", "name": "How quickly can I start reducing missed leads?", "acceptedAnswer": { "@type": "Answer", "text": "With AIVized's managed service, your chatbot is installed within 24 hours of subscribing. Most businesses see a noticeable increase in captured leads within the first week." } },
        { "@type": "Question", "name": "Do I need technical skills to set up a lead capture chatbot?", "acceptedAnswer": { "@type": "Answer", "text": "Not at all. AIVized is a fully managed service—we handle everything from installation to configuration to ongoing optimisation. You just tell us about your business and we do the rest." } },
        { "@type": "Question", "name": "What happens when the chatbot can't answer a question?", "acceptedAnswer": { "@type": "Answer", "text": "When your AI assistant encounters a question it can't answer, it captures the visitor's contact details and escalates the enquiry to you immediately via email or WhatsApp. You never lose the lead." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Reduce Missed Leads" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ReduceMissedLeadsBlog />
    </>
  );
}
