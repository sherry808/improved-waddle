'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'PROJECTS', href: '/products' },
        { name: 'SERVICES', href: '/services' },
        { name: 'MEET THE CREATOR', href: '/meet-creator' },
        { name: 'GET IN TOUCH', href: '/get-in-touch' },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeMenu();
        }
    };

    if (!mounted) {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0E5D6] w-screen h-[60px]">
                <div className="w-full h-full">
                    <div className="flex items-center justify-between h-full px-[30px] md:px-[103px]">
                        <div className="flex items-center gap-4">
                            <h2 className="font-normal text-primary font-nats text-[36px]">MILI BAJAJ</h2>
                            <div className="h-[1px] w-20 bg-primary"></div>
                        </div>
                        {/* TODO: Add navigation menu later */}
                    </div>
                    <hr className="w-full h-[1px] bg-[#351A12] border-none absolute bottom-0" />
                </div>
            </header>
        );
    }

    return (
        <>
            {/* Overlay for clicking outside */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30"
                    onClick={handleOverlayClick}
                />
            )}

            <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0E5D6] w-screen h-[60px]">
                <div className="w-full h-full">
                    {/* Header Bar - Always visible */}
                    <div className="flex items-center justify-between h-[60px] px-[30px] md:px-[103px] relative z-10">
                        {/* Logo and Line */}
                        <div className="flex items-center gap-4">
                            <h2 className="font-normal text-primary font-nats text-[36px]">MILI BAJAJ</h2>
                            <div className="h-[1px] w-20 bg-primary"></div>
                        </div>

                        {/* Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="w-[20px] h-[20px] bg-[#D2ADCE] hover:bg-[#B89BB8] transition-colors cursor-pointer"
                            aria-label="Open menu"
                        />
                    </div>

                    {/* Horizontal Line */}
                    <hr className="w-full h-[1px] bg-[#351A12] border-none relative z-10" />

                    {/* Menu Section */}
                    <div className={`absolute top-[60px] left-0 right-0 bg-[#351A12] transform transition-transform duration-75 ease-linear z-20 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                        <div className="h-[400px] px-[30px] md:px-[103px] py-[65px]">
                            <nav className="flex items-center h-full">
                                <ul className="space-y-8">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className="text-[20px] font-nats text-[#F0E5D6] hover:text-[#D2ADCE] transition-colors block"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
} 