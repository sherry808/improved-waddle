"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
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
    setIsRouteChanging(true);
    const timer = setTimeout(() => {
      setIsRouteChanging(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Initial page load loader */}
      <Loader isLoading={isInitialLoad} />

      {/* Route change loader */}
      <Loader isLoading={isRouteChanging} />

      {/* Main content */}
      <div
        className={
          isInitialLoad
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}
