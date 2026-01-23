import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { InternalLinksSection } from "@/components/InternalLinksSection";

// Lazy load below-the-fold sections for faster initial load
const AIShowcaseSection = lazy(() => import("@/components/AIShowcaseSection").then(m => ({ default: m.AIShowcaseSection })));
const AITiersSection = lazy(() => import("@/components/AITiersSection").then(m => ({ default: m.AITiersSection })));
const PainSection = lazy(() => import("@/components/PainSection").then(m => ({ default: m.PainSection })));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection").then(m => ({ default: m.IndustriesSection })));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const PricingSection = lazy(() => import("@/components/PricingSection").then(m => ({ default: m.PricingSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <AIShowcaseSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AITiersSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PainSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <IndustriesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <InternalLinksSection />
        <Suspense fallback={<SectionLoader />}>
          <FinalCTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
