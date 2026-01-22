import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AIShowcaseSection } from "@/components/AIShowcaseSection";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AIShowcaseSection />
        <SolutionSection />
        <IndustriesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
