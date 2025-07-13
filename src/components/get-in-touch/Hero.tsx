'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className="w-full">
            <div className="px-[30px] text-left">
                <div className="relative w-full h-[400px]">
                    <Image
                        src="/images/contact-hero.jpg"
                        alt="Contact Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero; 