"use client";

import Contact from "@/components/landing/Contact";
import ClientInfo from "@/components/pdp/ClientInfo";
import DirectionAndExperience from "@/components/pdp/DirectionAndExperience";
import Foundations from "@/components/pdp/Foundations";
import Hero from "@/components/pdp/Hero";
import MoreProjects from "@/components/pdp/MoreProjects";
import Strategy from "@/components/pdp/Strategy";
import { pdpData } from "@/data/pdpData";
import { useState } from "react";
import Image from "next/image";

export default function PDP3() {
  const data = pdpData.pdp3;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = (isExpandedNow: any) => {
    setIsExpanded(isExpandedNow);
  };
  const foundationContent = [
    {
      title: "Brand Positioning And Values",
      content: data.page4.brandPositioning ?? null,
      maxLength: 230,
      mobileMaxLength: 230,
    },
    {
      title: "Client Insights",
      content: data.page4.stakeholderInterviews ?? null,
      maxLength: 234,
      mobileMaxLength: 249,
    },
    {
      title: "Market And Competitor Analysis",
      content: data.page4.marketAnalysis ?? null,
      maxLength: 243,
      mobileMaxLength: 247,
    },
    {
      title: "Target Audience Establishment",
      content: data.page4.targetAudience ?? null,
      maxLength: 243,
      mobileMaxLength: 251,
    },
  ];

  const strategyContent = [
    {
      title: "UI/UX and Site Structure Planning",
      content: data.page6.uxPlanning ?? null,
      maxLength: 238,
      mobileMaxLength: 243,
    },
    {
      title: "Style Guide Establishment",
      content: data.page6.styleGuide ?? null,
      maxLength: 234,
      mobileMaxLength: 255,
    },
    {
      title: "Visual Direction and Design System",
      content: data.page6.visualDirection ?? null,
      maxLength: 244,
      mobileMaxLength: 264,
    },
    {
      title: "Tech, Performance and Functionality",
      content: data.page6.techPerformance ?? null,
      maxLength: 235,
      mobileMaxLength: 264,
    },
  ];

  return (
    <main className="pt-0 overflow-x-hidden">
      <Hero
        area={data.page1.area}
        title={data.page1.title}
        shortDescription={data.page1.shortDescription}
        descMarginBottom="mb-[25px] lg:mb-0"
        projectLink={data.page1.projectLink}
        image={data.page1.image ?? ""}
        imageMobile={data.page1.imageMobile ?? ""}
        paddingMobile="p-[28px] py-[36px]"
        paddingXl="xl:p-[50px]"
        areaLength={2}
        itemGap="gap-x-5"
        mobileTitleColor="text-[#351A12]"
      />
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        height="lg:h-[690px]"
        itemGap="gap-y-[16px] md:gap-y-4 lg:gap-x-[70px]"
        role={data.page2.role}
        image={data.page2.image ?? ""}
        imageMobile={data.page2.imageMobile ?? ""}
        industry={data.page2.industry}
        team={data.page2.team}
        titleColor="text-[#D2ADCE]"
        paddingMobile="py-[35px] px-[31px]"
        paddingXl="xl:px-[54px] xl:py-0"
      />
      <section className="w-full flex justify-center items-center">
        <Image
          src={data.page3.media ?? ""}
          alt="Media"
          width={1200}
          height={738}
          className="hidden lg:block w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
        <Image
          src={data.page3.mediaMobile || data.page3.media || ""}
          alt="Media"
          width={1200}
          height={738}
          className="lg:hidden w-full md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Foundations
        pageTitle={data.page4.pageTitle ?? ""}
        contentSections={foundationContent}
        image={data.page4.image ?? ""}
        imageMobile={data.page4.imageMobile ?? ""}
        paddingMobileUpper="px-[30px] py-[40px]"
        paddingMobileLower="px-[30px] pt-[29px] pb-[40px]"
        paddingXl="p-7 xl:py-0 xl:pl-[27px] xl:pr-[53px] xl:mt-[5px]"
        imageClass="w-full h-[400px] lg:w-[740px] md:h-[738px] lg:h-[1024px] object-cover"
      />
      <section className="w-full flex justify-center items-center bg-white">
        <Image
          src={data.page5.image ?? ""}
          alt="Process"
          width={1200}
          height={738}
          className="hidden lg:block w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
        <Image
          src={data.page5.imageMobile || data.page5.image || ""}
          alt="Process"
          width={1200}
          height={738}
          className="lg:hidden w-full md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Strategy
        pageTitle={data.page6.pageTitle ?? ""}
        contentSections={strategyContent}
        image={data.page6.image ?? ""}
        imageMobile={data.page6.imageMobile ?? ""}
        paddingMobileUpper="px-[30px] py-[43px]"
        paddingMobileLower="px-[30px] pt-[29px] pb-[43px]"
        paddingXl="py-8 px-9 xl:px-[51px] xl:py-0 xl:-mt-[14px]"
        imageClass={
          isExpanded
            ? "w-full h-[400px] lg:w-[763px] md:h-[738px] lg:h-[1550px] object-cover"
            : "w-full h-[400px] lg:w-[763px] md:h-[738px] lg:h-[1059px] object-cover"
        }
        onExpandChange={handleExpandChange}
      />
      <DirectionAndExperience
        pageTitle={data.page7.pageTitle ?? ""}
        finalDirection={data.page7.finalDirection ?? ""}
        mobileFinalDirection={data.page7.mobileFinalDirection ?? ""}
        height="h-[352px]"
        image={null}
        titleClass="lg:w-[500px] w-full flex items-center justify-start pt-4 lg:pt-0 lg:pr-8 xl:mr-12"
        contentClass="lg:w-[940px] w-full flex items-center justify-start pt-4 lg:pt-0"
        paddingXl="px-8 py-[25px] lg:p-12 xl:px-[100px] xl:py-[45px]"
      />
      <MoreProjects currentProjectId={data.id ?? ""} />
      {/* <ProjectsList excludeId="pdp1" layout="vertical" /> */}
      <Contact />
    </main>
  );
}
