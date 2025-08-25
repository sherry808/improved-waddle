import Hero from '@/components/pdp/Hero';
import ClientInfo from '@/components/pdp/ClientInfo';
import Foundations from '@/components/pdp/Foundations';
import Strategy from '@/components/pdp/Strategy';
import DirectionAndExperience from '@/components/pdp/DirectionAndExperience';
import MoreProjects from '@/components/pdp/MoreProjects';
import ProjectsList from '@/components/common/ProjectsList';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import { pdpData } from '@/data/pdpData';

export default function PDP2() {
    const data = pdpData.pdp2;

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
                image={data.page2.image}
                industry={data.page2.industry}
                team={data.page2.team}
            />
            {/* New Media Section */}
            <section className="w-full flex justify-center items-center">
                <img
                    src={data.page3.media}
                    alt="Media"
                    className="w-full h-[400px] object-cover md:w-[1440px] md:h-[738px]"
                />
            </section>
            <Foundations
                pageTitle={data.page4.pageTitle}
                brandPositioning={data.page4.brandPositioning}
                stakeholderInterviews={data.page4.stakeholderInterviews}
                marketAnalysis={data.page4.marketAnalysis}
                targetAudience={data.page4.targetAudience}
                theReality={data.page4.theReality}
                theChallenge={data.page4.theChallenge}
                image={data.page4.image}
            />
            {/* New Page5 Media Section */}
            <section className="w-full flex justify-center items-center">
                <img
                    src={data.page5.image}
                    alt="Process"
                    className="w-full h-[400px] object-cover md:w-[1440px] md:h-[738px]"
                />
            </section>
            <Strategy
                pageTitle={data.page6.pageTitle}
                uxPlanning={data.page6.uxPlanning}
                styleGuide={data.page6.styleGuide}
                visualDirection={data.page6.visualDirection}
                techPerformance={data.page6.techPerformance}
                theSolution={data.page6.theSolution}
                theVisualNarrative={data.page6.theVisualNarrative}
                image={data.page6.image}
            />
            <DirectionAndExperience
                finalDirection={data.page7.finalDirection}
                image={data.page7.image}
            />
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
            {/* <ProjectsList excludeId="pdp2" layout="vertical" /> */}
            <Contact />
            <Footer />
        </main>
    );
}
