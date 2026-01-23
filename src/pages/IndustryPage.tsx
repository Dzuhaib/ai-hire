import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, ArrowRight, Zap, Users, Shield, Clock, TrendingUp, 
  Bot, MessageCircle, Star, Calendar, UtensilsCrossed, PartyPopper, 
  Plug, MapPin, Filter, Home, FileText, Building, Package, Truck, 
  RotateCcw, Box, ShoppingCart, Quote, Headphones 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryBySlug, allIndustries } from "@/data/industryData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";

// Hero images
import aiRestaurantHero from "@/assets/industries/ai-restaurant-hero.png";
import aiRealEstateHero from "@/assets/industries/ai-realestate-hero.png";
import aiEcommerceHero from "@/assets/industries/ai-ecommerce-hero.png";

// Scene images
import restaurantScene from "@/assets/industries/restaurant-scene.png";
import realestateScene from "@/assets/industries/realestate-scene.png";
import ecommerceScene from "@/assets/industries/ecommerce-scene.png";

const heroImages: Record<string, string> = {
  restaurants: aiRestaurantHero,
  "real-estate": aiRealEstateHero,
  ecommerce: aiEcommerceHero,
};

const sceneImages: Record<string, string> = {
  restaurants: restaurantScene,
  "real-estate": realestateScene,
  ecommerce: ecommerceScene,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar, UtensilsCrossed, PartyPopper, Users, MapPin, Plug,
  Filter, Home, FileText, Building, Package, Truck, RotateCcw,
  Box, TrendingUp, ShoppingCart,
};

const IndustryPage = () => {
  const { pathname } = useLocation();
  
  // Extract industry slug from pathname (e.g., "/restaurants" -> "restaurants")
  const industrySlug = pathname.replace("/", "");
  const industry = getIndustryBySlug(industrySlug);

  const heroImage = useMemo(() => {
    if (!industrySlug) return aiRestaurantHero;
    return heroImages[industrySlug] || aiRestaurantHero;
  }, [industrySlug]);

  const sceneImage = useMemo(() => {
    if (!industrySlug) return restaurantScene;
    return sceneImages[industrySlug] || restaurantScene;
  }, [industrySlug]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.industry} AI Solutions | AI Vized`;

      const setMeta = (name: string, content: string, isProperty = false) => {
        const attr = isProperty ? "property" : "name";
        let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(attr, name);
          document.head.appendChild(el);
        }
        el.setAttribute("content", content);
      };

      const description = `${industry.heroSubtitle} AI-powered automation for ${industry.industry.toLowerCase()} businesses across the UK.`;
      const keywords = `AI ${industry.industry.toLowerCase()}, ${industry.slug} AI chatbot, ${industry.industry.toLowerCase()} automation UK, 24/7 customer service ${industry.slug}`;

      setMeta("description", description);
      setMeta("keywords", keywords);
      setMeta("og:title", `${industry.industry} AI Solutions | AI Vized`, true);
      setMeta("og:description", description, true);

      // Inject structured data
      const existingScripts = document.querySelectorAll('script[data-industry-schema]');
      existingScripts.forEach(s => s.remove());

      // Breadcrumb Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aivized.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://aivized.com/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": industry.industry,
            "item": `https://aivized.com/${industry.slug}`
          }
        ]
      };

      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `AI Solutions for ${industry.industry}`,
        "provider": {
          "@type": "Organization",
          "name": "AI Vized",
          "url": "https://aivized.com"
        },
        "description": industry.description,
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": "29",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "GBP",
            "unitText": "month"
          }
        }
      };

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": industry.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      [breadcrumbSchema, serviceSchema, faqSchema].forEach((schema, idx) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-industry-schema", `schema-${idx}`);
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });

      return () => {
        document.title = "AI Vized | Hire AI That Works 24/7 - UK Business Solutions";
        const scripts = document.querySelectorAll('script[data-industry-schema]');
        scripts.forEach(s => s.remove());
      };
    }
  }, [industry]);

  if (!industry) {
    return <NotFound />;
  }

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                <Button 
                  size="lg" 
                  className="btn-primary group"
                  onClick={() => scrollToSection("#pricing-cta")}
                >
                  Get Started Today
                  <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("#features")}
                >
                  See Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-border/50">
                {industry.stats.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
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
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl opacity-60" />
                <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card/30 backdrop-blur-sm shadow-2xl">
                  <img
                    src={heroImage}
                    alt={`AI assistant for ${industry.industry}`}
                    className="w-full max-w-md object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Your {industry.industry} AI</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">24/7 Active</span>
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
              Problems {industry.industry} Businesses Face
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-destructive/80 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">✕</span>
                The Challenges
              </h3>
              {industry.problems.map((problem, idx) => (
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

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</span>
                Our Solutions
              </h3>
              {industry.solutions.map((solution, idx) => (
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

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
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
                    src={sceneImage}
                    alt={`AI assistant working in ${industry.industry}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20">
                    <Headphones className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">AI-powered {industry.industry.toLowerCase()} support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Powerful Features</p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  Built for {industry.industry}
                </h2>
                <p className="text-muted-foreground mt-4">
                  Every feature designed specifically for the unique challenges of {industry.industry.toLowerCase()} businesses.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {industry.features.map((feature, idx) => {
                  const IconComponent = iconMap[feature.icon] || CheckCircle;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 rounded-xl bg-card/50 border border-border/50"
                    >
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

      {/* Use Cases Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Perfect For</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Who Uses AI Vized for {industry.industry}?
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {industry.useCases.map((useCase, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                {useCase}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
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
                <div className="text-sm text-muted-foreground">
                  {industry.testimonial.role}, {industry.testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Common Questions About AI for {industry.industry}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {industry.faqs.map((faq, idx) => (
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

      {/* Other Industries */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore More</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              AI Solutions for Other Industries
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allIndustries
              .filter(ind => ind.slug !== industry.slug)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/${ind.slug}`}
                  className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {ind.industry}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{ind.heroTitle}</p>
                  <span className="text-sm text-primary flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing-cta" className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Ready to Transform Your {industry.industry} Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of UK {industry.industry.toLowerCase()} businesses already using AI Vized to deliver exceptional customer service 24/7.
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
                  Contact Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
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

export default IndustryPage;
