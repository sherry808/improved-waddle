'use client';

interface ProjectInfoProps {
    overview: string;
    services: string[];
}

export default function ProjectInfo({ overview, services }: ProjectInfoProps) {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h2 className="font-normal text-[15px] font-nats text-[#351A12] mb-4">
                            PROJECT OVERVIEW
                        </h2>
                        <p className="text-[12px] font-nats text-[#351A12]">
                            {overview}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-normal text-[15px] font-nats text-[#351A12] mb-4">
                            SERVICES PROVIDED
                        </h2>
                        <ul className="text-[12px] font-nats text-[#351A12]">
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
} 