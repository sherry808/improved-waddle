'use client';

import React from 'react';
import Hero from '@/components/get-in-touch/Hero';
import GetInTouch from '@/components/get-in-touch/GetInTouch';
import SignupBanner from '@/components/landing/SignupBanner';
import Logos from '@/components/landing/Logos';
// import ContactForm from '@/components/get-in-touch/ContactForm';
// import ContactInfo from '@/components/get-in-touch/ContactInfo';
import Footer from '@/components/landing/Footer';

export default function GetInTouchPage() {
    return (
        <main className="pt-[80px]">
            <div className="w-full">
                {/* <div className="max-w-[360px]"> */}
                <Hero />
                <GetInTouch />
                <Logos />
                {/* <ContactForm /> */}
                {/* <ContactInfo /> */}
                {/* </div> */}
                <SignupBanner />
                <Footer />
            </div>
        </main>
    );
} 