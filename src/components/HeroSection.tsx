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
      {/* Hairline top rule — editorial detail */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      {/* Quiet tinted background — no blob, no glow */}
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
          <span className="label-tag">Managed AI Chatbot · UK Small Business · From £29/month</span>
        </div>

        {/* Main heading — Cormorant Garamond at full expression */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl text-balance">
          Your Business{" "}
          <em className="not-italic text-primary">Deserves</em> a{" "}
          24/7 AI&nbsp;Colleague
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
          We install, monitor, and maintain your AI chatbot so you can focus on running your business.
          No technical skills needed. No contracts. No downtime.
        </p>

        <p className="text-sm text-muted-foreground/75 max-w-lg mb-12">
          3-day free trial — then from{" "}
          <Link href="/#pricing" className="text-primary hover:underline">
            £29/month
          </Link>
          . Capturing leads across all{" "}
          <Link href="/locations" className="text-primary hover:underline">
            UK cities
          </Link>
          .
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
          <MagneticButton
            className="btn-primary group"
            onClick={() => scrollToSection("#pricing")}
          >
            Start 3-Day Free Trial
            <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
          </MagneticButton>

          <button
            onClick={() => scrollToSection("#how-it-works")}
            className="btn-secondary"
          >
            See How It Works
          </button>
        </div>

        {/* Trust strip */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "We manage everything",
              "Available 24 hours a day",
              "30% more conversions",
              "GDPR compliant",
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
