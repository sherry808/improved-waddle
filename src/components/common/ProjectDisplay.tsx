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

    const projectsToDisplay = allProjects

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
        <section className="w-full bg-[#F0E5D6]">
            <div className="flex flex-col gap-[80px] bg-[#F0E5D6]">
                {projectsToDisplay.map((project) => (
                    <div key={project.id} className="flex flex-col md:flex-row w-full items-center justify-center gap-8 md:gap-[80px]">
                        {project.displayImages.map((_, i) => (
                            <div key={i} className="w-[100px] h-[100px] md:w-[164px] md:h-[164px] bg-white flex-shrink-0" />
                        ))}
                        <div className="flex-shrink-0 text-center order-first md:order-none">
                            <div className="flex justify-center gap-2">
                                {project.page1.area.map((area, i) => (
                                    <span key={i} className="text-[16px] font-nats text-[#351A12] uppercase tracking-widest">{area}</span>
                                ))}
                            </div>
                            <h2 className="font-normal text-[36px] md:text-[40px] font-monthis text-[#351A12] mt-4">{project.page1.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
} 