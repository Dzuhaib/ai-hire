export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import TermsOfService from "@/views/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service | AIVized",
  description: "Read the AIVized terms of service and usage agreement.",
  alternates: { canonical: "https://www.aivized.com/terms-of-service" },
};

export default function Page() {
  return <TermsOfService />;
}
