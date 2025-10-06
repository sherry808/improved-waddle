"use client";

import ProjectDisplay from "@/components/common/ProjectDisplay";
import Image from "next/image";


interface MoreProjectsProps {
  currentProjectId: string;
}

export default function MoreProjects({ currentProjectId }: MoreProjectsProps) {
  return (
    <section className="bg-[#F0E5D6] py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center gap-8 mb-12">
          <div className="w-[100px] h-[100px] relative">
            <Image
              src="/images/Arrow.png"
              alt="Arrow"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="font-normal text-[#351A12] text-[15px] font-nats mb-4 uppercase">
              MORE IDEAS brought TO LIFE
            </h2>
          </div>
        </div>
        <ProjectDisplay excludeProjectId={currentProjectId} />
      </div>
    </section>
  );
}
