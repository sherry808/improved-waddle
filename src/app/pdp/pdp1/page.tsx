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

export default function PDP1() {
  const data = pdpData.pdp1;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = (isExpandedNow: any) => {
    setIsExpanded(isExpandedNow);
  };
  const foundationContent = [
    {
      title: "Brand Positioning And Values",
      content: data.page4.brandPositioning ?? null,
      maxLength: 326,
      mobileMaxLength: 326,
    },
    {
      title: "Stakeholder Interviews",
      content: data.page4.stakeholderInterviews ?? null,
      maxLength: 326,
      mobileMaxLength: 326,
    },
    {
      title: "Market And Competitor Analysis",
      content: data.page4.marketAnalysis ?? null,
      maxLength: 326,
      mobileMaxLength: 326,
    },
    {
      title: "Target Audience Establishment",
      content: data.page4.targetAudience ?? null,
      maxLength: 326,
      mobileMaxLength: 326,
    },
  ];

  const strategyContent = [
    {
      title: "UI/UX and Site Structure Planning",
      content: data.page6.uxPlanning ?? null,
      maxLength: 325,
      mobileMaxLength: 245,
    },
    {
      title: "Style Guide Establishment",
      content: data.page6.styleGuide ?? null,
      maxLength: 310,
      mobileMaxLength: 310,
    },
    {
      title: "Visual Direction and Design System",
      content: data.page6.visualDirection ?? null,
      maxLength: 328,
      mobileMaxLength: 258,
    },
    {
      title: "Tech, Performance and Functionality",
      content: data.page6.techPerformance ?? null,
      maxLength: 370,
      mobileMaxLength: 257,
    },
  ];

  return (
    <main className="pt-0 overflow-x-hidden">
      <Hero
        area={data.page1.area}
        title={data.page1.title}
        shortDescription={data.page1.shortDescription}
        projectLink={data.page1.projectLink}
        image={data.page1.image ?? ""}
        imageMobile={data.page1.imageMobile ?? ""}
        paddingXl="xl:p-12"
        areaLength={2}
        mobileTitleColor="text-[#351A12]"
      />
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        role={data.page2.role}
        image={data.page2.image ?? ""}
        imageMobile={data.page2.imageMobile ?? ""}
        industry={data.page2.industry}
        team={data.page2.team}
        titleColor="text-[#D2ADCE]"
        paddingXl="xl:p-[54px]"
      />
      <section className="w-full flex justify-center items-center">
        <img
          src={data.page3.media ?? ""}
          alt="Media"
          className="hidden lg:block w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
        <img
          src={data.page3.mediaMobile || data.page3.media || ""}
          alt="Media"
          className="lg:hidden w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Foundations
        pageTitle={data.page4.pageTitle ?? ""}
        contentSections={foundationContent}
        image={data.page4.image ?? ""}
        paddingXl="p-7 xl:py-0 xl:px-[38px]"
        imageClass="w-full h-[400px] lg:w-[740px] md:h-[738px] lg:h-[1050px] object-cover"
      />
      <section className="w-full flex justify-center items-center bg-white">
        <img
          src={data.page5.image ?? ""}
          alt="Process"
          className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Strategy
        pageTitle={data.page6.pageTitle ?? ""}
        contentSections={strategyContent}
        image={data.page6.image ?? ""}
        paddingXl="py-8 px-9 xl:px-[47px] xl:py-0"
        imageClass={
          isExpanded
            ? "w-full h-[400px] lg:w-[763px] md:h-[738px] lg:h-[1337px] object-cover"
            : "w-full h-[400px] lg:w-[763px] md:h-[738px] lg:h-[1168px] object-cover"
        }
        onExpandChange={handleExpandChange}
      />
      <DirectionAndExperience
        pageTitle={data.page7.pageTitle ?? ""}
        finalDirection={data.page7.finalDirection ?? ""}
        image={null}
        titleClass="lg:w-[690px] w-full flex items-center justify-start"
        contentClass="lg:w-[750px] w-full flex items-center justify-start pt-4 lg:pt-0 lg:pr-8 xl:pr-1"
        paddingXl="xl:px-[100px] xl:py-[65px]"
      />
      <section className="flex justify-center items-center pt-[20px] pb-[20px] px-[20px] md:pt-[95px] md:pb-[115px] md:px-[103px] bg-transparent">
        <div className="relative w-full h-[569px] md:w-[1231px] md:h-[778px]">
          <img
            src={data.page8.media ?? ""}
            alt="Media"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-100 pointer-events-none" />
        </div>
      </section>
      <MoreProjects currentProjectId={data.id ?? ""} />
      {/* <ProjectsList excludeId="pdp1" layout="vertical" /> */}
      <Contact />
    </main>
  );
}
