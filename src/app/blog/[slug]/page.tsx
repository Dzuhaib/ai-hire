export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import CityWebsiteChatbotBlog from "@/views/blog/CityWebsiteChatbotBlog";
import { cityBlogEntries } from "@/data/blogData";
import { getCityBlogBySlug } from "@/data/cityBlogData";
import { blogPostingSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

export async function generateStaticParams() {
  return cityBlogEntries.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = cityBlogEntries.find((p) => p.slug === slug);

  if (post) {
    return {
      title: post.metaTitle,
      description: post.metaDescription,
      keywords: post.keywords.join(", "),
      alternates: { canonical: `${SITE_URL}/blog/${slug}` },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `${SITE_URL}/blog/${slug}`,
        type: "article",
        publishedTime: post.publishedDate,
        modifiedTime: "2026-04-21",
        images: [{ url: `${SITE_URL}${post.heroImage}` }],
      },
      twitter: { card: "summary_large_image", images: [`${SITE_URL}${post.heroImage}`] },
    };
  }

  // Fallback for unknown slugs
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title,
    description: `AI chatbot services for UK businesses. Read our guide on ${title.toLowerCase()}.`,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const citySlug = slug.replace("website-chatbot-24-7-", "");
  const data = getCityBlogBySlug(citySlug);
  const post = cityBlogEntries.find((p) => p.slug === slug);
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  const schema = data
    ? {
        "@context": "https://schema.org",
        "@graph": [
          blogPostingSchema({
            headline: `Website Chatbot That Runs 24/7 ${data.city} | Managed AI Service`,
            description: `Get a website chatbot that runs 24/7 for your ${data.city} business. Managed AI chatbot from £29/month. Capture leads, automate enquiries, we install everything.`,
            image: `${SITE_URL}/assets/locations/ai-${data.slug}.png`,
            url: canonicalUrl,
            datePublished: post?.publishedDate ?? "2026-02-08",
            dateModified: "2026-04-21",
          }),
          breadcrumbSchema([
            { name: "Home", item: SITE_URL },
            { name: "Blog", item: `${SITE_URL}/blog` },
            { name: `Website Chatbot 24/7 ${data.city}`, item: canonicalUrl },
          ]),
        ],
      }
    : null;

  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <CityWebsiteChatbotBlog />
    </>
  );
}
