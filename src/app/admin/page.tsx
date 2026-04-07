export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import AdminDashboard from "@/views/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | AI Vized",
  description: "AI Vized admin dashboard.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminDashboard />;
}
