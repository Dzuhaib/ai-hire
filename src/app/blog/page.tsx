export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import BlogsPage from "@/views/BlogsPage";

export const metadata: Metadata = {
  title: "AI Chatbot Blog | AI Vized - Tips & Guides for UK Businesses",
  description:
    "Expert guides and tips on AI chatbots for UK small businesses. Learn how to capture leads, automate enquiries, and grow your business with AI.",
  alternates: { canonical: "https://www.aivized.com/blog" },
};

export default function Page() {
  return <BlogsPage />;
}
