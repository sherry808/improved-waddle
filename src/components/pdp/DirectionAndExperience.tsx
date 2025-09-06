"use client";

import React from "react";

interface DirectionAndExperienceProps {
  pageTitle: string | null;
  finalDirection: string | null;
  image: string | null;
  titleClass: string | null;
  contentClass: string | null;
  paddingXl: string | null;
}

const DirectionAndExperience: React.FC<DirectionAndExperienceProps> = (
  props
) => {
  return (
    <>
      {props.pageTitle && props.finalDirection && (
        <div
          className={`flex flex-col lg:flex-row w-full bg-[#351A12] font-nats overflow-x-hidden p-8 lg:p-12 ${props.paddingXl}`}
        >
          <div className={props.titleClass ?? ""}>
            <h2 className="m-0 font-monthis font-normal text-[32px] lg:text-[54px] text-[#D2ADCE] leading-tight">
              {props.pageTitle}
            </h2>
          </div>
          <div className={props.contentClass ?? ""}>
            <p className="font-nats text-[12px] lg:text-[16px] text-[#F7F5ED] leading-[26px] md:leading-loose">
              {props.finalDirection}
            </p>
          </div>
        </div>
      )}
      {props.image && (
        <section className="w-full flex justify-center items-center bg-white">
          <img
            src={props.image ?? ""}
            alt="Process"
            className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
          />
        </section>
      )}
    </>
  );
};

export default DirectionAndExperience;
