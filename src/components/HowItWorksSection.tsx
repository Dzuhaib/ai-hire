import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Subscribe to a Plan",
    description: "Choose the plan that fits your business needs.",
  },
  {
    number: "02",
    title: "Share Your Website Access",
    description: "Provide your website login details securely.",
  },
  {
    number: "03",
    title: "We Install It For You",
    description: "Our team sets up your RentlizedAI within 24 hours.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-card/50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-primary mb-6"
          >
            How It Works
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            Three Simple Steps
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting lines */}
          <div className="hidden md:flex absolute top-8 left-0 right-0 items-center justify-center pointer-events-none">
            <div className="w-full max-w-[calc(100%-4rem)] mx-auto flex">
              <div className="flex-1" />
              <div className="w-[calc(33.333%-2rem)] h-px bg-gradient-to-r from-primary/30 to-primary/10" />
              <div className="w-16" />
              <div className="w-[calc(33.333%-2rem)] h-px bg-gradient-to-r from-primary/30 to-primary/10" />
              <div className="flex-1" />
            </div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="relative text-center md:text-left"
            >
              <div className="text-5xl font-serif text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
