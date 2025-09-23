"use client";

import Image from "next/image";


export const SocialIcons = () => (
  <>
    <a
      href="https://www.behance.net/milibajaj97"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[30px] h-[30px] md:w-[41px] md:h-[40px] flex items-center justify-center"
    >
      <Image
        src="/images/footer/behance.png"
        alt="Behance"
        width={40}
        height={40}
        className="w-full h-full"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/milibajaj/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[30px] h-[30px] md:w-[41px] md:h-[40px] flex items-center justify-center"
    >
      <Image
        src="/images/footer/linkedin.png"
        alt="LinkedIn"
        width={40}
        height={40}
        className="w-full h-full"
      />
    </a>
  </>
);
