import { useEffect, useRef, useState } from "react";

type TierVideoProps = {
  src: string;
  srcWebm?: string;
  className?: string;
};

/**
 * Simplified tier video — no poster, loads directly for speed.
 * Respects prefers-reduced-motion.
 */
export function TierVideo({ src, srcWebm, className }: TierVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldLoad || prefersReducedMotion) return;
    void el.play().catch(() => undefined);
  }, [shouldLoad, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={`${className} bg-muted/30`} />;
  }

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      className={className}
      aria-label="AI colleague preview"
    >
      {shouldLoad && srcWebm && <source src={srcWebm} type="video/webm" />}
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
