import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import ClientInfo from "@/components/pdp/ClientInfo";
import DirectionAndExperience from "@/components/pdp/DirectionAndExperience";
import Foundations from "@/components/pdp/Foundations";
import Hero from "@/components/pdp/Hero";
import MoreProjects from "@/components/pdp/MoreProjects";
import Strategy from "@/components/pdp/Strategy";
import { pdpData } from "@/data/pdpData";

export default function PDP2() {
  const data = pdpData.pdp2;

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
        paddingXl="xl:p-8"
        mobileTitle="NIMHANS"
      />
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        role={data.page2.role}
        image={data.page2.image ?? ""}
        industry={data.page2.industry}
        team={null}
        titleColor="text-[#F0E5D6]"
      />
      <section className="w-full flex justify-center items-center">
        <img
          src={data.page3.media ?? ""}
          alt="Media"
          className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Foundations
        pageTitle={data.page4.pageTitle ?? ""}
        contentSections={foundationContent}
        image={data.page4.image ?? ""}
        paddingXl="lg:pt-3 lg:pb-[12px] lg:px-7 xl:px-10 xl:pb-[32px]"
        imageClass="w-full h-[400px] lg:h-full xl:h-[680px] xl:w-[760px] object-cover"
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
        paddingXl="lg:pt-3 lg:px-7 xl:px-[58px] xl:pb-[30px] lg:pb-[20px]"
        imageClass="w-full h-[400px] lg:h-full xl:h-[640px] object-cover"
      />
      <DirectionAndExperience
        pageTitle={null}
        finalDirection={null}
        image={data.page7.image ?? ""}
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
      <Footer />
    </main>
  );
}
