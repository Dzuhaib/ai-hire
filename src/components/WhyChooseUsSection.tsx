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
  { value: "48h", label: "Typical proposal turnaround" },
];

interface WhyChooseUsSectionProps {
  variant?: "homepage" | "about";
}

export const WhyChooseUsSection = ({ variant = "homepage" }: WhyChooseUsSectionProps) => {
  const isAbout = variant === "about";

  return (
    <section
      id={isAbout ? undefined : "why-choose-us"}
      className={`section-padding ${isAbout ? "" : "bg-secondary/20"}`}
    >
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="label-tag mb-4">Why AIVized</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-5">
            Why UK Businesses{" "}
            <span className="text-gradient">Choose AIVized</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plenty of agencies can build one thing. We combine strategy, delivery, and ongoing support
            across the systems your business actually depends on.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-3 gap-4 mb-14 rounded-2xl bg-card border border-border p-6 md:p-8"
        >
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.07 }}
              className="group bg-card border border-border rounded-xl p-7 flex flex-col gap-4 hover:border-primary/35 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/8 border border-border flex items-center justify-center shrink-0">
                <reason.icon className="w-5 h-5 text-primary" />
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
