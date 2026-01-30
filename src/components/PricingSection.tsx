import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, Check, Zap, Crown, Rocket, Shield, Clock, Headphones, Building2, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { MagneticButton } from "./MagneticButton";
import { PaymentMethodModal } from "./PaymentMethodModal";
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
    gradient: "from-slate-500/20 to-gray-500/20",
    borderGradient: "from-slate-500/30 to-transparent",
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
    gradient: "from-primary/20 to-cyan-500/20",
    borderGradient: "from-primary/50 via-cyan-500/30 to-transparent",
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
    gradient: "from-violet-500/20 to-purple-500/20",
    borderGradient: "from-violet-500/30 to-transparent",
  },
];

const guarantees = [
  { icon: Shield, text: "14-day money back" },
  { icon: Clock, text: "24hr setup" },
  { icon: Headphones, text: "UK-based support" },
];

export const PricingSection = () => {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null);

  const handleSubscribe = (planName: string, priceAmount: number) => {
    if (!isSignedIn) {
      toast.info("Please sign in to subscribe");
      navigate("/auth");
      return;
    }
    
    setSelectedPlan({ name: planName, price: priceAmount });
    setShowPaymentModal(true);
  };

  const handleOnlinePayment = () => {
    // Coming soon - disabled
    toast.info("Online payment is coming soon!");
  };

  const handleWhatsAppPayment = async () => {
    if (!user || !selectedPlan) return;
    
    setIsLoading(true);
    try {
      // Ensure profile exists
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("clerk_user_id")
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

      // Create subscription with pending_payment status
      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + 1);

      const { error: subError } = await supabase.from("subscriptions").insert({
        clerk_user_id: user.id,
        plan_name: `aivized ${selectedPlan.name}`,
        plan_price: selectedPlan.price,
        status: "pending_payment",
        expires_at: expiresAt.toISOString(),
      });

      if (subError) {
        console.error("Subscription error:", subError);
        toast.error("Failed to create subscription. Please try again.");
        return;
      }

      // Close modal
      setShowPaymentModal(false);
      setSelectedPlan(null);

      // Create WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `Hi! I'd like to subscribe to the ${selectedPlan.name} plan (£${selectedPlan.price}/month).\n\nEmail: ${user.primaryEmailAddress?.emailAddress}\nName: ${user.fullName || 'Not provided'}`
      );
      
      // Open WhatsApp
      window.open(`https://wa.me/923063213951?text=${whatsappMessage}`, "_blank");
      
      toast.success(
        "Subscription created! Please complete payment via WhatsApp. Your plan will be activated once payment is confirmed.",
        { duration: 8000 }
      );

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Aura background (no grid/squares) */}
      <div className="absolute inset-0 bg-aura bg-aura-animate" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6"
          >
            Get Your Managed{" "}
            <span className="text-gradient">AI Chatbot Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative group ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold shadow-lg"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <div className="relative h-full">
                {/* Animated gradient border */}
                <div 
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${plan.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${plan.popular ? "opacity-100" : ""}`} 
                />
                
                {/* Popular glow effect */}
                {plan.popular && (
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-50" />
                )}

                {/* Card content */}
                <div className={`relative h-full bg-card/90 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 ${plan.popular ? "border-primary/30" : "border-border/50 group-hover:border-transparent"}`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon and name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary" : "text-foreground/70"}`} />
                      </div>
                      <h3 className="text-xl font-serif font-semibold">{plan.name}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-5xl font-serif font-bold ${plan.popular ? "text-gradient" : ""}`}>
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">+ £50 one-time setup fee</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${feature.included ? "bg-primary/20" : "bg-muted/50"}`}>
                            <Check className={`w-3 h-3 ${feature.included ? "text-primary" : "text-muted-foreground/50"}`} />
                          </div>
                          <span className={feature.included ? "text-foreground/90" : "text-muted-foreground/50 line-through"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <MagneticButton
                      className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        plan.popular
                          ? "text-primary-foreground shadow-lg"
                          : "border border-border hover:border-primary/50 hover:bg-secondary text-foreground"
                      }`}
                      style={plan.popular ? { background: "var(--gradient-primary)" } : {}}
                      onClick={() => handleSubscribe(plan.name, plan.priceAmount)}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        plan.popular ? "Get Started Now" : "Subscribe to This Plan"
                      )}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise / Custom Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 mb-16"
        >
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12 group-hover:border-transparent transition-all duration-500">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Icon & Title */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mx-auto lg:mx-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-2">Enterprise & Custom Solutions</h3>
                  <p className="text-muted-foreground max-w-md">
                    Need something tailored specifically for your business? We build custom AI solutions from scratch.
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  {[
                    "Bespoke AI development",
                    "Custom integrations",
                    "On-premise deployment",
                    "Dedicated development team",
                    "Full source code ownership",
                    "Ongoing maintenance & support",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-amber-500" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <MagneticButton
                    className="px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300"
                    onClick={() => {
                      window.location.href = "mailto:myselfzuhaib@gmail.com?subject=Custom%20AI%20Development%20Inquiry";
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Contact Us
                    </span>
                  </MagneticButton>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Setup charges applied • Get a quote within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-12"
        >
          {guarantees.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Payment Method Modal */}
      <PaymentMethodModal
        isOpen={showPaymentModal}
        onClose={() => {
          setShowPaymentModal(false);
          setSelectedPlan(null);
        }}
        planName={selectedPlan?.name || ""}
        planPrice={selectedPlan?.price || 0}
        onSelectOnlinePayment={handleOnlinePayment}
        onSelectWhatsApp={handleWhatsAppPayment}
        isLoading={isLoading}
      />
    </section>
  );
};
