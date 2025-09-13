"use client";

import Contact from "@/components/landing/Contact";
import ClientInfo from "@/components/pdp/ClientInfo";
import DirectionAndExperience from "@/components/pdp/DirectionAndExperience";
import Foundations from "@/components/pdp/Foundations";
import Hero from "@/components/pdp/Hero";
import MoreProjects from "@/components/pdp/MoreProjects";
import PageFlipBook from "@/components/pdp/PageFlipBook";
import Strategy from "@/components/pdp/Strategy";
import { pdpData } from "@/data/pdpData";
import { useState } from "react";

export default function PDP2() {
  const data = pdpData.pdp2;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = (isExpandedNow: any) => {
    setIsExpanded(isExpandedNow);
  };
  const foundationContent = [
    {
      title: "The Reality",
      content: data.page4.theReality ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
    {
      title: "The Challenge",
      content: data.page4.theChallenge ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
  ];

  const strategyContent = [
    {
      title: "The Solution",
      content: data.page6.theSolution ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
    {
      title: "The Visual Narative",
      content: data.page6.theVisualNarrative ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
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
        areaLength={3}
        mobileTitleColor="text-[#351A12]"
      />
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        height="h-[720px]"
        itemGap="gap-x-[40px]"
        role={data.page2.role}
        image={data.page2.image ?? ""}
        imageMobile={data.page2.imageMobile ?? ""}
        industry={data.page2.industry}
        team={null}
        titleColor="text-[#F0E5D6]"
        paddingXl="xl:px-[54px] xl:py-[52px]"
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
        imageMobile={data.page4.imageMobile ?? ""}
        paddingXl="lg:pt-3 lg:pb-[12px] lg:px-7 xl:px-[32px] xl:mr-[21px] xl:-mt-[28px]"
        imageClass="w-full h-[275px] md:h-[400px] lg:h-full xl:h-[680px] lg:w-[746px] object-cover"
      />
      <section className="w-full flex justify-center items-center bg-white">
        <img
          src={data.page5.image ?? ""}
          alt="Process"
          className="hidden lg:block w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
        <img
          src={data.page5.imageMobile || data.page5.image || ""}
          alt="Process"
          className="lg:hidden w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Strategy
        pageTitle={data.page6.pageTitle ?? ""}
        contentSections={strategyContent}
        image={data.page6.image ?? ""}
        imageMobile={data.page6.imageMobile ?? ""}
        paddingXl="lg:pt-3 lg:px-7 xl:px-[51px] xl:pb-[30px] xl:-mt-[5px] lg:pb-[20px]"
        imageClass={
          isExpanded
            ? "w-full h-[255px] md:h-[400px] lg:h-full xl:h-[640px] xl:w-[746px] object-cover"
            : "w-full h-[255px] md:h-[400px] lg:h-full xl:h-[640px] xl:w-[746px] object-cover"
        }
        onExpandChange={handleExpandChange}
      />
      <DirectionAndExperience
        pageTitle={null}
        finalDirection={null}
        image={data.page7.image ?? ""}
        imageMobile={data.page7.imageMobile ?? ""}
        titleClass={null}
        contentClass={null}
        paddingXl={null}
      />
      <section className="flex flex-col justify-center items-center px-[11px] py-[49px] md:py-[75px] xl:py-[94px] xl:px-[172px] bg-transparent">
        <div className="relative w-full md:w-[900px] xl:w-[1096px]">
          <PageFlipBook
            images={[
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili2.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili3.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili4.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili5.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili6.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili7.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili8.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili9.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili10.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili11.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili12.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili13.jpg",
              "/images/pdp/pdp2/book/THESIS BOOK A5 PRINT_mili14.jpg",
            ]}
          />
        </div>
      </section>
      <MoreProjects currentProjectId={data.id ?? ""} />
      {/* <ProjectsList excludeId="pdp1" layout="vertical" /> */}
      <Contact />
    </main>
  );
}
