'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

// TODO: ARRANGE  SERVICES IN a ARRAY w images, title, description, button
const services = [
    {
        title: 'Brand identity & Strategy',
        description: 'Clients across independent & studio projects: 4 Points by Sheraton, India Wyn Gaming, Ocularity Analytics, FA Home, FA Home Junior, Kyphie, Assago, Suneja Towers, Plylam Centre, Ping OEM, Toshana, Equity Planners.',
        image: '/images/services/brand-dentity-strategy.png'
    },
    {
        title: 'Website design & Development',
        description: "Clients across independent & studio projects: Sennheiser, Mercari India, Grazitti Interactive, NCR Corporation, Typsy Beauty, FA Home, Assago, Redbelly Network, Powr of You and Thingify.",
        image: ''
    },
    {
        title: 'Packaging design',
        description: "Clients across independent & studio projects: Longbottom Coffee & Tea, Walden, The Brown Box Bakery, YLG, When Miss Flo Is In Town, FA Home, FA Home Junior and Kyphie.",
        image: '/images/services/packaging.png'
    },
    {
        title: 'Illustration & visual assets',
        description: "Clients across Independent & Studio Projects: YLG Salon, Janavi India, Typsy Beauty, The Brown Box Bakery, FA Home Junior, Kyphie, Walden and Aditya Shukla- Album Artwork.",
        image: '/images/services/illustartions-visual-assets.png'
    },
    {
        title: 'Editorial design',
        description: "Clients across independent & studio projects: NIMHANS Bangalore, 4 Points by Sheraton, Janavi India, FA Home, Dote Gifts, Titliyan and Casa Amber.",
        image: '/images/services/editorial-design.png'
    },
    {
        title: 'Custom invitations',
        description: "Clients across independent & studio projects: Baby Gurnani, Kirat & Jasmine, Devika & Anirudh, Janavi India, Ocularity Analytics, Nitika Gujral and AMP Motors.",
        image: '/images/services/custom-invitation.png'
    },
    {
        title: 'Digital Ads & Campaign Assets',
        description: "Clients across independent & studio projects: Janavi India, Longbottom Coffee & Tea, AMP Motors, Skin Q, Aayna Skin Clinic, Sancha Tea, FA Home, FA Home Junior, Mauli Cashmere, Casa Amber, Delicut, Dote Gifts, Anata, Décor Remedy, Home Baker, 7 Bazaari and Siddhant Agrawal.",
        image: '/images/services/digital-ads.png'
    },
    {
        title: 'Social media creatives',
        description: "Clients across independent & studio projects: ITC, DLF Emporio, Luxor Nano, Sancha Tea, Skin Q, Punjab Jewellers, Organ India, IVWS, Chanakya, Décor Remedy, Home Baker, FA Home, FA Home Junior, Siddhant Agrawal, Anata, Aayna Skin Clinic, Namaskar Ayurved, Saan Design, Janavi India, Dote Gifts, Ocularity Analytics, Titliyan, Casa Amber, Halwasiya Avenue, Nitika Gujral and AMP Motors.",
        image: '/images/services/social-media.png'
    },
    {
        title: 'Commissioned Paintings',
        description: "Clients: IHG (InterContinental Hotels Group), Holiday Inn, 4 Points by Sheraton and Anant Raj.",
        image: '/images/services/comissioned-paintings.png'
    },
    {
        title: 'creative direction & consulting',
        description: "Clients: 4 Points by Sheraton, Holiday Inn Dhaka City Centre and Marium Niloy Group, Bangkok.",
        image: ''
    }
];

export default function Services() {
    const [hovered, setHovered] = useState(0);

    return (
        <section id="services" className="pt-[50px] pb-[50px] md:pt-0 md:pb-[80px] bg-[#F0E5D6]">
            <div className="px-[30px] md:px-[103px]">
                {/* Mobile Heading */}
                <h2 className="m-0 font-normal text-[58px] font-monthis text-left text-[#351A12] md:hidden" style={{ fontFamily: 'Monthis, sans-serif' }}>
                    Services
                </h2>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div
                        className="flex overflow-x-auto overflow-y-hidden mt-[30px] no-scrollbar scroll-smooth snap-x snap-mandatory"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {services.map((service, index) => (
                            <div key={index} className={`w-[300px] flex-shrink-0 snap-start ${index > 0 ? 'ml-4' : ''}`} style={{ transform: 'translateZ(0)' }}>
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[337px] object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-[337px] bg-white"></div>
                                )}
                                <h3 className="font-normal text-[15px] font-nats text-[#351A12] uppercase mt-4">
                                    {service.title}
                                </h3>
                                <p className="text-[12px] font-nats text-[#351A12] mt-[10px]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="w-full h-[32px] md:w-[232px] bg-[#D2ADCE] text-[#351A12] font-nats uppercase text-[15px] mt-[30px]">
                        Learn more
                    </button>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-start pt-[80px]">
                    {/* Column 1: Titles */}
                    <div className="w-[280px]">
                        <ul className="pt-[50px] pb-[50px]">
                            {services.map((service, index) => (
                                <li
                                    key={index}
                                    className={`text-[20px] font-nats uppercase cursor-pointer leading-none transition-colors duration-200 ${index > 0 ? 'pt-[35px]' : ''} ${hovered === index ? 'text-[#D2ADCE]' : 'text-[#351A12]'} hover:text-[#D2ADCE]`}
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(hovered)}
                                >
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Columns 2 and 3: Description and Image */}
                    <div className="flex md:gap-[31px]">
                        {/* Column 2: Description */}
                        <div className="w-[350px] pt-[150px] ml-[40px]">
                            <h2 className="font-normal text-[96px] font-monthis text-left text-[#351A12] mb-[50px] leading-none" style={{ fontFamily: 'Monthis, sans-serif' }}>
                                Services
                            </h2>
                            <p className="text-[16px] font-nats">
                                {services[hovered].description}
                            </p>
                        </div>
                        {/* Column 3: Image */}
                        <div>
                            {services[hovered].image ? (
                                <img
                                    src={services[hovered].image}
                                    alt={services[hovered].title}
                                    className="w-[533px] h-[597px] object-cover"
                                />
                            ) : (
                                <div className="w-[533px] h-[597px] bg-white"></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 