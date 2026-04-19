export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import ForgotPasswordPage from "@/views/ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot Password | AIVized",
  description: "Reset your AIVized account password.",
  alternates: { canonical: "https://www.aivized.com/forgot-password" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPasswordPage />;
}
