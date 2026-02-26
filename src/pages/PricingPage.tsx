import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>AI Chatbot Pricing UK | Managed from £29/month | AIVized</title>
        <meta name="description" content="Transparent AI chatbot pricing for UK small businesses. Fully managed from £29/month. No technical skills needed, 24/7 support included." />
        <meta name="keywords" content="AI chatbot pricing UK, managed AI chatbot cost, affordable chatbot service, lead generation chatbot price, small business AI pricing" />
        <link rel="canonical" href="https://www.aivized.com/pricing" />
        <meta property="og:url" content="https://www.aivized.com/pricing" />
        <meta property="og:title" content="AI Chatbot Pricing UK | Managed from £29/month | AIVized" />
        <meta property="og:description" content="Transparent AI chatbot pricing for UK small businesses. Fully managed from £29/month." />
        <script type="application/ld+json" id="page-structured-data">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
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
