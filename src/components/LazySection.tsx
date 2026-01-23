import { Suspense, lazy, ComponentType } from "react";

/**
 * Lightweight loading placeholder for lazy-loaded sections.
 * Minimal DOM, no animations to keep it ultra-fast.
 */
const SectionSkeleton = () => (
  <div className="min-h-[300px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

/**
 * HOC to lazy load a section component with a lightweight fallback.
 */
export function lazySection<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) {
  const LazyComponent = lazy(importFn);
  
  return function LazySectionWrapper(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={<SectionSkeleton />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
