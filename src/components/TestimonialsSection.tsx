import { motion } from "framer-motion";
import { MessageSquare, FileCheck2, LifeBuoy, Building2 } from "lucide-react";

const commitments = [
  {
    icon: MessageSquare,
    title: "Direct communication",
    description:
      "You speak to the people doing the work, not a call centre or a chain of account managers. Questions get answered by someone who knows your project.",
    meta: "Direct line",
  },
  {
    icon: FileCheck2,
    title: "Clear scope and pricing",
    description:
      "Every project starts with a written scope, timeline, and price. You know what is included before work begins, and changes are agreed in writing.",
    meta: "Written upfront",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    description:
      "We do not disappear after handover. Optional support and managed partnerships keep the work maintained, monitored, and improving.",
    meta: "Ongoing cover",
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
    <section className="section-padding surface-warm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-8 lg:gap-16 items-end mb-12 md:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="editorial-rule mb-5"
            >
              How we work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight max-w-2xl"
            >
              A Partner You Can <span className="text-primary">Actually Reach</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed lg:pb-1"
          >
            We do not publish invented reviews or borrow the names of other businesses. Named client
            stories are shared only with permission. Here is what working with us looks like.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
              className="flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/35 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-warm">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-serif text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground/60 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
              <div className="mt-auto flex items-center gap-2 border-t border-border/60 pt-3 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item.meta}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 rounded-xl border border-border bg-card px-6 py-5 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-2.5 shrink-0">
            <Building2 className="w-4 h-4 text-primary" />
            <h3 className="font-serif text-sm font-semibold">Businesses we work with</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:ml-auto">
            {businessTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-border/70 bg-surface-warm px-2.5 py-1 text-[0.65rem] text-muted-foreground"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
