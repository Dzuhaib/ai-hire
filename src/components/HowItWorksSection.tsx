import { motion } from "framer-motion";
import { CreditCard, Share2, Rocket, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Subscribe to a Plan",
    description: "Choose the plan that fits your business needs. No long-term contracts, cancel anytime.",
    icon: CreditCard,
    gradient: "from-primary/20 to-cyan-500/20",
    iconColor: "text-primary",
    borderGradient: "from-primary/50 via-cyan-500/30 to-transparent",
  },
  {
    number: "02",
    title: "Share Your Website Access",
    description: "Securely provide your website login details. We use bank-level encryption.",
    icon: Share2,
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
    borderGradient: "from-cyan-500/50 via-teal-500/30 to-transparent",
  },
  {
    number: "03",
    title: "We Install It For You",
    description: "Our team sets up your aivized within 24 hours. No technical knowledge required.",
    icon: Rocket,
    gradient: "from-teal-500/20 to-emerald-500/20",
    iconColor: "text-teal-400",
    borderGradient: "from-teal-500/50 via-emerald-500/30 to-transparent",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Aura background (no grid/squares) */}
      <div className="absolute inset-0 bg-aura bg-aura-animate" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6"
          >
            Get Started in{" "}
            <span className="text-gradient">Three Simple Steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We've made it incredibly easy to get your AI assistant up and running. 
            No technical knowledge required.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-border to-transparent origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full">
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${step.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Card content */}
                  <div className="relative h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 group-hover:border-transparent transition-colors duration-500">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Step number badge */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} border border-border/50 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                        >
                          <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                        </motion.div>
                        
                        <span className="text-6xl font-serif font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-foreground transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors">
                        {step.description}
                      </p>

                      {/* Arrow indicator */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 translate-x-full z-20">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                            className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shadow-lg"
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 32 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="w-px bg-gradient-to-b from-border to-transparent"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border/50">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs text-primary font-medium">✓</span>
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">500+</span> businesses already automated
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
