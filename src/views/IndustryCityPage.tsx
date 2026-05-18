"use client";

import Image from 'next/image';
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryCityData, getCitiesForIndustry } from "@/data/industryCityData";
import { getIndustryBySlug } from "@/data/industryData";
import NotFound from "./NotFound";
import {
  Bot, ArrowRight, Zap, CheckCircle, Users, Shield, Clock,
  MessageCircle, MapPin, ChevronRight
} from "lucide-react";

// Industry hero images
const aiRestaurantHero = "/assets/industries/ai-restaurant-hero.png";
const aiRealEstateHero = "/assets/industries/ai-realestate-hero.png";
const aiEcommerceHero = "/assets/industries/ai-ecommerce-hero.png";
const aiHealthcareHero = "/assets/industries/ai-healthcare-hero.png";
const aiLegalHero = "/assets/industries/ai-legal-hero.png";
const aiFitnessHero = "/assets/industries/ai-fitness-hero.png";
const aiTravelHero = "/assets/industries/ai-travel-hero.png";

const industryHeroImages: Record<string, string> = {
  restaurants: aiRestaurantHero,
  "real-estate": aiRealEstateHero,
  ecommerce: aiEcommerceHero,
  healthcare: aiHealthcareHero,
  legal: aiLegalHero,
  fitness: aiFitnessHero,
  travel: aiTravelHero,
};
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const IndustryCityPage = () => {
  const { industry: industrySlug, city: citySlug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [industrySlug, citySlug]);

  const cityData = useMemo(
    () => (industrySlug && citySlug ? getIndustryCityData(industrySlug, citySlug) : undefined),
    [industrySlug, citySlug]
  );

  const parentIndustry = useMemo(
    () => (industrySlug ? getIndustryBySlug(industrySlug) : undefined),
    [industrySlug]
  );

  const otherCities = useMemo(
    () => (industrySlug ? getCitiesForIndustry(industrySlug).filter(c => c.citySlug !== citySlug) : []),
    [industrySlug, citySlug]
  );

  if (!cityData || !parentIndustry) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/industries">Industries</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href={`/industries/${industrySlug}`}>{parentIndustry.industry}</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cityData.cityName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{cityData.cityName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              {cityData.h1}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {cityData.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="/pricing">
                <Button size="lg" className="btn-primary group">
                  Get Started Today
                  <Zap className="w-4 h-4 ml-2 " />
                </Button>
              </Link>
              <Link href={`/industries/${industrySlug}`}>
                <Button variant="outline" size="lg">
                  See All {parentIndustry.industry} Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" />Industry-trained AI</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />24/7 availability</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" />GDPR compliant</span>
            </div>
          </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image src={industryHeroImages[industrySlug!] || aiRestaurantHero} alt={`AI assistant for ${parentIndustry.industry}`} width={1200} height={675} className="w-full object-cover" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{cityData.cityName} {parentIndustry.industry} AI</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-card/90 text-foreground/80 font-medium border border-border/60">24/7 Active</span>
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
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
              Empowering {cityData.cityName} {parentIndustry.industry} with Premium AI Chatbot Solutions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              AIVized designs and delivers a custom-trained, fully managed <strong>AI chatbot for {parentIndustry.industry.toLowerCase()} in {cityData.cityName}</strong>, giving your business a highly capable virtual receptionist that works 24/7/365. Rather than utilizing basic button-clicking trees or leaving clients waiting for next-day replies, AIVized trains a custom AI model specifically on your business parameters, FAQs, pricing systems, and service structures. From table reservations and property viewing qualification to booking client trials and answering precise product questions, our managed automation captures every lead instantly with 0ms latency. No coding, no complicated setup, and no developers needed—our UK team handles everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentIndustry.stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features from parent industry */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Key Features</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              What Your {cityData.cityName} AI Chatbot Does
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentIndustry.solutions.map((solution, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-card border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-semibold">{solution.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-background border-t border-border/50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Value Comparison</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Managed AI Chatbot vs. Alternatives
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Compare the operational advantages of a dedicated AIVized managed AI assistant against traditional receptionists or DIY builders in the {parentIndustry.industry.toLowerCase()} sector.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-muted/40 border-b border-border">
                  <th className="p-4 font-semibold text-sm">Feature</th>
                  <th className="p-4 font-semibold text-sm text-primary">AIVized Managed AI</th>
                  <th className="p-4 font-semibold text-sm">In-House Staff (UK)</th>
                  <th className="p-4 font-semibold text-sm">DIY Chatbot Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="p-4 font-medium text-sm">Monthly Cost</td>
                  <td className="p-4 text-sm text-primary font-semibold">From £29 / month</td>
                  <td className="p-4 text-sm">£2,500+ / month (plus taxes)</td>
                  <td className="p-4 text-sm">£15 - £100 (plus hidden API fees)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-sm">Availability</td>
                  <td className="p-4 text-sm text-primary font-semibold">24/7/365 (0ms delay)</td>
                  <td className="p-4 text-sm">40 hours / week (delayed response)</td>
                  <td className="p-4 text-sm">24/7 (rigid, often breaks)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-sm">Setup & Training</td>
                  <td className="p-4 text-sm text-primary font-semibold">100% Done For You (24h)</td>
                  <td className="p-4 text-sm">Weeks of onboarding & training</td>
                  <td className="p-4 text-sm">Requires technical configuration</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-sm">Sector Training</td>
                  <td className="p-4 text-sm text-primary font-semibold">Fully custom to your brand</td>
                  <td className="p-4 text-sm">Requires continuous supervision</td>
                  <td className="p-4 text-sm">Basic button-clicking prompts</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-sm">Optimization & Edits</td>
                  <td className="p-4 text-sm text-primary font-semibold">Fully Managed (free updates)</td>
                  <td className="p-4 text-sm">Requires constant supervision</td>
                  <td className="p-4 text-sm">You must debug & fix issues</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-secondary/10 p-6 rounded-xl border border-border/50 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>The Bottom Line:</strong> In {cityData.cityName}, {parentIndustry.industry.toLowerCase()} businesses face high customer expectations and fierce competition. Missing an out-of-hours booking request, viewing inquiry, or service question directly impacts your weekly covers, property listings, or retail sales. AIVized captures and handles all of this automatically at a fraction of the cost, making it the most sensible operational decision.
            </p>
          </div>
        </div>
      </section>

      {/* City-specific unique content */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              {parentIndustry.industry} businesses in {cityData.cityName} and why AIVized fits
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {cityData.localFact}
            </p>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Deploying Your AI Employee in 4 Steps
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Getting started is quick and effortless. Our expert team handles all the technical aspects, from initial training to final website integration.
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
              <h3 className="font-semibold text-lg mb-3">Onboarding & Info</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                Choose a plan and share your business details, FAQs, and link. Our UK-based team reviews your operations and designs a targeted chatbot flow.
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
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Custom AI Training</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                We configure the AI model using state-of-the-art prompt engineering. We feed it your business rules, pricing, and tone of voice to guarantee precise answers.
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
              <h3 className="font-semibold text-lg mb-3">One-Line Install</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                We generate a lightweight, secure code snippet. You (or our developers, for free) paste it into your website's header. It immediately goes live.
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
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Monitor & Refine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                Our active system monitors conversations, labels hot leads, and continuously retrains the AI on new questions. All edits and updates are 100% free.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Common Questions About AI Chatbots for {parentIndustry.industry} in {cityData.cityName}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {cityData.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="card-premium px-6 border-border/50">
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other cities for this industry */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">More Cities</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              {parentIndustry.industry} AI Chatbot in <span className="text-gradient">Other UK Cities</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map(c => (
              <Link
                key={c.citySlug}
                href={`/industries/${c.industrySlug}/${c.citySlug}`}
                className="px-4 py-2 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all"
              >
                {c.cityName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Get Your {cityData.cityName} {parentIndustry.industry} AI Chatbot?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe, share your website details, and we'll install your AI employee within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/pricing">
                <Button size="lg" className="btn-primary group">
                  View Pricing Plans <Zap className="w-4 h-4 ml-2 " />
                </Button>
              </Link>
              <a href="mailto:aivized.com@gmail.com">
                <Button variant="outline" size="lg">
                  Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />From £29/month</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />No long-term contracts</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />24-hour setup</span>
            </div>
          </motion.div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default IndustryCityPage;
