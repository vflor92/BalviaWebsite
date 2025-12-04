"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";

export default function LinkedInFeed() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Latest Updates</h2>
                        <p className="text-gray-600">Stay connected with Balvia Properties.</p>
                    </div>
                    <a
                        href="https://www.linkedin.com/company/balvia-properties/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors mt-4 md:mt-0"
                    >
                        <Linkedin size={20} />
                        Follow us on LinkedIn
                    </a>
                </div>

                {/* Feed Posts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Post 1 (Newest) */}
                    <motion.a
                        href="https://www.linkedin.com/company/balvia-properties/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="block bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all flex flex-col h-full"
                    >
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/linkedin-post-1.jpg')" }}
                            ></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-xs text-gray-500 mb-3">Latest Update</p>
                            <p className="text-primary font-medium mb-4 line-clamp-4 flex-grow">
                                As we approach the final push to turn over the first buildings, we wanted to share the substantial progress the project has made in a few short months. 💪
                            </p>
                            <span className="text-secondary text-sm font-medium flex items-center gap-1 mt-auto">
                                Read more <ArrowRight size={14} />
                            </span>
                        </div>
                    </motion.a>

                    {/* Post 2 */}
                    <motion.a
                        href="https://www.linkedin.com/company/balvia-properties/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="block bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all flex flex-col h-full"
                    >
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/linkedin-post-2.png')" }}
                            ></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-xs text-gray-500 mb-3">Recent Update</p>
                            <p className="text-primary font-medium mb-4 line-clamp-4 flex-grow">
                                We received our first shipment of cabinets and countertops, and our trade partners at Cabinet Edge and Absolute Marble & Granite have impressed with their speed, quality and professionalism.
                            </p>
                            <span className="text-secondary text-sm font-medium flex items-center gap-1 mt-auto">
                                Read more <ArrowRight size={14} />
                            </span>
                        </div>
                    </motion.a>

                    {/* Post 3 */}
                    <motion.a
                        href="https://www.linkedin.com/company/balvia-properties/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="block bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all flex flex-col h-full"
                    >
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/linkedin-post-3.jpg')" }}
                            ></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-xs text-gray-500 mb-3">Previous Update</p>
                            <p className="text-primary font-medium mb-4 line-clamp-4 flex-grow">
                                This last month marked more milestones for our Premier at Morton Ranch project - drywall and exterior paint. The finish product is starting to form!
                            </p>
                            <span className="text-secondary text-sm font-medium flex items-center gap-1 mt-auto">
                                Read more <ArrowRight size={14} />
                            </span>
                        </div>
                    </motion.a>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a
                        href="https://www.linkedin.com/company/balvia-properties/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                        Follow us on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
