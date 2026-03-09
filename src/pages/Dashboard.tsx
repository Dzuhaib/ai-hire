import { useUser, useClerk, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, CreditCard, Calendar, Settings, LogOut, Crown, Clock, CheckCircle, XCircle, Loader2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MagneticButton } from "@/components/MagneticButton";
import { PageMeta } from "@/components/PageMeta";
import {
  notifyAdminNewSignup,
  notifyUserTrialEnding,
  notifyUserSubscriptionExpiring,
} from "@/lib/emailNotifications";

interface Subscription {
  id: string;
  plan_name: string;
  plan_price: number;
  status: string;
  started_at: string;
  expires_at: string | null;
  cancelled_at: string | null;
  trial_ends_at: string | null;
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

  const notifiedRef = useRef(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase.functions.invoke("get-dashboard-data", {
          body: { clerkUserId: user.id },
        });

        if (error) {
          console.error("Error fetching dashboard data:", error);
          return;
        }

        const sub = data?.subscription || null;
        setSubscription(sub);
        setBillingHistory(data?.billingHistory || []);

        // Send email notifications based on subscription state (once per session)
        if (sub && !notifiedRef.current) {
          notifiedRef.current = true;
          const userEmail = user.primaryEmailAddress?.emailAddress || "";
          const userName = user.fullName || "";

          // Trial ending notification (less than 24 hours remaining)
          if (sub.status === "trial" && sub.trial_ends_at) {
            const hoursLeft = (new Date(sub.trial_ends_at).getTime() - Date.now()) / (1000 * 60 * 60);
            if (hoursLeft > 0 && hoursLeft < 24) {
              notifyUserTrialEnding(userEmail, userName, sub.plan_name, sub.trial_ends_at);
            }
          }

          // Subscription expiring soon (less than 3 days)
          if (sub.status === "active" && sub.expires_at) {
            const daysLeft = (new Date(sub.expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
            if (daysLeft > 0 && daysLeft < 3) {
              notifyUserSubscriptionExpiring(userEmail, userName, sub.plan_name, sub.expires_at);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded && user) {
      fetchDashboardData();
    }
  }, [user, isLoaded]);

  const handleCancelSubscription = async () => {
    if (!subscription || !user) return;

    setCancelling(true);
    try {
      const { error } = await supabase.functions.invoke("cancel-subscription", {
        body: { clerkUserId: user.id, subscriptionId: subscription.id },
      });

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
      case "paid":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "trial":
        return <Clock className="w-4 h-4 text-blue-500" />;
      case "cancelled":
        return <XCircle className="w-4 h-4 text-muted-foreground" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "expired":
        return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      case "pending":
      case "pending_payment":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    if (status === "pending_payment") return "Pending Payment";
    if (status === "pending") return "Pending";
    if (status === "trial") return "Free Trial";
    if (status === "paid") return "Paid";
    if (status === "active") return "Active";
    if (status === "cancelled") return "Cancelled";
    if (status === "expired") return "Expired";
    if (status === "failed") return "Failed";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getTrialTimeRemaining = () => {
    if (!subscription?.trial_ends_at) return "0 days";
    const now = new Date();
    const trialEnd = new Date(subscription.trial_ends_at);
    const diffMs = trialEnd.getTime() - now.getTime();
    if (diffMs <= 0) return "Expired";
    const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""}`;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  };

  return (
    <>
      <SignedIn>
        <PageMeta
          title="Dashboard | AI Vized - Manage Your AI Employees"
          description="Your AI Vized dashboard. Monitor AI employee performance, manage subscriptions, view billing history, and optimize your customer service automation."
          keywords="AI Vized dashboard, AI employee management, chatbot analytics, subscription management, AI performance metrics"
          canonical="https://www.aivized.com/dashboard"
        />
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse" />
                  <Bot className="w-4 h-4 text-primary relative z-10" />
                </div>
                <span className="text-lg font-serif font-semibold tracking-tight text-gradient">aivized</span>
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
                              <span className={`text-sm capitalize ${subscription.status === "pending_payment" ? "text-yellow-500 font-medium" : "text-muted-foreground"}`}>
                                {getStatusLabel(subscription.status)}
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

                        {/* Pending Payment Notice */}
                        {subscription.status === "pending_payment" && (
                          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                            <div className="flex items-start gap-3">
                              <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-medium text-yellow-500 mb-1">Awaiting Payment Confirmation</p>
                                <p className="text-sm text-muted-foreground">
                                  Please complete your payment via WhatsApp. Your plan will be activated once payment is confirmed by our team.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Trial Notice */}
                        {subscription.status === "trial" && (
                          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-start gap-3">
                              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-medium text-primary mb-1">
                                  Free Trial — {getTrialTimeRemaining()} remaining
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Your trial ends on {formatDate(subscription.trial_ends_at)}. Share your website details with us on WhatsApp to get your AI employee set up.
                                </p>
                                <a
                                  href="https://wa.me/923063213951?text=Hi%2C%20I%20just%20started%20a%20free%20trial%20on%20AI%20Vized.%20Here%20are%20my%20website%20details%3A"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                  WhatsApp: +923063213951
                                </a>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {subscription.status === "pending_payment" ? "Requested" : subscription.status === "trial" ? "Trial Started" : "Started"}
                            </p>
                            <p className="font-medium">{formatDate(subscription.started_at)}</p>
                          </div>
                          {subscription.cancelled_at ? (
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Cancelled</p>
                              <p className="font-medium">{formatDate(subscription.cancelled_at)}</p>
                            </div>
                          ) : subscription.status !== "pending_payment" ? (
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Next Billing</p>
                              <p className="font-medium">
                                {formatDate(subscription.expires_at) || "Monthly"}
                              </p>
                            </div>
                          ) : null}
                        </div>

                        {(subscription.status === "active" || subscription.status === "trial") && (
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
                            Rent a Plan
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
                                        : record.status === "trial"
                                        ? "bg-blue-500/10 text-blue-500"
                                        : record.status === "pending"
                                        ? "bg-yellow-500/10 text-yellow-500"
                                        : record.status === "failed"
                                        ? "bg-red-500/10 text-red-500"
                                        : record.status === "expired"
                                        ? "bg-orange-500/10 text-orange-500"
                                        : record.status === "cancelled"
                                        ? "bg-muted text-muted-foreground"
                                        : "bg-red-500/10 text-red-500"
                                    }`}
                                  >
                                    {getStatusIcon(record.status)}
                                    {getStatusLabel(record.status)}
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
