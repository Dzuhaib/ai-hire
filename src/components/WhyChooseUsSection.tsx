"use client";

import { motion } from "framer-motion";
import {
  Compass,
  UserCheck,
  Network,
  FileCheck,
  KeyRound,
  Headphones,
} from "lucide-react";
import { SupportVisual } from "./visuals/LandingVisuals";

const reasons = [
  {
    icon: Compass,
    title: "Strategy before build",
    description:
      "We start with the commercial problem, not a tool we want to sell you. You get a clear recommendation and the reasoning behind it before any work begins.",
  },
  {
    icon: UserCheck,
    title: "Senior people on the work",
    description:
      "You work directly with the people designing and building your systems. No layers of account managers, and no handing your project to an inexperienced junior.",
  },
  {
    icon: Network,
    title: "One connected roadmap",
    description:
      "Because we cover AI, automation, SEO, marketing, web, and software, we can connect the pieces. You avoid the gaps that appear when five suppliers work in isolation.",
  },
  {
    icon: FileCheck,
    title: "Clear scope and pricing",
    description:
      "Every project starts with a written scope, timeline, and price. You know what is included, what is not, and when you will see the result.",
  },
  {
    icon: KeyRound,
    title: "You own what we build",
    description:
      "Your website, code, accounts, and data stay yours. We set things up so you are never locked in or dependent on us to keep operating.",
  },
  {
    icon: Headphones,
    title: "Support after launch",
    description:
      "A launch is the beginning, not the end. We monitor, maintain, and improve the work so it keeps performing as your business changes.",
  },
];

const statItems = [
  { value: "6", label: "Specialist services in one team" },
  { value: "1", label: "Accountable partner" },
  { value: "Written", label: "Scope and pricing before work starts" },
];

interface WhyChooseUsSectionProps {
  variant?: "homepage" | "about";
}

export const WhyChooseUsSection = ({ variant = "homepage" }: WhyChooseUsSectionProps) => {
  const isAbout = variant === "about";

  return (
    <section
      id={isAbout ? undefined : "why-choose-us"}
      className="section-padding"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_0.78fr] gap-12 lg:gap-16 items-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="editorial-rule mb-5">Why AIVized</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-5 leading-tight">
              Why UAE Businesses{" "}
              <span className="text-primary">Choose AIVized</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Plenty of agencies can build one thing. We combine strategy, delivery, and ongoing support
              across the systems your business actually depends on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <SupportVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-3 border-y border-border/70 divide-x divide-border/70 py-7 md:py-8 mb-12"
        >
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center px-2">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 + index * 0.06 }}
              className="group rounded-xl border border-border bg-card p-7 flex flex-col gap-4 transition-all duration-300 hover:border-primary/35 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-warm">
                  <reason.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-serif text-[0.68rem] font-semibold tracking-[0.14em] text-muted-foreground/60 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
