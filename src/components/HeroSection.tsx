import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { HeroBackground } from "./HeroBackground";
import { Sparkles, Zap, Clock, TrendingUp, Bot, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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

  const floatingElements = [
    { icon: Bot, delay: 0, x: "8%", y: "25%", label: "AI Ready" },
    { icon: MessageCircle, delay: 0.5, x: "88%", y: "20%", label: "24/7 Chat" },
    { icon: TrendingUp, delay: 1, x: "12%", y: "72%", label: "+30% Leads" },
    { icon: Zap, delay: 1.5, x: "85%", y: "70%", label: "Instant" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-32 lg:pt-36"
    >
      {/* Interactive Neural Network Background */}
      {!isMobile && !prefersReducedMotion && (
        <HeroBackground mouseX={mousePos.x} mouseY={mousePos.y} />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Animated glow orbs that follow cursor slightly */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          left: "20%",
          top: "20%",
        }}
        animate={
          !prefersReducedMotion
            ? {
                x: getParallax(0.03).x,
                y: getParallax(0.03).y,
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }
            : {}
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
          right: "15%",
          bottom: "25%",
        }}
        animate={
          !prefersReducedMotion
            ? {
                x: getParallax(-0.02).x,
                y: getParallax(-0.02).y,
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
              }
            : {}
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating feature cards with parallax */}
      {floatingElements.map((item, index) => {
        const parallax = getParallax(0.015 + index * 0.005);
        return (
          <motion.div
            key={index}
            className="absolute hidden md:flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-2xl bg-card/60 backdrop-blur-md border border-primary/20 shadow-xl"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: parallax.x,
              y: prefersReducedMotion ? 0 : [parallax.y, parallax.y - 8, parallax.y],
            }}
            transition={{
              opacity: { delay: item.delay + 0.5, duration: 0.5 },
              scale: { delay: item.delay + 0.5, duration: 0.5, type: "spring" },
              y: { delay: item.delay + 1, duration: 3, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <item.icon className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium text-foreground/80">{item.label}</span>
          </motion.div>
        );
      })}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="container-narrow relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{
            x: getParallax(0.01).x,
            y: getParallax(0.01).y,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 shadow-lg shadow-primary/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">Your AI Colleague — Works 24/7</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-8 text-balance"
          >
            Hire an AI Employee That Works{" "}
            <span className="text-gradient relative">
              24/7
              <motion.span
                className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            <br />
            <span className="text-gradient-accent">Without Hiring Anyone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            You don't need to hire another staff member or pay a full salary. Your AI colleague works
            round the clock for a fraction of the cost.
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
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Cursor spotlight effect on desktop */}
      {!isMobile && !prefersReducedMotion && isHovering && (
        <motion.div
          className="absolute pointer-events-none z-20"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>
      )}
    </section>
  );
};
