export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import PaymentSuccess from "@/views/PaymentSuccess";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Your payment was successful. Welcome to AIVized.",
  alternates: { canonical: "https://www.aivized.com/payment-success" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PaymentSuccess />;
}
