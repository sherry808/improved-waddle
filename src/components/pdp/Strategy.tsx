"use client";

import ExpandableContent from "@/components/common/ExpandableContent";

interface StrategyProps {
  pageTitle: string;
  uxPlanning: string;
  styleGuide: string;
  visualDirection: string;
  techPerformance: string;
  image: string;
}

export default function Strategy(props: StrategyProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
      <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center p-8">
        <div className="w-full text-left">
          <h1 className="m-0 font-monthis font-normal text-[32px] leading-tight">
            {props.pageTitle}
          </h1>
          <div className="flex flex-col">
            <ExpandableContent
              title="UX/UI and Site Structure Planning"
              content={props.uxPlanning}
            />
            <ExpandableContent
              title="Style Guide Establishment"
              content={props.styleGuide}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:w-[50%] w-full bg-[#F0E5D4] lg:flex items-center justify-center py-8 px-9">
        <div className="w-full text-left py-8 px-9">
          <h1 className="m-0 font-monthis font-normal text-[54px] leading-tight">
            {props.pageTitle}
          </h1>
          <div className="flex flex-col">
            <ExpandableContent
              title="UI/UX and Site Structure Planning"
              content={props.uxPlanning}
            />
            <ExpandableContent
              title="Style Guide Establishment"
              content={props.styleGuide}
            />
            <ExpandableContent
              title="Visual Direction and Design System"
              content={props.visualDirection}
            />
            <ExpandableContent
              title="Tech, Performance and Functionality"
              content={props.techPerformance}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] w-full h-auto px-4 lg:p-0">
        <img
          src={props.image}
          alt={props.pageTitle}
          className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </div>
      <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center p-8">
        <div className="w-full text-left">
          <div className="flex flex-col">
            <ExpandableContent
              title="Visual Direction and Design System"
              content={props.visualDirection}
            />
            <ExpandableContent
              title="Tech, Performance and Functionality"
              content={props.techPerformance}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
