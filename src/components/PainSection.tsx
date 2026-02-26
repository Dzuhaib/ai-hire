import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const painPoints = [
  "Missed leads from your website cost you money every day.",
  "Hiring 24/7 customer support staff is expensive and slow.",
  "Most chatbots feel robotic—they don't capture leads or automate customer inquiries.",
];

export const PainSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-primary/70 mb-6"
          >
            The Problem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-16"
          >
            UK Small Businesses <span className="text-gradient">Lose Leads</span> Every Day
          </motion.h2>

          <div className="space-y-8">
            {painPoints.map((point, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-muted-foreground leading-relaxed"
              >
                {point}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-lg text-muted-foreground"
          >
            That's why businesses across <Link to="/locations" className="text-primary hover:underline">UK cities</Link> trust our{" "}
            <Link to="/industries" className="text-primary hover:underline">managed AI chatbot</Link> to capture leads 24/7.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
