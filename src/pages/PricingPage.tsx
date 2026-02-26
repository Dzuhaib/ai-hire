import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageMeta } from "@/components/PageMeta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { CostComparisonCalculator } from "@/components/CostComparisonCalculator";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { Zap } from "lucide-react";
import pricingHero from "@/assets/pricing-hero.png";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.aivized.com/pricing" }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="AI Chatbot Pricing UK | Managed from £29/month | AIVized"
        description="Transparent AI chatbot pricing for UK small businesses. Fully managed from £29/month. No technical skills needed, 24/7 support included."
        keywords="AI chatbot pricing UK, managed AI chatbot cost, affordable chatbot service, lead generation chatbot price, small business AI pricing"
        canonical="https://www.aivized.com/pricing"
        ogTitle="AI Chatbot Pricing UK | Managed from £29/month | AIVized"
        ogDescription="Transparent AI chatbot pricing for UK small businesses. Fully managed from £29/month."
        schema={breadcrumbSchema}
      />
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-aura">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
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
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
                  <img
                    src={pricingHero}
                    alt="Transparent AI chatbot pricing plans"
                    className="w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
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

      <RelatedPagesSection 
        currentPage="pricing"
        title="Explore Our Services"
        subtitle="Discover AI chatbot solutions across UK cities and industries"
      />
      
      <Footer />
    </div>
  );
};

export default PricingPage;
