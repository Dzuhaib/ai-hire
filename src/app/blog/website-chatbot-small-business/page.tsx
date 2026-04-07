export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WebsiteChatbotBlog from "@/views/blog/WebsiteChatbotBlog";

export const metadata: Metadata = {
  title: "Website Chatbot for Small Business | AI Vized",
  description: "Why every UK small business needs a website chatbot. Capture leads 24/7 with an AI chatbot.",
  alternates: { canonical: "https://www.aivized.com/blog/website-chatbot-small-business" },
};

export default function Page() {
  return <WebsiteChatbotBlog />;
}
