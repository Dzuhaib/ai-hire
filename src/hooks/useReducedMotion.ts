import { useState, useEffect } from "react";

/**
 * Hook to detect if user prefers reduced motion.
 * Checks:
 * 1. URL query param: ?performance=low
 * 2. localStorage: performance-mode === 'low'
 * 3. OS prefers-reduced-motion media query
 * 
 * Returns true if ANY of these conditions are met.
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check query param
    const params = new URLSearchParams(window.location.search);
    const perfParam = params.get("performance");
    if (perfParam === "low") {
      setReducedMotion(true);
      return;
    }

    // Check localStorage
    const storedPref = localStorage.getItem("performance-mode");
    if (storedPref === "low") {
      setReducedMotion(true);
      return;
    }

    // Check OS preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}

/**
 * Toggle performance mode in localStorage.
 * Call with 'low' to disable heavy animations, 'high' to enable them.
 */
export function setPerformanceMode(mode: "low" | "high"): void {
  if (mode === "low") {
    localStorage.setItem("performance-mode", "low");
  } else {
    localStorage.removeItem("performance-mode");
  }
  // Reload to apply changes
  window.location.reload();
}
