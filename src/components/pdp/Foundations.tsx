'use client';

import ExpandableContent from '@/components/common/ExpandableContent';

interface FoundationsProps {
    pageTitle?: string | null;
    brandPositioning?: string | null;
    stakeholderInterviews?: string | null;
    marketAnalysis?: string | null;
    targetAudience?: string | null;
    theReality?: string | null;
    theChallenge?: string | null;
    image: string | null;
}

export default function Foundations({ pageTitle, brandPositioning, stakeholderInterviews, marketAnalysis, targetAudience, theReality, theChallenge, image }: FoundationsProps) {
    // Check if this is a NIMHANS-style page (has theReality and theChallenge)
    const isNimhansStyle = theReality || theChallenge;

    return (
        <section className="md:py-0">
            <div className="px-0">
                <div className="md:flex md:gap-0">
                    {/* Content section */}
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] pt-[55px] md:pt-[55px] md:pb-[45px]">
                        {pageTitle && (
                            <h1 className="m-0 p-0 font-normal text-[32px] md:text-[54px] font-monthis text-[#351A12] pb-[30px] md:pb-[70px] leading-[47px] md:leading-[69px]">
                                {pageTitle}
                            </h1>
                        )}
                        <div className="flex flex-col">
                            {isNimhansStyle ? (
                                <>
                                    {theReality && (
                                        <ExpandableContent
                                            title="The Reality"
                                            content={theReality}
                                        />
                                    )}
                                    {theChallenge && (
                                        <ExpandableContent
                                            title="The Challenge"
                                            content={theChallenge}
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    {brandPositioning && (
                                        <ExpandableContent
                                            title="Brand Positioning And Values"
                                            content={brandPositioning}
                                        />
                                    )}
                                    {stakeholderInterviews && (
                                        <ExpandableContent
                                            title="Stakeholder Interviews"
                                            content={stakeholderInterviews}
                                        />
                                    )}
                                    {marketAnalysis && (
                                        <ExpandableContent
                                            title="Market And Competitor Analysis"
                                            content={marketAnalysis}
                                        />
                                    )}
                                    {targetAudience && (
                                        <ExpandableContent
                                            title="Target Audience Establishment"
                                            content={targetAudience}
                                        />
                                    )}
                                </>
                            )}
                            {/* Image appears here on mobile, after content */}
                            {image && (
                                <div className="md:hidden w-[300px] h-[400px] bg-white mb-[50px]">
                                    <img
                                        src={image}
                                        alt="Foundations"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Image on the left for desktop only */}
                    {image && (
                        <div className="hidden md:flex md:w-[736px] md:h-[943px] flex-shrink-0 justify-center bg-white">
                            <img
                                src={image}
                                alt="Foundations"
                                className="w-full h-full object-cover md:rounded-none"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 