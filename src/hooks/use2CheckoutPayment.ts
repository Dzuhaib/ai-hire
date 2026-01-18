import { useState } from "react";
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

  const initiatePayment = async (options: PaymentOptions) => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("create-2checkout-session", {
        body: options,
      });

      if (error) {
        console.error("Payment error:", error);
        toast.error("Failed to initiate payment. Please try again.");
        return null;
      }

      if (data?.checkoutUrl) {
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

  return { initiatePayment, isLoading };
};
