"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-primary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Partners</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver excellence.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
                        We work with top-tier architects, contractors, financial institutions, and service providers to ensure every project meets our high standards of quality and innovation.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
                        {[
                            { name: "Principal Asset Management", logo: "/partners/principal-asset-management.png" },
                            { name: "Benefit Street Partners", logo: "/partners/benefit-street-partners.png" },
                            { name: "Pensam", logo: "/partners/pensam.png" },
                            { name: "North River Partners", logo: "/partners/north-river-partners.png" },
                            { name: "The Clerkley Watkins Group", logo: "/partners/tcwg.png" },
                            { name: "Davis Brothers Construction", logo: "/partners/davis-brothers-construction.png" },
                            { name: "Kimley Horn", logo: "/partners/kimley-horn.png" },
                            { name: "Innovative Structural Consultants", logo: "/partners/idc.png" },
                            { name: "Veirtex", logo: "/partners/veirtex.png" },
                            { name: "ECS", logo: "/partners/ecs.png" },
                            { name: "Roscoe Property Management", logo: "/partners/roscoe-property-management.png" },
                            { name: "The C75 Edit", logo: "/partners/c75-edit.png" },
                        ].map((partner, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="h-32 bg-gray-50 rounded flex items-center justify-center p-6 transition-all duration-300 relative"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Become a Partner</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Interested in working with Balvia Properties? We are always looking for reliable partners who share our commitment to quality.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded hover:bg-black transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
