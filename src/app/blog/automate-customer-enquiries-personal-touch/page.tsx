export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import AutomateEnquiriesBlog from "@/views/blog/AutomateEnquiriesBlog";

export const metadata: Metadata = {
  title: "Automate Customer Enquiries with a Personal Touch | AI Vized",
  description: "How to automate customer enquiries while keeping the personal touch. Managed AI chatbots for UK small businesses.",
  alternates: { canonical: "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch" },
};

export default function Page() {
  return <AutomateEnquiriesBlog />;
}
