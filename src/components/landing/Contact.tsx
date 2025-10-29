"use client";

import { useState } from "react";

export default function Contact() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCalendlyClick = () => {
    setShowCalendly(true);
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <>
      <div className="flex w-full bg-[#351A12] font-nats overflow-x-hidden px-[30px] py-[45px] lg:px-[50px] lg:py-[50px] xl:px-[104px] xl:py-[40px] desktop-xl:px-[104px] desktop-xl:py-[50px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full">
          <div className="flex flex-col lg:mr-6">
            <h2 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0 leading-none lg:-mt-2 lg:ml-1">
              Contact
            </h2>
            <h2 className="font-normal text-[64px] lg:text-[96px] font-monthis text-[#D2ADCE] m-0 p-0 whitespace-nowrap leading-none mt-2 lg:mt-4 lg:ml-1">
              Get In Touch
            </h2>
          </div>
          <div className="flex flex-col mt-4 lg:mt-0 lg:mb-3 lg:mr-4">
            <p className="font-nats text-[12px] lg:text-[16px] text-[#F7F5ED] max-w-[340px]">
              Ready to bring your vision to life? Let's explore how strategic
              design and modern tech can move your business forward. The first
              step to building better starts here. Reach out to schedule a 30
              minute discovery call.
            </p>
          </div>
          <div className="flex flex-col mt-6 lg:mt-0 mb-1 lg:mb-6">
            <button
              type="button"
              onClick={handleCalendlyClick}
              className="inline-block w-full text-center px-3 py-1 lg:py-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase bg-[#D2ADCE] cursor-pointer"
            >
              Schedule a consultation
            </button>
          </div>
        </div>
      </div>

      {/* Calendly Modal Overlay */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <button
            onClick={handleCloseCalendly}
            className="fixed top-4 right-4 z-20 text-white text-xl font-bold"
          >
            ×
          </button>
          <div className="w-full h-full max-w-5xl max-h-[95vh] m-4">
            <iframe
              src="https://calendly.com/milibajaj-work/30min?embed_domain=localhost&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a consultation"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
