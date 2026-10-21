export const revalidate = 86400;
import type { Metadata } from "next";
import AIAgencyDubai from "@/views/blog/AIAgencyDubai";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "ai-agency-dubai";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const title = post?.metaTitle || "AI Agency Dubai | Why Local Businesses Need AI in 2026";
  const description = post?.metaDescription || "Discover why Dubai businesses are turning to AI agencies for lead generation, customer support, and automation.";
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
      modifiedTime: "2026-07-25",
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/locations/ai-support.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/locations/ai-support.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "Why Dubai Businesses Need an AI Agency in 2026",
      description: "Dubai's business scene is more competitive than ever. Here's why local companies are partnering with AI agencies to capture leads, automate support, and stay ahead.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/locations/ai-support.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-07-25",
      dateModified: "2026-07-25",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "AI Agency Dubai", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIAgencyDubai />
    </>
  );
}
