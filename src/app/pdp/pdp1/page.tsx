import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import ClientInfo from "@/components/pdp/ClientInfo";
import DirectionAndExperience from "@/components/pdp/DirectionAndExperience";
import Foundations from "@/components/pdp/Foundations";
import Hero from "@/components/pdp/Hero";
import MoreProjects from "@/components/pdp/MoreProjects";
import Strategy from "@/components/pdp/Strategy";
import { pdpData } from "@/data/pdpData";

export default function PDP1() {
  const data = pdpData.pdp1;

  const foundationContent = [
    {
      title: "Brand Positioning And Values",
      content: data.page4.brandPositioning ?? null,
    },
    {
      title: "Stakeholder Interviews",
      content: data.page4.stakeholderInterviews ?? null,
    },
    {
      title: "Market And Competitor Analysis",
      content: data.page4.marketAnalysis ?? null,
    },
    {
      title: "Target Audience Establishment",
      content: data.page4.targetAudience ?? null,
    },
  ];

  const strategyContent = [
    {
      title: "UX/UI and Site Structure Planning",
      content: data.page6.uxPlanning ?? null,
    },
    {
      title: "Style Guide Establishment",
      content: data.page6.styleGuide ?? null,
    },
    {
      title: "Visual Direction and Design System",
      content: data.page6.visualDirection ?? null,
    },
    {
      title: "Tech, Performance and Functionality",
      content: data.page6.techPerformance ?? null,
    },
  ];

  return (
    <main className="pt-0">
      <Hero
        area={data.page1.area}
        title={data.page1.title}
        shortDescription={data.page1.shortDescription}
        projectLink={data.page1.projectLink}
        image={data.page1.image ?? ""}
        paddingXl="xl:p-10"
      />
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        role={data.page2.role}
        image={data.page2.image ?? ""}
        industry={data.page2.industry}
        team={data.page2.team}
        titleColor="text-[#D2ADCE]"
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
        paddingXl="p-7"
        imageClass="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
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
        paddingXl="py-8 px-9"
        imageClass="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
      />
      <DirectionAndExperience
        pageTitle={data.page7.pageTitle ?? ""}
        finalDirection={data.page7.finalDirection ?? ""}
        image={null}
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
