export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIServiceProvidersBlog from "@/views/blog/AIServiceProvidersBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "ai-service-providers-uk";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "How to Choose an AI Service Provider UK | AIVized Guide";
  const description = post?.metaDescription || "Choosing an AI service provider for your UK business? This guide covers what to look for, questions to ask, and how managed AI chatbot services compare.";
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
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-service-providers-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-service-providers-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "How to Choose an AI Service Provider for Your UK Business",
      description: "A practical guide to evaluating AI service providers for UK small businesses: what to look for, what to ask, and how to avoid common pitfalls.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/ai-service-providers-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-02",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "AI Service Providers UK", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIServiceProvidersBlog />
    </>
  );
}
