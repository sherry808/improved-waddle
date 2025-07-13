'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 font-mulish">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-parisienne">
                            MILI BAJAJ
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 font-mulish">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-600 hover:text-gray-900 font-mulish">
                            Products
                        </Link>
                        <Link href="/meet-creator" className="text-gray-600 hover:text-gray-900 font-mulish">
                            Meet Creator
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-mulish"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-mulish text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                            Home
                        </Link>
                        <Link href="/products" className="block px-3 py-2 rounded-md text-base font-mulish text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                            Products
                        </Link>
                        <Link href="/meet-creator" className="block px-3 py-2 rounded-md text-base font-mulish text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                            Meet Creator
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-mulish text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
} 