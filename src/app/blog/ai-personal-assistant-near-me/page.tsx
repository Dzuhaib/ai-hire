export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIPersonalAssistantBlog from "@/views/blog/AIPersonalAssistantBlog";

export const metadata: Metadata = {
  title: "AI Personal Assistant Near Me | AI Vized",
  description: "Find an AI personal assistant for your UK business. Managed AI chatbots that work 24/7.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-personal-assistant-near-me" },
};

export default function Page() {
  return <AIPersonalAssistantBlog />;
}
