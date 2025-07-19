'use client';

export default function Launch() {
    return (
        <section className="py-[48px] md:py-[100px] bg-[#351A12]">
            <div className="px-[30px] md:px-[103px] text-left md:flex md:justify-between">
                {/* Left Column: Text Content */}
                <div className="md:w-[410px] md:flex md:flex-col md:justify-center">
                    <div>
                        <div className="flex flex-col gap-[21px] md:gap-[30px] relative">
                            <h2 className="m-0 p-0 font-normal font-nats text-[15px] md:text-[20px] text-[#F7F5ED] md:text-tertiary uppercase">Strategic Design, Built on Scalable Tech</h2>
                            <h3 className="m-0 p-0 font-normal font-monthis text-[57px] md:text-[54px] text-[#D2ADCE] leading-[80px] md:leading-[79px] md:pb-0">
                                <span className="md:hidden">
                                    Launch, Grow<br />
                                    Or Refresh<br />
                                    Your Brand
                                </span>
                                <span className="hidden md:inline whitespace-nowrap">
                                    Launch, Grow Or <br />
                                    Refresh Your Brand
                                </span>
                            </h3>
                        </div>
                        <div className="mt-[20px] md:mt-0 md:pt-[25px]">
                            <div className="space-y-6">
                                <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">
                                    Strategic design solutions that align your visual identity with business goals. Whether you're building from scratch or pivoting, we help brands create impact, communicate clearly and leave a thoughtful visual imprint.
                                </p>
                            </div>
                        </div>
                        <button className="w-full h-[32px] md:w-[232px] md:h-[42px] bg-[#D2ADCE] text-[#351A12] font-nats text-[15px] md:text-[20px] mt-[30px] mb-[46px] uppercase">Elevate Your Brand</button>
                    </div>
                </div>

                {/* Right Column: Image Placeholders */}
                <div className="hidden md:flex md:flex-row md:gap-[85px] md:-mr-[103px] md:-mt-[100px] md:-mb-[100px]">
                    <img src="/images/dote.png" alt="Dote" className="w-[365px] h-[365px] object-cover md:self-end" />
                    <img src="/images/typsy.png" alt="Typsy" className="w-[365px] h-[365px] object-cover" />
                </div>
            </div>
        </section>
    );
} 