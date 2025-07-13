'use client';

interface ClientInfoProps {
    clientBackground: string;
    role: string;
    image: string;
    industry: string;
    team: string;
}

export default function ClientInfo({ clientBackground, role, image, industry, team }: ClientInfoProps) {
    return (
        <section className="bg-[#351A12]">
            <div className="px-0">
                <div className="md:flex md:flex-row md:gap-0">
                    <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] md:w-[785px] pt-[40px] md:pt-[95px] md:pb-[100px]">
                        <h1 className="m-0 p-0 font-normal font-monthis text-[32px] md:text-[54px] text-[#D2ADCE] pb-[35px] md:pb-[65px] leading-[47px] md:leading-[69px]">
                            Painting a New Identity- A Makeover of Typsy Beauty's Digital Aisle
                        </h1>
                        <div className="flex flex-col md:flex-row gap-y-[32px] md:gap-y-0 md:gap-x-[90px] pb-[70px]">
                            <div>
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#F7F5ED] uppercase mb-2">
                                    Industry
                                </h2>
                                <p className="font-nats text-[16px] text-[#F7F5ED] lowercase">
                                    {industry || "No industry information available."}
                                </p>
                            </div>
                            <div>
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#F7F5ED] uppercase mb-2">
                                    Team
                                </h2>
                                <p className="font-nats text-[16px] text-[#F7F5ED] lowercase">
                                    {team || "No team information available."}
                                </p>
                            </div>
                            <div>
                                <h2 className="m-0 p-0 font-normal font-nats text-[20px] text-[#F7F5ED] uppercase mb-2">
                                    Role
                                </h2>
                                <p className="font-nats text-[16px] text-[#F7F5ED] lowercase">
                                    {role || "No role information available."}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="font-nats text-[16px] text-[#F7F5ED]">
                                {clientBackground || "No client background information available."}
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 flex justify-center items-start md:w-[655px] md:h-[620px] bg-white">
                        <img
                            src={image}
                            alt="Client Background"
                            className="w-full h-[300px] object-cover md:w-[655px] md:h-[620px] md:rounded-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 