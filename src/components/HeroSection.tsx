import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { HeroBackground } from "./HeroBackground";
import { Zap, Clock, TrendingUp, Bot, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position relative to the hero section
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePos({ x: 0, y: 0 });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile, prefersReducedMotion]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  // Parallax offset based on mouse position
  const getParallax = (strength: number) => {
    if (isMobile || prefersReducedMotion || !isHovering) return { x: 0, y: 0 };
    const centerX = (sectionRef.current?.clientWidth || 0) / 2;
    const centerY = (sectionRef.current?.clientHeight || 0) / 2;
    return {
      x: (mousePos.x - centerX) * strength,
      y: (mousePos.y - centerY) * strength,
    };
  };

  // Reduced floating elements for better mobile performance
  const floatingElements = isMobile ? [] : [
    { icon: Bot, delay: 0, x: "8%", y: "25%", label: "Fully Managed" },
    { icon: MessageCircle, delay: 0.3, x: "88%", y: "20%", label: "24/7 Chat" },
    { icon: TrendingUp, delay: 0.6, x: "12%", y: "72%", label: "+30% Leads" },
    { icon: Zap, delay: 0.9, x: "85%", y: "70%", label: "£29/mo" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-32 lg:pt-36 bg-background"
    >
      {/* Interactive Neural Network Background - the ONLY background effect */}
      <HeroBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Subtle top-to-bottom fade for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />

      {/* Floating feature cards with parallax - desktop only */}
      {floatingElements.map((item, index) => {
        const parallax = getParallax(0.02 + index * 0.008);
        return (
          <motion.div
            key={index}
            className="absolute hidden md:flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-2xl bg-card/70 backdrop-blur-md border border-primary/30 shadow-xl shadow-primary/10"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: parallax.x,
              y: parallax.y,
            }}
            transition={{
              opacity: { delay: item.delay + 0.3, duration: 0.4 },
              scale: { delay: item.delay + 0.3, duration: 0.4 },
              x: { duration: 0.15, ease: "easeOut" },
              y: { duration: 0.15, ease: "easeOut" },
            }}
          >
            <item.icon className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium text-foreground/90">{item.label}</span>
          </motion.div>
        );
      })}

      {/* Main content */}
      <div className="container-narrow relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{
            x: getParallax(0.008).x,
            y: getParallax(0.008).y,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-sm mb-8 shadow-lg shadow-primary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">Fully Managed AI Chatbot — From £29/month</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-8 text-balance"
          >
            Get a Fully Managed AI Chatbot That Works{" "}
            <span className="text-gradient relative">
              24/7
            </span>
            <br />
            <span className="text-gradient-accent">We Handle Everything</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            We install, monitor, and maintain your <Link to="/industries" className="text-primary hover:underline">AI chatbot</Link> so you can focus on your business. 
            No developers. No technical hassle. No downtime.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-12"
          >
            From just <Link to="/#pricing" className="text-primary hover:underline">£29/month</Link>. No contracts. No complicated setup. Available across all <Link to="/locations" className="text-primary hover:underline">UK cities</Link>.
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
              <span>Get Your AI Chatbot Now</span>
              <Zap className="w-4 h-4 ml-2 inline-block group-hover:animate-pulse" />
            </MagneticButton>

            <button onClick={() => scrollToSection("#how-it-works")} className="btn-secondary">
              See How It Works
              <svg
                className="w-4 h-4 ml-2 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
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
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Enhanced cursor spotlight effect */}
      {!isMobile && !prefersReducedMotion && isHovering && (
        <motion.div
          className="absolute pointer-events-none z-20"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
        </motion.div>
      )}
    </section>
  );
};
