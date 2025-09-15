"use client";

import { useEffect, useState } from "react";

interface ScreenSize {
  width: number;
  height: number;
  lessThan: (breakpoint: string) => boolean;
  greaterThan: (breakpoint: string) => boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
    lessThan: () => false,
    greaterThan: () => false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const lessThan = (breakpoint: string) => {
        const bp = breakpoints[breakpoint as keyof typeof breakpoints];
        return bp ? width < bp : false;
      };

      const greaterThan = (breakpoint: string) => {
        const bp = breakpoints[breakpoint as keyof typeof breakpoints];
        return bp ? width >= bp : false;
      };

      setScreenSize({
        width,
        height,
        lessThan,
        greaterThan,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Set initial size
    updateScreenSize();

    // Add event listener
    window.addEventListener("resize", updateScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}
