export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIServiceProvidersBlog from "@/views/blog/AIServiceProvidersBlog";

export const metadata: Metadata = {
  title: "How to Choose an AI Service Provider UK | AIVized Guide",
  description: "Choosing an AI service provider for your UK business? This guide covers what to look for, questions to ask, and how managed AI chatbot services compare.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-service-providers-uk" },
  openGraph: {
    title: "How to Choose an AI Service Provider UK | AIVized Guide",
    description: "Choosing an AI service provider for your UK business? This guide covers what to look for, questions to ask, and how managed AI chatbot services compare.",
    url: "https://www.aivized.com/blog/ai-service-providers-uk",
    type: "article",
    publishedTime: "2026-02-02",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-service-providers-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-service-providers-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "How to Choose an AI Service Provider for Your UK Business",
      "description": "A practical guide to evaluating AI service providers for UK small businesses: what to look for, what to ask, and how to avoid common pitfalls.",
      "image": "https://www.aivized.com/assets/blog/ai-service-providers-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-02",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-service-providers-uk",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Service Providers UK", "item": "https://www.aivized.com/blog/ai-service-providers-uk" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIServiceProvidersBlog />
    </>
  );
}
