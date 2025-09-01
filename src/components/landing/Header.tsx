"use client";

import Link from "next/link";
import { useState } from "react";
import Menu from "../common/Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F0E5D6] border-b border-[#351A12]">
      <div className="flex items-center justify-between md:px-[104px] md:py-[3px]">
        <Link href="/" passHref>
          <div className="font-nats text-[36px] text-[#351A12] cursor-pointer">
            MILI BAJAJ
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-[#351A12] text-[24px] font-nats"
          >
            MENU
          </button>
          <div
            className="w-[20px] h-[20px] bg-[#D2ADCE] hover:bg-[#B89BB8] transition-colors cursor-pointer"
            onClick={toggleMenu}
          ></div>
        </div>
      </div>
      {isMenuOpen && <Menu onClose={toggleMenu} isOpen={isMenuOpen} />}
    </header>
  );
}
