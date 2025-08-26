"use client";

import { useMemo, useState } from "react";

interface ExpandableContentProps {
  title: string;
  content: string;
}

export default function ExpandableContent({
  title,
  content,
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 326;
  const showReadMore = content.length > maxLength;

  const shortContent = useMemo(() => {
    return showReadMore ? `${content.substring(0, maxLength)}...` : content;
  }, [content, showReadMore, maxLength]);

  const displayedContent = isExpanded ? content : shortContent;

  return (
    <div className="mt-4 xl:mt-10">
      <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase">
        {title}
      </h2>
      <p className="font-nats text-[12px] lg:text-[16px] leading-loose text-[#351A12] mx-auto lg:mx-0">
        {displayedContent}
      </p>
      {showReadMore && (
        <p className="font-nats text-[12px] lg:text-[16px] leading-loose text-[#351A12] mx-auto lg:mx-0 mt-0">
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
