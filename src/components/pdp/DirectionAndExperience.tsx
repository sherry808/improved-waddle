"use client";

import React from "react";

interface DirectionAndExperienceProps {
  pageTitle: string;
  finalDirection: string;
}

const DirectionAndExperience: React.FC<DirectionAndExperienceProps> = (
  props
) => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-[#351A12] font-nats overflow-x-hidden p-8 lg:p-12">
      <div className="lg:w-1/2 w-full flex items-center justify-start lg:pl-8">
        <h2 className="m-0 font-monthis font-normal text-[32px] lg:text-[54px] text-[#D2ADCE] leading-tight">
          {props.pageTitle}
        </h2>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-start pt-4 lg:pt-0 lg:pr-8">
        <p className="font-nats text-[12px] lg:text-[16px] text-[#F7F5ED]">
          {props.finalDirection}
        </p>
      </div>
    </div>
  );
};

export default DirectionAndExperience;
