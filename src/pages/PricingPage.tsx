import { useEffect } from "react";
import { PageMeta } from "@/components/PageMeta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { CostComparisonCalculator } from "@/components/CostComparisonCalculator";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";

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
      
      <main className="pt-20">
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
