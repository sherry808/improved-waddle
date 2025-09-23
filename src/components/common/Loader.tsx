"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
  duration?: number;
}

export default function Loader({
  isLoading,
  onComplete,
  duration = 3000,
}: LoaderProps) {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
      onComplete?.();
    }
  }, [isLoading, onComplete]);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F0E5D6]">
          <div className="loader">
            <div className="square">
              <div className="mini_square sq-1"></div>
              <div className="mini_square sq-2"></div>
              <div className="mini_square"></div>
              <div className="mini_square sq-4"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
