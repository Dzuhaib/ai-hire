export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WebsiteChatbotBlog from "@/views/blog/WebsiteChatbotBlog";

export const metadata: Metadata = {
  title: "Managed Website Chatbot for UK Small Businesses | AIVized",
  description: "Get a managed website chatbot for your UK small business. AIVized handles setup and maintenance. Enquiries answered 24/7. No technical skills needed. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/website-chatbot-small-business" },
  openGraph: {
    title: "Managed Website Chatbot for UK Small Businesses | AIVized",
    description: "Get a managed website chatbot for your UK small business. AIVized handles setup and maintenance. Enquiries answered 24/7. No technical skills needed. From £29/month.",
    url: "https://www.aivized.com/blog/website-chatbot-small-business",
    type: "article",
    publishedTime: "2026-01-29",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/website-chatbot-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/website-chatbot-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Website Chatbot for UK Small Businesses: How Managed AI Works",
      "description": "Explore how a fully managed website chatbot helps UK small businesses handle customer enquiries, capture leads, and support customers around the clock.",
      "image": "https://www.aivized.com/assets/blog/website-chatbot-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-01-29",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/website-chatbot-small-business",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Website Chatbot UK", "item": "https://www.aivized.com/blog/website-chatbot-small-business" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WebsiteChatbotBlog />
    </>
  );
}
