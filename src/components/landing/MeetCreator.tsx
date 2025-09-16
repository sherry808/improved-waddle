"use client";

import Image from "next/image";

export default function MeetCreator() {
  return (
    <section
      id="about"
      className="pt-[42px] pb-0 md:pt-[55px] md:pb-16 bg-[#351A12] overflow-x-hidden"
    >
      <div className="px-[30px] md:px-[103px] pb-[50px] md:pb-[20px]">
        <h2 className="m-0 p-0 font-normal text-[15px] md:text-[20px] font-nats text-tertiary md:mb-[30px] uppercase">
          Meet the Creator
        </h2>
        <h3 className="m-0 p-0 -mt-[14px] pb-[8px] font-normal text-[64px] md:text-[128px] font-monthis text-[#D2ADCE] md:hidden">
          Mili Bajaj
        </h3>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="w-[300px] h-[290px] mx-auto mb-[25px] flex items-center justify-center">
            <Image
              src="/images/creator.png"
              alt="Mili Bajaj"
              width={300}
              height={290}
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-3">
            <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED]">
              Mili Bajaj is a Visual Designer and Strategic Branding Specialist
              with over 5 years of experience, most notably as Head of Design at
              Ocularity Analytics. She blends strategic thinking with creative
              execution, delivering impactful work across branding, UI/UX,
              packaging and visual storytelling. Having led multidisciplinary
              teams across print and digital platforms, her solutions are both
              aesthetically refined and results-driven.
            </p>
            <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED]">
              She now partners with Sherry, a technologist working across the
              digital spectrum, from modern frameworks to emerging tech like AI
              and Web3. Together, they build websites and digital experiences.
            </p>
          </div>
          <div className="mt-[25px]">
            <button className="w-full h-[30px] md:w-[232px] md:h-[135px] bg-[#D2ADCE] text-[#351A12] font-nats uppercase text-[15px] md:text-[20px] md:ml-[70px]">
              Get a closer look
            </button>
          </div>
        </div>

        {/* Desktop Layout - 3 Columns */}
        <div className="hidden md:flex md:gap-[86px]">
          {/* First Column - Image */}
          <div className="relative w-[425px] h-[410px] flex-shrink-0">
            <Image
              src="/images/creator.png"
              alt="Mili Bajaj"
              width={425}
              height={410}
              className="object-cover"
              priority
            />
            <h3 className="font-normal absolute top-[212px] left-[512px] text-[64px] md:text-[128px] font-monthis text-[#D2ADCE] whitespace-nowrap p-0 m-0 leading-none">
              Mili Bajaj
            </h3>
          </div>

          {/* Second Column - First Paragraph */}
          <div className="relative w-[325px] h-[410px] flex-shrink-0">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start pt-0">
              <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED]">
                Mili Bajaj is a Visual Designer and Strategic Branding
                Specialist with over 5 years of experience, most notably as Head
                of Design at Ocularity Analytics. She blends strategic thinking
                with creative execution, delivering impactful work across
                branding, UI/UX, packaging and visual storytelling. Having led
                multidisciplinary teams
              </p>
            </div>
          </div>

          {/* Third Column - Second Paragraph + Button */}
          <div className="relative w-[330px] h-[410px] flex-shrink-0">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-start pt-0">
              <p className="text-[12px] md:text-[16px] font-nats text-[#F7F5ED]">
                across print and digital platforms, her solutions are both
                aesthetically refined and results-driven. She now partners with
                Sherry, a technologist working across the digital spectrum, from
                modern frameworks to emerging tech like AI and Web3. Together,
                they build websites and digital experiences that perform.
              </p>
            </div>
            <button className="absolute top-[276px] left-[150px] w-[300px] h-[32px] md:w-[177px] bg-[#D2ADCE] text-[#351A12] font-nats uppercase text-[15px] md:text-[20px]">
              Get a closer look
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
