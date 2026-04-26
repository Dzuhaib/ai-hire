export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AutomateEnquiriesBlog from "@/views/blog/AutomateEnquiriesBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "automate-customer-enquiries-personal-touch";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export const metadata: Metadata = {
  title: "Automate Customer Enquiries with a Personal Touch | AIVized",
  description: "Learn how to automate customer enquiries while keeping the personal touch. AIVized manages AI chatbots for UK small businesses with no technical setup needed.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Automate Customer Enquiries with a Personal Touch | AIVized",
    description: "Learn how to automate customer enquiries while keeping the personal touch. AIVized manages AI chatbots for UK small businesses with no technical setup needed.",
    url: URL,
    type: "article",
    publishedTime: post?.publishedDate,
    modifiedTime: "2026-04-21",
    images: [{ url: `${SITE_URL}/assets/blog/automate-enquiries-personal-touch-hero.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/assets/blog/automate-enquiries-personal-touch-hero.png`] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "How to Automate Customer Enquiries Without Losing the Personal Touch",
      description: "Learn how UK small businesses automate customer enquiries with AI chatbots while keeping interactions warm and personal. Practical guide with real examples.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/automate-enquiries-personal-touch-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-02-12",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "Automate Customer Enquiries with a Personal Touch", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AutomateEnquiriesBlog />
    </>
  );
}
