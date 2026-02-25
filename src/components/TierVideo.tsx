import { useEffect, useRef, useState } from "react";

type TierVideoProps = {
  /** MP4 source */
  src: string;
  /** Optional WebM source for better compression */
  srcWebm?: string;
  poster?: string;
  className?: string;
};

/**
 * Lazy-loads the video only when it gets close to the viewport.
 * Supports WebM + MP4 fallback for faster loading.
 * Respects prefers-reduced-motion.
 */
export function TierVideo({ src, srcWebm, poster, className }: TierVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
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
        const entry = entries[0];
        if (entry?.isIntersecting) {
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
    // best-effort play (autoplay can be blocked in edge cases)
    void el.play().catch(() => undefined);
  }, [shouldLoad, prefersReducedMotion]);

  // If user prefers reduced motion, show static poster only
  if (prefersReducedMotion && poster) {
    return (
      <img
        src={poster}
        alt="AI colleague preview"
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <video
      ref={ref}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      disablePictureInPicture
      className={className}
      aria-label="AI colleague preview"
    >
      {shouldLoad && srcWebm && <source src={srcWebm} type="video/webm" />}
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
