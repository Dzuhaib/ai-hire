import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import painHero from "@/assets/pain-section-hero.png";

const painPoints = [
  "Missed leads from your website cost you money every day.",
  "Hiring 24/7 customer support staff is expensive and slow.",
  "Most chatbots feel robotic—they don't capture leads or automate customer inquiries.",
];

export const PainSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-destructive/15 via-transparent to-primary/15 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <img
                  src={painHero}
                  alt="Business owner frustrated by missed leads and unanswered customer messages"
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-sm border border-destructive/20">
                  <span className="text-sm font-medium text-destructive">⚠ 67% of leads lost after hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
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
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-10"
            >
              UK Small Businesses <span className="text-gradient">Lose Leads</span> Every Day
            </motion.h2>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed"
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
              className="mt-8 text-lg text-muted-foreground"
            >
              That's why businesses across <Link to="/locations" className="text-primary hover:underline">UK cities</Link> trust our{" "}
              <Link to="/industries" className="text-primary hover:underline">managed AI chatbot</Link> to capture leads 24/7.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
