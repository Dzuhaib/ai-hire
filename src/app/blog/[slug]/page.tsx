export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import CityWebsiteChatbotBlog from "@/views/blog/CityWebsiteChatbotBlog";
import { cityBlogEntries } from "@/data/blogData";
import { getCityBlogBySlug } from "@/data/cityBlogData";

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
      alternates: { canonical: `https://www.aivized.com/blog/${slug}` },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `https://www.aivized.com/blog/${slug}`,
        type: "article",
        publishedTime: "2026-02-08",
        modifiedTime: "2026-04-21",
        images: [{ url: post.heroImage }],
      },
      twitter: { card: "summary_large_image", images: [post.heroImage] },
    };
  }

  // Fallback for unknown slugs
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | AIVized`,
    description: `AI chatbot services for UK businesses. Read our guide on ${title.toLowerCase()}.`,
    alternates: { canonical: `https://www.aivized.com/blog/${slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // city slug is extracted from the blog slug (e.g., "website-chatbot-24-7-london" → "london")
  const citySlug = slug.replace("website-chatbot-24-7-", "");
  const data = getCityBlogBySlug(citySlug);
  const canonicalUrl = `https://www.aivized.com/blog/${slug}`;

  const schema = data
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "headline": `Website Chatbot That Runs 24/7 ${data.city} | Managed AI Service`,
            "description": `Get a website chatbot that runs 24/7 for your ${data.city} business. Managed AI chatbot from £29/month. Capture leads, automate enquiries, we install everything.`,
            "image": `https://www.aivized.com/assets/locations/ai-${data.slug}.png`,
            "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
            "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
            "datePublished": "2026-02-08",
            "dateModified": "2026-04-21",
            "mainEntityOfPage": canonicalUrl,
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
              { "@type": "ListItem", "position": 3, "name": `Website Chatbot 24/7 ${data.city}`, "item": canonicalUrl },
            ],
          },
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
