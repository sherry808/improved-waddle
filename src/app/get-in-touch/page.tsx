"use client";

import GetInTouch from "@/components/get-in-touch/GetInTouch";
import Logos from "@/components/landing/Logos";
import SignupBanner from "@/components/landing/SignupBanner";
// import ContactForm from '@/components/get-in-touch/ContactForm';
// import ContactInfo from '@/components/get-in-touch/ContactInfo';
import Footer from "@/components/landing/Footer";

export default function GetInTouchPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      {/* <div className="max-w-[360px]"> */}
      <GetInTouch />
      <Logos />
      {/* <ContactForm /> */}
      {/* <ContactInfo /> */}
      {/* </div> */}
      <SignupBanner />
      <Footer />
    </main>
  );
}
