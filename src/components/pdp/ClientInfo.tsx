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
                    <div className="flex flex-col md:flex-row md:flex-row md:gap-0">
                        <div className="flex-shrink-0 flex justify-center items-start md:w-[655px] md:h-[620px] bg-white order-0 md:order-1">
                            <img
                                src={image}
                                alt="Client Info"
                                className="w-full h-[400px] md:w-[655px] md:h-[620px] object-cover"
                            />
                        </div>
                        <div className="flex flex-col md:flex-1 px-[30px] md:px-[103px] md:w-[785px] pt-[40px] md:pt-[95px] md:pb-[100px] order-1 md:order-0">
                            <h1 className="m-0 p-0 font-normal font-monthis text-[32px] md:text-[54px] text-[#D2ADCE] pb-[35px] md:pb-[65px] leading-[47px] md:leading-[69px]">
                                Painting a New Identity- A Makeover of Typsy Beauty's Digital Aisle
                            </h1>
                            <div className="flex flex-col md:flex-row md:gap-y-0 md:gap-x-[90px] pb-[30px] md:pb-[70px]">
                                <div className="pb-[30px]">
                                    <h2 className="m-0 p-0 font-normal font-nats text-[15px] md:text-[20px] text-[#F7F5ED] uppercase pb-[20px]">
                                        Industry
                                    </h2>
                                    <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] lowercase">
                                        {industry || "No industry information available."}
                                    </p>
                                </div>
                                <div className="pb-[30px]">
                                    <h2 className="m-0 p-0 font-normal font-nats text-[15px] md:text-[20px] text-[#F7F5ED] uppercase pb-[20px]">
                                        Team
                                    </h2>
                                    <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] lowercase">
                                        {team || "No team information available."}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="m-0 p-0 font-normal font-nats text-[15px] md:text-[20px] text-[#F7F5ED] uppercase pb-[20px]">
                                        Role
                                    </h2>
                                    <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] lowercase">
                                        {role || "No role information available."}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] pb-[45px]">
                                    {clientBackground || "No client background information available."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 