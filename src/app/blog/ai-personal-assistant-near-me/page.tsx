export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIPersonalAssistantBlog from "@/views/blog/AIPersonalAssistantBlog";

export const metadata: Metadata = {
  title: "Managed AI Personal Assistant for UK Businesses | AIVized",
  description: "AIVized provides a fully managed AI personal assistant for your UK business. Handles enquiries, captures leads, and automates responses 24/7. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-personal-assistant-near-me" },
  openGraph: {
    title: "Managed AI Personal Assistant for UK Businesses | AIVized",
    description: "AIVized provides a fully managed AI personal assistant for your UK business. Handles enquiries, captures leads, and automates responses 24/7. From £29/month.",
    url: "https://www.aivized.com/blog/ai-personal-assistant-near-me",
    type: "article",
    publishedTime: "2026-02-18",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-personal-assistant-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-personal-assistant-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "AI Personal Assistant for Your UK Business: What It Does and How to Get One",
      "description": "Find out how a managed AI personal assistant can handle customer enquiries, capture leads, and support your UK business around the clock.",
      "image": "https://www.aivized.com/assets/blog/ai-personal-assistant-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-03",
      "dateModified": "2026-04-20",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-personal-assistant-near-me",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is an AI personal assistant for a UK business?", "acceptedAnswer": { "@type": "Answer", "text": "An AI personal assistant for a UK business is a managed chatbot that handles customer-facing tasks automatically — answering enquiries, collecting lead details, booking appointments, and responding to messages across your website, WhatsApp, or Instagram. Unlike a basic FAQ bot, it holds a natural conversation and can handle multi-step requests based on a knowledge base built from your specific business." } },
        { "@type": "Question", "name": "What tasks can an AI personal assistant handle for my business?", "acceptedAnswer": { "@type": "Answer", "text": "An AI personal assistant handles the tasks that would otherwise require your time or a member of staff: answering repeated questions about pricing, services, availability, and hours; collecting contact details from interested customers; booking appointments into your calendar; and escalating complex enquiries to you with full conversation context." } },
        { "@type": "Question", "name": "How is a managed AI personal assistant different from a chatbot I build myself?", "acceptedAnswer": { "@type": "Answer", "text": "A managed AI personal assistant is built, trained, installed, and maintained by AIVized on your behalf. You share your business details — we handle the technical setup and keep the assistant updated when your content changes. A self-build chatbot requires you to configure conversation flows, write responses, manage the integration, and maintain it yourself." } },
        { "@type": "Question", "name": "Which channels can an AI personal assistant work on?", "acceptedAnswer": { "@type": "Answer", "text": "AIVized's managed AI personal assistant works across your website, WhatsApp, and Instagram. One assistant, trained on your business, deployed to the channels your customers use. Each channel can be added separately or together, depending on where your enquiries come from." } },
        { "@type": "Question", "name": "How quickly can an AI personal assistant go live for my UK business?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses are live within 24 hours. You share your products, services, pricing, and common questions — we build and test the assistant, then install it on your chosen channels. There is no technical work required on your side." } },
        { "@type": "Question", "name": "How does WhatsApp integration work for an AI personal assistant?", "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp integration connects your business number to the AI assistant via the official Meta Business API. When a customer sends a message, the assistant responds instantly using your knowledge base. It can answer questions, collect contact details, book appointments, and escalate to your team — all within the WhatsApp interface your customers already use daily." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Personal Assistant UK Business", "item": "https://www.aivized.com/blog/ai-personal-assistant-near-me" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIPersonalAssistantBlog />
    </>
  );
}
