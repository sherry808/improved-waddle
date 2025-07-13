'use client';

import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="py-[50px] md:pt-[45px] md:pb-[60px] bg-[#351A12]">
            <div className="px-[30px] md:px-[103px]">
                {/* Desktop: 3 columns, Mobile: stacked */}
                <div className="flex flex-col md:flex-row md:items-end md:gap-[100px]">
                    {/* Left column */}
                    <div className="flex flex-col md:w-[469px] md:justify-end md:items-start mb-8 md:mb-0 h-full">
                        <h2 className="font-normal text-[15px] md:text-[20px] font-nats text-[#F7F5ED] mb-5 uppercase m-0 p-0">Contact</h2>
                        <h2 className="font-normal text-[64px] md:text-[96px] font-monthis text-[#D2ADCE] m-0 p-0 whitespace-nowrap leading-none">
                            Get in Touch
                        </h2>
                    </div>
                    {/* Middle column */}
                    <div className="flex flex-col justify-end md:w-[400px] md:items-start mb-8 md:mb-0 h-full md:justify-between md:flex-col">
                        <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED] mb-0 md:mb-0 text-left leading-[1.2] md:h-[92px]">
                            Ready to bring your vision to life? Lets explore how strategic design and modern tech can move your business forward. The first step to building better starts here. Reach out to schedule a 30 minute discovery call.
                        </p>
                    </div>
                    {/* Right column */}
                    <div className="flex flex-col justify-end md:w-[300px] md:items-end h-full">
                        <a href="/get-in-touch" className="w-full flex md:items-end">
                            <button
                                type="button"
                                className="w-full h-[32px] md:w-[240px] md:h-[32px] bg-[#D2ADCE] text-[#351A12] font-nats text-[15px] md:text-[20px] uppercase border-none focus:outline-none md:self-end md:mb-[10px]"
                            >
                                Schedule a consultation
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 