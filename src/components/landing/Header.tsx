'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide header
                setIsVisible(false);
            } else {
                // Scrolling up - show header
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    if (!mounted) {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0E5D6] w-screen h-[60px] transition-transform duration-300">
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
        <header className={`fixed top-0 left-0 right-0 z-50 bg-[#F0E5D6] w-screen h-[60px] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="w-full h-full">
                <div className="flex items-center justify-between h-full px-[30px] md:px-[103px]">
                    {/* Logo and Line */}
                    <div className="flex items-center gap-4">
                        <h2 className="font-normal text-primary font-nats text-[36px]">MILI BAJAJ</h2>
                        <div className="h-[1px] w-20 bg-primary"></div>
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <button className="md:hidden"> */}
                    <div className="w-[20px] h-[20px] bg-[#D2ADCE]"></div>
                    {/* </button> */}
                </div>
                {/* Horizontal Line */}
                <hr className="w-full h-[1px] bg-[#351A12] border-none absolute bottom-0" />
            </div>
        </header>
    );
} 