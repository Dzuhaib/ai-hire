import { motion } from "framer-motion";

const painPoints = [
  "Missed customer messages cost you money.",
  "Hiring staff is expensive and slow.",
  "Most chatbots feel robotic and useless.",
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
            className="text-sm uppercase tracking-[0.2em] text-primary/70 mb-16"
          >
            The Problem
          </motion.p>

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
        </div>
      </div>
    </section>
  );
};
