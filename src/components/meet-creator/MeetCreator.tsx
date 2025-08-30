"use client";

import React, { useState } from "react";

const MeetCreator: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const allParagraphs = [
        `Mili Bajaj is a Creative Consultant, Visual Designer and Strategic Branding expert. Her journey began with a paintbrush and, over time, evolved into a distinctive practice that bridges fine art and functional design.`,
        `Her early years were defined by recognition across both national and international platforms. At Modern School, Barakhamba Road, she was awarded for excellence in painting by Mr. L.K. Advani in 2014 and again in 2015 for her recreation of the Sistine Chapel. That same year, her work was featured in Femmes Le Shakti, an exhibition inaugurated at the Indian Embassy in Paris by Mr. Shakti Burman, where she showcased paintings on women empowerment. A graduate of Srishti Manipal Institute of Art, Design and Technology, she majored in Visual Communication and Strategic Branding with a minor in Contemporary Art Practices. This foundation continues to inform her research-driven approach, which led her to write Numbing Exhilaration, a graphic novel for NIMHANS, Bangalore, that explores the mysteries of bipolar disorder through the healing power of adaptable lifestyle alternatives. It was written in close collaboration with doctors and patients from the Psychosis Department.`,
        `From curating over 50 bespoke artworks for Holiday Inn Dhaka City Centre under IHG, spanning executive suites, bars, lobbies, corridors and more, to creating paintings and full-scale brand systems for the banquet hall, spa and gym properties at Four Points by Sheraton, Mili has expanded her practice into full-scale visual systems. During the pandemic, she pivoted into digital design and strategy, eventually earning the position of Head of Design at Ocularity Analytics, where she led multidisciplinary teams servicing clients across industries including hospitality, wellness, education, beauty, fashion, tech and non-profit. Whether building from the ground up, revitalising legacy identities or aligning brand presence with performance, her work brought clarity, cohesion and purpose to every brief.`,
        `Today, Mili partners with Sherry, a full-stack developer and technologist who thrives across the digital spectrum, from modern frameworks and scalable systems to emerging technologies like AI and Web3. Together, they create digital experiences where visual expression meets functionality. Their shared practice spans brand identity, strategy, web design, development, packaging, editorial design, custom invitations, stationery, commissioned artworks, digital ads, campaign assets, social media creatives, creative direction and consulting, all designed with intention and engineered to perform.`,
    ];

    const initialParagraphs = allParagraphs.slice(0, 2);
    const expandedParagraphs = allParagraphs.slice(2);

    const renderContent = () => {
        return (
            <>
                <div className="lg:hidden">
                    {initialParagraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className="font-nats text-[12px] leading-relaxed text-[#351A12] mb-4"
                        >
                            {paragraph}
                        </p>
                    ))}
                    {isExpanded &&
                        expandedParagraphs.map((paragraph, index) => (
                            <p
                                key={index + 1}
                                className="font-nats text-[12px] leading-relaxed text-[#351A12] mb-4"
                            >
                                {paragraph}
                            </p>
                        ))}
                    {!isExpanded && (
                        <div className="font-nats text-[12px] leading-[33px] text-[#351A12] mx-auto mt-0 flex justify-center">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="inline-block w-full text-center px-6 mt-2 font-nats font-normal text-[15px] lg:text-[20px] text-[#351A12] uppercase bg-[#D2ADCE]"
                            >
                                Read More
                            </button>
                        </div>
                    )}
                </div>
                <div className="hidden lg:block">
                    {allParagraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className="font-nats text-[16px] leading-relaxed text-[#351A12] mb-4 last:mb-0"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row w-full font-nats overflow-hidden px-[30px] py-10 lg:p-[50px] xl:p-[70px] desktop-xl:p-[102px] bg-[#F0E5D4] justify-between">
            <div className="w-full lg:w-[40%] xl:w-[30%] h-auto text-left">
                <div className="flex flex-col">
                    <h1 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] mb-3 lg:mb-4 uppercase text-[#351A12]">
                        Meet the Creator
                    </h1>
                    <h1 className="m-0 font-monthis font-normal text-[64px] lg:text-[96px] leading-none mb-[30px] text-[#351A12]">
                        Mili Bajaj
                    </h1>
                </div>
            </div>
            <div className="w-full lg:w-[60%] xl:w-[70%] flex flex-col justify-start pl-0 lg:pl-7 desktop-xl:pl-5">
                {renderContent()}
            </div>
        </div>
    );
};

export default MeetCreator;
