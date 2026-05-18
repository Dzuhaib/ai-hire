export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import ReduceMissedLeadsBlog from "@/views/blog/ReduceMissedLeadsBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "reduce-missed-leads-website";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogBySlug(SLUG);
  const title = post?.metaTitle || "How to Reduce Missed Leads from Your Website | AIVized";
  const description = post?.metaDescription || "Learn how to reduce missed leads from your website using a managed AI chatbot. AIVized captures enquiries 24/7 so you never lose a potential customer.";
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
      images: [{ url: `${SITE_URL}${post?.heroImage ?? "/assets/blog/reduce-missed-leads-hero.png"}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}${post?.heroImage ?? "/assets/blog/reduce-missed-leads-hero.png"}`] },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "How to Reduce Missed Leads from Your Website with AI Chatbots",
      description: "Discover why UK small businesses miss up to 60% of website leads and how an AI chatbot captures enquiries 24/7. Practical tips to stop losing customers.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/reduce-missed-leads-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-10",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "How to Reduce Missed Leads from Your Website", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ReduceMissedLeadsBlog />
    </>
  );
}
