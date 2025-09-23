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

  // Handle initial page load - 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle route changes - 3 seconds
  useEffect(() => {
    if (currentPath && currentPath !== pathname) {
      setIsRouteChanging(true);
      const timer = setTimeout(() => {
        setIsRouteChanging(false);
        setCurrentPath(pathname);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    } else if (!currentPath) {
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath]);

  // Intercept all link clicks to show loader immediately
  useEffect(() => {
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
  }, []);

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
