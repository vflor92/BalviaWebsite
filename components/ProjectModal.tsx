"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Building2, Calendar, Layers, Home, CheckCircle } from 'lucide-react';

interface ProjectDetails {
    units: string;
    style: string;
    commenced?: string;
    completed: string;
    completedLabel?: string;
    status?: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    location: string;
    images: string[];
    imageLabels?: string[];
    details?: ProjectDetails;
    address?: string;
}

export default function ProjectModal({ isOpen, onClose, title, location, images, imageLabels, details, address }: ProjectModalProps) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

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
                        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} className="text-gray-700" />
                        </button>

                        {/* Image Gallery */}
                        <div className="relative h-[300px] md:h-[450px] bg-black rounded-t-xl overflow-hidden">
                            <div
                                className="h-full w-full bg-contain bg-center bg-no-repeat"
                                style={{ backgroundImage: `url('${images[currentImage]}')` }}
                            />

                            {/* Image label */}
                            {imageLabels && imageLabels[currentImage] && (
                                <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                                    {imageLabels[currentImage]}
                                </div>
                            )}

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
                                    >
                                        <ChevronLeft size={24} className="text-gray-700" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
                                    >
                                        <ChevronRight size={24} className="text-gray-700" />
                                    </button>

                                    {/* Dots indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`w-3 h-3 rounded-full transition-all ${index === currentImage
                                                    ? 'bg-white scale-110'
                                                    : 'bg-white/50 hover:bg-white/75'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Thumbnail strip */}
                            {images.length > 1 && (
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    {images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImage(index)}
                                            className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all ${index === currentImage
                                                ? 'border-white shadow-lg'
                                                : 'border-transparent opacity-70 hover:opacity-100'
                                                }`}
                                        >
                                            <div
                                                className="h-full w-full bg-cover bg-center"
                                                style={{ backgroundImage: `url('${img}')` }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Project Details */}
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">{title}</h2>
                            <p className="text-gray-500 mb-6">{address || location}</p>

                            {details && (
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[140px]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Home size={18} className="text-secondary" />
                                            <span className="text-xs font-medium text-gray-500 uppercase">Units</span>
                                        </div>
                                        <p className="text-lg font-bold text-primary">{details.units}</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[140px]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building2 size={18} className="text-secondary" />
                                            <span className="text-xs font-medium text-gray-500 uppercase">Style</span>
                                        </div>
                                        <p className="text-lg font-bold text-primary">{details.style}</p>
                                    </div>
                                    {details.commenced && (
                                        <div className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[140px]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Calendar size={18} className="text-secondary" />
                                                <span className="text-xs font-medium text-gray-500 uppercase">Commenced</span>
                                            </div>
                                            <p className="text-lg font-bold text-primary">{details.commenced}</p>
                                        </div>
                                    )}
                                    <div className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[140px]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Layers size={18} className="text-secondary" />
                                            <span className="text-xs font-medium text-gray-500 uppercase">{details.completedLabel || 'Completed'}</span>
                                        </div>
                                        <p className="text-lg font-bold text-primary">{details.completed}</p>
                                    </div>
                                    {details.status && (
                                        <div className="bg-green-50 rounded-lg p-4 flex-1 min-w-[140px]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle size={18} className="text-green-600" />
                                                <span className="text-xs font-medium text-gray-500 uppercase">Status</span>
                                            </div>
                                            <p className="text-lg font-bold text-green-700">{details.status}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {address && (
                                <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
                                    <iframe
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}&maptype=satellite&zoom=17`}
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
