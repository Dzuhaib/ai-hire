export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WebsiteChatbotBlog from "@/views/blog/WebsiteChatbotBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "website-chatbot-small-business";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export const metadata: Metadata = {
  title: "Managed Website Chatbot for UK Small Businesses | AIVized",
  description: "Get a managed website chatbot for your UK small business. AIVized handles setup and maintenance. Enquiries answered 24/7. No technical skills needed. From £29/month.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Managed Website Chatbot for UK Small Businesses | AIVized",
    description: "Get a managed website chatbot for your UK small business. AIVized handles setup and maintenance. Enquiries answered 24/7. No technical skills needed. From £29/month.",
    url: URL,
    type: "article",
    publishedTime: post?.publishedDate,
    modifiedTime: "2026-04-21",
    images: [{ url: `${SITE_URL}/assets/blog/website-chatbot-hero.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/assets/blog/website-chatbot-hero.png`] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "Website Chatbot for UK Small Businesses: How Managed AI Works",
      description: "Explore how a fully managed website chatbot helps UK small businesses handle customer enquiries, capture leads, and support customers around the clock.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/website-chatbot-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-01-29",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "Website Chatbot UK", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WebsiteChatbotBlog />
    </>
  );
}
