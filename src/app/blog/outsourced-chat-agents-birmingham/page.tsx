export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import OutsourcedChatAgentsBlog from "@/views/blog/OutsourcedChatAgentsBlog";

export const metadata: Metadata = {
  title: "24/7 AI Chat Agents for Birmingham Businesses | AIVized",
  description: "Managed 24/7 AI chat agents for your Birmingham business. AIVized installs and maintains your chatbot. Enquiries and bookings handled automatically. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/outsourced-chat-agents-birmingham" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "24/7 AI Chat Agents for Birmingham Businesses",
      "description": "Discover how Birmingham businesses use managed AI chat agents to handle customer enquiries 24/7 without hiring additional staff.",
      "image": "https://www.aivized.com/assets/blog/outsourced-chat-agents-hero.png",
      "author": { "@type": "Person", "name": "AIVized Editorial Team", "url": "https://www.aivized.com/blog" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-01",
      "dateModified": "2026-04-20",
      "mainEntityOfPage": "https://www.aivized.com/blog/outsourced-chat-agents-birmingham",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do AI chat agents differ from traditional outsourced chat agents?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional outsourced chat agents are human staff, usually based offshore, who respond to customer messages manually. AI chat agents are software — they respond in under a second, handle unlimited conversations simultaneously, and are available 24/7 without shift patterns, sick days, or overtime. For Birmingham businesses, the key difference is cost and consistency: AI chat agents deliver the same quality at any hour for a fixed monthly fee." } },
        { "@type": "Question", "name": "What kinds of enquiries can AI chat agents handle for Birmingham businesses?", "acceptedAnswer": { "@type": "Answer", "text": "AI chat agents handle the most common customer enquiries — questions about products, services, pricing, opening hours, bookings, and availability. They collect contact details from interested leads and escalate complex or sensitive enquiries to your team with full conversation context. For most Birmingham businesses, this covers 70–80% of incoming messages." } },
        { "@type": "Question", "name": "How quickly can AI chat agents go live for a Birmingham business?", "acceptedAnswer": { "@type": "Answer", "text": "With AIVized's managed service, most Birmingham businesses are live within 24 hours. We connect to your website or WhatsApp, train the AI on your business, test the responses, and launch. You share your business details — we handle everything else." } },
        { "@type": "Question", "name": "Are AI chat agents affordable for small Birmingham businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AIVized's managed AI chat agent service starts from £29 per month. This includes installation, training, 24/7 monitoring, and ongoing updates. There are no setup fees in the thousands, no long-term contracts, and a 3-day free trial so you can verify performance before committing." } },
        { "@type": "Question", "name": "What happens when an AI chat agent can't help a customer?", "acceptedAnswer": { "@type": "Answer", "text": "When a question falls outside the AI's knowledge base, it passes the conversation to your team with the full message history attached. Your team can pick up the conversation with complete context and no customer has to repeat themselves." } },
        { "@type": "Question", "name": "Can AI chat agents help Birmingham businesses outside office hours?", "acceptedAnswer": { "@type": "Answer", "text": "This is where AI chat agents provide the clearest value. Birmingham businesses receive enquiries in the evenings, on weekends, and during public holidays — times when human staff aren't available. AI chat agents respond instantly at any hour, capturing leads and answering questions that would otherwise wait until the next working day." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "24/7 AI Chat Agents Birmingham" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OutsourcedChatAgentsBlog />
    </>
  );
}
