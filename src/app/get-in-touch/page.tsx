"use client";

import GetInTouch from "@/components/get-in-touch/GetInTouch";
import Logos from "@/components/landing/Logos";
import SignupBanner from "@/components/landing/SignupBanner";
import Footer from "@/components/landing/Footer";

export default function GetInTouchPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <GetInTouch />
      <Logos />
      <SignupBanner />
      <Footer />
    </main>
  );
}
