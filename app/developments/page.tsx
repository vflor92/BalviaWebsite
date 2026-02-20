"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

const projects = [
    {
        id: 1,
        title: "Premier at Morton Ranch",
        category: "Multi-Family",
        location: "Katy, TX",
        image: "/projects/premier-at-morton-ranch.jpg",
        link: "https://premieratmortonranch.com/",
        status: "Under Construction - Opening in Q1 2026",
        images: ["/projects/premier-at-morton-ranch.jpg", "/projects/morton-nov-2024.jpg", "/projects/morton-feb-2025.jpg", "/projects/morton-jul-2025.jpg", "/projects/morton-oct-2025.jpg", "/projects/morton-feb-2026.jpg", "/projects/morton-pool.jpg", "/projects/morton-courtyard.jpg", "/projects/morton-lobby.jpg", "/projects/morton-lounge.jpg", "/projects/morton-gym.jpg"],
        imageLabels: ["", "November 2024", "February 2025", "July 2025", "October 2025", "February 2026", "", "", "", "", ""],
        details: { units: "256 Units", style: "Garden Style", commenced: "November 2024", completed: "April 2026", completedLabel: "Scheduled Completion", status: "Under Construction" },
        address: "24014 Morton Ranch Rd, Katy, TX 77493"
    },
    {
        id: 2,
        title: "Premier at Katy",
        category: "Multi-Family",
        location: "Katy, TX",
        image: "/projects/premier-at-katy.jpg",
        link: "https://premieratkaty.com/",
        images: ["/projects/premier-at-katy.jpg", "/projects/katy-march-2022.jpg", "/projects/katy-june-2022.jpg", "/projects/katy-dec-2022.jpg", "/projects/katy-apr-2023.jpg", "/projects/katy-sep-2023.jpg", "/projects/katy-clubhouse.jpg", "/projects/katy-exterior.jpg", "/projects/katy-aerial-sunset.jpg", "/projects/katy-pool.jpg", "/projects/katy-gym.jpg"],
        imageLabels: ["", "March 2022", "June 2022", "December 2022", "April 2023", "", "", "", "", "", ""],
        details: { units: "230 Units", style: "Garden Style", commenced: "January 2022", completed: "September 2023", status: "Fully Leased and Stabilized" },
        address: "24117 Bella Dolce Ln, Katy, TX 77494"
    },
    {
        id: 3,
        title: "Regalia Bella Terra",
        category: "Multi-Family",
        location: "Richmond, TX",
        image: "/projects/regalia-bella-terra.jpg",
        images: ["/projects/regalia-bella-terra.jpg", "/projects/regalia-clubhouse.jpg", "/projects/regalia-exterior.jpg", "/projects/regalia-aerial.jpg"],
        details: { units: "226 Units", style: "Garden Style", completed: "November 2019", status: "Sold December 2021" },
        address: "24151 Bella Dolce Ln, Katy, TX 77494"
    },
];

const categories = ["All", "Multi-Family", "Townhouse", "Mixed-Use"];

export default function Developments() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="bg-white min-h-screen" >
            <section className="bg-primary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Developments</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore our portfolio of exceptional communities.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-6">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                    ? "bg-secondary text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={project.id}
                                className="group rounded-lg overflow-hidden shadow-lg bg-white"
                            >
                                <div
                                    className="h-64 overflow-hidden relative cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div
                                        className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    ></div>
                                    {project.status && (
                                        <div className="absolute top-0 left-0 right-0 bg-secondary/90 text-white text-center py-3 px-4">
                                            <p className="font-medium text-sm">{project.status}</p>
                                        </div>
                                    )}
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                                            View Project Details
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-serif font-bold text-primary">{project.title}</h3>
                                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{project.category}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">{project.location}</p>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary font-medium text-sm hover:text-primary transition-colors inline-block"
                                        >
                                            View Project Website
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title || ''}
                location={selectedProject?.location || ''}
                images={selectedProject?.images || []}
                imageLabels={selectedProject?.imageLabels}
                details={selectedProject?.details}
                address={selectedProject?.address}
            />
        </div >
    );
}
