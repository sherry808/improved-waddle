"use client";

import Link from "next/link";
import { SocialIcons } from "../common/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#F0E5D6] px-[28px] py-[32px] md:pl-[93px] md:pr-[104px] md:pt-[50px] md:pb-[36px] md:h-[242px] md:overflow-hidden">
      <div className="flex flex-row justify-between items-start md:items-center">
        <div className="flex flex-col items-start md:w-auto">
          <Link href="/" passHref>
            <h2 className="m-0 p-0 lg:mb-[38px] font-normal text-[36px] md:text-[128px] font-nats text-[#351A12] whitespace-nowrap leading-normal lg:leading-none cursor-pointer">
              MILI BAJAJ
            </h2>
          </Link>
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
          <Link
            href="/#projects"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            PROJECTS
          </Link>
          <Link
            href="/get-in-touch"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            GET IN TOUCH
          </Link>
          <Link
            href="/services"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            SERVICES
          </Link>
          <Link
            href="/meet-creator"
            className="m-0 p-0 leading-[1.45] font-normal text-[15px] md:text-[24px] font-nats text-[#351A12] hover:text-[#D2ADCE] transition-colors text-right"
          >
            MEET THE CREATOR
          </Link>
        </div>
      </div>
    </footer>
  );
}
