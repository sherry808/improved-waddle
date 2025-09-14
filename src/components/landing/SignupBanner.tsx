"use client";

import { useState } from "react";

export default function SignupBanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email);
  };

  return (
    <div className="w-full bg-[#351A12] px-[30px] md:px-[103px]">
      {/* Mobile Layout - Single Column */}
      <div className="md:hidden h-[155px]">
        <div className="pt-[33px]">
          <h2 className="font-normal text-[15px] font-nats text-[#F7F5ED] mb-[12px] uppercase">
            Sign up for discounts
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative w-[300px] mb-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
              className="w-[300px] pt-0 pb-[1px] border-0 border-b border-[#D2ADCE] focus:outline-none font-nats text-[12px] bg-transparent text-[#F7F5ED] placeholder-[#F7F5ED]"
              required
            />
            <button
              type="submit"
              className="absolute left-[280px] bottom-0 w-[20px] h-[20px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center border-0"
            />
          </div>
        </form>
      </div>
      {/* Desktop Layout - Two Columns */}
      <div className="hidden h-[167px] md:flex justify-between">
        <div className="w-[300px] pt-[53px]">
          <h2 className="font-normal text-[20px] font-nats text-[#F7F5ED] mb-[23px] md:mb-0 uppercase">
            Sign up for discounts
          </h2>
        </div>
        <div className="w-[410px] ml-[632px] pt-[75px]">
          <form onSubmit={handleSubmit}>
            <div className="relative w-[410px] md:mb-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
                className="w-[410px] px-[42px] pt-0 pb-[3px] border-0 border-b border-[#D2ADCE] focus:outline-none font-nats text-[16px] bg-transparent text-[#F7F5ED] placeholder-[#F7F5ED]"
                required
              />
              <button
                type="submit"
                className="absolute left-[370px] bottom-[1px] w-[40px] h-[40px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center border-0"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
