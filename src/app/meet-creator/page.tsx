"use client";

import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/meet-creator/MeetCreator";
import Image from "next/image";


export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />
      <section className="w-full flex justify-center items-center">
        <Image
          src="/images/meet-creator.png"
          alt="Media"
          width={1200}
          height={738}
          className="w-full h-[570px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Logos />
      <Contact />
    </main>
  );
}
