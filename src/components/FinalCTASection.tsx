"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";
import { ProjectBriefVisual } from "./visuals/LandingVisuals";
import { ArrowRight, Check, Mail } from "lucide-react";

const assurances = ["Free consultation", "Clear recommendation", "No obligation"];

export const FinalCTASection = () => {
  return (
    <section className="pb-10 md:pb-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-foreground text-background shadow-[var(--shadow-frame)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-background/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-background/[0.06]"
          />

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[1.05fr_0.75fr] lg:gap-16 lg:p-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-5 flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/[0.06] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-background/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(16_72%_66%)]" />
                  Ready to start
                </span>
                <span className="text-[0.62rem] uppercase tracking-[0.16em] text-background/40">
                  No obligation
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-5 max-w-xl font-serif text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl"
              >
                Let us Build the Systems Your Business Deserves
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-7 max-w-lg text-base leading-relaxed text-background/65 md:text-lg"
              >
                Tell us what is slowing you down. We will tell you which of our services will fix it,
                what it will take, and where to start.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              >
                <Link href="/contact">
                  <MagneticButton className="btn-primary group">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </Link>
                <a
                  href="mailto:info@aivized.com"
                  className="inline-flex items-center gap-2 px-1 py-2 text-sm text-background/60 transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4" />
                  Email us instead
                </a>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
              >
                {assurances.map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-background/55">
                    <Check className="h-3.5 w-3.5 text-[hsl(16_72%_66%)]" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-7 text-xs text-background/40"
              >
                Serving businesses in{" "}
                <Link href="/locations/dubai" className="text-background/70 underline underline-offset-4 hover:text-background">
                  Dubai
                </Link>
                ,{" "}
                <Link href="/locations/abu-dhabi" className="text-background/70 underline underline-offset-4 hover:text-background">
                  Abu Dhabi
                </Link>
                ,{" "}
                <Link href="/locations/sharjah" className="text-background/70 underline underline-offset-4 hover:text-background">
                  Sharjah
                </Link>
                , and{" "}
                <Link href="/locations" className="text-background/70 underline underline-offset-4 hover:text-background">
                  more UAE cities
                </Link>
                .
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="lg:self-center"
            >
              <ProjectBriefVisual />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
