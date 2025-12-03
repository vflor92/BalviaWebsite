"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const positions = [
    { id: 1, title: "Property Manager", location: "Austin, TX", type: "Full-time" },
    { id: 2, title: "Leasing Consultant", location: "Dallas, TX", type: "Full-time" },
    { id: 3, title: "Maintenance Supervisor", location: "Houston, TX", type: "Full-time" },
    { id: 4, title: "Investment Analyst", location: "Remote / HQ", type: "Full-time" },
];

export default function Careers() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Join Our Team</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Build your career with a company that values innovation, excellence, and community.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Life at Balvia</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                At Balvia Properties, we believe that our people are our greatest asset. We foster a culture of collaboration, continuous learning, and professional growth. Whether you&apos;re on site at one of our communities or in our corporate office, you&apos;ll be part of a team dedicated to excellence.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We offer competitive compensation, comprehensive benefits, and opportunities for advancement. Join us in shaping the future of multifamily living.
                            </p>
                        </div>
                        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
                            ></div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold mb-10 text-primary text-center">Open Positions</h2>
                    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                        {positions.map((position) => (
                            <motion.div
                                key={position.id}
                                whileHover={{ y: -5 }}
                                className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-center gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-50 rounded-full text-primary">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary">{position.title}</h3>
                                        <p className="text-gray-500 text-sm">{position.location} • {position.type}</p>
                                    </div>
                                </div>
                                <button className="px-6 py-2 border border-secondary text-secondary font-medium rounded hover:bg-secondary hover:text-white transition-colors">
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
