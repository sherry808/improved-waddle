'use client';

export default function Footer() {
    return (
        <footer className="bg-[#F0E5D6] pt-[50px] md:pt-[60px] pb-[87px] md:pb-[60px] px-[30px] md:px-[103px]">
            <div className="max-w-7xl mx-auto">
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-[516px_124px_180px] md:gap-[205px_207px] gap-auto">
                        {/* Left Column */}
                        <div style={{ border: '1px solid red' }}>
                            <h2 className="m-0 p-0 font-normal text-[36px] md:text-[128px] font-nats text-[#351A12] whitespace-nowrap leading-none md:-mt-[10px]">
                                MILI BAJAJ
                            </h2>
                            {/* Mobile: show buttons under MILI BAJAJ */}
                            <div className="flex gap-4 mt-4 block md:hidden">
                                <button className="w-[30px] h-[30px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center"></button>
                                <button className="w-[30px] h-[30px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center"></button>
                            </div>
                        </div>

                        {/* Center Column: Buttons for desktop only */}
                        <div className="hidden md:flex flex-col items-center justify-start" style={{ border: '1px solid green' }}>
                            <div className="flex gap-4 mt-0 md:mt-4">
                                <button className="w-[30px] h-[30px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center"></button>
                                <button className="w-[30px] h-[30px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center"></button>
                            </div>
                        </div>

                        {/* Right Column: Links */}
                        <div className="flex flex-col gap-4 items-end" style={{ border: '1px solid blue' }}>
                            <a href="#projects" className="m-0 p-0 font-normal !text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right">
                                PROJECTS
                            </a>
                            <a href="#contact" className="m-0 p-0 font-normal !text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right">
                                GET IN TOUCH
                            </a>
                            <a href="#meet-creator" className="m-0 p-0 font-normal !text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right">
                                MEET THE CREATOR
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 