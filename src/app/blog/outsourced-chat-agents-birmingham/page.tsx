export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import OutsourcedChatAgentsBlog from "@/views/blog/OutsourcedChatAgentsBlog";

export const metadata: Metadata = {
  title: "24/7 AI Chat Agents for Birmingham Businesses | AIVized",
  description: "Managed 24/7 AI chat agents for your Birmingham business. AIVized installs and maintains your chatbot. Enquiries and bookings handled automatically. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/outsourced-chat-agents-birmingham" },
  openGraph: {
    title: "24/7 AI Chat Agents for Birmingham Businesses | AIVized",
    description: "Managed 24/7 AI chat agents for your Birmingham business. AIVized installs and maintains your chatbot. Enquiries and bookings handled automatically. From £29/month.",
    url: "https://www.aivized.com/blog/outsourced-chat-agents-birmingham",
    type: "article",
    publishedTime: "2026-02-01",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/outsourced-chat-agents-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/outsourced-chat-agents-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "24/7 AI Chat Agents for Birmingham Businesses",
      "description": "Discover how Birmingham businesses use managed AI chat agents to handle customer enquiries 24/7 without hiring additional staff.",
      "image": "https://www.aivized.com/assets/blog/outsourced-chat-agents-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-01",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/outsourced-chat-agents-birmingham",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "24/7 AI Chat Agents Birmingham", "item": "https://www.aivized.com/blog/outsourced-chat-agents-birmingham" }
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
