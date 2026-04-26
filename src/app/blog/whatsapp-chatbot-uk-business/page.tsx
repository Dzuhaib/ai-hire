export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WhatsAppChatbotBlog from "@/views/blog/WhatsAppChatbotBlog";

export const metadata: Metadata = {
  title: "Managed WhatsApp Chatbot for UK Businesses | AIVized",
  description: "Set up a WhatsApp chatbot for your UK business. AIVized manages installation, training, and monitoring. Handles customer enquiries automatically 24/7. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/whatsapp-chatbot-uk-business" },
  openGraph: {
    title: "Managed WhatsApp Chatbot for UK Businesses | AIVized",
    description: "Set up a WhatsApp chatbot for your UK business. AIVized manages installation, training, and monitoring. Handles customer enquiries automatically 24/7. From £29/month.",
    url: "https://www.aivized.com/blog/whatsapp-chatbot-uk-business",
    type: "article",
    publishedTime: "2026-01-28",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/whatsapp-chatbot-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/whatsapp-chatbot-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "WhatsApp Chatbot for UK Businesses: 24/7 AI Messaging",
      "description": "Learn how a managed WhatsApp chatbot helps UK businesses capture leads and answer customer enquiries 24/7 without needing a dedicated support team.",
      "image": "https://www.aivized.com/assets/blog/whatsapp-chatbot-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-01-28",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/whatsapp-chatbot-uk-business",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "WhatsApp Chatbot UK", "item": "https://www.aivized.com/blog/whatsapp-chatbot-uk-business" }
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
