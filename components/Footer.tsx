import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/balvia-logo.png"
                                alt="Balvia Properties"
                                width={200}
                                height={50}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            A premier multifamily developer and operator, creating luxurious communities in high-growth markets.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/developments" className="hover:text-secondary transition-colors">Developments</Link></li>
                            <li><Link href="/investors" className="hover:text-secondary transition-colors">Investors</Link></li>
                            <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
                            <li><Link href="/partners" className="hover:text-secondary transition-colors">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                                <span>150 SE 2nd Ave Ste 1102,<br />Miami, FL 33131</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-secondary shrink-0" />
                                <span>+1 (786) 703-8178</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-secondary shrink-0" />
                                <span>info@balviaproperties.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Linkedin size={18} className="text-secondary shrink-0" />
                                <a href="https://www.linkedin.com/company/balvia-properties/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Follow us on LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Balvia Properties. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
