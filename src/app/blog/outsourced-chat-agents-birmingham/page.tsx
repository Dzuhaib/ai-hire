export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import OutsourcedChatAgentsBlog from "@/views/blog/OutsourcedChatAgentsBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "outsourced-chat-agents-birmingham";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "24/7 AI Chat Agents for Birmingham Businesses | AIVized";
  const description = post?.metaDescription || "Managed 24/7 AI chat agents for your Birmingham business. AIVized installs and maintains your chatbot. Enquiries and bookings handled automatically. From £29/month.";
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
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/outsourced-chat-agents-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/outsourced-chat-agents-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "24/7 AI Chat Agents for Birmingham Businesses",
      description: "Discover how Birmingham businesses use managed AI chat agents to handle customer enquiries 24/7 without hiring additional staff.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/outsourced-chat-agents-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-01",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "24/7 AI Chat Agents Birmingham", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OutsourcedChatAgentsBlog />
    </>
  );
}
