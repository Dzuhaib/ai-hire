import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Sparkles, Zap, Clock, TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingElements = [
    { icon: Zap, delay: 0, x: "10%", y: "20%" },
    { icon: Clock, delay: 0.5, x: "85%", y: "25%" },
    { icon: TrendingUp, delay: 1, x: "15%", y: "70%" },
    { icon: Sparkles, delay: 1.5, x: "80%", y: "75%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-32 lg:pt-36">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Animated orbs - simplified on mobile for performance */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}
      
      {/* Static orbs for mobile - no animation, reduced blur */}
      {isMobile && (
        <>
          <div 
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-2xl opacity-30"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)" }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full blur-2xl opacity-30"
            style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)" }}
          />
        </>
      )}

      {/* Floating particles - only on desktop */}
      {!isMobile && [...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating icons */}
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { delay: item.delay + 0.5, duration: 0.5 },
            scale: { delay: item.delay + 0.5, duration: 0.5 },
            y: { delay: item.delay + 1, duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <item.icon className="w-6 h-6 text-primary" />
        </motion.div>
      ))}
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your AI Colleague — Works 24/7</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-8 text-balance"
          >
            Hire an AI Employee That Works{" "}
            <span className="text-gradient">24/7</span>
            <br />
            <span className="text-gradient-accent">Without Hiring Anyone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            You don't need to hire another staff member or pay a full salary. 
            Your AI colleague works round the clock for a fraction of the cost.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-12"
          >
            No contracts. No complicated setup. No technical skills needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton
              className="btn-primary text-sm px-10 py-5 group"
              onClick={() => scrollToSection("#pricing")}
            >
              <span>Rent Your AI Colleague Now</span>
              <Zap className="w-4 h-4 ml-2 inline-block group-hover:animate-pulse" />
            </MagneticButton>
            
            <button
              onClick={() => scrollToSection("#how-it-works")}
              className="btn-secondary"
            >
              See How It Works
              <svg className="w-4 h-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>500+ businesses automated</span>
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
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};