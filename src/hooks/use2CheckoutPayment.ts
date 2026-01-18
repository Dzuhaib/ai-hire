import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PaymentOptions {
  planName: string;
  priceAmount: number;
  customerEmail?: string;
  customerName?: string;
}

export const use2CheckoutPayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, isSignedIn } = useUser();

  const initiatePayment = async (options: PaymentOptions) => {
    setIsLoading(true);
    
    try {
      // Pass user info if signed in
      const paymentData = {
        ...options,
        customerEmail: user?.primaryEmailAddress?.emailAddress || options.customerEmail,
        customerName: user?.fullName || options.customerName,
        clerkUserId: user?.id,
      };

      const { data, error } = await supabase.functions.invoke("create-2checkout-session", {
        body: paymentData,
      });

      if (error) {
        console.error("Payment error:", error);
        toast.error("Failed to initiate payment. Please try again.");
        return null;
      }

      if (data?.checkoutUrl) {
        // Store pending subscription info in sessionStorage for after payment
        if (user?.id) {
          sessionStorage.setItem("pendingSubscription", JSON.stringify({
            clerkUserId: user.id,
            planName: options.planName,
            priceAmount: options.priceAmount,
            orderRef: data.orderRef,
          }));
        }
        
        // Redirect to 2Checkout checkout page
        window.location.href = data.checkoutUrl;
        return data;
      } else {
        toast.error("Failed to create checkout session.");
        return null;
      }
    } catch (err) {
      console.error("Payment error:", err);
      toast.error("An error occurred. Please try again.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { initiatePayment, isLoading, isSignedIn };
};
