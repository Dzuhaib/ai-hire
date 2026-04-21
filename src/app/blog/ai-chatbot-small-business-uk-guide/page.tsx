export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotGuideBlog from "@/views/blog/AIChatbotGuideBlog";

export const metadata: Metadata = {
  title: "AI Chatbot for Small Business UK: Complete Guide | AIVized",
  description: "The complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand the costs involved, and choose the right service.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide" },
  openGraph: {
    title: "AI Chatbot for Small Business UK: Complete Guide | AIVized",
    description: "The complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand the costs involved, and choose the right service.",
    url: "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide",
    type: "article",
    publishedTime: "2026-02-06",
    modifiedTime: "2026-04-21",
    images: [{ url: "https://www.aivized.com/assets/blog/ai-chatbot-guide-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://www.aivized.com/assets/blog/ai-chatbot-guide-hero.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "headline": "AI Chatbot for Small Business UK: The Complete 2026 Guide to WhatsApp & Website Chatbots",
      "description": "Complete guide to AI chatbots for UK small businesses. Compare managed vs DIY options, understand what to look for, and learn how to get started from £29/month.",
      "image": "https://www.aivized.com/assets/blog/ai-chatbot-guide-hero.png",
      "author": { "@type": "Person", "@id": "https://www.aivized.com/#founder", "name": "Zuhaib Ahmed", "url": "https://www.linkedin.com/in/zuhaibah/", "sameAs": ["https://www.linkedin.com/in/zuhaibah/"] },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-06",
      "dateModified": "2026-04-21",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best AI chatbot for small business UK in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "The best AI chatbot for small business UK combines affordability, ease of use, and multi-channel support. AIVized offers a fully managed chatbot service from £29/month that works across your website, WhatsApp, and social media—no technical skills required. Unlike DIY builders, we handle installation, training, and ongoing optimisation." } },
        { "@type": "Question", "name": "How does a WhatsApp chatbot UK work for lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "A WhatsApp chatbot UK automatically engages customers on WhatsApp—the UK's most popular messaging app. It answers enquiries instantly, qualifies leads by asking relevant questions, collects contact details, and books appointments. Because WhatsApp messages have 98% open rates compared to 20% for email, it's one of the most effective lead generation channels available." } },
        { "@type": "Question", "name": "What is a managed AI chatbot service vs a DIY chatbot builder?", "acceptedAnswer": { "@type": "Answer", "text": "A managed AI chatbot service means the provider handles installation, training, monitoring, and updates on your behalf. You subscribe and the service is live within 24 hours. A DIY chatbot builder gives you the tools to build it yourself, which requires technical knowledge, ongoing maintenance, and significant time investment. For most UK small businesses, managed is the better choice because it removes the technical burden entirely." } },
        { "@type": "Question", "name": "What questions should I ask before signing up to a chatbot service?", "acceptedAnswer": { "@type": "Answer", "text": "Ask: Is the chatbot trained on my specific business, or is it generic? Who handles updates when my products or services change? What happens when the chatbot cannot answer a question? Is there a contract, and what are the cancellation terms? Is the service GDPR compliant and where is my customer data stored? How is performance reported, and what metrics will I see?" } },
        { "@type": "Question", "name": "Do I need technical skills to set up an AI chatbot for my UK business?", "acceptedAnswer": { "@type": "Answer", "text": "No. With AIVized's managed service, you need zero technical skills. We handle everything—from chatbot design and installation to training, monitoring, and updates. You simply tell us about your business, and we build and deploy your AI chatbot within 24 hours. It's truly a hands-off experience." } },
        { "@type": "Question", "name": "How much does an AI chatbot cost for a small business in the UK?", "acceptedAnswer": { "@type": "Answer", "text": "AI chatbot costs for UK small businesses typically range from £29 to £299/month depending on features and channels. AIVized's Starter plan starts at £29/month for single-channel chatbot management, while the Professional plan at £79/month and Business plan at £149/month include broader integrations. There is a one-time £50 setup fee, no long-term contracts, and a 3-day free trial." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Chatbot Small Business UK Guide", "item": "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIChatbotGuideBlog />
    </>
  );
}
