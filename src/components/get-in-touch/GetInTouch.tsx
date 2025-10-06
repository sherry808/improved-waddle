"use client";

import React from "react";
import Image from "next/image";


const GetInTouch: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full font-nats overflow-hidden">
      <div className="lg:w-full lg:h-[625px] xl:w-[659px] xl:h-[647px] w-full bg-[#351A12] flex items-center justify-center py-[40px] pl-[30px] pr-[18px] lg:p-[15px] xl:p-[32px] desktop-xl:p-[52px]">
        <div className="w-full text-left p-0 lg:p-[15px] xl:p-[32px] desktop-xl:pl-[52px] desktop-xl:pr-[47px]">
          <h1 className="hidden lg:block m-0 lg:-mt-[6px] font-nats font-normal text-[15px] lg:text-[20px] mb-1 uppercase leading-none text-[#F7F5ED]">
            Contact
          </h1>
          <h1 className="m-0 mb-4 font-monthis font-normal text-[64px] lg:text-[96px] leading-none lg:mb-[32px] text-[#D2ADCE]">
            Get In Touch
          </h1>
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 lg:gap-x-[72px] mb-[15px] lg:mb-[34px]">
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-[7px] lg:mb-2">
                Email Address
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                milibajaj.work@gmail.com
              </p>
            </div>
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-[7px] lg:mb-2">
                Phone Number
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                +91-9958338850
              </p>
            </div>
          </div>
          <p className="font-nats mb-[22px] lg:mb-[35px] leading-[19px] lg:leading-9 text-[12px] lg:text-[16px] text-[#F7F5ED]">
            Ready to bring your vision to life? Lets explore how strategic
            design and modern tech can move your business forward. The first
            step to building better starts here. Reach out to schedule a 30
            minute discovery call.
          </p>
          <div className="mb-[10px] lg:mb-0">
            <a
              href="https://calendly.com/milibajaj-work/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-[300px] lg:w-[452px] h-[30px] lg:h-[32px] justify-center items-center font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase bg-[#D2ADCE] cursor-pointer"
            >
              Schedule A Consultation
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:h-[625px] xl:w-[781px] xl:h-[647px] w-full h-auto">
        <Image
          src="/images/get-in-touch.png"
          alt="Get In Touch"
          width={781}
          height={647}
          className="hidden lg:block w-full md:h-[738px] lg:h-full object-cover"
          style={{ filter: 'saturate(1.2) contrast(1.1)' }}
        />
        <Image
          src="/images/mobile-get-in-touch.png"
          alt="Get In Touch"
          width={781}
          height={738}
          className="lg:hidden w-full h-[401px] md:h-[738px] object-cover"
          style={{ filter: 'saturate(1.2) contrast(1.1)' }}
        />
      </div>
    </div>
  );
};

export default GetInTouch;
