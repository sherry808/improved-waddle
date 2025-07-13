'use client';

import React from 'react';

const Logos: React.FC = () => {
    return (
        <section className="w-full py-16 bg-[#F0E5D6]">
            <div className="max-w-[360px] mx-auto">
                <div className="px-[30px]">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex items-center justify-center">
                            <img src="/images/logo1.png" alt="Logo 1" className="max-w-[120px]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/images/logo2.png" alt="Logo 2" className="max-w-[120px]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/images/logo3.png" alt="Logo 3" className="max-w-[120px]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/images/logo4.png" alt="Logo 4" className="max-w-[120px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logos; 