import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { use2CheckoutPayment } from "@/hooks/use2CheckoutPayment";
import { toast } from "sonner";

const plans = [
  {
    name: "Starter",
    price: "£29",
    priceAmount: 29,
    description: "For small businesses getting started",
    features: [
      "Up to 500 conversations/mo",
      "Basic customisation",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "£79",
    priceAmount: 79,
    description: "For growing businesses",
    features: [
      "Up to 2,500 conversations/mo",
      "Full customisation",
      "Priority support",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "£149",
    priceAmount: 149,
    description: "For established businesses",
    features: [
      "Unlimited conversations",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const { initiatePayment, isLoading, isSignedIn } = use2CheckoutPayment();
  const navigate = useNavigate();

  const handleSubscribe = async (planName: string, priceAmount: number) => {
    if (!isSignedIn) {
      toast.info("Please sign in to subscribe");
      navigate("/auth");
      return;
    }
    
    await initiatePayment({
      planName: `RentlizedAI ${planName}`,
      priceAmount,
    });
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-primary mb-6"
          >
            Simple Pricing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4"
          >
            Choose Your Plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            No contracts. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`card-premium relative ${
                plan.popular ? "border-primary/50 pt-12 p-8" : "p-8"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium shadow-lg whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    Best Value
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-serif font-semibold">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                className={`w-full py-4 rounded-lg font-medium text-sm transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "border border-border hover:border-primary/50 hover:bg-secondary"
                }`}
                onClick={() => handleSubscribe(plan.name, plan.priceAmount)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </span>
                ) : (
                  "Rent This AI"
                )}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
