"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Users, Clock, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTASection } from "@/components/FinalCTASection";
import { LocationHubVisual, LocationVisual } from "@/components/visuals/LandingVisuals";

import { uaeLocations } from "@/data/locationData";
import { LocationCardsSkeleton } from "@/components/skeletons/SectionSkeletons";

const LocationsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">UAE-Wide Coverage</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-6">
                AI Automation Services Across the UAE
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From Dubai to Abu Dhabi, get one partner for AI systems, automations, SEO and GEO, digital
                marketing, web development, and desktop software.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  UAE-wide coverage
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Remote delivery
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  UAE data protection
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block"
            >
              <LocationHubVisual />
            </motion.div>
          </div>
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
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
              Digital Services by <span className="text-gradient">City</span>
            </h2>
          </motion.div>

          {isLoading ? (
            <LocationCardsSkeleton count={uaeLocations.length} />
          ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uaeLocations.map((location, idx) => (
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
                    {/* Visual */}
                    <div className="relative h-48 overflow-hidden bg-secondary/30 p-3">
                      <LocationVisual city={location.city} />
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
                        AI, automation, SEO and GEO, marketing, web development, and desktop software for
                        businesses in {location.city}.
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

      <FinalCTASection />

      <Footer />
    </div>
  );
};

export default LocationsPage;
