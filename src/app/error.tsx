"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-serif font-semibold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground/50 mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
