"use client";

import Image from 'next/image';
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, ArrowRight, Zap, Users, Shield, Clock, TrendingUp, 
  Bot, MessageCircle, Star, Calendar, UtensilsCrossed, PartyPopper, 
  Plug, MapPin, Filter, Home, FileText, Building, Package, Truck, 
  RotateCcw, Box, ShoppingCart, Quote, Headphones, Heart, AlertTriangle, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryBySlug, allIndustries } from "@/data/industryData";
import { getCitiesForIndustry } from "@/data/industryCityData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import NotFound from "./NotFound";

// Hero images
const aiRestaurantHero = "/assets/industries/ai-restaurant-hero.png";
const aiRealEstateHero = "/assets/industries/ai-realestate-hero.png";
const aiEcommerceHero = "/assets/industries/ai-ecommerce-hero.png";
const aiHealthcareHero = "/assets/industries/ai-healthcare-hero.png";
const aiLegalHero = "/assets/industries/ai-legal-hero.png";
const aiFitnessHero = "/assets/industries/ai-fitness-hero.png";
const aiTravelHero = "/assets/industries/ai-travel-hero.png";

// Scene images
const restaurantScene = "/assets/industries/restaurant-scene.png";
const realestateScene = "/assets/industries/realestate-scene.png";
const ecommerceScene = "/assets/industries/ecommerce-scene.png";
const healthcareScene = "/assets/industries/healthcare-scene.png";
const legalScene = "/assets/industries/legal-scene.png";
const fitnessScene = "/assets/industries/fitness-scene.png";
const travelScene = "/assets/industries/travel-scene.png";

const heroImages: Record<string, string> = {
  restaurants: aiRestaurantHero,
  "real-estate": aiRealEstateHero,
  ecommerce: aiEcommerceHero,
  healthcare: aiHealthcareHero,
  legal: aiLegalHero,
  fitness: aiFitnessHero,
  travel: aiTravelHero,
};

const sceneImages: Record<string, string> = {
  restaurants: restaurantScene,
  "real-estate": realestateScene,
  ecommerce: ecommerceScene,
  healthcare: healthcareScene,
  legal: legalScene,
  fitness: fitnessScene,
  travel: travelScene,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar, UtensilsCrossed, PartyPopper, Users, MapPin, Plug,
  Filter, Home, FileText, Building, Package, Truck, RotateCcw,
  Box, TrendingUp, ShoppingCart, Heart, AlertTriangle, CreditCard,
  Shield, Star,
};

const IndustryPage = () => {
  const { industry: industrySlug } = useParams();
  const industry = industrySlug ? getIndustryBySlug(industrySlug) : undefined;
  const industryCities = useMemo(() => industrySlug ? getCitiesForIndustry(industrySlug) : [], [industrySlug]);

  const heroImage = useMemo(() => {
    if (!industrySlug) return aiRestaurantHero;
    return heroImages[industrySlug] || aiRestaurantHero;
  }, [industrySlug]);

  const sceneImage = useMemo(() => {
    if (!industrySlug) return restaurantScene;
    return sceneImages[industrySlug] || restaurantScene;
  }, [industrySlug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [industrySlug]);

  if (!industry || !industrySlug) {
    return <NotFound />;
  }

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{industry.tagline}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
                {industry.heroTitle}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {industry.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button size="lg" className="btn-primary group" onClick={() => scrollToSection("#pricing-cta")}>
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
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image src={heroImage} alt={`AI assistant for ${industry.industry}`} width={600} height={500} priority className="w-full max-w-md object-cover" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Your {industry.industry} AI</span>
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
              Empowering the {industry.industry} Sector with Advanced AI Chatbot Solutions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              AIVized designs and delivers a custom-trained, fully managed <strong>AI chatbot for {industry.industry.toLowerCase()} businesses</strong>, giving your company a highly capable virtual receptionist that works 24/7/365. Rather than utilizing basic button-clicking trees or leaving clients waiting for next-day replies, AIVized trains a custom AI model specifically on your business parameters, FAQs, pricing systems, and service structures. From table reservations and property viewing qualification to booking client trials and answering precise product questions, our managed automation captures every lead instantly with 0ms latency. No coding, no complicated setup, and no developers needed—our UK team handles everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section id="problems" className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Real Challenges, Real Solutions</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Problems {industry.industry} Businesses Face</h2>
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
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image src={sceneImage} alt={`AI assistant working in ${industry.industry}`} width={1200} height={675} className="w-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80">
                    <Headphones className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">AI-powered {industry.industry.toLowerCase()} support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Powerful Features</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">Built for {industry.industry}</h2>
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
              Compare the operational advantages of a dedicated AIVized managed AI assistant against traditional receptionists or DIY builders in the {industry.industry.toLowerCase()} sector.
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
              <strong>The Bottom Line:</strong> For {industry.industry.toLowerCase()} businesses, missing a customer inquiry, reservation, or quote request directly reduces revenue. AIVized captures and handles all customer interactions automatically at a fraction of the cost, making it the most sensible operational decision.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Perfect For</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Who Uses AIVized for {industry.industry}?</h2>
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

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-6">
              "{industry.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{industry.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{industry.testimonial.role}, {industry.testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Common Questions About AI for {industry.industry}</h2>
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
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                {industry.industry} AI Chatbot <span className="text-gradient">Across the UK</span>
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
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">AI Solutions for Other Industries</h2>
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

      {/* Final CTA */}
      <section id="pricing-cta" className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Ready to Transform Your {industry.industry} Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of UK {industry.industry.toLowerCase()} businesses already using AIVized to deliver exceptional customer service 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/#pricing">
                <Button size="lg" className="btn-primary group">
                  View Pricing Plans <Zap className="w-4 h-4 ml-2 " />
                </Button>
              </Link>
              <a href="mailto:info@aivized.com">
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

export default IndustryPage;
