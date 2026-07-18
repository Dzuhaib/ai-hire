export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIAutomationUKBlog from "@/views/blog/AIAutomationUKBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "ai-automation-uk-business";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "AI Business Automation for UK Small Business ";
  const description = post?.metaDescription || "A practical guide to AI business automation for UK small businesses. AIVized manages setup and monitoring. Capture leads and automate enquiries from £29/month.";
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
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-automation-uk-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-automation-uk-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "AI Business Automation for UK Small Business: A Practical Guide",
      description: "Discover how UK small businesses are using AI automation to handle customer enquiries, capture leads, and free up staff time, without needing a technical team.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-automation-uk-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-05",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "AI Business Automation UK", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIAutomationUKBlog />
    </>
  );
}
