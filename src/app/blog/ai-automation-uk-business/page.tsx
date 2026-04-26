export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIAutomationUKBlog from "@/views/blog/AIAutomationUKBlog";

export const metadata: Metadata = {
  title: "AI Business Automation for UK Small Business | AIVized",
  description: "A practical guide to AI business automation for UK small businesses. AIVized manages setup and monitoring. Capture leads and automate enquiries from £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-automation-uk-business" },
  openGraph: {
    title: "AI Business Automation for UK Small Business | AIVized",
    description: "A practical guide to AI business automation for UK small businesses. AIVized manages setup and monitoring. Capture leads and automate enquiries from £29/month.",
    url: "https://www.aivized.com/blog/ai-automation-uk-business",
    type: "article",
    publishedTime: "2026-02-05",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-automation-uk-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-automation-uk-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "AI Business Automation for UK Small Business: A Practical Guide",
      "description": "Discover how UK small businesses are using AI automation to handle customer enquiries, capture leads, and free up staff time, without needing a technical team.",
      "image": "https://www.aivized.com/assets/blog/ai-automation-uk-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-05",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-automation-uk-business",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Business Automation UK", "item": "https://www.aivized.com/blog/ai-automation-uk-business" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIAutomationUKBlog />
    </>
  );
}
