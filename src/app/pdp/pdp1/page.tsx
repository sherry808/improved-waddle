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
                clientBackground={data.page2.clientBackground}
                role={data.page2.role}
                image={data.page2.image}
                industry={data.page2.industry}
                team={data.page2.team}
            />
            {/* New Media Section */}
            <section className="w-full flex justify-center items-center bg-white">
                <img
                    src={data.page3.media[0]}
                    alt="Media"
                    className="w-full h-[300px] object-cover md:w-[1440px] md:h-[738px]"
                />
            </section>
            <Foundations
                brandPositioning={data.page4.brandPositioning}
                stakeholderInterviews={data.page4.stakeholderInterviews}
                marketAnalysis={data.page4.marketAnalysis}
                targetAudience={data.page4.targetAudience}
                image={data.page4.image}
            />
            {/* New Page5 Media Section */}
            <section className="w-full flex justify-center items-center bg-white">
                <img
                    src={data.page5.image}
                    alt="Process"
                    className="w-full h-[300px] object-cover md:w-[1440px] md:h-[738px]"
                />
            </section>
            <Strategy
                uxPlanning={data.page6.uxPlanning}
                styleGuide={data.page6.styleGuide}
                visualDirection={data.page6.visualDirection}
                techPerformance={data.page6.techPerformance}
                image={data.page6.image}
            />
            <DirectionAndExperience
                finalDirection={data.page7.finalDirection}
            />
            {/* Page8 Media Section */}
            <section className="hidden md:flex justify-center items-center pt-[95px] pb-[115px] px-[103px] bg-transparent">
                <div className="relative w-[1231px] h-[778px]">
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