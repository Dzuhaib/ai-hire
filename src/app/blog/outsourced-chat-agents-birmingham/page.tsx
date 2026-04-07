export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import OutsourcedChatAgentsBlog from "@/views/blog/OutsourcedChatAgentsBlog";

export const metadata: Metadata = {
  title: "Outsourced Chat Agents Birmingham | AI Vized",
  description: "Why Birmingham businesses are switching from outsourced chat agents to managed AI chatbots.",
  alternates: { canonical: "https://www.aivized.com/blog/outsourced-chat-agents-birmingham" },
};

export default function Page() {
  return <OutsourcedChatAgentsBlog />;
}
