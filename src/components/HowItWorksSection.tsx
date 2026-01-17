import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Industry",
    description: "Select from restaurants, real estate, or e-commerce.",
  },
  {
    number: "02",
    title: "Rent Your AI Employee",
    description: "Pick a plan that fits your business needs.",
  },
  {
    number: "03",
    title: "Go Live in Minutes",
    description: "Deploy instantly. No developers needed.",
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

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
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
