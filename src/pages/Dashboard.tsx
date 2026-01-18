import { useUser, useClerk, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot, CreditCard, Calendar, Settings, LogOut, Crown, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MagneticButton } from "@/components/MagneticButton";

interface Subscription {
  id: string;
  plan_name: string;
  plan_price: number;
  status: string;
  started_at: string;
  expires_at: string | null;
  cancelled_at: string | null;
}

interface BillingRecord {
  id: string;
  amount: number;
  currency: string;
  description: string;
  status: string;
  paid_at: string | null;
  created_at: string;
}

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [billingHistory, setBillingHistory] = useState<BillingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    const syncUserAndFetchData = async () => {
      if (!user) return;

      try {
        // Sync user profile
        const { data: existingProfile } = await supabase
          .from("profiles")
          .select("*")
          .eq("clerk_user_id", user.id)
          .maybeSingle();

        if (!existingProfile) {
          await supabase.from("profiles").insert({
            clerk_user_id: user.id,
            email: user.primaryEmailAddress?.emailAddress || "",
            full_name: user.fullName || "",
            avatar_url: user.imageUrl || "",
          });
        }

        // Fetch subscription
        const { data: subData } = await supabase
          .from("subscriptions")
          .select("*")
          .eq("clerk_user_id", user.id)
          .eq("status", "active")
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        setSubscription(subData);

        // Fetch billing history
        const { data: billingData } = await supabase
          .from("billing_history")
          .select("*")
          .eq("clerk_user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(10);

        setBillingHistory(billingData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded && user) {
      syncUserAndFetchData();
    }
  }, [user, isLoaded]);

  const handleCancelSubscription = async () => {
    if (!subscription) return;

    setCancelling(true);
    try {
      const { error } = await supabase
        .from("subscriptions")
        .update({
          status: "cancelled",
          cancelled_at: new Date().toISOString(),
        })
        .eq("id", subscription.id);

      if (error) throw error;

      setSubscription({ ...subscription, status: "cancelled", cancelled_at: new Date().toISOString() });
      toast.success("Subscription cancelled successfully");
    } catch (error) {
      console.error("Error cancelling subscription:", error);
      toast.error("Failed to cancel subscription");
    } finally {
      setCancelling(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "cancelled":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse" />
                  <Bot className="w-4 h-4 text-primary relative z-10" />
                </div>
                <span className="text-lg font-serif font-semibold tracking-tight">
                  <span className="text-gradient">Rentlized</span>
                  <span className="text-foreground">AI</span>
                </span>
              </Link>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {user?.imageUrl && (
                    <img
                      src={user.imageUrl}
                      alt={user.fullName || "User"}
                      className="w-8 h-8 rounded-full border border-border"
                    />
                  )}
                  <span className="text-sm font-medium hidden sm:block">
                    {user?.fullName || user?.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  title="Sign out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-serif font-semibold mb-2">Dashboard</h1>
              <p className="text-muted-foreground mb-8">Manage your subscription and billing</p>

              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Subscription Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2 card-premium p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Crown className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-serif font-semibold">Current Plan</h2>
                    </div>

                    {subscription ? (
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-serif font-semibold mb-1">
                              {subscription.plan_name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(subscription.status)}
                              <span className="text-sm capitalize text-muted-foreground">
                                {subscription.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-serif font-semibold">
                              £{subscription.plan_price}
                            </p>
                            <p className="text-sm text-muted-foreground">/month</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Started</p>
                            <p className="font-medium">{formatDate(subscription.started_at)}</p>
                          </div>
                          {subscription.cancelled_at ? (
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Cancelled</p>
                              <p className="font-medium">{formatDate(subscription.cancelled_at)}</p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Next Billing</p>
                              <p className="font-medium">
                                {formatDate(subscription.expires_at) || "Monthly"}
                              </p>
                            </div>
                          )}
                        </div>

                        {subscription.status === "active" && (
                          <div className="pt-4 border-t border-border">
                            <button
                              onClick={handleCancelSubscription}
                              disabled={cancelling}
                              className="text-sm text-red-500 hover:text-red-400 transition-colors disabled:opacity-50"
                            >
                              {cancelling ? "Cancelling..." : "Cancel Subscription"}
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground mb-4">
                          You don't have an active subscription
                        </p>
                        <Link to="/#pricing">
                          <MagneticButton className="btn-primary px-6 py-3 rounded-lg">
                            View Plans
                          </MagneticButton>
                        </Link>
                      </div>
                    )}
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card-premium p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Settings className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-serif font-semibold">Quick Actions</h2>
                    </div>

                    <div className="space-y-3">
                      <Link
                        to="/#pricing"
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Change Plan</span>
                      </Link>
                      <Link
                        to="/"
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <Bot className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Back to Home</span>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Billing History */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-3 card-premium p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-serif font-semibold">Billing History</h2>
                    </div>

                    {billingHistory.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                                Date
                              </th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                                Description
                              </th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                                Status
                              </th>
                              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {billingHistory.map((record) => (
                              <tr key={record.id} className="border-b border-border/50">
                                <td className="py-3 px-4 text-sm">
                                  {formatDate(record.paid_at || record.created_at)}
                                </td>
                                <td className="py-3 px-4 text-sm">{record.description}</td>
                                <td className="py-3 px-4">
                                  <span
                                    className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full capitalize ${
                                      record.status === "paid"
                                        ? "bg-green-500/10 text-green-500"
                                        : record.status === "pending"
                                        ? "bg-yellow-500/10 text-yellow-500"
                                        : "bg-red-500/10 text-red-500"
                                    }`}
                                  >
                                    {record.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-right font-medium">
                                  {record.currency === "GBP" ? "£" : record.currency}
                                  {record.amount.toFixed(2)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        No billing history yet
                      </p>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Dashboard;
