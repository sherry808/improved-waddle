import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { pdpData } from '@/data/pdpData';

interface ProjectsListProps {
    excludeId?: string;
    layout?: 'horizontal' | 'vertical';
}

export default function ProjectsList({ excludeId, layout = 'horizontal' }: ProjectsListProps) {
    // Get all projects as an array, filter out the excluded one if provided
    const projects = Object.values(pdpData).filter(project => project.id !== excludeId);

    return (
        <div
            className={
                layout === 'vertical'
                    ? 'flex flex-col gap-8'
                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            }
        >
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                    <Link href={`/pdp/${project.id}`}>
                        <div className="relative h-64">
                            <Image
                                src={project.page1.image}
                                alt={project.page1.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-2">
                                {project.page1.area.map((area, i) => (
                                    <span key={i} className="text-[12px] font-nats text-[#351A12]">
                                        {area}
                                    </span>
                                ))}
                            </div>
                            <h3 className="font-normal text-[15px] font-nats text-[#351A12] mb-2">{project.page1.title}</h3>
                            <p className="text-[12px] font-nats text-[#351A12]">{project.page1.shortDescription}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
} 