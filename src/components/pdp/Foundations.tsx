'use client';

import ExpandableContent from '@/components/common/ExpandableContent';

interface FoundationsProps {
    brandPositioning: string;
    stakeholderInterviews: string;
    marketAnalysis: string;
    targetAudience: string;
    image: string;
}

export default function Foundations({ brandPositioning, stakeholderInterviews, marketAnalysis, targetAudience, image }: FoundationsProps) {
    return (
        <section className="md:py-0">
            <div className="px-0">
                <div className="md:flex md:gap-0">
                    {/* Content section */}
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] pt-[55px] md:pt-[55px] md:pb-[45px]">
                        <h1 className="m-0 p-0 font-normal text-[32px] md:text-[54px] font-monthis text-[#351A12] pb-[30px] md:pb-[70px] leading-[47px] md:leading-[69px]">
                            Brand, Audience And Market Foundations
                        </h1>
                        <div className="flex flex-col">
                            <ExpandableContent
                                title="Brand Positioning And Values"
                                content={brandPositioning}
                            />
                            <ExpandableContent
                                title="Stakeholder Interviews"
                                content={stakeholderInterviews}
                            />
                            {/* Image appears here on mobile, after Stakeholder Interviews */}
                            <div className="md:hidden w-[300px] h-[400px] bg-white mb-[50px]">
                                <img
                                    src={image}
                                    alt="Foundations"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <ExpandableContent
                                title="Market And Competitor Analysis"
                                content={marketAnalysis}
                            />
                            <ExpandableContent
                                title="Target Audience Establishment"
                                content={targetAudience}
                            />
                        </div>
                    </div>
                    {/* Image on the left for desktop only */}
                    <div className="hidden md:flex md:w-[736px] md:h-[943px] flex-shrink-0 justify-center bg-white">
                        <img
                            src={image}
                            alt="Foundations"
                            className="w-full h-full object-cover md:rounded-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 