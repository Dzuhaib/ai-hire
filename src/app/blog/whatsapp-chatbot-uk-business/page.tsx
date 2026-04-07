export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import WhatsAppChatbotBlog from "@/views/blog/WhatsAppChatbotBlog";

export const metadata: Metadata = {
  title: "WhatsApp Chatbot for UK Business | AI Vized",
  description: "How a WhatsApp chatbot can help UK businesses capture leads and provide 24/7 customer support.",
  alternates: { canonical: "https://www.aivized.com/blog/whatsapp-chatbot-uk-business" },
};

export default function Page() {
  return <WhatsAppChatbotBlog />;
}
