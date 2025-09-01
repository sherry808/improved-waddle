"use client";

import { SocialIcons } from "../common/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#F0E5D6] h-[173px] p-[32px] md:h-[242px] md:px-[87px] md:pt-[60px]">
      <div className="flex flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col items-start md:w-auto">
          <h2 className="m-0 p-0 font-normal text-[36px] md:text-[128px] font-nats text-[#351A12] whitespace-nowrap leading-none">
            MILI BAJAJ
          </h2>
          <div className="flex gap-4 mt-6 md:hidden">
            <SocialIcons />
          </div>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex md:gap-[42px]">
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <a
            href="#projects"
            className="m-0 p-0 font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="m-0 p-0 font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            GET IN TOUCH
          </a>
          <a
            href="#services"
            className="m-0 p-0 font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            SERVICES
          </a>
          <a
            href="#meet-creator"
            className="m-0 p-0 font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            MEET THE CREATOR
          </a>
        </div>
      </div>
    </footer>
  );
}
