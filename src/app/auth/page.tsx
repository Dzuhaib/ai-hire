export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import AuthPage from "@/views/AuthPage";

export const metadata: Metadata = {
  title: "Sign In - Access Your AI Dashboard",
  description:
    "Sign in or create your AIVized account and get an AI employee working for your UAE business in minutes.",
  alternates: { canonical: "https://www.aivized.com/auth" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AuthPage />;
}
