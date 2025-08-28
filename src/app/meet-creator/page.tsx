"use client";

import Footer from "@/components/landing/Footer";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/landing/MeetCreator";

export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />
      <Logos />
      <Footer />
    </main>
  );
}
