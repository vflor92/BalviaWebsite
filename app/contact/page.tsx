"use client";

import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Get in touch with our team.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-1">Corporate Headquarters</h3>
                                            <p className="text-gray-600">
                                                150 SE 2nd Ave Ste 1102<br />
                                                Miami, FL 33131
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-1">Phone</h3>
                                            <p className="text-gray-600">+1 (786) 703-8178</p>
                                            <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 5pm EST</p>
                                        </div>                  </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                                        <p className="text-gray-600">info@balviaproperties.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1">Social Media</h3>
                                        <a href="https://www.linkedin.com/company/balvia-properties/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition-colors">
                                            Follow us on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                                        <option>General Inquiry</option>
                                        <option>Leasing</option>
                                        <option>Investment Opportunities</option>
                                        <option>Careers</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="w-full py-3 bg-primary text-white font-medium rounded hover:bg-black transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
