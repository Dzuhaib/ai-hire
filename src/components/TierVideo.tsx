import { useEffect, useRef, useState } from "react";

type TierVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Lazy-loads the video only when it gets close to the viewport.
 * This avoids downloading 4 MP4s on initial page load.
 */
export function TierVideo({ src, poster, className }: TierVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

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
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldLoad) return;
    // best-effort play (autoplay can be blocked in edge cases)
    void el.play().catch(() => undefined);
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      disablePictureInPicture
      className={className}
      aria-label="AI colleague preview"
    />
  );
}
