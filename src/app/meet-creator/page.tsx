"use client";

import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/meet-creator/MeetCreator";

export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />
      <section className="w-full flex justify-center items-center">
        <img
          src="/images/meet-creator.png"
          alt="Media"
          className="w-full h-[570px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Logos />
      <Contact />
    </main>
  );
}
