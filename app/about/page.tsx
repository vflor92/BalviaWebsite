"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TeamMemberModal from "@/components/TeamMemberModal";

export default function About() {
    const teamMembers = [
        {
            name: "Enrique Mesejo",
            title: "Principal & Founder",
            image: "/team/enrique-mesejo.png",
            bio: "As a shareholder of Balvia Properties since 2018 and Managing Partner of KoRes/Remos Lending, Mr. Mesejo's expertise in financial modeling, project management, financing, due diligence studies, market trends and segmentation, data analysis, and marketing and finance strategies enhances the depth and capability of Balvia Properties' ownership team."
        },
        {
            name: "Carlos Alviarez",
            title: "Principal & Founder",
            image: "/team/carlos-alviarez.png",
            bio: "As Director and shareholder of Balvia Properties since 2018, Mr. Alviarez contributes his strengths in strategic planning, business management, and financial/feasibility analysis in his role directing Balvia Properties' acquisition and development projects as well as overseeing property marketing and operations."
        },
        {
            name: "Vitaliy Florin, CPC",
            title: "Vice President",
            image: "/team/vitaliy-florin.png",
            bio: "As Vice President of Development at Balvia Properties, Mr. Florin brings his expertise in owner, lender and equity investor representation, development and construction management, construction cost auditing, and construction risk management consulting. Mr. Florin has represented clients on projects totaling over $2 Billion in Hard Costs throughout the Sunbelt region."
        },
        {
            name: "Tulio Rodriguez",
            title: "Vice President",
            image: "/team/tulio-rodriguez.jpg",
            bio: "With 25 years of experience in management consulting, project management, and financial advisory, Mr. Rodriguez has worked for multinational companies and as an entrepreneur in the promotion of financial services and in the development, roll out, and market/product development of a variety of products and services."
        }
    ];

    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
                    >
                        About Balvia Properties
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Building communities, creating value, and redefining multifamily living.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Mission</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our guiding principle is the belief that tenants at every income level aspire to live in luxurious and comfortable homes. To make this a reality, we furnish our affordably priced apartments with single-family style upgrades such as quartz countertops, stainless steel appliances, and solid wood cabinets.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                In addition to providing comfortable living spaces, we offer an array of luxurious amenities that enhance our residents&apos; lifestyle, including resort-style swimming pools, demonstration kitchens, indoor sports courts, dog parks, and spinning studios.
                            </p>
                        </div>
                        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
                            <Image
                                src="/mission-update.png"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Balvia Strategy */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold mb-8">The Balvia Strategy</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            The Balvia strategy prioritizes investing in high-growth sunbelt markets that are experiencing population and job growth that outpaces the broader United States. Our target is rental properties for middle-class professionals with mid-range rental rates in sought-after suburbs with top-rated school districts, high median incomes, and restrictive zoning laws that limit competition.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section (Placeholder) */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center cursor-pointer" onClick={() => setSelectedMember(member)}>
                                <div className="relative h-48 w-48 mx-auto mb-6 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                                <p className="text-secondary font-medium">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Member Modal */}
            <TeamMemberModal
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                name={selectedMember?.name || ""}
                title={selectedMember?.title || ""}
                image={selectedMember?.image || ""}
                bio={selectedMember?.bio || ""}
            />
        </div>
    );
}
