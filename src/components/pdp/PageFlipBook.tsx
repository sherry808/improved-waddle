"use client";

import useIsMobile from "@/hooks/useIsMobile";
import useResponsiveDimensions from "@/hooks/useResponsiveDimensions";
import { FC, forwardRef, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

interface PageProps {
  pageNumber?: number;
  image?: string;
  alt?: string;
}

interface BlankPageProps { }

interface PageFlipBookProps {
  images: string[];
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ image, alt, pageNumber }, ref) => {
    const { width, height } = useResponsiveDimensions();
    return (
      <div
        className="page relative"
        ref={ref}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {image && (
          <Image
            src={image}
            alt={alt || `Page ${pageNumber}`}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        )}
      </div>
    );
  }
);
Page.displayName = "Page";

const BlankPage = forwardRef<HTMLDivElement, BlankPageProps>((_, ref) => {
  const { width, height } = useResponsiveDimensions();
  return (
    <div
      className="page relative shadow-lg bg-white"
      ref={ref}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
});
BlankPage.displayName = "BlankPage";

const PageFlipBook: FC<PageFlipBookProps> = ({ images }) => {
  const book = useRef<any>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = images.length;
  const isMobile = useIsMobile(768);

  const { width, height } = useResponsiveDimensions();

  // Track scroll position for mobile pagination - update only when touch ends
  // useEffect(() => {
  //   if (!isMobile || !scrollContainerRef.current) return;

  //   let isTouching = false;
  //   let scrollTimeout: NodeJS.Timeout;
  //   const SNAP_THRESHOLD = 0.3;

  //   const handleScroll = () => {
  //     // Don't update pagination during scroll
  //   };

  //   const handleTouchStart = () => {
  //     isTouching = true;
  //   };

  //   const handleTouchEnd = () => {
  //     isTouching = false;

  //     // Wait a bit for scroll to settle, then update pagination
  //     setTimeout(() => {
  //       if (!scrollContainerRef.current) return;

  //       const container = scrollContainerRef.current;
  //       const scrollLeft = container.scrollLeft;
  //       const itemWidth = width;
  //       const scrollProgress = (scrollLeft % itemWidth) / itemWidth;

  //       let targetIndex;
  //       if (scrollProgress > SNAP_THRESHOLD) {
  //         // Snap to next page
  //         targetIndex = Math.ceil(scrollLeft / itemWidth);
  //       } else {
  //         // Snap to current page
  //         targetIndex = Math.floor(scrollLeft / itemWidth);
  //       }

  //       // Ensure target index is within bounds
  //       targetIndex = Math.max(0, Math.min(targetIndex, totalPages - 1));

  //       // Force snap to the target page
  //       container.scrollTo({
  //         left: targetIndex * itemWidth,
  //         behavior: 'smooth',
  //       });

  //       // Update pagination after snap completes
  //       setTimeout(() => {
  //         setCurrentPage(targetIndex);
  //       }, 300);
  //     }, 100);
  //   };

  //   const container = scrollContainerRef.current;
  //   container.addEventListener('scroll', handleScroll, { passive: true });
  //   container.addEventListener('touchstart', handleTouchStart);
  //   container.addEventListener('touchend', handleTouchEnd);

  //   return () => {
  //     container.removeEventListener('scroll', handleScroll);
  //     container.removeEventListener('touchstart', handleTouchStart);
  //     container.removeEventListener('touchend', handleTouchEnd);
  //     clearTimeout(scrollTimeout);
  //   };
  // }, [isMobile, width, currentPage, totalPages]);

  const onFlip = (e: any) => {
    const newPage = e.data;
    if (newPage >= totalPages) {
      book.current?.pageFlip().turnToPage(totalPages - 1);
      return;
    }
    setCurrentPage(newPage);
  };

  const prevButtonDisabled = currentPage === 0;
  const nextButtonDisabled = isMobile
    ? currentPage >= totalPages - 1
    : currentPage >= totalPages - 2;

  const navButtonBaseClass =
    "text-[#351A12] transition-all duration-200 w-[18px] h-[18px]";
  const leftButtonClasses = `${navButtonBaseClass} absolute left-[-30px] md:left-[-30px] lg:left-[-55px] xl:left-[-95px] top-1/2 transform -translate-y-1/2`;
  const rightButtonClasses = `${navButtonBaseClass} absolute right-[-30px] md:right-[-30px] lg:right-[-55px] xl:right-[-95px] top-1/2 transform -translate-y-1/2`;

  const getButtonColorClass = (disabled: boolean) =>
    disabled
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-[#D2ADCE] hover:bg-[#c79bc3]";

  return (
    <div className="flex flex-col items-center mx-auto">
      {isMobile ? (
        // Mobile View
        <div className="flex flex-col items-center w-full">
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll snap-x snap-mandatory no-scrollbar"
            style={{
              width: `${width}px`,
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            <div className="flex flex-nowrap gap-1">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center shadow-lg"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                  }}
                >
                  <Image
                    src={image}
                    alt={`Page ${index + 1}`}
                    width={width}
                    height={height}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Squares for Mobile - 5 squares sliding window */}
          {/* <div className="flex items-center justify-center py-4 bg-[#F0E5D6] w-full gap-2">
            {(() => {
              // Create a sliding window of 5 squares centered around current page
              const totalPages = images.length;
              const windowSize = 5;
              let startIndex = 0;
              let endIndex = Math.min(windowSize - 1, totalPages - 1);

              // Calculate the sliding window
              if (totalPages > windowSize) {
                if (currentPage <= 2) {
                  // Near the beginning: show first 5 pages
                  startIndex = 0;
                  endIndex = windowSize - 1;
                } else if (currentPage >= totalPages - 3) {
                  // Near the end: show last 5 pages
                  startIndex = totalPages - windowSize;
                  endIndex = totalPages - 1;
                } else {
                  // In the middle: center around current page
                  startIndex = currentPage - 2;
                  endIndex = currentPage + 2;
                }
              }

              return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => {
                const pageIndex = startIndex + i;
                const distance = Math.abs(pageIndex - currentPage);

                // Determine size based on position in the 5-square window
                let squareSize = 1.81;
                let opacity = 0.3;

                // Calculate position within the 5-square window (0-4)
                const windowPosition = i; // i is the position in the current window

                if (windowPosition === 0 || windowPosition === 1 || windowPosition === 2) {
                  // First 3 squares - largest size
                  squareSize = 5.43;
                  opacity = pageIndex === currentPage ? 1 : 0.6;
                } else if (windowPosition === 3) {
                  // 4th square - medium size
                  squareSize = 4;
                  opacity = 0.4;
                } else if (windowPosition === 4) {
                  // 5th square - smallest size
                  squareSize = 1.81;
                  opacity = 0.3;
                }

                return (
                  <button
                    key={pageIndex}
                    className="transition-all duration-700 ease-in-out hover:opacity-80 rounded-none"
                    style={{
                      width: `${squareSize}px`,
                      height: `${squareSize}px`,
                      backgroundColor: pageIndex === currentPage ? '#351A12' : '#D2ADCE',
                      opacity: opacity,
                      transform: `scale(${pageIndex === currentPage ? 1.15 : 1})`,
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onClick={() => {
                      // Scroll to the specific page
                      if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTo({
                          left: pageIndex * width,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    aria-label={`Go to page ${pageIndex + 1}`}
                  />
                );
              });
            })()}
          </div> */}
        </div>
      ) : (
        // Desktop View
        <div className="relative flex items-center">
          <button
            onClick={() => book.current?.pageFlip().flipPrev()}
            disabled={prevButtonDisabled}
            className={`${leftButtonClasses} ${getButtonColorClass(
              prevButtonDisabled
            )}`}
            aria-label="Previous page"
          />
          <HTMLFlipBook
            width={width}
            height={height}
            size="fixed"
            minWidth={width}
            maxWidth={width}
            minHeight={height}
            maxHeight={height}
            {...{
              maxShadowOpacity: 0.5,
              style: { margin: "0 auto" },
              startPage: 0,
              drawShadow: true,
              flippingTime: 1000,
              usePortrait: false,
              startZIndex: 0,
              autoSize: false,
              clickEventForward: true,
              useMouseEvents: false,
              swipeDistance: 0,
              showPageCorners: true,
              disableFlipByClick: true,
              showCover: false,
              mobileScrollSupport: true,
              onFlip: onFlip,
              className: "album-web",
            }}
            ref={book}
          >
            <BlankPage />
            {images.map((image, index) => (
              <Page key={index} pageNumber={index + 1} image={image} />
            ))}
          </HTMLFlipBook>
          <button
            onClick={() => book.current?.pageFlip().flipNext()}
            disabled={nextButtonDisabled}
            className={`${rightButtonClasses} ${getButtonColorClass(
              nextButtonDisabled
            )}`}
            aria-label="Next page"
          />
        </div>
      )}
    </div>
  );
};

export { BlankPage, Page, PageFlipBook };
export default PageFlipBook;
