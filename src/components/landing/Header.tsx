"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "../common/Menu";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-[#F0E5D6] border-b border-[#351A12] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-[29px] md:px-[103px] h-[60px] md:h-[57px]">
        <Link href="/" passHref>
          <div className="font-nats text-[36px] text-[#351A12] cursor-pointer">
            MILI BAJAJ
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="hidden md:flex text-[#351A12] text-[24px] font-nats"
          >
            MENU
          </button>
          <div
            className="w-[20px] h-[20px] bg-[#D2ADCE] transition-colors cursor-pointer"
            onClick={toggleMenu}
          ></div>
        </div>
      </div>
      {isMenuOpen && <Menu onClose={toggleMenu} isOpen={isMenuOpen} />}
    </header>
  );
}
