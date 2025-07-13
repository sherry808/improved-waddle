'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData);
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: '',
                message: ''
            });
            alert('Thank you for your interest! We will contact you soon.');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your form. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="py-16 bg-[#F0E5D6]">
            <div className="max-w-7xl mx-auto">
                <div className="px-[30px]">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[15px] font-nats text-[#351A12] mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-0 border-b border-[#351A12] focus:outline-none font-nats text-[12px] bg-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[15px] font-nats text-[#351A12] mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-0 border-b border-[#351A12] focus:outline-none font-nats text-[12px] bg-transparent"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[15px] font-nats text-[#351A12] mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-0 border-b border-[#351A12] focus:outline-none font-nats text-[12px] bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-[15px] font-nats text-[#351A12] mb-2">Project Type</label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-0 border-b border-[#351A12] focus:outline-none font-nats text-[12px] bg-transparent"
                                    required
                                >
                                    <option value="">Select a project type</option>
                                    <option value="branding">Branding</option>
                                    <option value="web-design">Web Design</option>
                                    <option value="ui-ux">UI/UX Design</option>
                                    <option value="packaging">Packaging</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[15px] font-nats text-[#351A12] mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border-0 border-b border-[#351A12] focus:outline-none font-nats text-[12px] bg-transparent"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full h-[32px] md:w-[300px] bg-[#D2ADCE] text-[#351A12] font-nats !font-nats text-[15px] md:text-[20px]"
                            style={{ fontFamily: 'Nats, sans-serif' }}
                        >
                            SCHEDULE A CONSULTATION
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm; 