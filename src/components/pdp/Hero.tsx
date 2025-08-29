"use client";

interface HeroProps {
  area: (string | null)[];
  title: string | null;
  shortDescription: string | null;
  projectLink: string | null;
  image: string;
  paddingXl: string;
  mobileTitle?: string | null;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
      <div className="lg:w-[55%] w-full h-auto">
        <img
          src={props.image}
          alt={props.title || ""}
          className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </div>
      <div
        className={`lg:w-[45%] w-full bg-[#F0E5D4] flex items-center justify-center p-10 md:p-8 ${props.paddingXl}`}
      >
        <div className={`w-full text-left p-0 ${props.paddingXl}`}>
          <div className="flex flex-wrap justify-start gap-x-2 mobile:gap-x-4 xl:gap-x-8 mb-2">
            {props.area.map((item, index) => (
              <span
                key={index}
                className={`font-nats text-[#351A12] py-0 text-[15px] lg:text-[20px] uppercase ${
                  index >= 2 ? "hidden lg:inline-block" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <h1 className="m-0 font-monthis font-normal text-[48px] lg:text-[54px] leading-tight mb-6">
            <span className="lg:hidden">
              {props.mobileTitle || props.title}
            </span>
            <span className="hidden lg:inline-block">{props.title}</span>
          </h1>
          <p className="font-nats text-[12px] lg:text-[16px] leading-loose text-[#351A12] mx-auto lg:mx-0">
            {props.shortDescription}
          </p>
          {props.projectLink && (
            <div className="mt-8">
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-2 font-nats font-normal text-[#351A12] uppercase bg-[#D2ADCE]"
              >
                View Live Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
