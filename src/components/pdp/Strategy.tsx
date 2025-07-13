'use client';

interface StrategyProps {
    uxPlanning: string;
    styleGuide: string;
    visualDirection: string;
    techPerformance: string;
    image: string;
}

export default function Strategy({ uxPlanning, styleGuide, visualDirection, techPerformance, image }: StrategyProps) {
    return (
        <section className="py-16 md:py-0">
            <div className="px-0">
                <div className="md:flex md:gap-0">
                    {/* Content on the left for desktop */}
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] md:pt-[55px] md:pb-[45px]">
                        <h1 className="m-0 p-0 font-normal text-[32px] md:text-[54px] font-monthis text-[#351A12] pb-[70px] leading-[69px]">
                            Design And Experience Strategy
                        </h1>
                        <div className="flex flex-col">
                            <div className="md:mb-[50px]">
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    UI/ux and site structure planning
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {uxPlanning}
                                </p>
                            </div>
                            <div className="md:mb-[50px]">
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    style guide establishment
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {styleGuide}
                                </p>
                            </div>
                            <div className="md:mb-[50px]">
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    visual direction and design system
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {visualDirection}
                                </p>
                            </div>
                            <div>
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#351A12] uppercase md:mb-[20px]">
                                    tech, performance and functionality
                                </h2>
                                <p className="font-nats text-[16px] text-[#351A12]">
                                    {techPerformance}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image on the right for desktop */}
                    <div className="md:w-[736px] md:h-[943px] flex-shrink-0 flex justify-center bg-white">
                        <img
                            src={image}
                            alt="Strategy"
                            className="w-full h-[300px] object-cover md:w-[736px] md:h-[943px] md:rounded-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 