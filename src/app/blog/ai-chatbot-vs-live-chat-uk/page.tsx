export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotVsLiveChatBlog from "@/views/blog/AIChatbotVsLiveChatBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "ai-chatbot-vs-live-chat-uk";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "AI Chatbot vs Live Chat for UK Businesses | AIVized";
  const description = post?.metaDescription || "Compare AI chatbot vs live chat for UK businesses. Understand costs, performance, and which solution is best for your small business customer service.";
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: {
      title,
      description,
      url: URL,
      type: "article",
      publishedTime: post?.publishedDate,
      modifiedTime: "2026-04-21",
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-chatbot-vs-live-chat-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-chatbot-vs-live-chat-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "AI Chatbot vs Live Chat: Which Is Better for UK Small Business?",
      description: "AI chatbot or live chat for your UK small business? Compare costs, availability, and customer satisfaction. Find the right solution for 24/7 support.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-chatbot-vs-live-chat-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-11",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "AI Chatbot vs Live Chat", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIChatbotVsLiveChatBlog />
    </>
  );
}
