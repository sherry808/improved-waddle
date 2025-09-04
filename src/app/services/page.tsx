import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import Services from "@/components/landing/Services";
import SignupBanner from "@/components/landing/SignupBanner";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <Services />
      <Contact />
      <Logos />
      <SignupBanner />
    </main>
  );
};

export default ServicesPage;
