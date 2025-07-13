'use client';

import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <section className="py-16 bg-[#351A12]">
            <div className="max-w-7xl mx-auto">
                <div className="px-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="font-normal text-[15px] font-nats text-[#F7F5ED] mb-4">CONTACT INFORMATION</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[12px] font-nats text-[#F7F5ED] mb-2">Email</p>
                                    <p className="text-[12px] font-nats text-[#D2ADCE]">hello@milibajaj.com</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-nats text-[#F7F5ED] mb-2">Phone</p>
                                    <p className="text-[12px] font-nats text-[#D2ADCE]">+91 98765 43210</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-nats text-[#F7F5ED] mb-2">Location</p>
                                    <p className="text-[12px] font-nats text-[#D2ADCE]">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-normal text-[15px] font-nats text-[#F7F5ED] mb-4">FOLLOW ME</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[12px] font-nats text-[#F7F5ED] mb-2">Instagram</p>
                                    <p className="text-[12px] font-nats text-[#D2ADCE]">@milibajaj</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-nats text-[#F7F5ED] mb-2">LinkedIn</p>
                                    <p className="text-[12px] font-nats text-[#D2ADCE]">mili-bajaj</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-nats text-[#F7F5ED] mb-2">Behance</p>
                                    <p className="text-[12px] font-nats text-[#D2ADCE]">milibajaj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo; 