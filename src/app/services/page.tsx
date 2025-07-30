import React from 'react';
import Services from '@/components/landing/Services';
import Contact from '@/components/landing/Contact';
import Logos from '@/components/landing/Logos';
import SignupBanner from '@/components/landing/SignupBanner';
import Footer from '@/components/landing/Footer';

const ServicesPage: React.FC = () => {
    return (
        <main>
            <Services />
            <Contact />
            <Logos />
            <SignupBanner />
            <Footer />
        </main>
    );
};

export default ServicesPage; 