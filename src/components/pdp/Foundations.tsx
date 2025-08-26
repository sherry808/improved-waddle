"use client";

import ExpandableContent from "@/components/common/ExpandableContent";

interface FoundationsProps {
  pageTitle: string;
  brandPositioning: string;
  stakeholderInterviews: string;
  marketAnalysis: string;
  targetAudience: string;
  image: string;
}

export default function Foundations(props: FoundationsProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
      <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center p-8">
        <div className="w-full text-left">
          <h1 className="m-0 font-monthis font-normal text-[32px] leading-tight">
            {props.pageTitle}
          </h1>
          <div className="flex flex-col">
            <ExpandableContent
              title="Brand Positioning And Values"
              content={props.brandPositioning}
            />
            <ExpandableContent
              title="Stakeholder Interviews"
              content={props.stakeholderInterviews}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[55%] w-full h-auto px-4 lg:p-0">
        <img
          src={props.image}
          alt={props.pageTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden lg:w-[45%] w-full bg-[#F0E5D4] lg:flex items-center justify-center p-7">
        <div className="w-full text-left p-7">
          <h1 className="m-0 font-monthis font-normal text-[54px] leading-tight">
            {props.pageTitle}
          </h1>
          <div className="flex flex-col">
            <ExpandableContent
              title="Brand Positioning And Values"
              content={props.brandPositioning}
            />
            <ExpandableContent
              title="Stakeholder Interviews"
              content={props.stakeholderInterviews}
            />
            <ExpandableContent
              title="Market And Competitor Analysis"
              content={props.marketAnalysis}
            />
            <ExpandableContent
              title="Target Audience Establishment"
              content={props.targetAudience}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center p-8">
        <div className="w-full text-left">
          <div className="flex flex-col">
            <ExpandableContent
              title="Market And Competitor Analysis"
              content={props.marketAnalysis}
            />
            <ExpandableContent
              title="Target Audience Establishment"
              content={props.targetAudience}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
