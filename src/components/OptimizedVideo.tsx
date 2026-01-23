import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Priority loading for above-the-fold videos */
  priority?: boolean;
}

/**
 * Highly optimized video component:
 * - Lazy loads video only when near viewport
 * - Respects reduced motion preferences
 * - Falls back to static poster for accessibility
 * - Minimal DOM until needed
 */
export function OptimizedVideo({
  src,
  poster,
  className = "",
  priority = false,
}: OptimizedVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || prefersReducedMotion) return;

    // Play video when it enters viewport
    const playObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          video.play().catch(() => undefined);
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [shouldLoad, prefersReducedMotion]);

  // Show static image if reduced motion is preferred
  if (prefersReducedMotion && poster) {
    return (
      <img
        src={poster}
        alt="Video preview"
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div ref={ref} className={className}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          poster={poster}
          loop
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          className="w-full h-full object-cover"
          aria-label="Video content"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : poster ? (
        <img
          src={poster}
          alt="Video preview"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-muted/30" />
      )}
    </div>
  );
}
