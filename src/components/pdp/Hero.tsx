"use client";

interface HeroProps {
  area: string[];
  title: string;
  shortDescription: string;
  projectLink: string | null;
  image: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
      <div className="lg:w-[55%] w-full h-auto">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[45%] w-full bg-[#F0E5D4] flex items-center justify-center p-10">
        <div className="w-full text-left p-10">
          <div className="flex flex-wrap justify-between mb-2">
            {props.area.map((item, index) => (
              <span
                key={index}
                className="font-nats text-[#351A12] py-0 text-[20px] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
          <h1 className="m-0 font-monthis font-normal text-[54px] leading-tight mb-6">
            {props.title}
          </h1>
          <p className="font-nats text-[16px] leading-loose text-[#351A12] mx-auto lg:mx-0">
            {props.shortDescription}
          </p>
          {props.projectLink && (
            <div className="mt-8">
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-2 font-nats font-normal text-[#351A12] uppercase bg-[#D2ADCE] transition-all duration-300 hover:scale-105"
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
