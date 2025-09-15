"use client";

import ProjectsList from "@/components/common/ProjectsList";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#F0E5D6]">
      <div className="px-[30px] md:px-[103px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-normal text-[58px] font-monthis text-[#351A12] mb-4">
            Featured Projects
          </h2>
          <p className="text-[12px] font-nats text-[#351A12] max-w-2xl mx-auto">
            Explore my latest work and creative endeavors
          </p>
        </motion.div>

        <ProjectsList layout="vertical" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="w-[300px] h-[32px] md:w-[232px] md:h-[42px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center uppercase text-[15px] md:text-[20px]"
          >
            Browse All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
