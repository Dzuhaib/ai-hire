"use client";

import Image from 'next/image';
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { CostComparisonCalculator } from "@/components/CostComparisonCalculator";

import { Zap } from "lucide-react";
const pricingHero = "/assets/pricing-hero.png";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const pricingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.aivized.com/pricing" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.aivized.com/#service",
        "name": "Managed AI Chatbot Service",
        "description": "Fully managed AI chatbot service for UK small businesses. We install, configure, monitor and optimise your chatbot 24/7. No technical skills required.",
        "url": "https://www.aivized.com/pricing",
        "provider": { "@id": "https://www.aivized.com/#organization" },
        "areaServed": { "@type": "Country", "name": "United Kingdom" },
        "serviceType": "AI Chatbot Managed Service",
        "category": "Software as a Service",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AIVized Pricing Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Starter Plan",
              "description": "Perfect for small businesses wanting 24/7 lead capture. We handle everything.",
              "url": "https://www.aivized.com/pricing",
              "price": "29",
              "priceCurrency": "GBP",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "29",
                "priceCurrency": "GBP",
                "unitCode": "MON",
                "billingIncrement": 1
              },
              "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Professional Plan",
              "description": "For growing businesses. Full customisation with priority managed support.",
              "url": "https://www.aivized.com/pricing",
              "price": "79",
              "priceCurrency": "GBP",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "79",
                "priceCurrency": "GBP",
                "unitCode": "MON",
                "billingIncrement": 1
              },
              "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Business Plan",
              "description": "Enterprise-grade managed AI with dedicated account manager. Unlimited conversations and custom integrations.",
              "url": "https://www.aivized.com/pricing",
              "price": "149",
              "priceCurrency": "GBP",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "149",
                "priceCurrency": "GBP",
                "unitCode": "MON",
                "billingIncrement": 1
              },
              "eligibleRegion": { "@type": "Country", "name": "United Kingdom" },
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Transparent Pricing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
                Simple, Affordable <span className="text-gradient">AI Pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                No hidden fees, no long-term contracts. Choose the plan that fits your business and we'll handle the rest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image
                    src={pricingHero}
                    alt="Transparent AI chatbot pricing plans"
                    width={1200}
                    height={675}
                    priority
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main>
        <PricingSection />
        <CostComparisonCalculator />
      </main>

      
      <Footer />
    </div>
  );
};

export default PricingPage;
