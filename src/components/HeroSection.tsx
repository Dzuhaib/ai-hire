import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { Zap, Clock, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-32 lg:pt-36 bg-background">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="container-narrow relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8 shadow-lg shadow-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">Fully Managed AI Chatbot — From £29/month</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-8 text-balance">
            Hire a Fully Managed{" "}
            <span className="text-gradient relative">AI Chatbot</span>
            {" "}for Your Small Business
            <br />
            <span className="text-gradient-accent">We Install & Handle Everything 24/7</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Get your AI colleague today—we install, monitor, and maintain everything so you can focus on lead generation. 
            No technical skills needed. No developers. No downtime.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-12">
            3-day free trial, then from just <Link to="/#pricing" className="text-primary hover:underline">£29/month</Link>. Capture leads 24/7. Available across all <Link to="/locations" className="text-primary hover:underline">UK cities</Link>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <MagneticButton
              className="btn-primary text-sm px-10 py-5 group"
              onClick={() => scrollToSection("#pricing")}
            >
              <span>Start 3-Day Free Trial</span>
              <Zap className="w-4 h-4 ml-2 inline-block group-hover:animate-pulse" />
            </MagneticButton>

            <button onClick={() => scrollToSection("#how-it-works")} className="btn-secondary">
              See How It Works
              <svg className="w-4 h-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>We manage everything</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Available 24 hours</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>30% more conversions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
