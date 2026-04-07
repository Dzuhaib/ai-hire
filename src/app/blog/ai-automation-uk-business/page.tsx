export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIAutomationUKBlog from "@/views/blog/AIAutomationUKBlog";

export const metadata: Metadata = {
  title: "AI Automation for UK Business | AI Vized",
  description: "How AI automation is transforming UK small businesses. Reduce costs and capture more leads with managed AI.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-automation-uk-business" },
};

export default function Page() {
  return <AIAutomationUKBlog />;
}
