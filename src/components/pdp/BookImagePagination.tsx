"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PaginationDots from "./PaginationDots";

interface BookImagePaginationProps {
    images: (string | null)[];
    className?: string;
}

export default function BookImagePagination({ images, className = "" }: BookImagePaginationProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / images.length;
        const newIndex = Math.round(scrollLeft / itemWidth);

        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
            setCurrentIndex(newIndex);
        }
    };

    const handlePageChange = (index: number) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const itemWidth = container.scrollWidth / images.length;
        container.scrollTo({
            left: index * itemWidth,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentIndex, images.length]);

    return (
        <div className={`w-full ${className}`}>
            {/* Scrollable Images Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full snap-center"
                    >
                        {image && (
                            <Image
                                src={image}
                                alt={`Book image ${index + 1}`}
                                width={400}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority={index === 0}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <PaginationDots
                totalPages={images.length}
                currentPage={currentIndex}
                onPageChange={handlePageChange}
                className="bg-[#F0E5D6]"
            />
        </div>
    );
}




