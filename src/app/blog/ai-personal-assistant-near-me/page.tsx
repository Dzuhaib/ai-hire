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
    publishedTime: "2026-02-03",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-personal-assistant-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-personal-assistant-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "AI Personal Assistant for Your UK Business: What It Does and How to Get One",
      "description": "Find out how a managed AI personal assistant can handle customer enquiries, capture leads, and support your UK business around the clock.",
      "image": "https://www.aivized.com/assets/blog/ai-personal-assistant-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-03",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-personal-assistant-near-me",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
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
