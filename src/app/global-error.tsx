"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en-GB">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-white text-black">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-semibold mb-4">Something went wrong</h1>
            <p className="text-gray-500 mb-8">
              An unexpected error occurred. Please try again or return to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
              >
                Try again
              </button>
              <a
                href="/"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
