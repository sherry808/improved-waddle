"use client";

import { SocialIcons } from "../common/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#F0E5D6] px-[28px] py-[32px] md:h-[242px] md:pl-[98px] md:pr-[102px] md:py-[55px]">
      <div className="flex flex-row justify-between items-start md:items-center">
        <div className="flex flex-col items-start md:w-auto">
          <h2 className="m-0 p-0 lg:mb-[38px] font-normal text-[36px] md:text-[128px] font-nats text-[#351A12] whitespace-nowrap leading-normal lg:leading-none">
            MILI BAJAJ
          </h2>
          <div className="flex gap-5 ml-[2px] mt-2 md:hidden">
            <SocialIcons />
          </div>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex md:gap-[42px] md:mr-3 md:mb-7">
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col items-end mt-3 md:-mt-8">
          <a
            href="#projects"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            GET IN TOUCH
          </a>
          <a
            href="#services"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            SERVICES
          </a>
          <a
            href="#meet-creator"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            MEET THE CREATOR
          </a>
        </div>
      </div>
    </footer>
  );
}
