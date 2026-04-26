export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import ReduceMissedLeadsBlog from "@/views/blog/ReduceMissedLeadsBlog";

export const metadata: Metadata = {
  title: "How to Reduce Missed Leads from Your Website | AIVized",
  description: "Learn how to reduce missed leads from your website using a managed AI chatbot. AIVized captures enquiries 24/7 so you never lose a potential customer.",
  alternates: { canonical: "https://www.aivized.com/blog/reduce-missed-leads-website" },
  openGraph: {
    title: "How to Reduce Missed Leads from Your Website | AIVized",
    description: "Learn how to reduce missed leads from your website using a managed AI chatbot. AIVized captures enquiries 24/7 so you never lose a potential customer.",
    url: "https://www.aivized.com/blog/reduce-missed-leads-website",
    type: "article",
    publishedTime: "2026-02-10",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/reduce-missed-leads-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/reduce-missed-leads-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "How to Reduce Missed Leads from Your Website with AI Chatbots",
      "description": "Discover why UK small businesses miss up to 60% of website leads and how an AI chatbot captures enquiries 24/7. Practical tips to stop losing customers.",
      "image": "https://www.aivized.com/assets/blog/reduce-missed-leads-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-10",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/reduce-missed-leads-website",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How to Reduce Missed Leads from Your Website", "item": "https://www.aivized.com/blog/reduce-missed-leads-website" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ReduceMissedLeadsBlog />
    </>
  );
}
