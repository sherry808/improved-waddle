"use client";

import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full font-nats overflow-hidden">
      <div className="lg:w-[48%] w-full bg-[#351A12] flex items-center justify-center p-8 lg:p-4 xl:p-9 desktop-xl:p-14">
        <div className="w-full text-left p-0 lg:p-4 xl:p-9 desktop-xl:p-14">
          <h1 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] leading-tight uppercase text-[#F7F5ED]">
            Contact
          </h1>
          <h1 className="m-0 font-monthis font-normal text-[64px] lg:text-[96px] leading-tight mb-4 text-[#D2ADCE]">
            Get In Touch
          </h1>
          <div className="flex flex-col md:flex-row gap-y-4  md:gap-x-8 lg:gap-x-16 mb-6">
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-2">
                Email Address
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                milibajaj.work@gmail.com
              </p>
            </div>
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-2">
                Phone Number
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                +91-9958338850
              </p>
            </div>
          </div>
          <p className="font-nats text-[12px] lg:text-[16px] leading-loose text-[#F7F5ED]">
            Ready to bring your vision to life? Lets explore how strategic
            design and modern tech can move your business forward. The first
            step to building better starts here. Reach out to schedule a 30
            minute discovery call.
          </p>
          <div className="mt-12">
            <a
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-1 font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase bg-[#D2ADCE] transition-all duration-300 hover:scale-105"
            >
              Schedule A Consultation
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-[52%] w-full h-auto">
        <img
          src="/images/get-in-touch.png"
          alt="Get In Touch"
          className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
