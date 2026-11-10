export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import BlogsPage from "@/views/BlogsPage";
import { allBlogPosts } from "@/data/blogData";
import { ORG_ID, SITE_URL, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Chatbot Blog: Guides for UAE Businesses",
  description:
    "Welcome to the AIVized AI chatbot blog. Learn how to capture leads, automate enquiries, and grow your UAE small business with our expert tips and guides.",
  alternates: { canonical: "https://www.aivized.com/blog" },
  openGraph: {
    title: "AI Chatbot Blog: Guides for UAE Businesses",
    description: "Welcome to the AIVized AI chatbot blog. Learn how to capture leads, automate enquiries, and grow your UAE small business with our expert tips and guides.",
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
      "@id": `${SITE_URL}/blog#collectionpage`,
      "name": "AI Chatbot Blog | UAE Business Insights",
      "description": "Expert insights on AI chatbots for UAE businesses. Learn about WhatsApp, website, and Instagram chatbots for lead generation and customer support.",
      "url": `${SITE_URL}/blog`,
      "publisher": { "@id": ORG_ID },
      "about": { "@id": ORG_ID },
      "mainEntity": {
        "@type": "ItemList",
        "@id": `${SITE_URL}/blog#posts`,
        "numberOfItems": allBlogPosts.length,
        "itemListElement": allBlogPosts.map((post, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${SITE_URL}/blog/${post.slug}`,
          "name": post.title
        }))
      }
    },
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
    ])
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
