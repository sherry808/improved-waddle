"use client";

import ExpandableContent, {
  ExpandableContentProps,
} from "@/components/common/ExpandableContent";

interface FoundationsProps {
  pageTitle: string | null;
  image: string | null;
  imageMobile?: string;
  imageClass: string;
  paddingXl: string;
  contentSections: ExpandableContentProps[];
}

export default function Foundations(props: FoundationsProps) {
  const sectionsToRender = props.contentSections.filter(
    (section) => section.content
  );

  const midpoint = Math.ceil(sectionsToRender.length / 2);
  const mobileContentTop = sectionsToRender.slice(0, midpoint);
  const mobileContentBottom = sectionsToRender.slice(midpoint);

  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
      <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center px-[30px] py-[45px]">
        <div className="w-full text-left">
          {props.pageTitle && (
            <h1 className="m-0 font-monthis font-normal text-[32px] leading-tight">
              {props.pageTitle}
            </h1>
          )}
          <div className="flex flex-col">
            {mobileContentTop.map((section, index) => (
              <ExpandableContent
                key={index}
                title={section.title}
                content={section.content ?? ""}
                maxLength={section.maxLength}
                mobileMaxLength={section.mobileMaxLength}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-[55%] w-full h-auto px-[30px] lg:p-0">
        <img
          src={props.image || ""}
          alt={props.pageTitle || ""}
          className={`${props.imageClass} hidden lg:block`}
        />
        <img
          src={props.imageMobile || props.image || ""}
          alt={props.pageTitle || ""}
          className={`${props.imageClass} lg:hidden`}
        />
      </div>
      <div
        className={`hidden lg:w-[45%] w-full bg-[#F0E5D4] lg:flex items-center justify-center ${props.paddingXl}`}
      >
        <div className={`w-full text-left ${props.paddingXl}`}>
          {props.pageTitle && (
            <h1 className="mb-[14px] mt-0 font-monthis font-normal text-[54px] leading-[1.23]">
              {props.pageTitle}
            </h1>
          )}
          <div className="flex flex-col">
            {sectionsToRender.map((section, index) => (
              <ExpandableContent
                key={index}
                title={section.title}
                content={section.content ?? ""}
                maxLength={section.maxLength}
                mobileMaxLength={section.maxLength}
              />
            ))}
          </div>
        </div>
      </div>
      {mobileContentBottom.length > 0 && (
        <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center px-[30px] pt-[29px] pb-[45px]">
          <div className="w-full text-left">
            <div className="flex flex-col">
              {mobileContentBottom.map((section, index) => (
                <ExpandableContent
                  key={index}
                  title={section.title}
                  content={section.content ?? ""}
                  maxLength={section.maxLength}
                  mobileMaxLength={section.mobileMaxLength}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
