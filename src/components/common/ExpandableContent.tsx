'use client';

import { useState } from 'react';

interface ExpandableContentProps {
    title: string;
    content: string;
    isExpanded?: boolean;
    onToggle?: (expanded: boolean) => void;
}

export default function ExpandableContent({
    title,
    content,
    isExpanded = false,
    onToggle
}: ExpandableContentProps) {
    const [expanded, setExpanded] = useState(isExpanded);

    const handleToggle = () => {
        const newExpanded = !expanded;
        setExpanded(newExpanded);
        onToggle?.(newExpanded);
    };

    // Split content into short and long versions
    const shortContent = content.length > 325 ? content.substring(0, 325) + '...' : content;
    const showReadMore = content.length > 325;

    return (
        <div className="pb-[30px] md:mb-[50px]">
            <h2 className="m-0 p-0 font-normal font-nats text-[15px] md:text-[20px] text-[#351A12] uppercase">
                {title}
            </h2>
            <div className="space-y-4">
                <p className="font-nats text-[12px] md:text-[16px] text-[#351A12]">
                    {expanded ? content : shortContent}
                </p>
                {showReadMore && (
                    <div className="mt-2">
                        <button
                            onClick={handleToggle}
                            className="font-nats text-[12px] md:text-[16px] text-[#D2ADCE] hover:text-[#B89BB8] transition-colors cursor-pointer underline"
                        >
                            {expanded ? 'read less' : 'read more'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
} 