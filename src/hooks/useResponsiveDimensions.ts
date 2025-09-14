"use client";

import { useEffect, useState } from "react";

const useResponsiveDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 548,
    height: 780,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setDimensions({
          width: 548,
          height: 780,
        });
      } else if (window.innerWidth >= 1024) {
        setDimensions({
          width: 450,
          height: 570,
        });
      } else {
        setDimensions({
          width: 339,
          height: 481,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

export default useResponsiveDimensions;
