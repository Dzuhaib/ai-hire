"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { engagementExamples } from "@/data/caseStudiesData";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Example Engagements</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              How We Approach AI, Automation &amp; Digital Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              These examples show the types of businesses we work with and how we structure engagements.
              They are illustrative: client names and specific performance figures are withheld.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-sm">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </Link>
              <Link href="/services" className="btn-secondary text-sm">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Honesty note */}
      <section className="pt-12 pb-4">
        <div className="container-narrow">
          <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border max-w-3xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not publish client names, quotes, or performance metrics without written permission.
              The projects below describe common challenges and our recommended approach; they are not
              claims of specific client results.
            </p>
          </div>
        </div>
      </section>

      {/* All Example Engagements */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {engagementExamples.map((example, idx) => (
              <motion.article
                key={example.slug}
                id={example.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="card-premium p-6 flex flex-col scroll-mt-28"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {example.industry}
                  </span>
                  <span className="text-sm text-muted-foreground">{example.location}</span>
                  <span className="text-sm text-muted-foreground">· {example.businessType}</span>
                </div>
                <h2 className="font-serif font-semibold text-xl mb-4">{example.title}</h2>

                <div className="space-y-4 mb-5">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-destructive mb-1">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{example.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Our Approach
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{example.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      What the engagement included
                    </h3>
                    <ul className="space-y-1.5">
                      {example.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Services involved
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {example.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground border border-border/60 hover:text-primary hover:border-primary/40 transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-secondary/10 p-8 rounded-xl border border-border/50 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Have a Similar Challenge?
            </h2>
            <p className="text-muted-foreground mb-6">
              Tell us what is slowing your business down. We will recommend the right mix of AI, automation,
              search, marketing, and software, and give you a clear next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-block text-center">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="btn-outline inline-block text-center">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
