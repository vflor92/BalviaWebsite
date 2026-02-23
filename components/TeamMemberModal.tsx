"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface TeamMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    title: string;
    image: string;
    bio: string;
}

export default function TeamMemberModal({ isOpen, onClose, name, title, image, bio }: TeamMemberModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} className="text-gray-700" />
                        </button>

                        {/* Content */}
                        <div className="p-8 md:p-10">
                            <div className="flex flex-col items-center mb-6">
                                <div className="relative h-40 w-40 mb-4 overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-primary">{name}</h2>
                                <p className="text-secondary font-medium">{title}</p>
                            </div>

                            <p className="text-gray-600 leading-relaxed">{bio}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
