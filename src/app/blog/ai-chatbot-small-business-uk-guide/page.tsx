export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotGuideBlog from "@/views/blog/AIChatbotGuideBlog";

export const metadata: Metadata = {
  title: "AI Chatbot for Small Business UK: Complete Guide | AIVized",
  description: "The complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand the costs involved, and choose the right service.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide" },
  openGraph: {
    title: "AI Chatbot for Small Business UK: Complete Guide | AIVized",
    description: "The complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand the costs involved, and choose the right service.",
    url: "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide",
    type: "article",
    publishedTime: "2026-02-06",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-chatbot-guide-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-chatbot-guide-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "AI Chatbot for Small Business UK: The Complete 2026 Guide to WhatsApp & Website Chatbots",
      "description": "Complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand what to look for, and learn how to get started from £29/month.",
      "image": "https://www.aivized.com/assets/blog/ai-chatbot-guide-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-06",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Chatbot Small Business UK Guide", "item": "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIChatbotGuideBlog />
    </>
  );
}
