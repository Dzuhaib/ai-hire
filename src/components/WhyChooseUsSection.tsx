"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Rocket,
  Zap,
  RefreshCw,
  CalendarX,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "We actually do it for you",
    description:
      "Other platforms hand you a login and expect you to build it. We build it, train it, and keep it running. You just share your business details and we get on with it.",
  },
  {
    icon: Rocket,
    title: "Your chatbot goes live the next day",
    description:
      "Most of our clients are up and running within 24 hours of signing up. We do not keep you waiting weeks for a quote or dragging things out with lengthy calls.",
  },
  {
    icon: Zap,
    title: "You do not need to be technical at all",
    description:
      "You genuinely do not need to know anything about code or software. Tell us what your business does and we handle everything from setup to launch.",
  },
  {
    icon: RefreshCw,
    title: "Updates are included in your plan",
    description:
      "When your prices change or you add a new service, just drop us an email and we update the chatbot. It is part of what you pay for every month.",
  },
  {
    icon: CalendarX,
    title: "Leave whenever you want",
    description:
      "We do not tie you into a contract. You pay monthly and you can cancel at any point. We would rather earn your trust than hold you to a commitment.",
  },
  {
    icon: Headphones,
    title: "You speak to a real person",
    description:
      "When you email us, someone on the team reads it and replies. Not an automated response and not a support queue. Usually back to you the same day.",
  },
];

const statItems = [
  { value: "24hrs", label: "Typical setup time" },
  { value: "80%", label: "Enquiries handled automatically" },
  { value: "£0", label: "Charge for content updates" },
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
            Plenty of chatbot tools exist. Most expect you to do all the work yourself. Here is what makes working with us different.
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
