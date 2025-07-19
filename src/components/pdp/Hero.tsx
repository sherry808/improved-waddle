'use client';

interface HeroProps {
    area: string[];
    title: string;
    shortDescription: string;
    projectLink: string;
    image: string;
}

export default function Hero({ area, title, shortDescription, projectLink, image }: HeroProps) {
    return (
        <section className="pt-0 pb-16 md:py-0 md:h-[803px]">
            <div className="px-0">
                <div className="md:flex md:gap-0">
                    <div className="md:mb-0 md:w-[785px] md:h-[803px] flex-shrink-0 flex justify-center bg-white p-0 m-0">
                        <img
                            src={image}
                            alt={title}
                            className="w-[360px] h-[393px] object-cover md:w-[785px] md:h-[803px] md:rounded-none"
                            style={{ background: 'white' }}
                        />
                    </div>
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] md:pt-[255px] md:pb-[255px]">
                        <div className="flex flex-row gap-[20px] pb-[20px] pt-[43px] md:pt-0">
                            {area.map((item, index) => (
                                <span
                                    key={index}
                                    className="text-[15px] md:text-[20px] font-nats text-[#351A12] uppercase hidden md:inline"
                                >
                                    {item}
                                </span>
                            ))}
                            {area.slice(0, 2).map((item, index) => (
                                <span
                                    key={"mobile-" + index}
                                    className="text-[15px] font-nats text-[#351A12] uppercase md:hidden"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <h1 className="m-0 p-0 font-normal text-[32px] md:text-[54px] font-monthis text-[#351A12] pb-[30px] leading-tight">
                            {title}
                        </h1>
                        <p className="text-[12px] md:text-[16px] font-nats text-[#351A12] max-w-2xl md:max-w-[450px] pb-[30px]">
                            {shortDescription}
                        </p>
                        <a
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-[30px] md:w-[444px] md:h-[32px] flex items-center justify-center text-[15px] md:text-[20px] font-nats font-normal text-[#351A12] uppercase bg-[#D2ADCE]"
                        >
                            View Live Website
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 