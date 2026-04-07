"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Check, Zap, Crown, Rocket, Shield, Clock, Headphones, Building2, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { MagneticButton } from "./MagneticButton";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const plans = [
  {
    name: "Starter",
    price: "£29",
    priceAmount: 29,
    description: "Perfect for small businesses wanting 24/7 lead capture—we handle everything",
    features: [
      { text: "We install & configure everything", included: true },
      { text: "24/7 monitoring & maintenance", included: true },
      { text: "Up to 500 conversations/mo", included: true },
      { text: "Immediate issue resolution", included: true },
      { text: "Email support", included: true },
      { text: "Analytics dashboard", included: false },
    ],
    popular: false,
    icon: Zap,
  },
  {
    name: "Professional",
    price: "£79",
    priceAmount: 79,
    description: "For growing businesses—full customisation with priority managed support",
    features: [
      { text: "We install & configure everything", included: true },
      { text: "24/7 monitoring & maintenance", included: true },
      { text: "Up to 2,500 conversations/mo", included: true },
      { text: "Lead handling & optimisation", included: true },
      { text: "Ongoing updates & improvements", included: true },
      { text: "Priority support + Analytics", included: true },
    ],
    popular: true,
    icon: Crown,
  },
  {
    name: "Business",
    price: "£149",
    priceAmount: 149,
    description: "Enterprise-grade managed AI with dedicated account manager",
    features: [
      { text: "We install & configure everything", included: true },
      { text: "24/7 monitoring & maintenance", included: true },
      { text: "Unlimited conversations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations & white-label", included: true },
      { text: "SLA guarantee + Premium support", included: true },
    ],
    popular: false,
    icon: Rocket,
  },
];

const guarantees = [
  { icon: Shield, text: "14-day money back" },
  { icon: Clock, text: "24hr setup" },
  { icon: Headphones, text: "UK-based support" },
];

export const PricingSection = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (planName: string, priceAmount: number) => {
    if (!isSignedIn || !user) {
      toast.info("Please sign in to start your free trial");
      router.push("/auth");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("start-trial", {
        body: {
          clerkUserId: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
          fullName: user.fullName || "",
          avatarUrl: user.imageUrl || "",
          planName,
          priceAmount,
        },
      });

      if (error) {
        if (data?.error === "already_subscribed") {
          toast.info("You already have an active plan or trial. Visit your dashboard to manage it.");
          router.push("/dashboard");
          return;
        }
        toast.error("Failed to start trial. Please try again.");
        return;
      }

      if (data?.error === "already_subscribed") {
        toast.info("You already have an active plan or trial. Visit your dashboard to manage it.");
        router.push("/dashboard");
        return;
      }

      toast.success(
        `Your 3-day free trial for the ${planName} plan has started! Head to your dashboard to manage it.`,
        { duration: 6000 }
      );
      router.push("/dashboard");
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-3"
          >
            Transparent Pricing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-5"
          >
            Get Your Managed{" "}
            <span className="text-gradient">AI Chatbot Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Fully managed AI chatbot for UK small business. No technical skills needed. We install everything.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] ${
                  plan.popular
                    ? "border-primary/50 shadow-[var(--shadow-primary)]"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Icon and name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 border border-border flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">{plan.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-7">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-serif font-bold ${plan.popular ? "text-primary" : ""}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">3-day free trial · then + £50 setup</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.included ? "bg-primary/15" : "bg-muted"
                        }`}
                      >
                        <Check
                          className={`w-2.5 h-2.5 ${feature.included ? "text-primary" : "text-muted-foreground/40"}`}
                        />
                      </div>
                      <span className={feature.included ? "" : "text-muted-foreground/50 line-through"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <MagneticButton
                  className={`w-full py-3.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-[hsl(16_60%_40%)]"
                      : "border border-border hover:border-primary/50 hover:bg-secondary"
                  }`}
                  onClick={() => handleSubscribe(plan.name, plan.priceAmount)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Starting Trial...
                    </span>
                  ) : plan.popular ? (
                    "Start 3-Day Free Trial"
                  ) : (
                    "Start Free Trial"
                  )}
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 lg:p-10 hover:border-primary/30 hover:shadow-[var(--shadow-lift)] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/8 border border-border flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2">Enterprise &amp; Custom Solutions</h3>
                <p className="text-muted-foreground max-w-lg">
                  Need something tailored specifically for your business? We build custom AI solutions from scratch.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {[
                "Bespoke AI development",
                "Custom integrations",
                "On-premise deployment",
                "Dedicated development team",
                "Full source code ownership",
                "Ongoing maintenance & support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-primary/12 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <MagneticButton
                className="btn-primary text-sm"
                onClick={() => {
                  window.location.href = "mailto:aivized.com@gmail.com?subject=Custom%20AI%20Development%20Inquiry";
                }}
              >
                <MessageSquare className="w-4 h-4 mr-2 inline-block" />
                Contact Us
              </MagneticButton>
              <p className="text-xs text-muted-foreground">
                Setup charges applied · Get a quote within 24 hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-4 border-t border-border/50"
        >
          {guarantees.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/8 border border-border flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
