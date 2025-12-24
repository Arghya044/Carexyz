'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Heart className="h-6 w-6 text-rose-500" fill="currentColor" />
                            <span className="text-xl font-bold text-white">Care.xyz</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Providing trusted and professional care services for your loved ones.
                            Quality care, peace of mind.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-rose-400 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-rose-400 transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-rose-400 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-rose-400 transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:text-rose-400 transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-bookings" className="text-sm hover:text-rose-400 transition-colors duration-200">
                                    My Bookings
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-sm hover:text-rose-400 transition-colors duration-200">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="text-sm hover:text-rose-400 transition-colors duration-200">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">Babysitting Services</li>
                            <li className="text-sm">Elderly Care</li>
                            <li className="text-sm">Medical Support</li>
                            <li className="text-sm">Specialized Care</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <a href="mailto:support@care.xyz" className="text-sm hover:text-rose-400 transition-colors duration-200">
                                    support@care.xyz
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <a href="tel:+1234567890" className="text-sm hover:text-rose-400 transition-colors duration-200">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">
                                    123 Care Street<br />
                                    New York, NY 10001
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="text-sm text-gray-400">
                            © {currentYear} Care.xyz. All rights reserved.
                        </div>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex flex-wrap space-x-6 text-sm">
                                <li>
                                    <Link href="/privacy" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookies" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
