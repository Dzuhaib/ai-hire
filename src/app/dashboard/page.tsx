export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Dashboard from "@/views/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard | AI Vized - Manage Your AI Employees",
  description:
    "Your AI Vized dashboard. Monitor AI employee performance, manage subscriptions, view billing history, and optimize your customer service automation.",
  alternates: { canonical: "https://www.aivized.com/dashboard" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Dashboard />;
}
