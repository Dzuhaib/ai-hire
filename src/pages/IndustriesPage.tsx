import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Layers3, ArrowRight, Bot, Users, Clock, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { allIndustries } from "@/data/industryData";

import aiRestaurantHero from "@/assets/industries/ai-restaurant-hero.png";
import aiRealEstateHero from "@/assets/industries/ai-realestate-hero.png";
import aiEcommerceHero from "@/assets/industries/ai-ecommerce-hero.png";

const IndustriesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const industryImages = useMemo<Record<string, string>>(
    () => ({
      restaurants: aiRestaurantHero,
      "real-estate": aiRealEstateHero,
      ecommerce: aiEcommerceHero,
    }),
    [],
  );

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aivized.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://aivized.com/industries" }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI Chatbot for Restaurants, Real Estate & E-Commerce UK</title>
        <meta name="description" content="Industry-trained managed AI chatbots for restaurants, real estate & e-commerce. Capture leads 24/7, from £29/month. No technical skills needed." />
        <meta name="keywords" content="restaurant AI chatbot, real estate AI assistant, ecommerce AI chatbot, lead generation chatbot UK, managed AI chatbot service, 24/7 customer support chatbot UK" />
        <link rel="canonical" href="https://aivized.com/industries" />
        <meta property="og:url" content="https://aivized.com/industries" />
        <meta property="og:title" content="AI Chatbot for Restaurants, Real Estate & E-Commerce UK" />
        <meta property="og:description" content="Industry-trained managed AI chatbots for restaurants, real estate & e-commerce. Capture leads 24/7, from £29/month." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-aura">
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <Layers3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industry-Trained AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              AI Employees for <span className="text-gradient">Every Industry</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose an industry solution built around your customers’ questions and your team’s workflow—then launch in 24 hours.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Industry-trained flows
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

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Industries</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Lead Generation Chatbot by <span className="text-gradient">Industry</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIndustries.map((industry, idx) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/${industry.slug}`}
                  className="group block h-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                >
                  <div className="relative h-full card-premium overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={industryImages[industry.slug] || aiRestaurantHero}
                        alt={`AI assistant for ${industry.industry}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium border border-primary/30">
                          {industry.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                          {industry.industry}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{industry.description}</p>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary font-semibold">From £29/month</span> • 24-hour setup
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <span className="text-sm font-medium text-primary">Ready to launch?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Pick a plan and we’ll set it up</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe, share your website details securely, and we’ll install your AI employee within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#pricing">
                <Button size="lg" className="btn-primary">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
