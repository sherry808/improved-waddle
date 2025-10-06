"use client";

import Image from "next/image";

interface HeroProps {
  area: (string | null)[];
  title: string | null;
  shortDescription: string | null;
  descMarginBottom: string | null;
  projectLink: string | null;
  image: string;
  imageMobile?: string;
  paddingMobile: string;
  paddingXl: string;
  areaLength?: number;
  itemGap: string;
  mobileTitleColor: string;
}

export default function Hero(props: HeroProps) {
  const maxAreaItems = props.areaLength ?? 2;

  return (
    <div className="flex flex-col lg:flex-row w-full md:h-[680px] font-nats overflow-x-hidden">
      <div className="lg:w-[55%] w-full h-auto">
        <Image
          src={props.image}
          alt={props.title || ""}
          width={800}
          height={680}
          className="hidden lg:block w-full h-[400px] md:h-[680px] object-cover"
        />
        <Image
          src={props.imageMobile || props.image}
          alt={props.title || ""}
          width={800}
          height={680}
          className="lg:hidden w-full h-[393px] md:h-[680px] object-cover"
        />
      </div>
      <div
        className={`lg:w-[45%] w-full bg-[#F0E5D4] flex items-center justify-center ${props.paddingMobile} ${props.paddingXl}`}
      >
        <div className={`w-full text-left p-0 ${props.paddingXl}`}>
          <div
            className={`flex flex-wrap justify-start xl:gap-x-[42px] md:mb-[5px] ${props.itemGap}`}
          >
            {props.area.map((item, index) => (
              <span
                key={index}
                className={`font-nats text-[#351A12] py-0 text-[15px] lg:text-[20px] uppercase ${index >= maxAreaItems ? "hidden lg:inline-block" : ""
                  }`}
              >
                {item}
              </span>
            ))}
          </div>
          <h1
            className={`m-0 font-monthis font-normal text-[48px] lg:text-[54px] leading-[1.23] mb-[20px] ${props.mobileTitleColor} lg:text-[#52160D] [word-spacing:1.5px]`}
          >
            {props.title}
          </h1>
          <p
            className={`font-nats text-[12px] lg:text-[16px] leading-[25px] md:leading-[34px] text-[#351A12] mx-auto lg:mx-0 ${props.descMarginBottom}`}
          >
            {props.shortDescription}
          </p>
          {props.projectLink && (
            <div className="mb-[5px] lg:mt-[34px]">
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full h-[32px] justify-center items-center px-6 font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase bg-[#D2ADCE]"
              >
                View Live Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
