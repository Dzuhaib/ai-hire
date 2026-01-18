import { motion } from "framer-motion";
import { Sparkles, Loader2, Check, Zap, Crown, Rocket, Shield, Clock, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { use2CheckoutPayment } from "@/hooks/use2CheckoutPayment";
import { toast } from "sonner";

const plans = [
  {
    name: "Starter",
    price: "£29",
    priceAmount: 29,
    description: "Perfect for small businesses getting started with AI automation",
    features: [
      { text: "Up to 500 conversations/mo", included: true },
      { text: "Basic customisation", included: true },
      { text: "Email support", included: true },
      { text: "Analytics dashboard", included: false },
      { text: "Priority support", included: false },
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
    description: "For growing businesses that need more power and flexibility",
    features: [
      { text: "Up to 2,500 conversations/mo", included: true },
      { text: "Full customisation", included: true },
      { text: "Priority support", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "API access", included: true },
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
    description: "For established businesses requiring enterprise features",
    features: [
      { text: "Unlimited conversations", included: true },
      { text: "White-label solution", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
      { text: "SLA guarantee", included: true },
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
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "-1.5s" }} />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

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
            Choose the Perfect{" "}
            <span className="text-gradient">Plan for You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            No contracts, no hidden fees. Cancel anytime. Start automating your business today.
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
                        plan.popular ? "Rent Now" : "Rent This Plan"
                      )}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
    </section>
  );
};
