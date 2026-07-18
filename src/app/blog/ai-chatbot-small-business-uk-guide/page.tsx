export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotGuideBlog from "@/views/blog/AIChatbotGuideBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "ai-chatbot-small-business-uk-guide";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "AI Chatbot for Small Business UK: Complete Guide ";
  const description = post?.metaDescription || "The complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand the costs involved, and choose the right service.";
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
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-chatbot-guide-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-chatbot-guide-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "AI Chatbot for Small Business UK: The Complete 2026 Guide to WhatsApp & Website Chatbots",
      description: "Complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand what to look for, and learn how to get started from £29/month.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-chatbot-guide-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-06",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "AI Chatbot Small Business UK Guide", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIChatbotGuideBlog />
    </>
  );
}
