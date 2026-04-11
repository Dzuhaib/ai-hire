export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import BlogsPage from "@/views/BlogsPage";
import { allBlogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "AI Chatbot Blog | AI Vized - Tips & Guides for UK Businesses",
  description:
    "Expert guides and tips on AI chatbots for UK small businesses. Learn how to capture leads, automate enquiries, and grow your business with AI.",
  alternates: { canonical: "https://www.aivized.com/blog" },
};

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "AI Chatbot Blog | UK Business Insights",
      "description": "Expert insights on AI chatbots for UK businesses. Learn about WhatsApp, website, and Instagram chatbots for lead generation and customer support.",
      "url": "https://www.aivized.com/blog",
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": allBlogPosts.length,
        "itemListElement": allBlogPosts.slice(0, 9).map((post, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://www.aivized.com/blog/${post.slug}`,
          "name": post.title
        }))
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }} />
      <BlogsPage />
    </>
  );
}
