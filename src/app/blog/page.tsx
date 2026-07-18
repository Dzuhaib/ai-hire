export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import BlogsPage from "@/views/BlogsPage";
import { allBlogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "AI Chatbot Blog: Guides for UK Businesses",
  description:
    "Welcome to the AIVized AI chatbot blog. Learn how to capture leads, automate enquiries, and grow your UK small business with our expert tips and guides.",
  alternates: { canonical: "https://www.aivized.com/blog" },
  openGraph: {
    title: "AI Chatbot Blog: Guides for UK Businesses",
    description: "Welcome to the AIVized AI chatbot blog. Learn how to capture leads, automate enquiries, and grow your UK small business with our expert tips and guides.",
    url: "https://www.aivized.com/blog",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
};

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.aivized.com/blog#collectionpage",
      "name": "AI Chatbot Blog | UK Business Insights",
      "description": "Expert insights on AI chatbots for UK businesses. Learn about WhatsApp, website, and Instagram chatbots for lead generation and customer support.",
      "url": "https://www.aivized.com/blog",
      "publisher": { "@id": "https://www.aivized.com/#organization" },
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
