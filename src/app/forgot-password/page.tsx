export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import ForgotPasswordPage from "@/views/ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot Password | AI Vized",
  description: "Reset your AI Vized account password.",
  alternates: { canonical: "https://www.aivized.com/forgot-password" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPasswordPage />;
}
