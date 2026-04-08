export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AutomateEnquiriesBlog from "@/views/blog/AutomateEnquiriesBlog";

export const metadata: Metadata = {
  title: "Automate Customer Enquiries with a Personal Touch | AI Vized",
  description: "How to automate customer enquiries while keeping the personal touch. Managed AI chatbots for UK small businesses.",
  alternates: { canonical: "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "How to Automate Customer Enquiries Without Losing the Personal Touch",
      "description": "Learn how UK small businesses automate customer enquiries with AI chatbots while keeping interactions warm and personal. Practical guide with real examples.",
      "image": "https://www.aivized.com/assets/blog/automate-enquiries-personal-touch-hero.png",
      "author": { "@type": "Person", "name": "AIVized Editorial Team", "url": "https://www.aivized.com/blog" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-12",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Won't customers feel put off by an automated response?", "acceptedAnswer": { "@type": "Answer", "text": "Not if it's done well. Research shows that 68% of customers prefer chatbots for quick answers. The key is being transparent that it's AI, providing genuinely helpful responses, and offering an easy path to a human when needed." } },
        { "@type": "Question", "name": "How do you make an AI chatbot sound like my brand?", "acceptedAnswer": { "@type": "Answer", "text": "At AIVized, we configure your chatbot using your business information, tone of voice, and common customer questions. The result is an AI assistant that sounds like your team, uses your terminology, and reflects your brand personality." } },
        { "@type": "Question", "name": "What if a customer asks something the chatbot can't answer?", "acceptedAnswer": { "@type": "Answer", "text": "The chatbot gracefully captures the customer's name, email, and question, then forwards it to you immediately. The customer gets a response like 'Great question—let me get one of our team to come back to you personally.' It feels helpful, not frustrating." } },
        { "@type": "Question", "name": "Can automated customer service work for service-based businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Service businesses like plumbers, accountants, and consultants benefit hugely from automation. The chatbot handles appointment enquiries, pricing questions, and availability checks—freeing you to focus on delivering your service." } },
        { "@type": "Question", "name": "How do I measure if automation is working for my business?", "acceptedAnswer": { "@type": "Answer", "text": "Track three key metrics: leads captured per month (should increase), response time (should drop to seconds), and customer satisfaction with chat interactions. AIVized provides analytics to help you monitor all three." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Automate Enquiries" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AutomateEnquiriesBlog />
    </>
  );
}
