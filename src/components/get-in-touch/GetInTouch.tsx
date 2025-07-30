'use client';

import React from 'react';
import Image from 'next/image';

const GetInTouch: React.FC = () => {
    return (
        <section className="w-full bg-[#351A12] py-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full">
                {/* Left: GetInTouch content */}
                <div className="flex-1 px-[30px] md:pl-[105px] md:pr-[100px] text-left flex flex-col justify-center order-2 md:order-1">
                    <div className="pt-[55px] pb-[50px] md:pt-[105px] md:pb-0">
                        <h2 className="font-normal text-[15px] md:text-[20px] font-nats text-[#F7F5ED] mb-[20px] md:mb-[25px] mt-0 m-0 p-0 uppercase">
                            Contact
                        </h2>
                        <h2 className="font-normal text-[64px] md:text-[96px] font-monthis text-[#D2ADCE] mb-[30px] md:mb-[45px] mt-0 m-0 p-0 leading-none whitespace-nowrap">
                            Get in Touch
                        </h2>
                        <div>
                            <div className="flex flex-col md:flex-row md:gap-x-[100px]">
                                <div>
                                    <p className="text-[15px] md:text-[20px] font-nats text-[#F7F5ED] uppercase leading-none">Email Address</p>
                                    <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED] pt-[18px] leading-none">
                                        <a href="mailto:milibajaj.work@gmail.com">milibajaj.work@gmail.com</a>
                                    </p>
                                </div>
                                <div className="mt-[30px] md:mt-0">
                                    <p className="text-[15px] md:text-[20px] font-nats text-[#F7F5ED] uppercase leading-none">Phone Number</p>
                                    <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED] pt-[18px] pb-[25px] leading-none">
                                        <a href="tel:+919958338850">+91-9958338850</a>
                                    </p>
                                </div>
                            </div>
                            <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED] mt-0 md:mt-[50px]">
                                Ready to bring your vision to life? Lets explore how strategic design and modern tech can move your business forward. The first step to building better starts here. Reach out to schedule a 30 minute discovery call.
                            </p>
                            <button className="w-full md:w-[452px] h-[42px] bg-[#D2ADCE] text-[#351A12] font-nats text-[15px] md:text-[20px] uppercase border-none focus:outline-none mt-[25px] md:mt-[45px]">
                                Schedule a consultation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-[400px] md:w-[786px] md:h-[623px] md:ml-[40px] md:mt-0 shrink-0 order-1 md:order-2">
                    <Image
                        src="/images/get-in-touch.png"
                        alt="Get in Touch"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
