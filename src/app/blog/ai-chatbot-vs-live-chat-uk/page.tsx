export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotVsLiveChatBlog from "@/views/blog/AIChatbotVsLiveChatBlog";

export const metadata: Metadata = {
  title: "AI Chatbot vs Live Chat for UK Businesses | AIVized",
  description: "Compare AI chatbot vs live chat for UK businesses. Understand costs, performance, and which solution is best for your small business customer service.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk" },
  openGraph: {
    title: "AI Chatbot vs Live Chat for UK Businesses | AIVized",
    description: "Compare AI chatbot vs live chat for UK businesses. Understand costs, performance, and which solution is best for your small business customer service.",
    url: "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk",
    type: "article",
    publishedTime: "2026-02-11",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-chatbot-vs-live-chat-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-chatbot-vs-live-chat-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "AI Chatbot vs Live Chat: Which Is Better for UK Small Business?",
      "description": "AI chatbot or live chat for your UK small business? Compare costs, availability, and customer satisfaction. Find the right solution for 24/7 support.",
      "image": "https://www.aivized.com/assets/blog/ai-chatbot-vs-live-chat-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-11",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Chatbot vs Live Chat", "item": "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIChatbotVsLiveChatBlog />
    </>
  );
}
