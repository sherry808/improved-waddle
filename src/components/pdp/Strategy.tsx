'use client';

import ExpandableContent from '@/components/common/ExpandableContent';

interface StrategyProps {
    pageTitle?: string | null;
    uxPlanning?: string | null;
    styleGuide?: string | null;
    visualDirection?: string | null;
    techPerformance?: string | null;
    theSolution?: string | null;
    theVisualNarrative?: string | null;
    image: string | null;
}

export default function Strategy({ pageTitle, uxPlanning, styleGuide, visualDirection, techPerformance, theSolution, theVisualNarrative, image }: StrategyProps) {
    // Check if this is a NIMHANS-style page (has theSolution and theVisualNarrative)
    const isNimhansStyle = theSolution || theVisualNarrative;

    return (
        <section className="md:py-0">
            <div className="px-0">
                <div className="md:flex md:gap-0">
                    {/* Content on the left for desktop */}
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] pt-[55px] md:pt-[55px] md:pb-[45px]">
                        {pageTitle && (
                            <h1 className="m-0 p-0 font-normal text-[32px] md:text-[54px] font-monthis text-[#351A12] pb-[30px] md:pb-[70px] leading-[47px] md:leading-[69px]">
                                {pageTitle}
                            </h1>
                        )}
                        <div className="flex flex-col">
                            {isNimhansStyle ? (
                                <>
                                    {theSolution && (
                                        <ExpandableContent
                                            title="The Solution"
                                            content={theSolution}
                                        />
                                    )}
                                    {theVisualNarrative && (
                                        <ExpandableContent
                                            title="The Visual Narrative"
                                            content={theVisualNarrative}
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    {uxPlanning && (
                                        <ExpandableContent
                                            title="UI/UX and Site Structure Planning"
                                            content={uxPlanning}
                                        />
                                    )}
                                    {styleGuide && (
                                        <ExpandableContent
                                            title="Style Guide Establishment"
                                            content={styleGuide}
                                        />
                                    )}
                                    {visualDirection && (
                                        <ExpandableContent
                                            title="Visual Direction and Design System"
                                            content={visualDirection}
                                        />
                                    )}
                                    {techPerformance && (
                                        <ExpandableContent
                                            title="Tech, Performance and Functionality"
                                            content={techPerformance}
                                        />
                                    )}
                                </>
                            )}
                            {/* Image appears here on mobile, after content */}
                            {image && (
                                <div className="md:hidden w-[300px] h-[400px] bg-white mb-[50px]">
                                    <img
                                        src={image}
                                        alt="Strategy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Image on the right for desktop */}
                    {image && (
                        <div className="hidden md:flex md:w-[736px] md:h-[943px] flex-shrink-0 justify-center bg-white">
                            <img
                                src={image}
                                alt="Strategy"
                                className="w-full h-[300px] object-cover md:w-[736px] md:h-[943px] md:rounded-none"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 