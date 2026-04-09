export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WebsiteChatbotBlog from "@/views/blog/WebsiteChatbotBlog";

export const metadata: Metadata = {
  title: "Website Chatbot for Small Business | AI Vized",
  description: "Why every UK small business needs a website chatbot. Capture leads 24/7 with an AI chatbot.",
  alternates: { canonical: "https://www.aivized.com/blog/website-chatbot-small-business" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Website Chatbot Solutions: Digital Assistant Services for UK SMEs",
      "description": "Get a managed website chatbot with digital assistant services in Birmingham and Kensington. AI virtual assistant for HR and customer support.",
      "image": "https://www.aivized.com/assets/blog/website-chatbot-hero.png",
      "author": { "@type": "Person", "name": "AIVized Editorial Team", "url": "https://www.aivized.com/blog" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-01-29",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/website-chatbot-small-business",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are digital assistant services Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "Digital assistant services in Birmingham encompass AI-powered chatbots and virtual assistants that automate customer interactions on your website. These services help Birmingham businesses provide instant support, qualify leads, and handle enquiries 24/7 without hiring additional staff." } },
        { "@type": "Question", "name": "How does an AI chatbot for small business UK work on websites?", "acceptedAnswer": { "@type": "Answer", "text": "An AI chatbot for small business UK works by embedding an intelligent chat widget on your website. When visitors arrive, the chatbot greets them, answers common questions, captures contact details, and can even book appointments—all automatically. It's trained on your specific business information for relevant, helpful responses." } },
        { "@type": "Question", "name": "What do AI service providers Kensington United Kingdom offer?", "acceptedAnswer": { "@type": "Answer", "text": "AI service providers in Kensington, United Kingdom offer premium chatbot solutions tailored for high-end businesses. Services include custom AI development, integration with existing CRM systems, multilingual support for international clientele, and white-glove installation with ongoing optimisation." } },
        { "@type": "Question", "name": "Can I use an AI virtual assistant for HR Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! An AI virtual assistant for HR in Birmingham can handle employee queries about policies, holiday requests, and onboarding processes. This reduces HR workload while ensuring staff get instant answers to routine questions, improving satisfaction and productivity across your Birmingham-based team." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Website Chatbot UK" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WebsiteChatbotBlog />
    </>
  );
}
