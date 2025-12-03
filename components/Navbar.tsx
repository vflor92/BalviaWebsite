"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Developments", href: "/developments" },
    { name: "Investors", href: "/investors" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/balvia-logo.png"
                        alt="Balvia Properties"
                        width={200}
                        height={55}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-secondary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/investors"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-black transition-colors"
                    >
                        <User size={16} />
                        Investor Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-secondary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/investors"
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-sm font-medium rounded hover:bg-black transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <User size={16} />
                                Investor Login
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
