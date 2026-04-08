export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndexPage, { homepageSchema } from "@/views/Index";

export const metadata: Metadata = {
  title: "Managed AI Chatbot for Small Business UK | AIVized From £29/mo",
  description:
    "Get a fully managed AI chatbot for your UK small business from £29/month. 24/7 lead generation, we install everything—no technical skills needed.",
  keywords:
    "managed AI chatbot service, AI chatbot for small business UK, lead generation chatbot UK, 24/7 customer support chatbot, affordable AI chatbot, fully managed chatbot, AIVized",
  alternates: { canonical: "https://www.aivized.com/" },
  openGraph: {
    url: "https://www.aivized.com/",
    title: "Managed AI Chatbot for Small Business UK | AIVized",
    description:
      "Get a fully managed AI chatbot from £29/month. 24/7 lead generation. We install everything—no technical skills needed.",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <IndexPage />
    </>
  );
}
