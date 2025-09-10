"use client";

import { useEffect, useState } from "react";

export function useImageLoader() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const updateProgress = () => {
      loadedImages++;
      const progress = (loadedImages / totalImages) * 100;
      setLoadingProgress(progress);
      
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    // Check if images are already loaded
    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress); // Count errors as "loaded"
      }
    });

    // Cleanup event listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', updateProgress);
        img.removeEventListener('error', updateProgress);
      });
    };
  }, []);

  return { imagesLoaded, loadingProgress };
}

// Hook for preloading critical images
export function usePreloadImages(imageUrls: string[]) {
  const [preloadedImages, setPreloadedImages] = useState(0);
  const [allPreloaded, setAllPreloaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setAllPreloaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setPreloadedImages(loadedCount);
          if (loadedCount === totalImages) {
            setAllPreloaded(true);
          }
          resolve(true);
        };
        img.onerror = () => {
          loadedCount++;
          setPreloadedImages(loadedCount);
          if (loadedCount === totalImages) {
            setAllPreloaded(true);
          }
          resolve(false);
        };
        img.src = url;
      });
    };

    // Preload all images
    Promise.all(imageUrls.map(preloadImage));
  }, [imageUrls]);

  return { preloadedImages, allPreloaded };
}

