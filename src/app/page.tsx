import Hero from '@/components/landing/Hero';
import Launch from '@/components/landing/Launch';
import Projects from '@/components/landing/Projects';
import MeetCreator from '@/components/landing/MeetCreator';
import Services from '@/components/landing/Services';
import Contact from '@/components/landing/Contact';
import SignupBanner from '@/components/landing/SignupBanner';
import Footer from '@/components/landing/Footer';
import Logos from '@/components/landing/Logos';
import ProjectDisplay from '@/components/common/ProjectDisplay';

export default function Home() {
  return (
    <main>
      <Hero />
      <Launch />
      <ProjectDisplay />
      <Projects />
      <MeetCreator />
      <Services />
      <Contact />
      <Logos />
      <SignupBanner />
      <Footer />
    </main>
  );
}
