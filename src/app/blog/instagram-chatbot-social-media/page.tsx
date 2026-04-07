export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import InstagramChatbotBlog from "@/views/blog/InstagramChatbotBlog";

export const metadata: Metadata = {
  title: "Instagram Chatbot for Social Media | AI Vized",
  description: "How Instagram chatbots help UK businesses engage customers on social media 24/7.",
  alternates: { canonical: "https://www.aivized.com/blog/instagram-chatbot-social-media" },
};

export default function Page() {
  return <InstagramChatbotBlog />;
}
