"use client";

import Image from 'next/image';
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Layers3, ArrowRight, Bot, Users, Clock, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { allIndustries } from "@/data/industryData";

const aiRestaurantHero = "/assets/industries/ai-restaurant-hero.png";
const aiRealEstateHero = "/assets/industries/ai-realestate-hero.png";
const aiEcommerceHero = "/assets/industries/ai-ecommerce-hero.png";
const aiHealthcareHero = "/assets/industries/ai-healthcare-hero.png";
const aiLegalHero = "/assets/industries/ai-legal-hero.png";
const aiFitnessHero = "/assets/industries/ai-fitness-hero.png";
const aiTravelHero = "/assets/industries/ai-travel-hero.png";

const IndustriesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const industryImages = useMemo<Record<string, string>>(
    () => ({
      restaurants: aiRestaurantHero,
      "real-estate": aiRealEstateHero,
      ecommerce: aiEcommerceHero,
      healthcare: aiHealthcareHero,
      legal: aiLegalHero,
      fitness: aiFitnessHero,
      travel: aiTravelHero,
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Layers3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industry-Trained AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              AI Employees for <span className="text-gradient">Every Industry</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose an industry solution built around your customers’ questions and your team’s workflow—then launch in 24 hours.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Industry-trained flows
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                24/7 availability
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                GDPR compliant
              </span>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Lead Generation Chatbot by <span className="text-gradient">Industry</span></h2>
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
                    <div className="relative h-48 overflow-hidden">
                      <Image src={industryImages[industry.slug] || aiRestaurantHero} alt="" width={600} height={400} className="w-full object-cover" />
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
                        <span className="text-primary font-semibold">From £29/month</span> • 24-hour setup
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to launch?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Pick a plan and we’ll set it up</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe, share your website details securely, and we’ll install your AI employee within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="btn-primary">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default IndustriesPage;
