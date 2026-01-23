import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Placeholder blur color or low-res image */
  placeholder?: string;
  /** Priority loading (for above-the-fold images) */
  priority?: boolean;
}

/**
 * Optimized image component with:
 * - Native lazy loading
 * - Intersection Observer for smarter loading
 * - Fade-in animation on load
 * - Placeholder support
 */
export function OptimizedImage({
  src,
  alt,
  placeholder,
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholder || "hsl(var(--muted) / 0.3)",
      }}
    >
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
    </div>
  );
}
