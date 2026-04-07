export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotGuideBlog from "@/views/blog/AIChatbotGuideBlog";

export const metadata: Metadata = {
  title: "AI Chatbot for Small Business UK Guide | AI Vized",
  description: "The complete guide to AI chatbots for UK small businesses. Everything you need to know about managed AI chatbot services.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-chatbot-small-business-uk-guide" },
};

export default function Page() {
  return <AIChatbotGuideBlog />;
}
