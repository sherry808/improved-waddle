"use client";

import Image from "next/image";


export default function Launch() {
  return (
    <section className="h-[456px] lg:h-[529px] pt-[52px] md:pt-[102px] bg-[#351A12]">
      <div className="px-[30px] md:px-[104px] text-left md:flex md:justify-between">
        {/* Left Column: Text Content */}
        <div className="md:w-[410px] md:flex md:flex-col md:justify-center">
          <div>
            <div className="flex flex-col gap-[8px] md:gap-[25px] relative">
              <h2 className="m-0 p-0 leading-[0] font-normal font-nats text-[15px] md:text-[20px] text-[#F7F5ED] md:text-tertiary uppercase">
                Strategic Design, Built on Scalable Tech
              </h2>
              <h3 className="m-0 p-0 font-normal font-monthis text-[57px] md:text-[54px] text-[#D2ADCE] leading-[70px] md:leading-[66px]">
                <span className="md:hidden">
                  Launch, Grow
                  <br />
                  Or Refresh
                  <br />
                  Your Brand
                </span>
                <span className="hidden md:inline whitespace-nowrap">
                  Launch, Grow Or <br /> Refresh Your Brand
                </span>
              </h3>
            </div>
            <div className="mt-[12px] md:mt-0 md:pt-[14px]">
              <div className="space-y-6">
                <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] pr-1 md:pr-0">
                  Strategic design solutions that align your visual identity
                  with business goals. Whether you're building from scratch or
                  pivoting, we help brands create impact, communicate clearly
                  and leave a thoughtful visual imprint.
                </p>
              </div>
            </div>
            <button className="w-full h-[30px] md:h-[32px] md:w-[194px] bg-[#D2ADCE] text-[#351A12] font-nats text-[15px] md:text-[20px] mt-[25px] md:mt-[28px] md:mb-[46px] uppercase">
              Elevate Your Brand
            </button>
          </div>
        </div>

        {/* Right Column: Image Placeholders */}
        <div className="hidden md:flex md:flex-row md:gap-[98px] md:-mr-[104px] md:-mt-[102px] md:-mb-[54px]">
          <Image
            src="/images/dote.png"
            alt="Dote"
            width={365}
            height={365}
            className="w-[365px] h-[365px] object-cover md:self-end"
          />
          <Image
            src="/images/typsy.png"
            alt="Typsy"
            width={370}
            height={367}
            className="w-[370px] h-[367px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
