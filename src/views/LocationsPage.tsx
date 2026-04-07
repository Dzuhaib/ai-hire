"use client";

import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Bot, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { ukLocations } from "@/data/locationData";
import { LocationCardsSkeleton } from "@/components/skeletons/SectionSkeletons";

// City images
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

const LocationsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsLoading(false);
  }, []);

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.aivized.com/locations" }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
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

          {isLoading ? (
            <LocationCardsSkeleton count={ukLocations.length} />
          ) : (
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
                  href={`/locations/${location.slug}`}
                  className="group block h-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  <div className="relative h-full card-premium overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={cityImages[location.slug] || aiLondon}
                        alt={`AI assistant for ${location.city}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-1 text-xs rounded-md bg-card/90 text-foreground/80 font-medium border border-border/60">
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
          )}
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
              <Link href="/pricing">
                <Button size="lg" className="btn-primary">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/#contact">
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
