"use client";

import BoxCarousel, {
  type BoxCarouselRef,
  type CarouselItem,
} from "@/components/common/BoxCarousel";
import useScreenSize from "@/hooks/use-screen-size";
import { Bug, BugOff } from "lucide-react";
import { useRef, useState } from "react";

const carouselItems: CarouselItem[] = [
  {
    id: "1",
    type: "image",
    src: "/images/carousel/carousel1.gif",
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
    src: "/images/carousel/carousel3.gif",
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
    src: "/images/carousel/carousel5.gif",
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
    } else if (screenSize.lessThan("lg")) {
      return { width: 350, height: 300 };
    } else if (screenSize.lessThan("xl")) {
      return { width: 500, height: 400 };
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
      <div className="w-full space-y-[110px] lg:space-y-[105px]">
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
        <div className="flex gap-6 lg:gap-4 justify-center items-center">
          <img
            onClick={handlePrev}
            src="/images/Arrow-Left.png"
            alt="Previous"
            className="w-[38px] lg:w-[82px] cursor-pointer"
          />
          <img
            onClick={handleNext}
            src="/images/Arrow-Right.png"
            alt="Next"
            className="w-[38px] lg:w-[82px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
