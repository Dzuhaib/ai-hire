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
    title: "Truly Managed — Not Just a Tool",
    description:
      "Most platforms hand you a login and expect you to build it yourself. We handle installation, training, testing, and monitoring. You never touch a dashboard.",
  },
  {
    icon: Rocket,
    title: "Live Within 24 Hours",
    description:
      "After you subscribe, we set everything up. Most businesses have a fully working chatbot by the next business day, with zero disruption to your site.",
  },
  {
    icon: Zap,
    title: "No Technical Skills Needed",
    description:
      "No code, no developer, no IT team required. Tell us about your business and we do the rest. If you can send an email, you can work with AIVized.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Updates Included",
    description:
      "When your prices, services, or FAQs change, we update the chatbot. There are no extra charges for content updates — it is part of your monthly subscription.",
  },
  {
    icon: CalendarX,
    title: "No Long-Term Contracts",
    description:
      "Monthly rolling subscriptions. No setup penalties, no exit fees, no minimum term. If AIVized stops working for you, you can cancel at any time.",
  },
  {
    icon: Headphones,
    title: "UK-Based Support",
    description:
      "Every client has direct access to the AIVized team via email. We respond within one business day and we are based in the UK, in your timezone.",
  },
];

const statItems = [
  { value: "24hrs", label: "Average setup time" },
  { value: "80%", label: "Enquiries handled automatically" },
  { value: "£0", label: "Cost to update your chatbot" },
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
            There are dozens of chatbot platforms. Here is why business owners across the UK choose a managed service instead of doing it themselves.
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
