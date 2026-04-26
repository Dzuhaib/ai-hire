export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import InstagramChatbotBlog from "@/views/blog/InstagramChatbotBlog";

export const metadata: Metadata = {
  title: "Managed Instagram Chatbot for UK Businesses | AIVized",
  description: "AIVized manages a dedicated Instagram chatbot for your UK business, automating DM responses and enquiry handling 24/7. Full setup included. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/instagram-chatbot-social-media" },
  openGraph: {
    title: "Managed Instagram Chatbot for UK Businesses | AIVized",
    description: "AIVized manages a dedicated Instagram chatbot for your UK business, automating DM responses and enquiry handling 24/7. Full setup included. From £29/month.",
    url: "https://www.aivized.com/blog/instagram-chatbot-social-media",
    type: "article",
    publishedTime: "2026-01-30",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/instagram-chatbot-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/instagram-chatbot-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "Instagram Chatbot for UK Businesses: Automate DMs and Capture Leads 24/7",
      "description": "Discover how an Instagram chatbot helps UK businesses automate DM responses, capture leads, and engage customers at any hour.",
      "image": "https://www.aivized.com/assets/blog/instagram-chatbot-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-01-30",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/instagram-chatbot-social-media",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Instagram Chatbot UK", "item": "https://www.aivized.com/blog/instagram-chatbot-social-media" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <InstagramChatbotBlog />
    </>
  );
}
