export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AutomateEnquiriesBlog from "@/views/blog/AutomateEnquiriesBlog";

export const metadata: Metadata = {
  title: "Automate Customer Enquiries with a Personal Touch | AIVized",
  description: "Learn how to automate customer enquiries while keeping the personal touch. AIVized manages AI chatbots for UK small businesses with no technical setup needed.",
  alternates: { canonical: "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch" },
  openGraph: {
    title: "Automate Customer Enquiries with a Personal Touch | AIVized",
    description: "Learn how to automate customer enquiries while keeping the personal touch. AIVized manages AI chatbots for UK small businesses with no technical setup needed.",
    url: "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch",
    type: "article",
    publishedTime: "2026-02-12",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/automate-enquiries-personal-touch-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/automate-enquiries-personal-touch-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "How to Automate Customer Enquiries Without Losing the Personal Touch",
      "description": "Learn how UK small businesses automate customer enquiries with AI chatbots while keeping interactions warm and personal. Practical guide with real examples.",
      "image": "https://www.aivized.com/assets/blog/automate-enquiries-personal-touch-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-12",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Automate Customer Enquiries with a Personal Touch", "item": "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AutomateEnquiriesBlog />
    </>
  );
}
