import { supabase } from "@/integrations/supabase/client";

export const notifyUserTrialEnding = async (clerkUserId: string) => {
  await supabase.functions.invoke("send-notification", {
    body: { type: "trial_ending", clerkUserId },
  });
};

export const notifyUserSubscriptionExpiring = async (clerkUserId: string) => {
  await supabase.functions.invoke("send-notification", {
    body: { type: "subscription_expiring", clerkUserId },
  });
};
