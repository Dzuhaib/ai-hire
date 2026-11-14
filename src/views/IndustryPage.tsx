"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, ArrowRight, Zap, Users, Shield, TrendingUp,
  Bot, MessageCircle, Workflow, Search, Megaphone, Code2,
  MonitorSmartphone, Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryBySlug, allIndustries } from "@/data/industryData";
import { getCitiesForIndustry } from "@/data/industryCityData";
import { industryExpandedContent } from "@/data/industryContent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import IndustryServicesSection from "@/components/IndustryServicesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ConnectedStackVisual, IndustryVisual } from "@/components/visuals/LandingVisuals";
import { industryVisualVariant } from "@/lib/visualVariants";

import NotFound from "./NotFound";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot, Workflow, Search, Megaphone, Code2, MonitorSmartphone,
};

const IndustryPage = () => {
  const { industry: industrySlug } = useParams();
  const industry = industrySlug ? getIndustryBySlug(industrySlug) : undefined;
  const industryCities = useMemo(() => industrySlug ? getCitiesForIndustry(industrySlug) : [], [industrySlug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [industrySlug]);

  if (!industry || !industrySlug) {
    return <NotFound />;
  }

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const expandedContent = industry ? industryExpandedContent[industry.slug] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Layers3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{industry.tagline}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-6">
                {industry.heroTitle}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {industry.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button size="lg" className="btn-primary group" onClick={() => scrollToSection("#contact-cta")}>
                  Get Started Today
                  <Zap className="w-4 h-4 ml-2 " />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("#features")}>
                  See Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-border/50">
                {industry.stats.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-[var(--shadow-lift)]">
                  <div className="p-3 pb-20">
                    <IndustryVisual variant={industryVisualVariant(industry.slug)} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Your {industry.industry} digital stack</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-card/90 text-foreground/80 font-medium border border-border/60">Connected</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strong Introduction Section */}
      <section className="section-padding bg-background border-b border-border/50">
        <div className="container-narrow max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-semibold mb-6">
              One Partner for AI, Automation &amp; Digital Growth in {industry.industry}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              AIVized helps <strong>{industry.industry.toLowerCase()} businesses across the UAE</strong> connect six services around how they actually operate: <strong>AI Systems</strong> for customer and internal assistants, <strong>Automations</strong> for repetitive workflows, <strong>SEO &amp; GEO</strong> for search and AI visibility, <strong>Digital Marketing</strong> for demand, <strong>Web Development</strong> for conversion, and <strong>Desktop Software Development</strong> for custom operational tools. We start with the bottleneck that matters most, then connect the pieces so enquiries, data, and follow-up move through one coherent system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      {expandedContent && (
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Industry Overview</p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                The {industry.industry} Sector in the UAE
              </h2>
            </motion.div>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                {expandedContent.overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Problems & Solutions */}
      <section id="problems" className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Real Challenges, Real Solutions</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Problems {industry.industry} Businesses Face</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-destructive/80 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">✕</span>
                The Challenges
              </h3>
              {industry.problems.map((problem, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card-premium p-6">
                  <h4 className="font-semibold mb-2">{problem.title}</h4>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</span>
                Our Solutions
              </h3>
              {industry.solutions.map((solution, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card-premium p-6 border-primary/30">
                  <h4 className="font-semibold mb-2 text-primary">{solution.title}</h4>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-[var(--shadow-lift)]">
                  <div className="p-3 pb-20">
                    <ConnectedStackVisual />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80">
                    <Layers3 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Connected {industry.industry.toLowerCase()} systems</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Powerful Features</p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">Built for {industry.industry}</h2>
                <p className="text-muted-foreground mt-4">Every feature designed specifically for the unique challenges of {industry.industry.toLowerCase()} businesses.</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {industry.features.map((feature, idx) => {
                  const IconComponent = iconMap[feature.icon] || CheckCircle;
                  return (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="p-4 rounded-xl bg-card/50 border border-border/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-xs">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryServicesSection
        industryName={industry.industry}
        description={`We connect AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development around the way ${industry.industry.toLowerCase()} businesses in the UAE actually operate. Start with one priority or connect several into a single roadmap.`}
      />

      {/* Use Cases */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Perfect For</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Who Uses AIVized for {industry.industry}?</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {industry.useCases.map((useCase, idx) => (
              <motion.span key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                {useCase}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {expandedContent && (
        <>
          {/* Industry Deep Dive */}
          <section className="section-padding">
            <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Deep Dive</p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                  {industry.industry} Businesses: What You Need to Know
                </h2>
              </motion.div>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="card-premium p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Where the Friction Shows Up</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {expandedContent.whyThisIndustryNeedsAI}
                  </p>
                </div>
                <div className="card-premium p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">What Is Changing in the Market</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {expandedContent.aiTrends}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Industry-Specific Benefits */}
          <section className="section-padding bg-muted/30">
            <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Key Benefits</p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                  What {industry.industry} Businesses Gain with AIVized
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="card-premium p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Measurable Business Impact</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {expandedContent.businessImpact}
                  </p>
                </div>
                <div className="card-premium p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Why AIVized</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {expandedContent.choosingAIVized}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 4-Step Process Section */}
      <section className="section-padding bg-muted/30 border-t border-b border-border/50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">How It Works</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
              A Scoped Plan in 4 Steps
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We start with the bottleneck, not a package. Every engagement follows the same clear process, from discovery to measurement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-premium p-6 relative flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-primary/10">01</div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Discovery &amp; Audit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                We review your enquiry channels, operations, search visibility, and current tools to find where time and opportunities are being lost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-premium p-6 relative flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-primary/10">02</div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Scoped Plan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                We recommend the smallest useful set of changes across the six services, with clear deliverables, ownership, and a realistic timeline.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-premium p-6 relative flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-primary/10">03</div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Build &amp; Integrate</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                We build and connect the chosen systems to your existing website, CRM, and operational tools so the work fits how your team already operates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card-premium p-6 relative flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-primary/10">04</div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Measure &amp; Improve</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                We track the metrics that matter, refine what is underperforming, and recommend the next service when the results justify it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Common Questions About AI, Automation &amp; Growth for {industry.industry}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {industry.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="card-premium px-6 border-border/50">
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* City Pages for this Industry */}
      {industryCities.length > 0 && (
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">By City</p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                {industry.industry} AI &amp; Automation <span className="text-gradient">Across the UAE</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {industryCities.map(c => (
                <Link
                  key={c.citySlug}
                  href={`/industries/${industrySlug}/${c.citySlug}`}
                  className="px-4 py-2 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all"
                >
                  {c.cityName}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Industries */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore More</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">AI Solutions for Other Industries</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allIndustries
              .filter(ind => ind.slug !== industry.slug)
              .map((ind) => (
                <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{ind.industry}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{ind.heroTitle}</p>
                  <span className="text-sm text-primary flex items-center gap-1">Learn more <ArrowRight className="w-4 h-4" /></span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <div id="contact-cta">
        <FinalCTASection />
      </div>

      <Footer />
    </div>
  );
};

export default IndustryPage;
