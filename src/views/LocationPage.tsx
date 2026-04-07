"use client";

import Image from 'next/image';
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ArrowRight, Phone, Mail, Clock, Zap, Users, TrendingUp, Shield, Bot, Headphones, MessageCircle } from "lucide-react";
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

  // Generate structured data schemas
  const schemas = useMemo(() => {
    if (!location) return null;

    const combinedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.aivized.com/locations" },
            { "@type": "ListItem", "position": 3, "name": location.city, "item": `https://www.aivized.com/locations/${location.slug}` }
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": `AI Vized - ${location.city}`,
          "description": location.description,
          "url": `https://www.aivized.com/locations/${location.slug}`,
          "email": "aivized.com@gmail.com",
          "telephone": "+923063213951",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": location.city,
            "addressRegion": location.region,
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.coordinates.lat,
            "longitude": location.coordinates.lng
          },
          "areaServed": {
            "@type": "City",
            "name": location.city
          },
          "priceRange": "£29-£149",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": location.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        },
      ]
    };

    return combinedSchema;
  }, [location]);

  const metaTitle = location ? `Managed AI Chatbot ${location.city} | From £29/month` : "";
  const metaDescription = location ? `Managed AI chatbot for ${location.city} businesses from £29/month. 24/7 lead capture, we handle installation and support.` : "";
  const metaKeywords = location ? `AI chatbot ${location.city}, managed AI chatbot ${location.city}, lead generation chatbot ${location.region}, 24/7 customer support ${location.city}, small business chatbot UK` : "";

  if (!location) {
    return <NotFound />;
  }

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {schemas && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />}
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
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why AI Vized</p>
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                {location.cityDescription}
              </p>
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
              Questions About AI Vized in {location.city}
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
              Join hundreds of UK businesses already using AI Vized to deliver exceptional customer service 24/7. 
              No contracts, no technical skills needed, setup in under 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/#pricing">
                <Button size="lg" className="btn-primary group">
                  View Pricing Plans
                  <Zap className="w-4 h-4 ml-2 " />
                </Button>
              </Link>
              <a href="mailto:aivized.com@gmail.com">
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
