export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import CityWebsiteChatbotBlog from "@/views/blog/CityWebsiteChatbotBlog";
import { cityBlogEntries } from "@/data/blogData";

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
        images: [{ url: post.heroImage }],
      },
    };
  }

  // Fallback for unknown slugs
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | AI Vized`,
    description: `AI chatbot services for UK businesses. Read our guide on ${title.toLowerCase()}.`,
    alternates: { canonical: `https://www.aivized.com/blog/${slug}` },
  };
}

export default function Page() {
  return <CityWebsiteChatbotBlog />;
}
