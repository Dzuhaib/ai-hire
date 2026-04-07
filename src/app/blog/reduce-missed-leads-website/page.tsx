export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import ReduceMissedLeadsBlog from "@/views/blog/ReduceMissedLeadsBlog";

export const metadata: Metadata = {
  title: "Reduce Missed Leads from Your Website | AI Vized",
  description: "How to stop losing leads from your website with a managed AI chatbot. 24/7 lead capture for UK businesses.",
  alternates: { canonical: "https://www.aivized.com/blog/reduce-missed-leads-website" },
};

export default function Page() {
  return <ReduceMissedLeadsBlog />;
}
