export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WhatsAppChatbotBlog from "@/views/blog/WhatsAppChatbotBlog";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getBlogBySlug } from "@/data/blogData";

const SLUG = "whatsapp-chatbot-uk-business";
const URL = `${SITE_URL}/blog/${SLUG}`;
const post = getBlogBySlug(SLUG);

export const metadata: Metadata = {
  title: "Managed WhatsApp Chatbot for UK Businesses | AIVized",
  description: "Set up a WhatsApp chatbot for your UK business. AIVized manages installation, training, and monitoring. Handles customer enquiries automatically 24/7. From £29/month.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Managed WhatsApp Chatbot for UK Businesses | AIVized",
    description: "Set up a WhatsApp chatbot for your UK business. AIVized manages installation, training, and monitoring. Handles customer enquiries automatically 24/7. From £29/month.",
    url: URL,
    type: "article",
    publishedTime: post?.publishedDate,
    modifiedTime: "2026-04-21",
    images: [{ url: `${SITE_URL}/assets/blog/whatsapp-chatbot-hero.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/assets/blog/whatsapp-chatbot-hero.png`] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    blogPostingSchema({
      headline: "WhatsApp Chatbot for UK Businesses: 24/7 AI Messaging",
      description: "Learn how a managed WhatsApp chatbot helps UK businesses capture leads and answer customer enquiries 24/7 without needing a dedicated support team.",
      image: `${SITE_URL}${post?.heroImage ?? "/assets/blog/whatsapp-chatbot-hero.png"}`,
      url: URL,
      datePublished: post?.publishedDate ?? "2026-01-28",
      dateModified: "2026-04-21",
    }),
    breadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: "WhatsApp Chatbot UK", item: URL },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WhatsAppChatbotBlog />
    </>
  );
}
