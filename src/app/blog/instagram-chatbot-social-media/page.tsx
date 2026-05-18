export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import InstagramChatbotBlog from "@/views/blog/InstagramChatbotBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "instagram-chatbot-social-media";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "Managed Instagram Chatbot for UK Businesses | AIVized";
  const description = post?.metaDescription || "AIVized manages a dedicated Instagram chatbot for your UK business, automating DM responses and enquiry handling 24/7. Full setup included. From £29/month.";
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
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/instagram-chatbot-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/instagram-chatbot-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "Instagram Chatbot for UK Businesses: Automate DMs and Capture Leads 24/7",
      description: "Discover how an Instagram chatbot helps UK businesses automate DM responses, capture leads, and engage customers at any hour.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/instagram-chatbot-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-01-30",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "Instagram Chatbot UK", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <InstagramChatbotBlog />
    </>
  );
}
