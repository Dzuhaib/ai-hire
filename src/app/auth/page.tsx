export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import AuthPage from "@/views/AuthPage";

export const metadata: Metadata = {
  title: "Sign In | AI Vized - Access Your AI Dashboard",
  description:
    "Sign in or create your AI Vized account. Start your free trial and get an AI employee working for your UK business in minutes.",
  alternates: { canonical: "https://www.aivized.com/auth" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AuthPage />;
}
