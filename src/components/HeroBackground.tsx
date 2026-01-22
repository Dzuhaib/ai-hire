import { useEffect, useRef, useCallback, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface HeroBackgroundProps {
  mouseX: number;
  mouseY: number;
}

/**
 * AI Neural Network background with particles that respond to cursor movement.
 * Creates the effect of an interconnected AI brain responding to user interaction.
 */
export function HeroBackground({ mouseX, mouseY }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const particleCount = isMobile ? 60 : 120;
  const connectionDistance = isMobile ? 100 : 160;
  const mouseInfluenceRadius = 280;

  // Check for reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.6 + 0.3,
      });
    }
    particlesRef.current = particles;
  }, [particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initParticles(rect.width, rect.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // If user prefers reduced motion, draw static frame only
    if (prefersReducedMotion) {
      drawFrame(ctx, canvas, false);
      return;
    }

    const animate = () => {
      drawFrame(ctx, canvas, true);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [mouseX, mouseY, connectionDistance, mouseInfluenceRadius, prefersReducedMotion]);

  const drawFrame = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, animated: boolean) => {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Primary color RGB (teal: 32, 211, 195)
    const primaryR = 32;
    const primaryG = 211;
    const primaryB = 195;

    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;

    // Update and draw particles
    particles.forEach((p, i) => {
      if (animated) {
        // Mouse influence - particles are gently attracted by cursor
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseInfluenceRadius) {
            const force = (mouseInfluenceRadius - dist) / mouseInfluenceRadius;
            p.vx += (dx / dist) * force * 0.025;
            p.vy += (dy / dist) * force * 0.025;
          }
        }

        // Apply velocity with damping
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;

        // Boundary wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Draw particle with glow
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
      gradient.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${p.opacity})`);
      gradient.addColorStop(0.5, `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${p.opacity * 0.3})`);
      gradient.addColorStop(1, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0)`);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw connections (neural network effect)
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Extra bright connections to cursor
      if (animated && mouseX > 0 && mouseY > 0) {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluenceRadius) {
          const opacity = (1 - dist / mouseInfluenceRadius) * 0.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    });

    // Draw cursor glow hub
    if (animated && mouseX > 0 && mouseY > 0) {
      const cursorGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100);
      cursorGradient.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.25)`);
      cursorGradient.addColorStop(0.5, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.08)`);
      cursorGradient.addColorStop(1, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0)`);
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2);
      ctx.fillStyle = cursorGradient;
      ctx.fill();

      // Central cursor dot
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.8)`;
      ctx.fill();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
