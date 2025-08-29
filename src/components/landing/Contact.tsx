"use client";

export default function Contact() {
  return (
    <div className="flex w-full bg-[#351A12] font-nats overflow-hidden px-[30px] py-[45px] lg:px-[50px] lg:py-[50px] xl:px-[40px] xl:py-[40x] desktop-xl:px-[100px] desktop-xl:py-[50px]">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full">
        <div className="flex flex-col lg:mr-4">
          <h2 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">
            Contact
          </h2>
          <h2 className="font-normal text-[64px] lg:text-[96px] font-monthis text-[#D2ADCE] m-0 p-0 whitespace-nowrap leading-none">
            Get in Touch
          </h2>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 lg:mb-1 lg:mr-4">
          <p className="font-nats text-[12px] lg:text-[16px] text-[#F7F5ED] max-w-[340px]">
            Ready to bring your vision to life? Let's explore how strategic
            design and modern tech can move your business forward. The first
            step to building better starts here. Reach out to schedule a 30
            minute discovery call.
          </p>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0 lg:mb-1 ">
          <a href="https://calendly.com/xyz" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <button
              type="button"
              className="inline-block w-full text-center px-3 py-[2px] font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase bg-[#D2ADCE]"
            >
              Schedule a consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
