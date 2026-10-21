"use client";

import Link from "next/link";
import { CheckCircle2, Crown, Rocket, RefreshCw, Building2, ArrowRight } from "lucide-react";

const models = [
  {
    name: "Project Build",
    label: "One-off",
    icon: Rocket,
    description: "A defined outcome, delivered end to end. Ideal for a new website, AI system, or automation rollout.",
    features: ["Discovery and scoping", "Design and build", "Testing and launch", "Handover and training"],
    popular: false,
  },
  {
    name: "Managed Partnership",
    label: "Monthly",
    icon: RefreshCw,
    description: "We build it and keep improving it. Monitoring, updates, and optimisation are handled for you.",
    features: ["Ongoing support", "Continuous improvement", "Monthly reporting", "Quarterly roadmap review"],
    popular: true,
  },
  {
    name: "Growth Retainer",
    label: "Flexible",
    icon: Crown,
    description: "A monthly allocation of senior time across SEO, GEO, marketing, and automation priorities.",
    features: ["Mixed-service priorities", "Senior strategy input", "Campaign and content delivery", "Transparent reporting"],
    popular: false,
  },
  {
    name: "Enterprise & Custom",
    label: "Bespoke",
    icon: Building2,
    description: "Complex systems, integrations, and software for businesses with specific security or scale needs.",
    features: ["Solution architecture", "Custom integrations", "Security and compliance review", "SLA-backed support"],
    popular: false,
  },
];

export const AITiersSection = () => {
  return (
    <section id="engagement" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="label-tag mb-3">Ways To Work With Us</p>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
            Choose the <span className="text-gradient">Engagement Model</span> That Fits
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need a single project delivered or a long-term partner across several services,
            we scope the work around your goals rather than forcing you into a package.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <div
              key={model.name}
              className={`relative group ${model.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {model.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Crown className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full rounded-xl border bg-card p-6 flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)] ${
                  model.popular ? "border-primary/45 shadow-[var(--shadow-primary)]" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <model.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {model.label}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-semibold mb-2">{model.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{model.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Discuss this model <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
