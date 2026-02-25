import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
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
const CostComparisonCalculator = lazy(() => import("@/components/CostComparisonCalculator").then(m => ({ default: m.CostComparisonCalculator })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

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

// Generate consolidated @graph schema to prevent duplicate field errors in Google Search Console
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
      "@type": "WebSite",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "description": "Managed AI chatbot service for UK small businesses from £29/month."
    }
  ]
};

const Index = () => {
  const location = useLocation();

  // Handle hash-based navigation on initial load and route changes
  useEffect(() => {
    const hash = location.hash;
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
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="Managed AI Chatbot for Small Business UK | AIVized From £29/mo"
        description="Get a fully managed AI chatbot for your UK small business from £29/month. 24/7 lead generation, we install everything—no technical skills needed."
        canonical="https://www.aivized.com/"
        keywords="managed AI chatbot service, AI chatbot for small business UK, lead generation chatbot UK, 24/7 customer support chatbot, affordable AI chatbot, fully managed chatbot, AIVized"
        schema={homepageSchema}
      />
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <PainSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AIShowcaseSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AITiersSection />
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
          <CostComparisonCalculator />
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
