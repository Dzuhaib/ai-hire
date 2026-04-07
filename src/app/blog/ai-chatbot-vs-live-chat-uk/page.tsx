export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIChatbotVsLiveChatBlog from "@/views/blog/AIChatbotVsLiveChatBlog";

export const metadata: Metadata = {
  title: "AI Chatbot vs Live Chat UK | AI Vized",
  description: "AI chatbot vs live chat for UK businesses. Compare costs, performance and which is better for your business.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk" },
};

export default function Page() {
  return <AIChatbotVsLiveChatBlog />;
}
