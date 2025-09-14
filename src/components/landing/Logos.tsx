"use client";

import React from "react";

const Logos: React.FC = () => {
  return (
    <section className="w-full py-[54px] md:py-0 bg-[#F0E5D6]">
      <div className="px-[30px] md:px-[103px]">
        {/* Mobile Layout */}
        <div className="md:hidden -mx-[30px] mobile:h-[96px]">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-[37px]">
              {/* Multiple sets for seamless continuous loop */}
              <img
                src="/images/logos/nimhans-logo-removebg.png"
                alt="NIMHANS"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/four-points-logo-removebg.png"
                alt="Four Points"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/holiday-inn-logo-removebg-preview.png"
                alt="Holiday Inn"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/ihg-logo-removebg.png"
                alt="IHG"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/ylg-logo.png"
                alt="YLG"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/nimhans-logo-removebg.png"
                alt="NIMHANS"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/four-points-logo-removebg.png"
                alt="Four Points"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/holiday-inn-logo-removebg-preview.png"
                alt="Holiday Inn"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/ihg-logo-removebg.png"
                alt="IHG"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/ylg-logo.png"
                alt="YLG"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/nimhans-logo-removebg.png"
                alt="NIMHANS"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/four-points-logo-removebg.png"
                alt="Four Points"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/holiday-inn-logo-removebg-preview.png"
                alt="Holiday Inn"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/ihg-logo-removebg.png"
                alt="IHG"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
              <img
                src="/images/logos/ylg-logo.png"
                alt="YLG"
                className="w-[97px] h-[97px] object-contain flex-shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex h-[328px] items-center justify-between">
          <img
            src="/images/logos/nimhans-logo-removebg.png"
            alt="NIMHANS"
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <img
            src="/images/logos/four-points-logo-removebg.png"
            alt="Four Points"
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <img
            src="/images/logos/holiday-inn-logo-removebg-preview.png"
            alt="Holiday Inn"
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <img
            src="/images/logos/ihg-logo-removebg.png"
            alt="IHG"
            className="w-[112px] h-[112px] object-contain flex-shrink-0"
          />
          <img
            src="/images/logos/ylg-logo.png"
            alt="YLG"
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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logos;
