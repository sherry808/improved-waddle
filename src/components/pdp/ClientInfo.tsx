"use client";

interface ClientInfoProps {
  pageTitle: string;
  clientBackground: string;
  role: string;
  industry: string;
  team: string;
  image: string;
}

export default function ClientInfo(props: ClientInfoProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-hidden">
      <div className="lg:w-[55%] w-full bg-[#351A12] flex items-center justify-center p-8">
        <div className="w-full text-left p-8">
          <h1 className="m-0 font-monthis font-normal text-[54px] text-[#D2ADCE] leading-tight mb-12">
            {props.pageTitle}
          </h1>
          <div className="flex flex-col md:flex-row gap-16 mb-12">
            <div className="flex-1">
              <h2 className="m-0 font-nats font-normal text-[20px] text-[#F7F5ED] uppercase mb-2">
                Industry
              </h2>
              <p className="font-nats font-normal text-[16px] text-[#F7F5ED]">
                {props.industry || "No industry information available."}
              </p>
            </div>
            <div className="flex-1">
              <h2 className="m-0 font-nats font-normal text-[20px] text-[#F7F5ED] uppercase mb-2">
                Team
              </h2>
              <p className="font-nats font-normal text-[16px] text-[#F7F5ED]">
                {props.team || "No team information available."}
              </p>
            </div>
            <div className="flex-1">
              <h2 className="m-0 font-nats font-normal text-[20px] text-[#F7F5ED] uppercase mb-2">
                Role
              </h2>
              <p className="font-nats font-normal text-[16px] text-[#F7F5ED]">
                {props.role || "No role information available."}
              </p>
            </div>
          </div>
          <p className="font-nats text-[16px] leading-loose text-[#F7F5ED]">
            {props.clientBackground ||
              "No client background information available."}
          </p>
        </div>
      </div>
      <div className="lg:w-[45%] w-full h-auto">
        <img
          src={props.image}
          alt="Client Info"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
