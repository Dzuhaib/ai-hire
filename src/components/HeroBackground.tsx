import { useEffect, useRef, useCallback } from "react";
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

  const particleCount = isMobile ? 40 : 80;
  const connectionDistance = isMobile ? 100 : 150;
  const mouseInfluenceRadius = 200;

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
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
      const dpr = window.devicePixelRatio || 1;
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

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Primary color in HSL (174, 72%, 50%) -> RGB approx (32, 211, 195)
    const primaryR = 32;
    const primaryG = 211;
    const primaryB = 195;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach((p, i) => {
        // Mouse influence - particles are attracted/repelled by cursor
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseInfluenceRadius) {
            const force = (mouseInfluenceRadius - dist) / mouseInfluenceRadius;
            // Gentle attraction toward cursor
            p.vx += (dx / dist) * force * 0.02;
            p.vy += (dy / dist) * force * 0.02;
          }
        }

        // Apply velocity with damping
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        // Boundary wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${p.opacity})`);
        gradient.addColorStop(1, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0)`);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections (neural network effect)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Extra glow connections to cursor
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseInfluenceRadius) {
            const opacity = (1 - dist / mouseInfluenceRadius) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Draw cursor glow
      if (mouseX > 0 && mouseY > 0) {
        const cursorGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 80);
        cursorGradient.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0.15)`);
        cursorGradient.addColorStop(1, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0)`);
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 80, 0, Math.PI * 2);
        ctx.fillStyle = cursorGradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [mouseX, mouseY, connectionDistance, mouseInfluenceRadius]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
