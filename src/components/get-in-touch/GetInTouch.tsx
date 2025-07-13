'use client';

import React from 'react';

const GetInTouch: React.FC = () => {
    return (
        <section className="w-full py-16 bg-[#351A12]">
            <div className="px-[30px] text-left">
                <div className="mb-16 pt-[50px] pb-[50px]">
                    <h2 className="font-normal text-[64px] font-monthis text-[#D2ADCE] mb-4 whitespace-nowrap">
                        Get in Touch
                    </h2>
                    <div className="mt-12">
                        <div className="mt-[30px]">
                            <p className="text-[15px] font-nats text-[#F7F5ED] uppercase leading-none">Email Address</p>
                            <p className="text-[12px] font-nats text-[#F7F5ED] mt-[18px] leading-none">info@milibajaj.com</p>
                        </div>
                        <div className="mt-[30px]">
                            <p className="text-[15px] font-nats text-[#F7F5ED] uppercase leading-none">Phone Number</p>
                            <p className="text-[12px] font-nats text-[#F7F5ED] mt-[18px] leading-none">+91- 9958338850</p>
                        </div>
                        <p className="mt-[30px] text-[12px] font-nats text-[#F7F5ED]">
                            Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry.
                        </p>
                        <button
                            className="mt-[30px] w-full h-[32px] md:w-[300px] bg-[#D2ADCE] text-[#351A12] font-nats text-[15px] uppercase border-none focus:outline-none"
                        >
                            SCHEDULE A CONSULTATION
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch; 