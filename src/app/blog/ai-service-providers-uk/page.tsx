export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AIServiceProvidersBlog from "@/views/blog/AIServiceProvidersBlog";

export const metadata: Metadata = {
  title: "AI Service Providers UK | AI Vized",
  description: "Top AI service providers for UK businesses. Compare managed AI chatbot services and choose the best for your business.",
  alternates: { canonical: "https://www.aivized.com/blog/ai-service-providers-uk" },
};

export default function Page() {
  return <AIServiceProvidersBlog />;
}
