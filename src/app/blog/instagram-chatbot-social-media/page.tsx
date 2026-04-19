export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import InstagramChatbotBlog from "@/views/blog/InstagramChatbotBlog";

export const metadata: Metadata = {
  title: "Instagram Chatbot for UK Business | Automate DMs 24/7 | AIVized",
  description: "Automate Instagram DMs for your UK business with an AI chatbot. AIVized manages setup and 24/7 monitoring so you never miss an enquiry. From £29/month.",
  alternates: { canonical: "https://www.aivized.com/blog/instagram-chatbot-social-media" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Instagram Chatbot for UK Businesses: Automate DMs and Capture Leads 24/7",
      "description": "Discover how an Instagram chatbot helps UK businesses automate DM responses, capture leads, and engage customers at any hour.",
      "image": "https://www.aivized.com/assets/blog/instagram-chatbot-hero.png",
      "author": { "@type": "Person", "name": "AIVized Editorial Team", "url": "https://www.aivized.com/blog" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-01-30",
      "dateModified": "2026-04-20",
      "mainEntityOfPage": "https://www.aivized.com/blog/instagram-chatbot-social-media",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How does an Instagram chatbot capture leads for my UK business?", "acceptedAnswer": { "@type": "Answer", "text": "The chatbot responds to every DM instantly, asks qualifying questions about the customer's needs, and collects their contact details. Leads are sent to you automatically so you can follow up at a time that suits you. No DM goes unanswered, even at midnight." } },
        { "@type": "Question", "name": "Does an Instagram chatbot replace my social media team?", "acceptedAnswer": { "@type": "Answer", "text": "No. It handles the volume work — answering repeated questions, collecting contact details, and responding out of hours. Your team focuses on complex conversations, creative content, and relationships that require a human. The chatbot makes your team more productive, not redundant." } },
        { "@type": "Question", "name": "What kinds of businesses use Instagram chatbots in the UK?", "acceptedAnswer": { "@type": "Answer", "text": "Restaurants taking reservations, beauty salons booking appointments, retailers answering product questions, fitness studios promoting classes, and service businesses qualifying leads. Any business that receives enquiries through Instagram DMs benefits from automation." } },
        { "@type": "Question", "name": "Is an AI chatbot for small business UK effective on Instagram?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Small businesses benefit most because every missed enquiry matters. A managed Instagram chatbot means faster response times and higher conversion rates from DM enquiries — with no technical work required on your part." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Instagram Chatbot UK" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <InstagramChatbotBlog />
    </>
  );
}
