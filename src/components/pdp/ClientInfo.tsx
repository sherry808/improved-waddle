"use client";

import Image from "next/image";

interface ClientInfoProps {
  pageTitle: string | null;
  clientBackground: string | null;
  height: string | null;
  itemGap: string | null;
  role: string | null;
  industry: string | null;
  team: string | null;
  image: string;
  imageMobile?: string;
  titleColor: string;
  paddingMobile: string;
  paddingXl: string;
}

export default function ClientInfo(props: ClientInfoProps) {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row w-full font-nats overflow-x-hidden ${props.height}`}
    >
      <div
        className={`lg:w-[55%] w-full bg-[#351A12] flex items-center justify-center ${props.paddingMobile} ${props.paddingXl}`}
      >
        <div className={`w-full text-left p-0 ${props.paddingXl}`}>
          <h1
            className={`m-0 font-monthis font-normal text-[32px] lg:text-[54px] leading-[1.2] lg:leading-[1.25] mb-5 lg:mb-[52px] ${props.titleColor} [word-spacing:1.5px]`}
          >
            {props.pageTitle}
          </h1>
          <div
            className={`flex flex-col md:flex-row mb-[18px] lg:mb-[51px] ${props.itemGap}`}
          >
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-[6px]">
                Industry
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                {props.industry || "No industry information available."}
              </p>
            </div>
            <div>
              {props.team && (
                <>
                  <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-[10px]">
                    Team
                  </h2>
                  <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                    {props.team}
                  </p>
                </>
              )}
            </div>
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-[10px]">
                Role
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                {props.role || "No role information available."}
              </p>
            </div>
          </div>
          <p className="font-nats text-[12px] lg:text-[16px] leading-[25px] md:mb-0 md:leading-[34px] text-[#F7F5ED]">
            {props.clientBackground ||
              "No client background information available."}
          </p>
        </div>
      </div>
      <div className="lg:w-[45%] w-full h-auto">
        <Image
          src={props.image}
          alt="Client Info"
          width={800}
          height={738}
          className="hidden lg:block w-full md:h-[738px] lg:h-full object-cover"
        />
        <Image
          src={props.imageMobile || props.image}
          alt="Client Info"
          width={800}
          height={738}
          className="lg:hidden w-full h-[405px] md:h-[738px] object-cover"
        />
      </div>
    </div>
  );
}
