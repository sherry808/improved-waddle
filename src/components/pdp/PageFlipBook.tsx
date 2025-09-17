"use client";

import useIsMobile from "@/hooks/useIsMobile";
import useResponsiveDimensions from "@/hooks/useResponsiveDimensions";
import { FC, forwardRef, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

interface PageProps {
  pageNumber?: number;
  image?: string;
  alt?: string;
}

interface BlankPageProps {}

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
          <img
            src={image}
            alt={alt || `Page ${pageNumber}`}
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
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = images.length;
  const isMobile = useIsMobile(768);

  const { width, height } = useResponsiveDimensions();

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
            className="overflow-x-scroll snap-x snap-mandatory no-scrollbar"
            style={{
              width: `${width}px`,
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
                  <img
                    src={image}
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
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
