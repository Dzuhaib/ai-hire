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
      "@type": ["BlogPosting", "Article"],
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
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How does a managed website chatbot differ from a DIY chatbot builder?", "acceptedAnswer": { "@type": "Answer", "text": "With a DIY chatbot builder, you configure the chatbot yourself, write the conversation flows, handle the installation, and maintain it whenever your content changes. A managed service like AIVized does all of that for you. You share your business details and we install, train, and maintain the chatbot on your behalf." } },
        { "@type": "Question", "name": "How does an AI chatbot for small business UK work on a website?", "acceptedAnswer": { "@type": "Answer", "text": "An AI chatbot for small business UK works by embedding a chat widget on your website. When visitors arrive, the chatbot greets them, answers common questions, captures contact details, and guides them toward booking or purchasing automatically, based on the knowledge base we build from your business information." } },
        { "@type": "Question", "name": "Will a website chatbot work on my existing site without a rebuild?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AIVized installs the chatbot by adding a single script tag to your website. This works with any website platform: WordPress, Shopify, Wix, Squarespace, or a custom-built site. No rebuild or technical work is required from your side." } },
        { "@type": "Question", "name": "What happens when the chatbot can't answer a question?", "acceptedAnswer": { "@type": "Answer", "text": "When a visitor asks something outside the chatbot's knowledge base, it escalates the conversation to your team with the full conversation context attached. Your team sees exactly what was asked and can follow up with everything they need to help." } }
      ]
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
