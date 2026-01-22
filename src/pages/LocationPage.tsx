import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ArrowRight, Phone, Mail, Clock, Zap, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocationBySlug, ukLocations } from "@/data/locationData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";

const LocationPage = () => {
  const { city } = useParams<{ city: string }>();
  const location = city ? getLocationBySlug(city) : undefined;

  useEffect(() => {
    if (location) {
      // Set page meta
      document.title = `AI Employee Solutions in ${location.city} | AI Vized`;
      
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

      const description = `Hire AI employees for your ${location.city} business. 24/7 customer service, lead capture, and automation for restaurants, real estate, and e-commerce in ${location.region}.`;
      const keywords = `AI employees ${location.city}, AI chatbot ${location.city}, business automation ${location.region}, 24/7 customer service ${location.city}, AI assistant UK`;

      setMeta("description", description);
      setMeta("keywords", keywords);
      setMeta("og:title", `AI Employee Solutions in ${location.city} | AI Vized`, true);
      setMeta("og:description", description, true);

      // Inject structured data
      const existingScripts = document.querySelectorAll('script[data-location-schema]');
      existingScripts.forEach(s => s.remove());

      // LocalBusiness Schema
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `AI Vized - ${location.city}`,
        "description": location.description,
        "url": `https://aivized.com/locations/${location.slug}`,
        "telephone": "+44-000-000-0000",
        "email": "myselfzuhaib@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressRegion": location.region,
          "addressCountry": "UK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        },
        "areaServed": location.serviceAreas.map(area => ({
          "@type": "City",
          "name": area
        })),
        "priceRange": "££",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      };

      // FAQ Schema
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": location.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      // Service Schema
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Employee Solutions",
        "provider": {
          "@type": "Organization",
          "name": "AI Vized"
        },
        "areaServed": {
          "@type": "City",
          "name": location.city
        },
        "description": `AI-powered customer service and lead generation for ${location.city} businesses`,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": "149",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "149",
            "priceCurrency": "GBP",
            "unitText": "month"
          }
        }
      };

      [localBusinessSchema, faqSchema, serviceSchema].forEach((schema, idx) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-location-schema", `schema-${idx}`);
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });

      return () => {
        document.title = "AI Vized | Hire AI That Works 24/7 - UK Business Solutions";
        const scripts = document.querySelectorAll('script[data-location-schema]');
        scripts.forEach(s => s.remove());
      };
    }
  }, [location]);

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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-aura">
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{location.city}, {location.region}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              {location.heroTagline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {location.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="btn-primary group"
                onClick={() => scrollToSection("#pricing-cta")}
              >
                Get Your AI Employee
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why AI Vized</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Why {location.city} Businesses Choose Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border/50">
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
      </section>

      {/* Service Coverage Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Areas We Serve</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              AI Employee Coverage in {location.city}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We serve businesses across {location.city} and the wider {location.region} area. Whether you're in the city centre or surrounding neighbourhoods, our AI employees are ready to help.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {location.serviceAreas.map((area, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/50 text-sm"
              >
                <MapPin className="w-3 h-3 text-primary" />
                {area}
              </motion.span>
            ))}
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
              .map((loc, idx) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/1 transition-all group"
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
                From £149/month
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
