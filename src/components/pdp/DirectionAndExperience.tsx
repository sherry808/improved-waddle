'use client';

import React from 'react';

interface DirectionAndExperienceProps {
    finalDirection: string;
}

const DirectionAndExperience: React.FC<DirectionAndExperienceProps> = ({
    finalDirection
}) => {
    return (
        <section className="bg-[#351A12] py-16 md:py-0">
            <div className="px-0">
                <div className="md:flex md:gap-[115px]">
                    {/* Heading on the left for desktop */}
                    <div className="flex flex-col px-[30px] md:px-[103px] md:pr-0 md:pt-[55px] md:pb-0 overflow-visible">
                        <h2 className="m-0 p-0 font-normal text-[#D2ADCE] text-[32px] md:text-[54px] font-monthis pb-[80px] leading-[69px]">
                            <span className="hidden md:inline">Final Creative Direction<br />& Web Experience</span>
                            <span className="md:hidden">Final Creative Direction & Web Experience</span>
                        </h2>
                    </div>
                    {/* Content on the right for desktop */}
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] md:pl-0 md:pt-[55px] md:pb-0">
                        <p className="font-nats text-[16px] text-[#F7F5ED]">
                            {finalDirection}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectionAndExperience; 