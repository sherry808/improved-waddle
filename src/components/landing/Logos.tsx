"use client";

import React from "react";
import Image from "next/image";


const Logos: React.FC = () => {
  return (
    <section className="w-full py-[54px] md:py-0 bg-[#F0E5D6] overflow-x-hidden">
      <div className="px-[30px] md:px-[104px]">
        {/* Mobile Layout */}
        <div className="md:hidden -mx-[30px] mobile:h-[96px]">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-[37px]">
              {/* Multiple sets for seamless continuous loop */}
              <Image
                src="/images/logos/nimhans-logo-removebg.png"
                alt="NIMHANS"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/four-points-logo-removebg.png"
                alt="Four Points"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/holiday-inn-logo-removebg-preview.png"
                alt="Holiday Inn"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/ihg-logo-removebg.png"
                alt="IHG"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/ylg-logo.png"
                alt="YLG"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/nimhans-logo-removebg.png"
                alt="NIMHANS"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/four-points-logo-removebg.png"
                alt="Four Points"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/holiday-inn-logo-removebg-preview.png"
                alt="Holiday Inn"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/ihg-logo-removebg.png"
                alt="IHG"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/ylg-logo.png"
                alt="YLG"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/nimhans-logo-removebg.png"
                alt="NIMHANS"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/four-points-logo-removebg.png"
                alt="Four Points"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/holiday-inn-logo-removebg-preview.png"
                alt="Holiday Inn"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/ihg-logo-removebg.png"
                alt="IHG"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/ylg-logo.png"
                alt="YLG"
                width={97}
                height={97}
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex h-[328px] items-center justify-between">
          <Image
            src="/images/logos/nimhans-logo-removebg.png"
            alt="NIMHANS"
            width={112}
            height={112}
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <Image
            src="/images/logos/four-points-logo-removebg.png"
            alt="Four Points"
            width={112}
            height={112}
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <Image
            src="/images/logos/holiday-inn-logo-removebg-preview.png"
            alt="Holiday Inn"
            width={112}
            height={112}
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <Image
            src="/images/logos/ihg-logo-removebg.png"
            alt="IHG"
            width={112}
            height={112}
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <Image
            src="/images/logos/ylg-logo.png"
            alt="YLG"
            width={112}
            height={112}
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logos;
