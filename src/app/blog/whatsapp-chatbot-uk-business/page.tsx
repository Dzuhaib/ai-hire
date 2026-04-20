export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WhatsAppChatbotBlog from "@/views/blog/WhatsAppChatbotBlog";

export const metadata: Metadata = {
  title: "Managed WhatsApp Chatbot for UK Businesses | AIVized",
  description: "Set up a WhatsApp chatbot for your UK business. AIVized manages installation, training, and monitoring. Handles customer enquiries automatically 24/7. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/whatsapp-chatbot-uk-business" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "WhatsApp Chatbot for UK Businesses: 24/7 AI Messaging",
      "description": "Learn how a managed WhatsApp chatbot helps UK businesses capture leads and answer customer enquiries 24/7 without needing a dedicated support team.",
      "image": "https://www.aivized.com/assets/blog/whatsapp-chatbot-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-01-28",
      "dateModified": "2026-04-20",
      "mainEntityOfPage": "https://www.aivized.com/blog/whatsapp-chatbot-uk-business",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How does a WhatsApp chatbot work for a UK business?", "acceptedAnswer": { "@type": "Answer", "text": "A WhatsApp chatbot connects to your business number via the official Meta Business API. When a customer sends a message, the chatbot responds instantly using a knowledge base we build from your products, services, and FAQs. It handles enquiries 24 hours a day without any action required from you." } },
        { "@type": "Question", "name": "Do I need technical skills to set up a WhatsApp chatbot?", "acceptedAnswer": { "@type": "Answer", "text": "No. AIVized's managed service handles the full setup — connecting to the WhatsApp Business API, training the chatbot on your business, and installing it on your number. You share your business details and we deliver a working chatbot within 24 hours." } },
        { "@type": "Question", "name": "What kinds of messages can a WhatsApp chatbot handle?", "acceptedAnswer": { "@type": "Answer", "text": "A WhatsApp chatbot handles the most common customer messages — questions about pricing, services, opening hours, bookings, and availability. It can collect contact details, send automated follow-ups, and escalate complex enquiries to your team with full conversation context." } },
        { "@type": "Question", "name": "Is an AI chatbot for small business UK affordable on WhatsApp?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AIVized offers managed WhatsApp chatbots from £29 per month. This includes setup, training, monitoring, and ongoing updates. There is no large upfront cost and no technical work required on your part." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "WhatsApp Chatbot UK" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WhatsAppChatbotBlog />
    </>
  );
}
