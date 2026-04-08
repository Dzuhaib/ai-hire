export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotVsLiveChatBlog from "@/views/blog/AIChatbotVsLiveChatBlog";

export const metadata: Metadata = {
  title: "AI Chatbot vs Live Chat UK | AI Vized",
  description: "AI chatbot vs live chat for UK businesses. Compare costs, performance and which is better for your business.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "AI Chatbot vs Live Chat: Which Is Better for UK Small Business?",
      "description": "AI chatbot or live chat for your UK small business? Compare costs, availability, and customer satisfaction. Find the right solution for 24/7 support.",
      "image": "https://www.aivized.com/assets/blog/ai-chatbot-vs-live-chat-hero.png",
      "author": { "@type": "Person", "name": "AIVized Editorial Team", "url": "https://www.aivized.com/blog" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-11",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is an AI chatbot cheaper than hiring live chat agents?", "acceptedAnswer": { "@type": "Answer", "text": "Significantly. A single live chat agent costs £1,800–£2,500 per month in the UK, and you'd need multiple agents to cover evenings and weekends. An AI chatbot from AIVized starts at £29/month and works 24/7 without breaks." } },
        { "@type": "Question", "name": "Can an AI chatbot handle complex customer questions?", "acceptedAnswer": { "@type": "Answer", "text": "Modern AI chatbots handle 70–80% of common enquiries without human intervention. For complex questions, they capture the customer's details and escalate to your team—so you never lose the lead." } },
        { "@type": "Question", "name": "Will customers know they're talking to a chatbot?", "acceptedAnswer": { "@type": "Answer", "text": "Our chatbots are configured to be transparent—they introduce themselves as AI assistants. Interestingly, most customers don't mind as long as they get fast, helpful answers. Speed matters more than whether it's human or AI." } },
        { "@type": "Question", "name": "Can I use both AI chatbot and live chat together?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Many businesses use an AI chatbot as the first line of response and only bring in human agents for complex cases. This hybrid approach gives you the best of both worlds while keeping costs low." } },
        { "@type": "Question", "name": "How long does it take to set up an AI chatbot?", "acceptedAnswer": { "@type": "Answer", "text": "With AIVized's managed service, your chatbot is live within 24 hours. We handle installation, configuration, and ongoing optimisation—you don't need any technical skills." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Chatbot vs Live Chat" }
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
