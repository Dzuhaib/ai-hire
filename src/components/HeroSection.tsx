"use client";

import Link from "next/link";
import { MagneticButton } from "./MagneticButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Hairline top rule - editorial detail */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      {/* Quiet tinted background - no blob, no glow */}
      <div className="absolute inset-0 bg-background" />
      {/* Very subtle warm tint in the upper half */}
      <div
        className="absolute top-0 left-0 right-0 h-2/3 pointer-events-none"
        style={{ background: "hsl(16 60% 46% / 0.025)" }}
      />

      <div className="container-narrow relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="h-px w-8 bg-primary" />
          <span className="label-tag">AI Systems, Automation & Digital Growth - UK</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl text-balance">
          We Build{" "}
          <em className="not-italic text-primary">AI Systems</em>{" "}
          That Grow Your Business
        </h1>

        {/* Subheading */}
        <p className="lead text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
          AIVized is a UK AI and digital agency. We design, build, and manage AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software - so your business runs smarter and grows faster.
        </p>

        <p className="text-sm text-muted-foreground/75 max-w-xl mb-12">
          One partner for strategy, build, and ongoing support. Serving businesses across{" "}
          <Link href="/locations" className="text-primary hover:underline">
            the UK
          </Link>
          .
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
          <Link href="/contact">
            <MagneticButton className="btn-primary group">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </Link>

          <button
            onClick={() => scrollToSection("#services")}
            className="btn-secondary"
          >
            Explore Our Services
          </button>
        </div>

        {/* Trust strip */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Strategy, build & support",
              "Direct access to specialists",
              "Fixed-scope projects",
              "Security-conscious delivery",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
