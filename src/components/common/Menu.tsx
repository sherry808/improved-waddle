"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";


interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ onClose, isOpen }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "PROJECTS", href: "/#projects" },
    { name: "SERVICES", href: "/services" },
    { name: "MEET THE CREATOR", href: "/meet-creator" },
    { name: "GET IN TOUCH", href: "/get-in-touch" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isHeaderButton = (target as Element)?.closest('header button');

      if (menuRef.current && !menuRef.current.contains(target) && !isHeaderButton) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isOpen]);

  return (
    <div className="fixed top-[60px] md:top-[57px] left-0 right-0 bottom-0 z-40 transition-all duration-500 ease-in-out bg-transparent" style={{ backgroundColor: isOpen ? 'transparent' : 'transparent' }}>
      <nav
        ref={menuRef}
        className={`fixed top-[60px] md:top-[57px] w-full md:h-[350px] xl:h-[460px] z-50 transition-transform duration-500 ease-in-out bg-[#F0E5D6] md:bg-[#351A12] border-t border-[#351A12] md:border-t-0 safe-area-inset-top ${isOpen ? "transform-none" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex flex-col justify-center h-full py-[49px] px-[30px] md:pl-[104px] md:pr-[104px] md:py-[40px] xl:pl-[104px] xl:pr-[104px] md:w-[520px] md:-ml-[1px]">
            <ul className="flex flex-col space-y-[44px] md:space-y-[35px] xl:space-y-[52px]">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-[15px] md:text-[20px] font-nats text-[#351A12] md:text-[#F7F5ED] hover:text-[#D2ADCE] transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-start md:flex-row md:w-[920px] md:pr-[60px] md:-ml-[4px]">
            <Image
              src="/images/menu/menu1.png"
              alt="Menu decorative image 1"
              width={410}
              height={328}
              className="w-full h-[284px] md:w-[340px] xl:h-[328px] xl:w-[410px] object-cover"
            />
            <Image
              src="/images/menu/menu2.png"
              alt="Menu decorative image 2"
              width={410}
              height={328}
              className="hidden md:block w-[340px] h-[284px] xl:h-[328px] xl:w-[410px] object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
