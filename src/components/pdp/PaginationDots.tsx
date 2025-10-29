"use client";

import React from "react";

interface PaginationDotsProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageIndex: number) => void;
    className?: string;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    className = "",
}) => {
    const dots = [];
    for (let i = 0; i < totalPages; i++) {
        dots.push(
            <button
                key={i}
                className={`transition-all duration-300 ease-in-out ${i === currentPage
                        ? "w-3 h-3 bg-[#D2ADCE] rounded-sm"
                        : "w-2 h-2 bg-[#351A12] opacity-30 rounded-sm hover:opacity-60"
                    }`}
                onClick={() => onPageChange(i)}
                aria-label={`Go to page ${i + 1}`}
            />
        );
    }

    return (
        <div className={`flex justify-center items-center space-x-2 py-4 ${className}`}>
            {dots}
        </div>
    );
};

export default PaginationDots;




