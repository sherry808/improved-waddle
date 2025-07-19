'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section id="about" className="pb-0 md:pt-[80px] md:pb-16">
            {/* Mobile image, full width, no padding */}
            <div className="md:hidden">
                <div className="w-[360px] h-[360px] bg-white mx-auto"></div>
            </div>
            <div className="px-[30px] md:px-[103px] pb-[50px] md:pb-[80px]">
                {/* Mobile Layout */}
                <div className="md:hidden">
                    <h2 className="font-normal text-[15px] font-nats text-[#351A12] pt-[50px] mb-[20px] mt-0 m-0 p-0 uppercase">Meet the Creator</h2>
                    <h3 className="font-normal text-[64px] font-monthis text-[#351A12] leading-none mt-0 mb-[30px] m-0 pt-0 pb-0">Mili Bajaj</h3>
                    <div className="space-y-6 pb-[50px]">
                        <p className="text-[12px] font-nats text-[#351A12] mb-0">
                            Mili Bajaj is a Visual Designer and Strategic Branding Specialist with over 5 years of experience, most notably as Head of Design at Ocularity Analytics. She blends strategic thinking with creative execution, delivering impactful work across branding, UI/UX, packaging and visual storytelling. Having led multidisciplinary teams across print and digital platforms, her solutions are both aesthetically refined and results-driven. She now partners with Sherry, a technologist working across the digital spectrum, from modern frameworks to emerging tech like AI and Web3. Together, they build websites and digital experiences that perform.
                        </p>
                    </div>
                </div>

                {/* Desktop Layout - 3 Columns */}
                <div className="hidden md:flex md:gap-[100px]">
                    {/* First Column - Image */}
                    <div className="relative w-[425px] h-[410px] flex-shrink-0">
                        <div className="w-full h-full bg-white"></div>
                        <h3 className="font-normal absolute top-[196px] left-[385px] text-[64px] md:text-[128px] font-monthis text-[#351A12] whitespace-nowrap leading-none">Mili Bajaj</h3>
                    </div>

                    {/* Second Column - First Paragraph */}
                    <div className="relative w-[300px] h-[410px] flex-shrink-0">
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start pt-0">
                            <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED]">
                                Mili Bajaj is a Visual Designer and Strategic Branding Specialist with over 5 years of experience, most notably as Head of Design at Ocularity Analytics. She blends strategic thinking with creative execution, delivering impactful work across branding, UI/UX, packaging and visual storytelling. Having led multidisciplinary teams across print and digital
                            </p>
                        </div>
                    </div>

                    {/* Third Column - Second Paragraph + Button */}
                    <div className="relative w-[300px] h-[410px] flex-shrink-0 md:ml-[10px]">
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-start pt-0 space-y-6">
                            <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED]">
                                across print and digital platforms, her solutions are both aesthetically refined and results-driven. She now partners with Sherry, a technologist working across the digital spectrum, from modern frameworks to emerging tech like AI and Web3. Together, they build websites and digital experiences that perform.
                            </p>
                        </div>
                        <button className="absolute top-[260px] left-[70px] w-[300px] h-[32px] md:w-[232px] bg-[#D2ADCE] text-[#351A12] font-nats uppercase text-[15px] md:text-[20px]">
                            Get a closer look
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
} 