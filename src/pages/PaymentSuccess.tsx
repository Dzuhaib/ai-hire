import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/integrations/supabase/client";
import { MagneticButton } from "@/components/MagneticButton";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
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
      
      // Wait for user to be loaded if we have clerk user id
      if (pending.clerkUserId && !isLoaded) {
        return;
      }

      // Verify user matches
      if (pending.clerkUserId && user?.id !== pending.clerkUserId) {
        setProcessing(false);
        return;
      }

      try {
        // Ensure profile exists
        const { data: existingProfile } = await supabase
          .from("profiles")
          .select("clerk_user_id")
          .eq("clerk_user_id", pending.clerkUserId)
          .maybeSingle();

        if (!existingProfile && user) {
          await supabase.from("profiles").insert({
            clerk_user_id: user.id,
            email: user.primaryEmailAddress?.emailAddress || "",
            full_name: user.fullName || "",
            avatar_url: user.imageUrl || "",
          });
        }

        // Create subscription
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + 1);

        const { error: subError } = await supabase.from("subscriptions").insert({
          clerk_user_id: pending.clerkUserId,
          plan_name: pending.planName,
          plan_price: pending.priceAmount,
          status: "active",
          twocheckout_order_ref: orderRef || pending.orderRef,
          expires_at: expiresAt.toISOString(),
        });

        if (subError) {
          console.error("Error creating subscription:", subError);
        } else {
          // Create billing history record
          await supabase.from("billing_history").insert({
            clerk_user_id: pending.clerkUserId,
            amount: pending.priceAmount,
            currency: "GBP",
            description: `${pending.planName} - Monthly subscription`,
            status: "paid",
            twocheckout_ref: orderRef || pending.orderRef,
            paid_at: new Date().toISOString(),
          });

          setSubscriptionCreated(true);
        }

        // Clear pending data
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
                <Link to="/dashboard">
                  <MagneticButton className="btn-primary px-8 py-4 rounded-lg inline-flex items-center gap-2">
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </Link>
              )}
              <Link to="/">
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
