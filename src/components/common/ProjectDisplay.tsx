'use client';
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

export default function ProjectDisplay({ excludeProjectId }: ProjectDisplayProps) {
    const allProjects: PDPData[] = Object.values(pdpData);
    const projectsToDisplay = allProjects;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray<HTMLElement>('.project-content');

            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { x: '-30%', opacity: 0 },
                    {
                        x: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                            end: 'bottom center',
                            scrub: true,
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-[#F0E5D6] py-[120px]" ref={containerRef}>
            <div className="flex flex-col gap-[160px] bg-[#F0E5D6]">
                {projectsToDisplay.map((project) => (
                    <div key={project.id} className="project-section w-full">
                        {/* Inner scrolling content */}
                        <div className="project-content flex flex-col md:flex-row w-full items-center justify-center gap-8 md:gap-[80px] px-10 opacity-0 transform">
                            {/* Thumbnails */}
                            {project.displayImages.map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[100px] h-[100px] md:w-[164px] md:h-[164px] bg-white flex-shrink-0"
                                />
                            ))}

                            {/* Text Block */}
                            <div className="flex-shrink-0 text-center order-first md:order-none">
                                <div className="flex justify-center gap-2">
                                    {project.page1.area.map((area, i) => (
                                        <span
                                            key={i}
                                            className="text-[16px] font-nats text-[#351A12] uppercase tracking-widest"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="font-normal text-[36px] md:text-[40px] font-monthis text-[#351A12] mt-4">
                                    {project.page1.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


