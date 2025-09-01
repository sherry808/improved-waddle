"use client";

import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import useIsMobile from "@/hooks/useIsMobile";

interface PageProps {
  pageNumber?: number;
  image?: string;
  alt?: string;
  number?: string;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ pageNumber, image, alt, number }, ref) => {
    return (
      <div
        className="page relative"
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ width: "548px", height: "780px" }}
      >
        {image ? (
          <img
            src={image}
            alt={alt || `Page ${pageNumber}`}
            className="w-full h-full object-cover"
            style={{ width: "548px", height: "780px", display: "block" }}
          />
        ) : (
          <div className="w-full h-full p-4">
            {number && <div className="page-number">{number}</div>}
          </div>
        )}
      </div>
    );
  }
);

const BlankPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      className="page relative shadow-lg bg-white"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ width: "548px", height: "780px" }}
    ></div>
  );
});

interface PageFlipBookProps {
  images: string[];
}

const PageFlipBook: React.FC<PageFlipBookProps> = ({ images }) => {
  const book = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = images.length;
  const isMobile = useIsMobile(768);

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    setDragOffset(diff);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.changedTouches[0].clientX;
    const diff = touchStart - currentTouch;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left - next page
        nextButtonClick();
      } else {
        // Swipe right - previous page
        prevButtonClick();
      }
    }

    setTouchStart(null);
  };

  const nextButtonClick = () => {
    if (isMobile) {
      // Mobile: Direct page change without animation
      const maxPage = totalPages - 2;
      if (currentPage < maxPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      // Desktop: Use flip book animation
      const maxPage = totalPages - 3;
      if (book.current && currentPage < maxPage) {
        book.current.pageFlip().flipNext();
      }
    }
  };

  const prevButtonClick = () => {
    if (isMobile) {
      // Mobile: Direct page change without animation
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      // Desktop: Use flip book animation
      if (book.current) {
        book.current.pageFlip().flipPrev();
      }
    }
  };

  const onFlip = (e: any) => {
    const newPage = e.data;

    // Prevent flipping forward when at the boundary
    if (newPage > currentPage && currentPage >= totalPages - 3) {
      // Prevent the flip by staying on current page
      if (book.current) {
        setTimeout(() => {
          book.current.pageFlip().flip(currentPage);
        }, 0);
      }
      return;
    }

    // Prevent going to the blank page (which would be beyond our content pages)
    if (newPage >= totalPages) {
      // If somehow we got to the blank page, go back to the last content page
      if (book.current) {
        book.current.pageFlip().flip(totalPages - 3);
      }
      return;
    }
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col items-center mx-auto">
      {!isMobile ? (
        // Desktop View - Flip Book
        <div className="relative flex items-center">
          {/* Left Navigation Button */}
          <button
            onClick={prevButtonClick}
            disabled={currentPage === 0}
            className={`${
              currentPage === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#D2ADCE] hover:bg-[#c79bc3]"
            } text-[#351A12] transition-all duration-200 absolute left-[-93px] top-1/2 transform -translate-y-1/2 z-10`}
            style={{ width: "18px", height: "18px" }}
            aria-label="Previous page"
          ></button>

          <HTMLFlipBook
            maxShadowOpacity={0.5}
            style={{ margin: "0 auto" }}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={false}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={false}
            swipeDistance={0}
            showPageCorners={true}
            disableFlipByClick={true}
            width={548}
            height={780}
            size="fixed"
            minWidth={548}
            maxWidth={548}
            minHeight={780}
            maxHeight={780}
            showCover={false}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="album-web"
            ref={book}
          >
            <BlankPage />
            {images.map((image, index) => (
              <Page key={index} pageNumber={index + 1} image={image} />
            ))}
          </HTMLFlipBook>

          {/* Right Navigation Button */}
          <button
            onClick={nextButtonClick}
            disabled={currentPage >= totalPages - 3}
            className={`${
              currentPage >= totalPages - 3
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#D2ADCE] hover:bg-[#c79bc3]"
            } text-[#351A12] transition-all duration-200 absolute right-[-93px] top-1/2 transform -translate-y-1/2 z-10`}
            style={{ width: "18px", height: "18px" }}
            aria-label="Next page"
          ></button>
        </div>
      ) : (
        // Mobile View - Single Page Display with Touch Support
        <div className="flex flex-col items-center">
          {/* Single Page Display with Touch Events */}
          <div
            className="relative shadow-lg bg-white overflow-hidden touch-pan-y"
            style={{
              width: 339,
              height: 481,
              marginBottom: "75px",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="w-full h-full transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentPage * (100 + 4)}% + ${
                  isDragging ? dragOffset : 0
                }px))`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full absolute top-0 left-0"
                  style={{ left: `${index * (100 + 4)}%` }}
                >
                  <img
                    src={image}
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons at Bottom */}
          <div className="flex justify-center items-center gap-4">
            {/* Left Navigation Button */}
            <button
              onClick={prevButtonClick}
              disabled={currentPage === 0}
              className={`${
                currentPage === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#D2ADCE] hover:bg-[#c79bc3]"
              } text-[#351A12] transition-all duration-200`}
              style={{ width: "18px", height: "18px" }}
              aria-label="Previous page"
            ></button>

            {/* Right Navigation Button */}
            <button
              onClick={nextButtonClick}
              disabled={currentPage >= totalPages - 2}
              className={`${
                currentPage >= totalPages - 2
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#D2ADCE] hover:bg-[#c79bc3]"
              } text-[#351A12] transition-all duration-200`}
              style={{ width: "18px", height: "18px" }}
              aria-label="Next page"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

// Add display name for better debugging
Page.displayName = "Page";

export { PageFlipBook, Page };
export default PageFlipBook;
