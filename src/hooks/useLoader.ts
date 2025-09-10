"use client";

import { useState, useEffect } from "react";

export function useLoader(initialLoading = true) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  // Auto-stop loading after a minimum duration for better UX
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Minimum 2 seconds for smooth experience

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}

// Hook for page transitions
export function usePageLoader() {
  const [isPageLoading, setIsPageLoading] = useState(false);

  const startPageTransition = () => {
    setIsPageLoading(true);
  };

  const endPageTransition = () => {
    setIsPageLoading(false);
  };

  return {
    isPageLoading,
    startPageTransition,
    endPageTransition,
  };
}

