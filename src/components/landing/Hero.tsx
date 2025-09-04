'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BoxCarouselDemo from '@/components/carousel/BoxCarouselDemo';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className="pt-[76px] pb-16 bg-[#F0E5D6]">
            <div className="px-[30px] md:px-[103px]">
                <section className='flex flex-col items-start justify-center min-h-[calc(100vh-60px)]'>
                    <div>
                        {/* <section>
                            <h1 className='font-normal text-primary font-monthis w-[255px] h-[77px] desktop:w-[450px] desktop:h-[154px] text-[48px] desktop:text-[96px] leading-tight'>
                                <span className='block text-[48px] desktop:text-[96px]'>Branding</span>
                            </h1>
                        </section> */}

                        {/* Box Carousel Demo */}
                        <div className="mt-8">
                            <BoxCarouselDemo />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
} 