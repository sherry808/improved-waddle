"use client";

import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/landing/MeetCreator";

export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />
      <Logos />
      <Contact />
      <Footer />
    </main>
  );
}
