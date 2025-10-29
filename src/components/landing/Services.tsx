"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Brand Identity & Strategy",
    description:
      "Clients across independent & studio projects:\nFour Points by Sheraton, India Wyn Gaming, Ocularity Analytics, FA Home, FA Home Junior, Kyphie, Assago, Suneja Towers, Plylam Centre, Ping OEM, Toshana and Equity Planners.",
    image: "/images/services/brand-identity-strategy.png",
  },
  {
    title: "Website Design & Development",
    description:
      "Clients across independent & studio projects:\nSennheiser, Mercari India, Grazitti Interactive, NCR Corporation, Typsy Beauty, FA Home, Assago, Redbelly Network, Powr of You and Thingify.",
    image: "/images/services/website-design-development.png",
  },
  {
    title: "Packaging Design",
    description:
      "Clients across independent & studio projects:\nLongbottom Coffee & Tea, Walden, The Brown Box Bakery, YLG Salon, When Miss Flo Is In Town, FA Home, FA Home Junior and Kyphie.",
    image: "/images/services/packaging.png",
  },
  {
    title: "Illustration & Visual Assets",
    description:
      "Clients across independent & studio projects:\nYLG Salon, Janavi India, Typsy Beauty, The Brown Box Bakery, FA Home Junior, Kyphie, Walden and Aditya Shukla- Album Artwork.",
    image: "/images/services/illustrations-visual-assets.png",
  },
  {
    title: "Editorial Design",
    description:
      "Clients across independent & studio projects:\nNIMHANS Bangalore, Four Points by Sheraton, Janavi India, FA Home, Dote Gifts, Titliyan and Casa Amber.",
    image: "/images/services/editorial-design.png",
  },
  {
    title: "Custom Invitations",
    description:
      "Clients across independent & studio projects:\nWedding Invitations for Devika Reddy & Anirudh Reddy, Wedding Invitations for Rajkirat Singh Chug & Jasmine Kaur Gupta, Janavi India, Ocularity Analytics, Nitika Gujral and AMP Motors.",
    image: "/images/services/custom-invitation.png",
  },
  {
    title: "Digital Ads & Campaign Assets",
    description:
      "Clients across independent & studio projects:\nJanavi India, Longbottom Coffee & Tea, AMP Motors, Skin Q, Aayna Skin Clinic, Sancha Tea, FA Home, FA Home Junior, Mauli Cashmere, Casa Amber, Delicut, Dote Gifts, Anata, Décor Remedy, Home Baker, 7 Bazaari and Siddhant Agrawal.",
    image: "/images/services/digital-ads.png",
  },
  {
    title: "Social Media Creatives",
    description:
      "Clients across independent & studio projects:\nITC, DLF Emporio, Luxor Nano, Sancha Tea, Skin Q, Punjab Jewellers, Organ India, IVWS, Chanakya, Décor Remedy, Home Baker, FA Home, FA Home Junior, Siddhant Agrawal, Anata, Aayna Skin Clinic, Namaskar Ayurved, Saan Design, Janavi India, Dote Gifts, Ocularity Analytics, Titliyan, Casa Amber, Halwasiya Avenue, Nitika Gujral and AMP Motors.",
    image: "/images/services/social-media.png",
  },
  {
    title: "Commissioned Paintings",
    description:
      "Clients across independent & studio projects:\nIHG (InterContinental Hotels Group), Holiday Inn, Four Points by Sheraton and Anant Raj.",
    image: "/images/services/comissioned-paintings.png",
  },
  {
    title: "Creative Direction & Consulting",
    description:
      "Clients across independent & studio projects:\nFour Points by Sheraton, Holiday Inn Dhaka City Centre and Marium Niloy Group, Bangkok.",
    image: "/images/services/creative-direction.png",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(0);
  const [scales, setScales] = useState(Array(services.length).fill(1));
  const [centeredIndex, setCenteredIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current as HTMLDivElement | null;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;
      let maxScale = 0;
      let maxIndex = 0;
      const newScales = services.map((_, i) => {
        const card = container.children[i] as HTMLDivElement | undefined;
        if (!card) return 1;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(center - cardCenter);
        // Reduce scale difference and round to two decimals
        const scale =
          Math.round(Math.max(0.92, 1 - distance / 600) * 100) / 100;
        if (scale > maxScale) {
          maxScale = scale;
          maxIndex = i;
        }
        return scale;
      });
      setScales(newScales);
      setCenteredIndex(maxIndex);
    };
    const container = scrollRef.current as HTMLDivElement | null;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="services"
      className="pt-[26px] pb-0 md:pt-0 md:pb-[78px] bg-[#F0E5D6] overflow-x-hidden"
    >
      <div className="px-[29px] md:px-[104px]">
        {/* Mobile Heading */}
        <h2
          className="m-0 font-normal text-[58px] font-monthis text-left text-[#351A12] md:hidden"
          style={{ fontFamily: "Monthis, sans-serif" }}
        >
          Services
        </h2>
        {/* Mobile Layout */}
        <div className="md:hidden pb-[45px]">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden mt-[10px] no-scrollbar scroll-smooth snap-x snap-proximity"
            style={{
              WebkitOverflowScrolling: "touch",
              willChange: "transform",
              touchAction: "pan-x",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-[300px] flex-shrink-0 snap-start relative ${index > 0 ? "ml-4" : ""
                  }`}
                style={{
                  transform: `scale(${scales[index]}) translateZ(0)`,
                  transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                }}
              >
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={337}
                    className="w-full h-[337px] object-cover shadow-none drop-shadow-none filter-none !shadow-none !drop-shadow-none"
                    style={{ boxShadow: 'none', filter: 'none' }}
                  />
                ) : (
                  <div className="w-full h-[337px] bg-white"></div>
                )}
                {centeredIndex === index && (
                  <>
                    <h3 className="font-normal text-[15px] font-nats text-[#351A12] uppercase mt-[23px] mb-[1px]">
                      {service.title}
                    </h3>
                    <p className="text-[12px] font-nats text-[#351A12] whitespace-pre-line">
                      {service.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-start pt-[78px]">
          {/* Column 1: Titles */}
          <ul className="pt-[50px] pb-[50px] mr-[50px]">
            {services.map((service, index) => (
              <li
                key={index}
                className={`text-[20px] font-nats uppercase cursor-pointer leading-[19px] transition-colors duration-200 ${index > 0 ? "pt-[35px]" : ""
                  } ${hovered === index ? "text-[#D2ADCE]" : "text-[#351A12]"
                  } hover:text-[#D2ADCE]`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(hovered)}
              >
                {service.title}
              </li>
            ))}
          </ul>
          {/* Columns 2 and 3: Description and Image */}
          <div className="flex md:gap-[31px]">
            {/* Column 2: Description */}
            <div className="w-[335px] pt-[92px]">
              <h2
                className="font-normal text-[96px] font-monthis text-left text-[#351A12] mb-[36px] leading-none"
                style={{ fontFamily: "Monthis, sans-serif" }}
              >
                Services
              </h2>
              <p className="text-[16px] font-nats mr-[23px] whitespace-pre-line">
                {services[hovered].description}
              </p>
            </div>
            {/* Column 3: Image */}
            <div className="w-[533px]">
              {services[hovered].image ? (
                <Image
                  src={services[hovered].image}
                  alt={services[hovered].title}
                  width={533}
                  height={597}
                  className="object-cover shadow-none drop-shadow-none filter-none !shadow-none !drop-shadow-none"
                  style={{
                    boxShadow: 'none',
                    filter: 'none',
                    width: '533px',
                    height: '597px'
                  }}
                />
              ) : (
                <div className="w-[533px] h-[597px] bg-white"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
