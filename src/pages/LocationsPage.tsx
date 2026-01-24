import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Bot, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { ukLocations } from "@/data/locationData";

// City images
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
};

const LocationsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    // Inject breadcrumb structured data
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
          "name": "Locations",
          "item": "https://aivized.com/locations"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-breadcrumb-schema", "true");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[data-breadcrumb-schema]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="AI Chatbot Service UK Cities | Managed from £29/month"
        description="Managed AI chatbot for London, Manchester, Birmingham & UK cities. 24/7 lead capture, no technical skills needed. Get started from £29/month."
        keywords="AI chatbot service London, managed AI chatbot Manchester, AI assistant Birmingham, small business chatbot Leeds, lead gen chatbot Glasgow, 24/7 customer support chatbot UK"
        canonical="https://aivized.com/locations"
        ogTitle="AI Chatbot Service Across UK Cities | AIVized"
        ogDescription="Managed AI chatbot for UK cities. 24/7 lead capture from £29/month."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-aura">
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">UK-Wide Coverage</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Managed AI Chatbot for{" "}
              <span className="text-gradient">UK Small Businesses</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              From London to Edinburgh—get a fully managed AI chatbot for lead generation. We install everything, no technical skills needed.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                500+ UK businesses
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

      {/* Locations Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Locations</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              AI Chatbot Service by <span className="text-gradient">City</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukLocations.map((location, idx) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/locations/${location.slug}`}
                  className="group block h-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  <div className="relative h-full card-premium overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cityImages[location.slug] || aiLondon}
                        alt={`AI assistant for ${location.city}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium border border-primary/30">
                          {location.region}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                          {location.city}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {location.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>Population: {location.population}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">UK-Based Support</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Don't See Your City?
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              We serve businesses across the entire UK. Whether you're in a major city or a smaller town, our AI employees are ready to help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#pricing">
                <Button size="lg" className="btn-primary">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              From <span className="text-primary font-semibold">£29/month</span> • No contracts • 24-hour setup
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationsPage;
