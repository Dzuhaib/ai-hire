"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layers3, ArrowRight, Layers, MapPin, Workflow } from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTASection } from "@/components/FinalCTASection";
import IndustryServicesSection from "@/components/IndustryServicesSection";
import { IndustryHubVisual, IndustryVisual } from "@/components/visuals/LandingVisuals";
import { industryVisualVariant } from "@/lib/visualVariants";

import { allIndustries } from "@/data/industryData";

const IndustriesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Layers3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Industry Solutions</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-6">
                AI Automation Services for Every UAE Industry
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Six connected services, scoped around how your industry actually operates: AI Systems, Automations, SEO &amp; GEO, Digital Marketing, Web Development, and Desktop Software Development.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Six connected services
                </span>
                <span className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-primary" />
                  Built around your workflows
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  UAE-based team
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block"
            >
              <IndustryHubVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Industries</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Digital Solutions by <span className="text-gradient">Industry</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIndustries.map((industry, idx) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block h-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  <div className="relative h-full card-premium overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[var(--shadow-lift)]">
                    <div className="relative h-48 overflow-hidden bg-secondary/30 p-3">
                      <IndustryVisual variant={industryVisualVariant(industry.slug)} />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-1 text-xs rounded-md bg-card/90 text-foreground/80 font-medium border border-border/60">
                          {industry.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                          {industry.industry}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{industry.description}</p>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary font-semibold">Six connected services</span> • Scoped delivery
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustryServicesSection
        eyebrow="What We Do"
        title="Six Connected Services, One Roadmap"
        description="Whatever your industry, we can help with AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. Start with the priority that removes the biggest bottleneck, then expand."
      />

      <FinalCTASection />

      <Footer />
    </div>
  );
};

export default IndustriesPage;
