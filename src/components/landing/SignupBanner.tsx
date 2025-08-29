"use client";

import { useState } from "react";

export default function SignupBanner() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Set loading state to disable button
    setIsSubmitting(true);
    
    try {
      // Handle subscription here
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      await res.json();
      alert("Thanks for subscribing!");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#351A12] py-[50px] md:py-[78px]">
      <div className="px-[30px] md:px-[103px]">
        {/* Mobile Layout - Single Column */}
        <div className="md:hidden">
          <h2 className="font-normal text-[15px] font-nats text-[#F7F5ED] mb-[30px] uppercase">
            Sign up for discounts
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative w-[300px] mb-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
                className="w-[300px] px-4 pt-0 pb-[3px] border-0 border-b border-[#D2ADCE] focus:outline-none font-nats !font-nats text-[12px] bg-transparent text-[#F7F5ED] placeholder-[#F7F5ED]"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`absolute left-[280px] bottom-0 w-[20px] h-[20px] ${isSubmitting ? 'bg-gray-400' : 'bg-[#D2ADCE]'} text-[#351A12] font-nats flex items-center justify-center border-0`}
              >
                {isSubmitting ? '...' : ''}
              </button>
            </div>
          </form>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:flex justify-between">
          <div className="w-[300px]">
            <h2 className="font-normal text-[20px] font-nats text-[#F7F5ED] mb-[23px] md:mb-0 uppercase">
              Sign up for discounts
            </h2>
          </div>
          <div className="w-[410px] ml-[632px]">
            <form onSubmit={handleSubmit}>
              <div className="relative w-[410px] md:mb-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email address"
                  className="w-[410px] px-4 pt-0 pb-[3px] border-0 border-b border-[#D2ADCE] focus:outline-none font-nats !font-nats text-[16px] bg-transparent text-[#F7F5ED] placeholder-[#F7F5ED]"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`absolute left-[370px] bottom-[1px] w-[40px] h-[40px] ${isSubmitting ? 'bg-gray-400' : 'bg-[#D2ADCE]'} text-[#351A12] font-nats flex items-center justify-center border-0`}
                >
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
