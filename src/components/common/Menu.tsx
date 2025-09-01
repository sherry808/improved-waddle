"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "PROJECTS", href: "/products" },
    { name: "SERVICES", href: "/services" },
    { name: "MEET THE CREATOR", href: "/meet-creator" },
    { name: "GET IN TOUCH", href: "/get-in-touch" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-40">
      <nav
        ref={menuRef}
        className="fixed top-[60px] w-full h-[460px] bg-[#351A12] z-50"
      >
        <div className="flex flex-col md:flex-row h-full px-[30px] md:px-[104px]">
          <ul className="flex flex-col space-y-8 justify-center md:w-1/3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-[15px] md:text-[20px] font-nats text-[#F7F5ED] hover:text-[#D2ADCE] transition-colors block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex flex-row items-center justify-center md:w-2/3">
            <img
              src="/images/menu/menu1.png"
              alt="Menu decorative image 1"
              className="w-1/2 h-[328px] object-cover"
            />
            <img
              src="/images/menu/menu2.png"
              alt="Menu decorative image 2"
              className="w-1/2 h-[328px] object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
