import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { engagementExamples } from "@/data/caseStudiesData";
import { EngagementVisual } from "./visuals/LandingVisuals";

const examples = engagementExamples.slice(0, 3);
const visuals = ["retail", "consulting", "hospitality"] as const;

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_0.65fr] gap-8 lg:gap-16 items-end mb-12 md:mb-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight max-w-2xl"
            >
              How We Approach <span className="text-primary">Common Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground leading-relaxed lg:pb-1"
          >
            Client names and specific performance figures are withheld. These are illustrative
            engagements showing the types of businesses we work with, the problems we see, and how we
            approach each brief.
          </motion.p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {examples.map((example, index) => (
            <motion.article
              key={example.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div
                  className={`flex items-center bg-surface-warm p-5 md:p-7 lg:p-8 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="w-full">
                    <EngagementVisual variant={visuals[index]} />
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-9">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="font-serif text-[0.68rem] font-semibold tracking-[0.14em] text-primary/70 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/15">
                      {example.industry}
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground bg-surface-warm px-2.5 py-1 rounded-full">
                      {example.location}
                    </span>
                  </div>

                  <p className="mb-1.5 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {example.businessType}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-5 leading-tight">
                    {example.title}
                  </h3>

                  <div className="grid gap-4 mb-6 md:grid-cols-2 md:gap-6">
                    <div>
                      <h4 className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-destructive/80 mb-2">
                        The challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{example.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary mb-2">
                        Our approach
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{example.approach}</p>
                    </div>
                  </div>

                  <div className="border-t border-border/60 pt-5">
                    <h4 className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/70 mb-3">
                      What the engagement included
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                      {example.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {example.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="rounded-full border border-border bg-surface-warm px-2.5 py-1 text-[0.62rem] text-muted-foreground hover:border-primary/35 hover:text-primary transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 border-t border-border/70 pt-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View more example engagements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
