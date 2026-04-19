export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | AIVized",
  description: "Read the AIVized privacy policy. We are committed to protecting your personal data.",
  alternates: { canonical: "https://www.aivized.com/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicy />;
}
