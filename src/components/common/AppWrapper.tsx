"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  // Disable loader in development
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Handle initial page load - 10 seconds (disabled in dev)
  useEffect(() => {
    if (isDevelopment) {
      setIsInitialLoad(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [isDevelopment]);

  // Handle route changes - 10 seconds (disabled in dev)
  useEffect(() => {
    if (isDevelopment) {
      setIsRouteChanging(false);
      setCurrentPath(pathname);
      return;
    }

    if (currentPath && currentPath !== pathname) {
      setIsRouteChanging(true);
      const timer = setTimeout(() => {
        setIsRouteChanging(false);
        setCurrentPath(pathname);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    } else if (!currentPath) {
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath, isDevelopment]);

  // Intercept all link clicks to show loader immediately (disabled in dev)
  useEffect(() => {
    if (isDevelopment) return;

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;

      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Only show loader for internal navigation
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setIsRouteChanging(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [isDevelopment]);

  return (
    <>
      {/* Initial page load loader */}
      <Loader isLoading={isInitialLoad} />

      {/* Route change loader */}
      <Loader isLoading={isRouteChanging} />

      {/* Main content */}
      <div
        className={
          isInitialLoad || isRouteChanging
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }
      >
        {children}
      </div>
    </>
  );
}
