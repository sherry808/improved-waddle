'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
    const menuItems = [
        { name: 'PROJECTS', href: '/products' },
        { name: 'SERVICES', href: '/services' },
        { name: 'MEET THE CREATOR', href: '/meet-creator' },
        { name: 'GET IN TOUCH', href: '/get-in-touch' },
    ];

    return (
        <>
            {/* Menu */}
            <div className={`fixed top-[60px] left-0 right-0 w-full max-w-screen h-[400px] bg-[#351A12] z-60 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                {/* Menu Items */}
                <nav className="flex items-center h-full px-[30px] md:px-[103px] py-[65px]">
                    <ul className="space-y-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="text-[20px] font-nats text-[#F0E5D6] hover:text-[#D2ADCE] transition-colors block"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
} 