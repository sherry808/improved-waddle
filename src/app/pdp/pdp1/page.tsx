import Hero from "@/components/pdp/Hero";
import ClientInfo from "@/components/pdp/ClientInfo";
import Foundations from "@/components/pdp/Foundations";
import Strategy from "@/components/pdp/Strategy";
import DirectionAndExperience from "@/components/pdp/DirectionAndExperience";
import MoreProjects from "@/components/pdp/MoreProjects";
import ProjectsList from "@/components/common/ProjectsList";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { pdpData } from "@/data/pdpData";

export default function PDP1() {
  const data = pdpData.pdp1;

  return (
    <main className="pt-0">
      <Hero
        area={data.page1.area}
        title={data.page1.title}
        shortDescription={data.page1.shortDescription}
        projectLink={data.page1.projectLink}
        image={data.page1.image}
      />
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        role={data.page2.role}
        industry={data.page2.industry}
        team={data.page2.team}
        image={data.page2.image}
      />
      <div className="flex justify-center w-full">
        <img
          src={data.page3.media}
          alt="Media"
          className="w-full h-[400px] object-cover md:h-[738px] md:max-w-[1440px]"
        />
      </div>
      <Foundations
        pageTitle={data.page4.pageTitle}
        brandPositioning={data.page4.brandPositioning}
        stakeholderInterviews={data.page4.stakeholderInterviews}
        marketAnalysis={data.page4.marketAnalysis}
        targetAudience={data.page4.targetAudience}
        image={data.page4.image}
      />
      <div className="flex justify-center w-full bg-white">
        <img
          src={data.page5.image}
          alt="Process"
          className="w-full h-[400px] object-cover md:h-[738px] md:max-w-[1440px]"
        />
      </div>
      <Strategy
        pageTitle={data.page6.pageTitle}
        uxPlanning={data.page6.uxPlanning}
        styleGuide={data.page6.styleGuide}
        visualDirection={data.page6.visualDirection}
        techPerformance={data.page6.techPerformance}
        image={data.page6.image}
      />
      <DirectionAndExperience finalDirection={data.page7.finalDirection} />
      {/* Page8 Media Section */}
      <section className="flex justify-center items-center pt-[20px] pb-[20px] px-[20px] md:pt-[95px] md:pb-[115px] md:px-[103px] bg-transparent">
        <div className="relative w-full h-[569px] md:w-[1231px] md:h-[778px]">
          <img
            src={data.page8.media}
            alt="Media"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-100 pointer-events-none" />
        </div>
      </section>
      <MoreProjects currentProjectId={data.id} />
      {/* <ProjectsList excludeId="pdp1" layout="vertical" /> */}
      <Contact />
      <Footer />
    </main>
  );
}
