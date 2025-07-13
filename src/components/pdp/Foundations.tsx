'use client';

interface FoundationsProps {
    brandPositioning: string;
    stakeholderInterviews: string;
    marketAnalysis: string;
    targetAudience: string;
    image: string;
}

export default function Foundations({ brandPositioning, stakeholderInterviews, marketAnalysis, targetAudience, image }: FoundationsProps) {
    return (
        <section className="py-16 md:py-0">
            <div className="px-0">
                <div className="md:flex md:gap-0">
                    {/* Image on the left for desktop */}
                    <div className="md:w-[736px] md:h-[943px] flex-shrink-0 flex justify-center bg-white">
                        <img
                            src={image}
                            alt="Foundations"
                            className="w-full h-[300px] object-cover md:w-[736px] md:h-[943px] md:rounded-none"
                        />
                    </div>
                    {/* Content on the right for desktop */}
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] md:pt-[55px] md:pb-[45px]">
                        <h1 className="m-0 p-0 font-normal text-[32px] md:text-[54px] font-monthis text-[#351A12] pb-[70px] leading-[69px]">
                            Brand, Audience And Market Foundations
                        </h1>
                        <div className="flex flex-col">
                            <div className="md:mb-[50px]">
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    Brand Positioning And Values
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {brandPositioning}
                                </p>
                            </div>
                            <div className="md:mb-[50px]">
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    Stakeholder Interviews
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {stakeholderInterviews}
                                </p>
                            </div>
                            <div className="md:mb-[50px]">
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    Market And Competitor Analysis
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {marketAnalysis}
                                </p>
                            </div>
                            <div>
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    Target Audience Establishment
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {targetAudience}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 