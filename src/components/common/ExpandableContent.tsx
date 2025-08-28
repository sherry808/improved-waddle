"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { useMemo, useState } from "react";

export interface ExpandableContentProps {
  title: string;
  content: string | null;
  maxLength?: number | null;
  mobileMaxLength?: number | null;
}

export default function ExpandableContent({
  title,
  content,
  maxLength = 326,
  mobileMaxLength,
}: ExpandableContentProps) {
  if (!content || !maxLength) {
    return null;
  }

  const isMobile = useIsMobile(360);
  const currentMaxLength = isMobile ? mobileMaxLength : maxLength;

  const [isExpanded, setIsExpanded] = useState(false);

  const showReadMore = content.length > (currentMaxLength ?? 326);

  const shortContent = useMemo(() => {
    const finalLength = currentMaxLength ?? 326;
    return showReadMore ? `${content.substring(0, finalLength)}...` : content;
  }, [content, showReadMore, currentMaxLength]);

  const displayedContent = isExpanded ? content : shortContent;

  return (
    <div className="mt-4 xl:mt-10">
      <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase">
        {title}
      </h2>
      <p className="font-nats text-[12px] lg:text-[16px] leading-[33px] text-[#351A12] mx-auto lg:mx-0">
        {displayedContent}
      </p>
      {showReadMore && (
        <p className="font-nats text-[12px] lg:text-[16px] leading-[33px] text-[#351A12] mx-auto lg:mx-0 mt-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#D2ADCE] hover:text-[#B89BB8] transition-colors cursor-pointer underline"
          >
            {isExpanded ? "read less" : "read more"}
          </button>
        </p>
      )}
    </div>
  );
}
