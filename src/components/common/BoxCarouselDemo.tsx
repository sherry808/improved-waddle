"use client";

import { useRef, useState } from "react";
import { Bug, BugOff } from "lucide-react";
import BoxCarousel, {
  type BoxCarouselRef,
  type CarouselItem,
} from "@/components/common/BoxCarousel";
import useScreenSize from "@/hooks/use-screen-size";

const carouselItems: CarouselItem[] = [
  {
    id: "1",
    type: "image",
    src: "/images/carousel/carousel1.png",
    alt: "Carousel image 1",
  },
  {
    id: "2",
    type: "image",
    src: "/images/carousel/carousel2.png",
    alt: "Carousel image 2",
  },
  {
    id: "3",
    type: "image",
    src: "/images/carousel/carousel3.png",
    alt: "Carousel image 3",
  },
  {
    id: "4",
    type: "image",
    src: "/images/carousel/carousel4.png",
    alt: "Carousel image 4",
  },
  {
    id: "5",
    type: "image",
    src: "/images/carousel/carousel5.png",
    alt: "Carousel image 5",
  },
  {
    id: "6",
    type: "image",
    src: "/images/carousel/carousel6.png",
    alt: "Carousel image 6",
  },
  {
    id: "7",
    type: "image",
    src: "/images/carousel/carousel7.png",
    alt: "Carousel image 7",
  },
];

export default function BoxCarouselDemo() {
  const carouselRef = useRef<BoxCarouselRef>(null);
  const [debug, setDebug] = useState(false);
  const screenSize = useScreenSize();

  // Responsive dimensions based on screen size
  const getCarouselDimensions = () => {
    if (screenSize.lessThan("md")) {
      // Mobile: 283px width, 213px height
      return { width: 283, height: 213 };
    }
    // Desktop: 593px width, 428px height
    return { width: 593, height: 428 };
  };

  const { width, height } = getCarouselDimensions();

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleIndexChange = (index: number) => {
    console.log("Index changed:", index);
  };

  const toggleDebug = () => {
    setDebug(!debug);
  };

  return (
    <div className="flex flex-col justify-center items-center text-muted-foreground">
      <button
        onClick={toggleDebug}
        className="absolute top-4 left-4 p-1.5 border border-black text-black rounded-full cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 active:scale-95 z-10"
        title={debug ? "Debug Mode: ON" : "Debug Mode: OFF"}
      >
        {debug ? <Bug size={10} /> : <BugOff size={10} />}
      </button>
      <div className="w-full space-y-[110px] lg:space-y-[104px]">
        <div className="flex justify-center">
          <BoxCarousel
            ref={carouselRef}
            items={carouselItems}
            width={width}
            height={height}
            direction="right"
            onIndexChange={handleIndexChange}
            debug={debug}
            enableDrag
            perspective={1000}
            autoPlay
          />
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={handlePrev}
            className="px-2 py-0.5 text-xs border border-black text-black rounded-full cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 active:scale-95"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-2 py-0.5 text-xs border border-black text-black rounded-full cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
