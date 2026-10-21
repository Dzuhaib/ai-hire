import { motion } from "framer-motion";
import { MessageSquare, FileCheck2, LifeBuoy, Building2 } from "lucide-react";

const commitments = [
  {
    icon: MessageSquare,
    title: "Direct communication",
    description:
      "You speak to the people doing the work, not a call centre or a chain of account managers. Questions get answered by someone who knows your project.",
  },
  {
    icon: FileCheck2,
    title: "Clear scope and pricing",
    description:
      "Every project starts with a written scope, timeline, and price. You know what is included before work begins, and changes are agreed in writing.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    description:
      "We do not disappear after handover. Optional support and managed partnerships keep the work maintained, monitored, and improving.",
  },
];

const businessTypes = [
  "Independent retailers",
  "Professional practices",
  "Hospitality groups",
  "Healthcare clinics",
  "E-commerce brands",
  "B2B service firms",
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-3"
          >
            How We Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            A Partner You Can <span className="text-gradient">Actually Reach</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            We do not publish invented reviews or borrow the names of other businesses. Named client stories
            are shared only with permission. Here is what working with us looks like.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col hover:border-primary/30 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif font-semibold">Businesses we work with</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {businessTypes.map((type) => (
                <span
                  key={type}
                  className="px-3 py-1.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border/60"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
