import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const plans = [
  {
    name: "Starter",
    price: "£99",
    description: "For small businesses getting started",
    features: [
      "1 AI Employee",
      "Up to 500 conversations/mo",
      "Basic customisation",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "£249",
    description: "For growing businesses",
    features: [
      "3 AI Employees",
      "Up to 2,500 conversations/mo",
      "Full customisation",
      "Priority support",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "£499",
    description: "For established businesses",
    features: [
      "Unlimited AI Employees",
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
              className={`card-premium p-8 relative ${
                plan.popular ? "border-primary/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-medium">
                    Most Popular
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
              >
                Rent This AI
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
