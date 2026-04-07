"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { MagneticButton } from "@/components/MagneticButton";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get("refno") || searchParams.get("order-ext-ref");
  const { user, isLoaded } = useUser();
  const [processing, setProcessing] = useState(true);
  const [subscriptionCreated, setSubscriptionCreated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const createSubscription = async () => {
      // Get pending subscription from sessionStorage
      const pendingData = sessionStorage.getItem("pendingSubscription");

      if (!pendingData) {
        setProcessing(false);
        return;
      }

      const pending = JSON.parse(pendingData);

      // Wait for Clerk to finish loading
      if (!isLoaded) return;

      // Verify the signed-in user matches the pending session
      if (pending.clerkUserId && user?.id !== pending.clerkUserId) {
        setProcessing(false);
        return;
      }

      try {
        // Delegate subscription creation to the server-side API route
        const res = await fetch("/api/confirm-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clerkUserId: pending.clerkUserId,
            planName: pending.planName,
            priceAmount: pending.priceAmount,
            orderRef: orderRef || pending.orderRef || null,
          }),
        });

        if (res.ok) {
          setSubscriptionCreated(true);
        }

        // Clear pending data regardless of outcome
        sessionStorage.removeItem("pendingSubscription");
      } catch (error) {
        console.error("Error processing subscription:", error);
      } finally {
        setProcessing(false);
      }
    };

    createSubscription();
  }, [user, isLoaded, orderRef]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {processing ? (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </motion.div>
            <h1 className="text-2xl font-serif font-semibold mb-4">
              Processing your subscription...
            </h1>
          </>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-serif font-semibold mb-4"
            >
              Payment Successful!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-8"
            >
              Thank you for subscribing to aivized. Your AI assistant is now ready to transform your customer service.
            </motion.p>

            {orderRef && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-sm text-muted-foreground mb-8"
              >
                Order Reference: <span className="font-mono text-foreground">{orderRef}</span>
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {user && subscriptionCreated && (
                <Link href="/dashboard">
                  <MagneticButton className="btn-primary px-8 py-4 rounded-lg inline-flex items-center gap-2">
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </Link>
              )}
              <Link href="/">
                <MagneticButton className="px-8 py-4 rounded-lg border border-border hover:border-primary/50 inline-flex items-center gap-2">
                  Return Home
                </MagneticButton>
              </Link>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
