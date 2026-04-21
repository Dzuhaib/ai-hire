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
      "@type": ["BlogPosting", "Article"],
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
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does AI business automation actually mean for a UK small business?", "acceptedAnswer": { "@type": "Answer", "text": "For a UK small business, AI business automation means using software to handle the repetitive tasks that would otherwise require your time or a member of staff. In practice, this is a managed AI chatbot that responds to customer enquiries, captures leads, and books appointments automatically, without you needing to monitor incoming messages or answer the same questions repeatedly." } },
        { "@type": "Question", "name": "Which business tasks are best suited to AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "The tasks best suited to AI automation are high-volume, repetitive, and rule-based: answering common customer questions about pricing, services, availability, and hours; collecting contact details from interested visitors; routing enquiries to the right person; and booking appointments. These account for the majority of customer-facing communication in most UK small businesses." } },
        { "@type": "Question", "name": "How long does it take to get AI automation working for my business?", "acceptedAnswer": { "@type": "Answer", "text": "With AIVized's managed service, most businesses are live within 24 hours. You share your products, services, pricing, and common questions. We build, train, and install the AI on your website, WhatsApp, or Instagram. There is no technical work required on your side and no lengthy onboarding process." } },
        { "@type": "Question", "name": "Can AI automation replace my entire customer service team?", "acceptedAnswer": { "@type": "Answer", "text": "AI automation doesn't replace your team. It handles the volume that would otherwise go unanswered. AI manages 70-80% of routine enquiries instantly, while complex or sensitive issues are escalated to your human team with full conversation context. Your team focuses on high-value interactions; the AI handles the repetitive work." } },
        { "@type": "Question", "name": "What is the ROI of AI business automation for a UK small business?", "acceptedAnswer": { "@type": "Answer", "text": "UK businesses typically see ROI within 2–3 months of implementing AI automation. Key improvements include faster response times (seconds vs hours), more leads captured from out-of-hours enquiries, and significant time savings on repetitive customer service tasks. At £29 per month, the cost is lower than a single hour of additional staffing." } },
        { "@type": "Question", "name": "Is AI business automation suitable for very small UK businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Small businesses benefit most from AI automation because every missed enquiry matters and there is rarely a dedicated team to cover out-of-hours messages. AIVized's managed service starts from £29 per month, accessible to sole traders, micro-businesses, and growing SMEs. There is no minimum volume requirement." } }
      ]
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
