"use client";

import Image from 'next/image';
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ArrowRight, Mail, Clock, Zap, Users, TrendingUp, Shield, Bot, Headphones, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocationBySlug, ukLocations } from "@/data/locationData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import NotFound from "./NotFound";
// City-specific AI assistant images
const aiLondon = "/assets/locations/ai-london.png";
const aiManchester = "/assets/locations/ai-manchester.png";
const aiBirmingham = "/assets/locations/ai-birmingham.png";
const aiLeeds = "/assets/locations/ai-leeds.png";
const aiLiverpool = "/assets/locations/ai-liverpool.png";
const aiBristol = "/assets/locations/ai-bristol.png";
const aiGlasgow = "/assets/locations/ai-glasgow.png";
const aiEdinburgh = "/assets/locations/ai-edinburgh.png";
const aiSheffield = "/assets/locations/ai-sheffield.png";
const aiNewcastle = "/assets/locations/ai-newcastle.png";
const aiNottingham = "/assets/locations/ai-nottingham.png";
const aiCardiff = "/assets/locations/ai-cardiff.png";
const aiLeicester = "/assets/locations/ai-leicester.png";
const aiBrighton = "/assets/locations/ai-brighton.png";
const aiSouthampton = "/assets/locations/ai-southampton.png";
const aiOxford = "/assets/locations/ai-oxford.png";
const aiCambridge = "/assets/locations/ai-cambridge.png";
const aiCoventry = "/assets/locations/ai-coventry.png";
const aiBelfast = "/assets/locations/ai-belfast.png";
const aiAberdeen = "/assets/locations/ai-aberdeen.png";

// Section images
const aiSupport = "/assets/locations/ai-support.png";
const aiTeam = "/assets/locations/ai-team.png";

const cityImages: Record<string, string> = {
  london: aiLondon,
  manchester: aiManchester,
  birmingham: aiBirmingham,
  leeds: aiLeeds,
  liverpool: aiLiverpool,
  bristol: aiBristol,
  glasgow: aiGlasgow,
  edinburgh: aiEdinburgh,
  sheffield: aiSheffield,
  newcastle: aiNewcastle,
  nottingham: aiNottingham,
  cardiff: aiCardiff,
  leicester: aiLeicester,
  brighton: aiBrighton,
  southampton: aiSouthampton,
  oxford: aiOxford,
  cambridge: aiCambridge,
  coventry: aiCoventry,
  belfast: aiBelfast,
  aberdeen: aiAberdeen,
};

const LocationPage = () => {
  const { city } = useParams();
  const pathname = usePathname();
  const location = city ? getLocationBySlug(city) : undefined;
  
  // Get city-specific hero image
  const heroImage = useMemo(() => {
    if (!city) return aiLondon;
    return cityImages[city] || aiLondon;
  }, [city]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  if (!location) {
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
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{location.city}, {location.region}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
                {location.heroTagline}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {location.heroSubtext}
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button 
                  size="lg" 
                  className="btn-primary group"
                  onClick={() => scrollToSection("#pricing-cta")}
                >
                  Get Your AI Chatbot
                  <Zap className="w-4 h-4 ml-2 " />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("#problems")}
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* AI Assistant Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Glow effect */}
                
                {/* Image container */}
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image src={heroImage} alt={`AI Employee for ${location.city}`} width={1200} height={675} className="w-full object-cover" />
                  
                  {/* Overlay gradient */}
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80"
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Your {location.city} AI</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-card/90 text-foreground/80 font-medium border border-border/60">24/7 Online</span>
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
              Empowering {location.city} Businesses with Advanced Customer Service Automation
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              AIVized provides a fully managed, custom-trained <strong>AI chatbot service in {location.city}</strong> tailored specifically for local businesses. Our mission is to bridge the gap between expensive, limited human staffing and technical, confusing DIY platforms. We handle the entire process from custom prompt engineering and training on your unique company data to one-line setup and proactive maintenance. With 24/7/365 active support and near-zero latency, AIVized ensures you never miss a client enquiry, capture booking details automatically, and scale your operations without increasing operational overhead. Discover how automation can elevate your business growth today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* City-Specific Service Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">What We Deliver</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              AIVized's Approach to {location.city}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {location.description}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Custom AI Training on Your Business</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every AIVized chatbot is trained specifically on your business information — your products, services, pricing, FAQs, brand voice, and customer workflows. Unlike generic chatbot templates, our AI understands the nuances of the {location.city} market and can answer customer questions with the accuracy and personality that matches your business identity. We invest time in understanding your operations so your chatbot delivers genuinely helpful conversations, not generic responses.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Seamless Website Integration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your AI chatbot integrates directly into your existing website with a single code snippet. Whether you use WordPress, Shopify, Webflow, Squarespace, or a custom-built site, our chatbot widget works instantly. The widget adapts to your site's design language, ensuring a cohesive brand experience. Customers in {location.city} see a familiar, professional interface that feels like a natural part of your website, not a third-party add-on.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Multi-Channel Support for {location.region}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AIVized extends your AI assistant beyond your website to WhatsApp Business API and Instagram Direct Messages. Your {location.city} customers in {location.region} can reach you through their preferred channel, and all conversations are unified in a single dashboard. Whether a customer sends a message via WhatsApp, Instagram, or your website chat widget, your AI handles it consistently and routes qualified leads to your team.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Monitoring Optimised for {location.city}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our AI doesn't just install and forget. AIVized continuously monitors conversation quality for {location.city} businesses, identifies frequently missed questions, and proactively retrains your chatbot to improve accuracy. We track key metrics like response rate, lead conversion, and customer satisfaction specifically for your {location.region} market. Every month, you receive a performance report with actionable insights for your {location.city} operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — City Specific Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why {location.city}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Why {location.city} Businesses Choose AIVized
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {location.cityDescription}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {location.whyChooseUs.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{reason}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {location.city} businesses trust AIVized because we understand the local market dynamics, competitive landscape, and customer expectations that are unique to {location.city}. Our AI chatbots are not off-the-shelf tools — they are custom-trained for {location.region} businesses that want to stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section id="problems" className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Real Challenges, Real Solutions</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Problems {location.city} Businesses Face
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-destructive/80 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">✕</span>
                The Challenges
              </h3>
              {location.problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-premium p-6"
                >
                  <h4 className="font-semibold mb-2">{problem.title}</h4>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</span>
                Our Solutions
              </h3>
              {location.solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-premium p-6 border-primary/30"
                >
                  <h4 className="font-semibold mb-2 text-primary">{solution.title}</h4>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image src={aiTeam} alt={"AI team supporting your business"} width={1200} height={675} className="w-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Your dedicated AI workforce</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why AIVized</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  Why {location.city} Businesses Choose Us
                </h2>
              </motion.div>

              <div className="space-y-4">
                {location.whyChooseUs.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{reason}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>24-Hour Setup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>UK Support Team</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>30% More Leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
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
              Managed AI Chatbot vs. Traditional Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Compare how our fully managed AI chatbot service stacks up against hiring full-time customer service staff or trying to build and maintain a DIY chatbot yourself.
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
                  <td className="p-4 font-medium text-sm">Lead Qualification</td>
                  <td className="p-4 text-sm text-primary font-semibold">Smart conversational logic</td>
                  <td className="p-4 text-sm">Manual verification & input</td>
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
              <strong>The Bottom Line:</strong> For small and medium businesses in <strong>{location.city}</strong>, hiring full-time receptionists creates massive overhead, while DIY chatbots often deliver frustrating, robotic customer experiences. AIVized bridges the gap by building and maintaining a custom, premium AI assistant that is trained specifically on your business information, ensuring professional 24/7 client interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Areas We Serve</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  AI Employee Coverage in {location.city}
                </h2>
                <p className="text-muted-foreground mt-4">
                  We serve businesses across {location.city} and the wider {location.region} area. Whether you're in the city centre or surrounding neighbourhoods, our AI employees are ready to help.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {location.serviceAreas.map((area, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border/50 text-sm"
                  >
                    <MapPin className="w-3 h-3 text-primary" />
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image src={aiSupport} alt={"AI customer support assistant for your business"} width={1200} height={675} className="w-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80">
                    <Headphones className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Supporting {location.city} businesses 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
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

      {/* How AI Chatbots Work — City Specific */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              How AI Chatbots Work for {location.city} Businesses
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {location.cityDescription}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {location.problems.slice(0, 4).map((problem, idx) => (
              <div key={idx} className="card-premium p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description} AIVized's AI chatbot for {location.city} addresses this challenge by providing a custom-trained solution that handles these specific scenarios automatically. Every interaction is logged, analysed, and used to improve future responses for {location.region} businesses.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {location.whyChooseUs[0]} — AIVized's approach to {location.city} means every chatbot is trained on local market conditions, {location.region} customer expectations, and the competitive landscape specific to {location.city}. Unlike generic tools that treat every city the same, your {location.city} chatbot understands the nuances that matter most to your local customers.
            </p>
          </div>
        </div>
      </section>

      {/* About City & Map Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About {location.city}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                AI Solutions for {location.city}'s Business Community
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {location.cityDescription}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {location.city} is not just another UK city — it represents a unique blend of traditional industries and modern innovation that creates both challenges and opportunities for local businesses. Understanding this dynamic is essential for any business looking to stay competitive. AIVized has spent years studying {location.city}'s market patterns, customer behaviors, and industry trends to build AI chatbots that genuinely resonate with {location.city} audiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you operate in {location.region} or serve customers across the entire United Kingdom, our AI chatbot solution adapts to your specific needs. We understand the local business environment, the competitive pressures, and the customer expectations that are unique to {location.city}. This local knowledge, combined with our technical expertise in AI, ensures your chatbot delivers results that go beyond generic automation.
              </p>
              {location.relatedBlogSlug && (
                <Link
                  href={`/blog/${location.relatedBlogSlug}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm font-medium"
                >
                  Read our AI Agency guide for {location.city} →
                </Link>
              )}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Population: {location.population}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{location.region}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border/50 shadow-lg"
            >
              <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${location.city}`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Locations Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">UK Coverage</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              AI Employees Across the UK
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {ukLocations
              .filter(loc => loc.slug !== location.slug)
              .sort((a, b) => {
                const distA = Math.hypot(a.coordinates.lat - location.coordinates.lat, a.coordinates.lng - location.coordinates.lng);
                const distB = Math.hypot(b.coordinates.lat - location.coordinates.lat, b.coordinates.lng - location.coordinates.lng);
                return distA - distB;
              })
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{loc.city}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Local Market Insights — City Specific */}
      <section className="section-padding bg-muted/30 border-t border-border/50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">{location.city} Market Context</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Understanding {location.city}'s Business Landscape
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">{location.city}'s Business Environment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {location.cityDescription} With a population of {location.population} spanning {location.region}, {location.city} presents a unique commercial ecosystem where businesses face both intense competition and significant growth opportunities. The local market demands providers who understand regional nuances and can respond to {location.city} customers with the speed and personalisation that the area expects.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">The Automation Imperative for {location.city}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                In {location.city}, where {location.population} consumers and businesses generate constant demand for services, the cost of missed enquiries is disproportionately high. Industry data shows that 67% of website visitors leave without making contact, and businesses that fail to capture those leads lose an average of 30% in potential revenue. For a {location.city} business generating 100 website visitors per day, that's approximately 67 missed opportunities daily. AIVized's AI chatbot, trained specifically on {location.city} market dynamics, captures every single enquiry automatically.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Why {location.region} Needs Local AI Expertise</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {location.city} businesses operate within a unique regulatory, cultural, and competitive environment that generic chatbot solutions cannot address. From the specific demographics of {location.region} to the seasonal fluctuations that affect local commerce, an AI chatbot needs to understand {location.city}-specific contexts to deliver value. AIVized's custom training process incorporates these local factors, ensuring your chatbot speaks the language of {location.city} customers fluently and accurately.
              </p>
            </div>
            <div className="card-premium p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Growth Trajectory in {location.city}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {location.city}'s economy continues to evolve, with new businesses launching and existing ones expanding their digital presence every month. The {location.population} residents and growing professional population in {location.region} create a thriving market for businesses that can respond instantly to customer enquiries. Companies that invest in AI-powered automation now — specifically solutions trained for the {location.city} market — position themselves to capture a disproportionate share of future growth in this dynamic region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Results Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Results for {location.city}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              How {location.city} Businesses Are Winning with AIVized
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {location.description}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-premium p-6 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Average increase in captured leads within the first month for {location.city} businesses</div>
            </div>
            <div className="card-premium p-6 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Of standard customer enquiries handled automatically by {location.city}'s AIVized chatbots</div>
            </div>
            <div className="card-premium p-6 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">&lt;3s</div>
              <div className="text-sm text-muted-foreground">Average response time vs 10+ minutes for email — proven across {location.region}</div>
            </div>
          </div>
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Businesses across {location.city} — from {location.region} restaurants and real estate agencies to e-commerce stores and healthcare clinics — already use AIVized's AI chatbot to automate customer service and capture more leads. Whether you're a startup looking for your first customer service solution or an established {location.city} business seeking to scale without increasing overhead, AIVized delivers measurable results from day one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Questions About AIVized in {location.city}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {location.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="card-premium px-6 border-border/50"
                >
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

      {/* Final CTA Section */}
      <section id="pricing-cta" className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Ready to Transform Your {location.city} Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of UK businesses already using AIVized to deliver exceptional customer service 24/7. 
              No contracts, no technical skills needed, setup in under 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/#pricing">
                <Button size="lg" className="btn-primary group">
                  View Pricing Plans
                  <Zap className="w-4 h-4 ml-2 " />
                </Button>
              </Link>
              <a href="mailto:info@aivized.com">
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                From £29/month
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                No long-term contracts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                24-hour setup
              </span>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default LocationPage;
