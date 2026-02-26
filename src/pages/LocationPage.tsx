import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { PageMeta } from "@/components/PageMeta";
import { MapPin, CheckCircle, ArrowRight, Phone, Mail, Clock, Zap, Users, TrendingUp, Shield, Bot, Headphones, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocationBySlug, ukLocations } from "@/data/locationData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import NotFound from "./NotFound";
// City-specific AI assistant images
import aiLondon from "@/assets/locations/ai-london.png";
import aiManchester from "@/assets/locations/ai-manchester.png";
import aiBirmingham from "@/assets/locations/ai-birmingham.png";
import aiLeeds from "@/assets/locations/ai-leeds.png";
import aiLiverpool from "@/assets/locations/ai-liverpool.png";
import aiBristol from "@/assets/locations/ai-bristol.png";
import aiGlasgow from "@/assets/locations/ai-glasgow.png";
import aiEdinburgh from "@/assets/locations/ai-edinburgh.png";
import aiSheffield from "@/assets/locations/ai-sheffield.png";
import aiNewcastle from "@/assets/locations/ai-newcastle.png";
import aiNottingham from "@/assets/locations/ai-nottingham.png";
import aiCardiff from "@/assets/locations/ai-cardiff.png";
import aiLeicester from "@/assets/locations/ai-leicester.png";
import aiBrighton from "@/assets/locations/ai-brighton.png";
import aiSouthampton from "@/assets/locations/ai-southampton.png";
import aiOxford from "@/assets/locations/ai-oxford.png";
import aiCambridge from "@/assets/locations/ai-cambridge.png";
import aiCoventry from "@/assets/locations/ai-coventry.png";
import aiBelfast from "@/assets/locations/ai-belfast.png";
import aiAberdeen from "@/assets/locations/ai-aberdeen.png";

// Section images
import aiSupport from "@/assets/locations/ai-support.png";
import aiTeam from "@/assets/locations/ai-team.png";

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
  const { city } = useParams<{ city: string }>();
  const { pathname } = useLocation();
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
          "telephone": "+44-000-000-0000",
          "email": "myselfzuhaib@gmail.com",
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
          "priceRange": "££",
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
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonical={`https://www.aivized.com/locations/${location.slug}`}
        schema={schemas || undefined}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-aura">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
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
                  <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
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
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl opacity-60" />
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card/30 backdrop-blur-sm shadow-2xl">
                  <img
                    src={heroImage}
                    alt={`AI Employee for ${location.city} businesses - realistic humanoid AI assistant`}
                    className="w-full max-w-md object-cover"
                    loading="eager"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Your {location.city} AI</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">24/7 Online</span>
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
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
                  <img
                    src={aiTeam}
                    alt="AI team supporting your business"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20">
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
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
                  <img
                    src={aiSupport}
                    alt="AI customer support assistant for your business"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20">
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
                  to={`/locations/${loc.slug}`}
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
      <section id="pricing-cta" className="section-padding bg-gradient-to-b from-primary/5 to-background">
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
              <Link to="/#pricing">
                <Button size="lg" className="btn-primary group">
                  View Pricing Plans
                  <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </Button>
              </Link>
              <a href="mailto:myselfzuhaib@gmail.com">
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

      <RelatedPagesSection 
        currentPage="location"
        currentSlug={city}
        title="Related Resources"
        subtitle="Explore more AI chatbot solutions for UK businesses"
      />

      <Footer />
    </div>
  );
};

export default LocationPage;
