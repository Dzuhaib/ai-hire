"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { HeroSystemVisual } from "./visuals/LandingVisuals";
import { ArrowRight, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden surface-warm border-b border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full border border-primary/10"
      />

      <div className="container-narrow relative pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-14 xl:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="editorial-rule mb-7">
              AI systems · Automation · Digital growth
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl xl:text-[3.9rem] leading-[1.02] tracking-[-0.03em] max-w-[15ch] text-balance"
            >
              AI Systems, Automation &amp; Digital Growth for{" "}
              <span className="text-primary">UAE Businesses</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              AIVized designs, builds, and manages the AI, automation, and digital systems your
              business runs on.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <Link href="/contact">
                <MagneticButton className="btn-primary group">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Link>

              <button onClick={() => scrollToSection("#services")} className="btn-secondary">
                Explore Our Services
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-7 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span>Dubai · Abu Dhabi · Sharjah · Across the UAE</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none lg:ml-auto"
          >
            <HeroSystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
