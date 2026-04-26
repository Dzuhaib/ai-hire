"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { InternalLinksSection } from "@/components/InternalLinksSection";
import { ServicesSection } from "@/components/ServicesSection";
import {
  PainSkeleton,
  AIShowcaseSkeleton,
  AITiersSkeleton,
  IndustriesSkeleton,
  HowItWorksSkeleton,
  WhyChooseUsSkeleton,
  PricingSkeleton,
  CalculatorSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
  FinalCTASkeleton,
} from "@/components/skeletons/SectionSkeletons";

const PainSection = dynamic(
  () => import("@/components/PainSection").then(m => m.PainSection),
  { loading: () => <PainSkeleton /> }
);
const AIShowcaseSection = dynamic(
  () => import("@/components/AIShowcaseSection").then(m => m.AIShowcaseSection),
  { loading: () => <AIShowcaseSkeleton /> }
);
const AITiersSection = dynamic(
  () => import("@/components/AITiersSection").then(m => m.AITiersSection),
  { loading: () => <AITiersSkeleton /> }
);
const IndustriesSection = dynamic(
  () => import("@/components/IndustriesSection").then(m => m.IndustriesSection),
  { loading: () => <IndustriesSkeleton /> }
);
const HowItWorksSection = dynamic(
  () => import("@/components/HowItWorksSection").then(m => m.HowItWorksSection),
  { loading: () => <HowItWorksSkeleton /> }
);
const WhyChooseUsSection = dynamic(
  () => import("@/components/WhyChooseUsSection").then(m => m.WhyChooseUsSection),
  { loading: () => <WhyChooseUsSkeleton /> }
);
const PricingSection = dynamic(
  () => import("@/components/PricingSection").then(m => m.PricingSection),
  { loading: () => <PricingSkeleton /> }
);
const CostComparisonCalculator = dynamic(
  () => import("@/components/CostComparisonCalculator").then(m => m.CostComparisonCalculator),
  { loading: () => <CalculatorSkeleton /> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection").then(m => m.TestimonialsSection),
  { loading: () => <TestimonialsSkeleton /> }
);
const FAQSection = dynamic(
  () => import("@/components/FAQSection").then(m => m.FAQSection),
  { loading: () => <FAQSkeleton /> }
);
const FinalCTASection = dynamic(
  () => import("@/components/FinalCTASection").then(m => m.FinalCTASection),
  { loading: () => <FinalCTASkeleton /> }
);

const Index = () => {
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
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
        <PainSection />
        <AIShowcaseSection />
        <AITiersSection />
        <IndustriesSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <PricingSection />
        <CostComparisonCalculator />
        <TestimonialsSection />
        <FAQSection />
        <InternalLinksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
