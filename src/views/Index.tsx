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

// Homepage FAQ data for JSON-LD schema
const homepageFaqs = [
  { question: "What is a managed AI chatbot service?", answer: "A managed AI chatbot service means we handle everything—installation, configuration, 24/7 monitoring, and ongoing updates. Unlike DIY chatbot builders, our managed AI chatbot service requires no technical skills from your side. We install, you benefit. Perfect for UK small businesses who want to capture leads 24/7 without the hassle." },
  { question: "How much does an affordable AI chatbot for website cost?", answer: "Our affordable AI chatbot for website starts from just £29/month—making it the cheapest managed AI chatbot UK businesses can find. No upfront costs, no developers needed, no long-term contracts." },
  { question: "How can I capture leads on my website 24/7?", answer: "Our lead generation chatbot UK businesses trust works around the clock. It engages visitors, answers questions, and captures qualified leads automatically—even at 3am. Reduce missed leads from your website and never lose another customer enquiry." },
  { question: "Is this AI chatbot for small business UK suitable for my company?", answer: "Yes! Our AI chatbot for small business UK is designed specifically for SMEs across restaurants, real estate, and e-commerce. Whether you're in London, Manchester, or Birmingham—our managed solution handles customer enquiries so you can focus on running your business." },
  { question: "How does your AI chatbot provide 24/7 customer support?", answer: "Our 24/7 customer support chatbot UK handles customer queries any time of day or night. It's monitored by our team and continuously improved. When it encounters a question it can't answer, it captures the customer's details and escalates to you immediately—you never lose a lead." },
  { question: "Can this chatbot help me automate customer inquiries for my small business?", answer: "Absolutely. Our AI is trained to automate customer inquiries for small businesses—answering FAQs, capturing lead details, and providing instant responses. This frees up your time while ensuring every visitor gets immediate attention." },
  { question: "What makes AIVized the best chatbot for small business UK 2025?", answer: "Unlike basic chatbots, AIVized is a fully managed service. We install everything on your website, monitor performance 24/7, and continuously optimise responses. Combined with our affordable pricing from £29/month, we're proud to be considered among the best chatbot for small business UK in 2025." },
  { question: "How does AIVized compare to Intercom alternatives for small business?", answer: "Looking for Intercom alternatives for small business? AIVized offers similar AI capabilities at a fraction of the cost—without the complexity. We're fully managed, so there's no setup learning curve. From £29/month vs hundreds with enterprise tools, we're the smart choice for UK SMEs." },
];

// Homepage @graph schema — consolidated to prevent duplicate field errors in Google Search Console
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": homepageFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      // WebSite — SearchAction removed: target URL was a non-functional SPA route
      "@type": "WebSite",
      "@id": "https://www.aivized.com/#website",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "description": "Managed AI chatbot service for UK small businesses from £29/month.",
      "publisher": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aivized.com/favicon.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.aivized.com/og-image.png",
      "email": "aivized.com@gmail.com",
      "description": "Fully managed AI chatbot service for UK small businesses. 24/7 lead generation from £29/month.",
      "foundingDate": "2025",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "aivized.com@gmail.com",
        "availableLanguage": "English",
        "areaServed": "GB"
      },
      "sameAs": [
        "https://www.linkedin.com/company/aivized",
        "https://twitter.com/aivized",
        "https://www.facebook.com/aivized",
        "https://www.instagram.com/aivized"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.aivized.com/#product",
      "name": "AIVized AI Chatbot",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Fully managed AI chatbot for UK small businesses. Handles 24/7 lead generation, customer enquiries, and appointment booking. Installed and managed by AIVized.",
      "url": "https://www.aivized.com",
      "provider": { "@id": "https://www.aivized.com/#organization" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "29",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "GBP",
            "unitCode": "MON"
          }
        },
        {
          "@type": "Offer",
          "name": "Professional",
          "price": "79",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "79",
            "priceCurrency": "GBP",
            "unitCode": "MON"
          }
        },
        {
          "@type": "Offer",
          "name": "Business",
          "price": "149",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "149",
            "priceCurrency": "GBP",
            "unitCode": "MON"
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.aivized.com/#localbusiness",
      "name": "AIVized - Managed AI Chatbot Service",
      "url": "https://www.aivized.com",
      "email": "aivized.com@gmail.com",
      "description": "Fully managed AI chatbot service for UK small businesses. We install, monitor, and optimise your chatbot 24/7.",
      "priceRange": "£29 - £149/month",
      "image": "https://www.aivized.com/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressLocality": "London"
      },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Manchester" },
        { "@type": "City", "name": "Birmingham" },
        { "@type": "City", "name": "Leeds" },
        { "@type": "City", "name": "Glasgow" },
        { "@type": "City", "name": "Edinburgh" },
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Bristol" },
        { "@type": "City", "name": "Sheffield" },
        { "@type": "City", "name": "Newcastle" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "parentOrganization": { "@id": "https://www.aivized.com/#organization" }
    }
  ]
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
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
