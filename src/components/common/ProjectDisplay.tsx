'use client'
import React, { useEffect, useRef } from 'react';
import { pdpData, PDPData } from '@/data/pdpData';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDisplayProps {
    excludeProjectId?: string;
}

export default function ProjectDisplay({
    excludeProjectId,
}: ProjectDisplayProps) {
    const allProjects: PDPData[] = Object.values(pdpData);

    const projectsToDisplay = excludeProjectId
        ? allProjects.filter((p) => p.id !== excludeProjectId)
        : allProjects;

    const firstProject = projectsToDisplay[0];
    const remainingProjects = projectsToDisplay.slice(1);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!firstProject) return;

        const ctx = gsap.context(() => {
            const card = document.getElementById('first-project-card');
            const container = document.getElementById('first-project-container');

            if (!card || !container) return;

            gsap.set(card, { x: '100vw' });

            gsap.to(card, {
                x: 247,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [firstProject]);

    return (
        <section ref={containerRef} className="w-full bg-[#F0E5D6]">
            {firstProject && (
                <div id="first-project-container" className="relative h-[300vh]">
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-full z-10 px-8 md:px-[105px] pt-[75px] md:pt-[90px]">
                            {!excludeProjectId && (
                                <div className="mb-16 md:mb-[90px]">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-[85px] text-left">
                                        <div className="w-full md:w-1/3">
                                            <div className="flex items-center justify-between md:items-start md:justify-start md:gap-[82px]">
                                                <p className="font-nats text-[15px] md:text-[20px] uppercase text-[#351A12] md:order-2 md:pt-[35px] md:whitespace-nowrap">
                                                    Projects that brought ideas to life
                                                </p>
                                                <img
                                                    src="/images/Arrow.png"
                                                    alt="arrow"
                                                    className="w-6 h-6 md:h-[82px] md:w-auto md:order-1"
                                                    style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(13%) saturate(1067%) hue-rotate(253deg) brightness(88%) contrast(90%)' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="font-nats text-[12px] md:text-[16px] text-[#351A12] md:pt-[20px] line-clamp-2">
                                                Lorem Ipsum is simply dummy text of the printing
                                                and typesetti industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since the
                                                1950s. About the project in short. Lorem Ipsum is
                                                simply dummy text of the printing and typesetti
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            id="first-project-card"
                            className="project-card flex flex-col md:flex-row w-full items-center justify-center gap-8 md:gap-[80px]"
                        >
                            {firstProject.displayImages.slice(0, 3).map((_, i) => (
                                <div key={`img-a-${i}`} className="w-[100px] h-[100px] md:w-[164px] md:h-[164px] overflow-hidden flex-shrink-0">
                                    <div className="project-image w-full h-full bg-white" />
                                </div>
                            ))}
                            <div className="flex-shrink-0 text-center order-first md:order-none">
                                <div className="flex justify-center gap-2">
                                    {firstProject.page1.area.map((area, i) => (
                                        <span key={i} className="text-[16px] font-nats text-[#351A12] uppercase tracking-widest">{area}</span>
                                    ))}
                                </div>
                                <h2 className="font-normal text-[36px] md:text-[40px] font-monthis text-[#351A12] mt-4">{firstProject.page1.title}</h2>
                            </div>
                            {firstProject.displayImages.slice(3, 5).map((_, i) => (
                                <div key={`img-b-${i}`} className="w-[100px] h-[100px] md:w-[164px] md:h-[164px] overflow-hidden flex-shrink-0">
                                    <div className="project-image w-full h-full bg-white" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* 
            <div className="flex flex-col gap-[80px] bg-[#F0E5D6]">
                {remainingProjects.map((project) => (
                    <div key={project.id} className="flex flex-col md:flex-row w-full items-center justify-center gap-8 md:gap-[80px]">
                        {project.displayImages.map((_, i) => (
                            <div key={i} className="w-[100px] h-[100px] md:w-[164px] md:h-[164px] bg-white flex-shrink-0" />
                        ))}
                    </div>
                ))} */}
            {/* </div> */}
        </section >
    );
} 