export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIPersonalAssistantBlog from "@/views/blog/AIPersonalAssistantBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "ai-personal-assistant-near-me";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export const metadata: Metadata = {
  title: "Managed AI Personal Assistant for UK Businesses | AIVized",
  description: "AIVized provides a fully managed AI personal assistant for your UK business. Handles enquiries, captures leads, and automates responses 24/7. From £29/month.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Managed AI Personal Assistant for UK Businesses | AIVized",
    description: "AIVized provides a fully managed AI personal assistant for your UK business. Handles enquiries, captures leads, and automates responses 24/7. From £29/month.",
    url: URL,
    type: "article",
    publishedTime: post?.publishedDate,
    modifiedTime: "2026-04-21",
    images: [{ url: `${SITE_URL}/assets/blog/ai-personal-assistant-hero.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/assets/blog/ai-personal-assistant-hero.png`] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "AI Personal Assistant for Your UK Business: What It Does and How to Get One",
      description: "Find out how a managed AI personal assistant can handle customer enquiries, capture leads, and support your UK business around the clock.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-personal-assistant-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-03",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "AI Personal Assistant UK Business", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIPersonalAssistantBlog />
    </>
  );
}
