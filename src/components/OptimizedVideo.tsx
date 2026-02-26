import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface OptimizedVideoProps {
  src: string;
  className?: string;
  /** Priority loading for above-the-fold videos */
  priority?: boolean;
}

/**
 * Simplified video component — no poster images, loads video directly.
 * Respects reduced motion preferences.
 */
export function OptimizedVideo({
  src,
  className = "",
  priority = false,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={`${className} bg-muted/30`} />;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload={priority ? "auto" : "metadata"}
      disablePictureInPicture
      className={`${className} object-cover`}
      aria-label="Video content"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
