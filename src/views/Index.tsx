"use client";

import { lazy, Suspense, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { InternalLinksSection } from "@/components/InternalLinksSection";
import {
  PainSkeleton,
  AIShowcaseSkeleton,
  AITiersSkeleton,
  IndustriesSkeleton,
  HowItWorksSkeleton,
  PricingSkeleton,
  CalculatorSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
  FinalCTASkeleton,
} from "@/components/skeletons/SectionSkeletons";

// Lazy load below-the-fold sections for faster initial load
const AIShowcaseSection = lazy(() => import("@/components/AIShowcaseSection").then(m => ({ default: m.AIShowcaseSection })));
const AITiersSection = lazy(() => import("@/components/AITiersSection").then(m => ({ default: m.AITiersSection })));
const PainSection = lazy(() => import("@/components/PainSection").then(m => ({ default: m.PainSection })));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection").then(m => ({ default: m.IndustriesSection })));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const PricingSection = lazy(() => import("@/components/PricingSection").then(m => ({ default: m.PricingSection })));
const CostComparisonCalculator = lazy(() => import("@/components/CostComparisonCalculator").then(m => ({ default: m.CostComparisonCalculator })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection").then(m => ({ default: m.FinalCTASection })));


const Index = () => {
  // Handle hash-based navigation on initial load and route changes
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      // Try scrolling immediately, then retry with delays for lazy-loaded content
      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Immediate attempt
      if (!scrollToHash()) {
        // Retry after short delays to wait for lazy-loaded sections
        const timeouts = [100, 300, 600, 1000];
        timeouts.forEach((delay) => {
          setTimeout(() => {
            scrollToHash();
          }, delay);
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<PainSkeleton />}>
          <PainSection />
        </Suspense>
        <Suspense fallback={<AIShowcaseSkeleton />}>
          <AIShowcaseSection />
        </Suspense>
        <Suspense fallback={<AITiersSkeleton />}>
          <AITiersSection />
        </Suspense>
        <Suspense fallback={<IndustriesSkeleton />}>
          <IndustriesSection />
        </Suspense>
        <Suspense fallback={<HowItWorksSkeleton />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<PricingSkeleton />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<CalculatorSkeleton />}>
          <CostComparisonCalculator />
        </Suspense>
        <Suspense fallback={<TestimonialsSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<FAQSkeleton />}>
          <FAQSection />
        </Suspense>
        <InternalLinksSection />
        <Suspense fallback={<FinalCTASkeleton />}>
          <FinalCTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
