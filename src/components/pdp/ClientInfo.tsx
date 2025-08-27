"use client";

interface ClientInfoProps {
  pageTitle: string | null;
  clientBackground: string | null;
  role: string | null;
  industry: string | null;
  team: string | null;
  image: string;
  titleColor: string;
}

export default function ClientInfo(props: ClientInfoProps) {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full font-nats overflow-hidden">
      <div className="lg:w-[55%] w-full bg-[#351A12] flex items-center justify-center p-8 xl:p-10">
        <div className="w-full text-left p-0 xl:p-10">
          <h1
            className={`m-0 font-monthis font-normal text-[32px] lg:text-[54px] leading-tight mb-4 lg:mb-12 ${props.titleColor}`}
          >
            {props.pageTitle}
          </h1>
          <div className="flex flex-col md:flex-row gap-y-4 justify-between mb-4 lg:mb-12">
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-2">
                Industry
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                {props.industry || "No industry information available."}
              </p>
            </div>
            <div>
              {props.team && (
                <>
                  <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-2">
                    Team
                  </h2>
                  <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                    {props.team}
                  </p>
                </>
              )}
            </div>
            <div>
              <h2 className="m-0 font-nats font-normal text-[15px] lg:text-[20px] text-[#F7F5ED] uppercase mb-2">
                Role
              </h2>
              <p className="font-nats font-normal text-[12px] lg:text-[16px] text-[#F7F5ED]">
                {props.role || "No role information available."}
              </p>
            </div>
          </div>
          <p className="font-nats text-[12px] lg:text-[16px] leading-loose text-[#F7F5ED]">
            {props.clientBackground ||
              "No client background information available."}
          </p>
        </div>
      </div>
      <div className="lg:w-[45%] w-full h-auto">
        <img
          src={props.image}
          alt="Client Info"
          className="w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </div>
    </div>
  );
}
