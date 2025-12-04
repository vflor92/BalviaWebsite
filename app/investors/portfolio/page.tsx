"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import InvestorNav from '@/components/InvestorNav';
import { mockProperties } from '@/lib/mock-data';
import Image from 'next/image';
import { MapPin, TrendingUp } from 'lucide-react';

export default function Portfolio() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/investors/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <InvestorNav />

            <div className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Your Portfolio</h1>
                        <p className="text-gray-600">Overview of your property investments</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={property.image}
                                        alt={property.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${property.status === 'Stabilized' ? 'bg-green-100 text-green-800' :
                                                property.status === 'Leasing' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-amber-100 text-amber-800'
                                            }`}>
                                            {property.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-primary mb-2">{property.name}</h3>
                                    <div className="flex items-center text-gray-600 text-sm mb-4">
                                        <MapPin size={16} className="mr-1" />
                                        {property.location}
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Investment</span>
                                            <span className="font-medium text-primary">
                                                ${(property.investmentAmount / 1000000).toFixed(2)}M
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Current Value</span>
                                            <span className="font-medium text-green-600">
                                                ${(property.currentValue / 1000000).toFixed(2)}M
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Occupancy</span>
                                            <span className="font-medium text-primary">{property.occupancy}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center text-secondary">
                                            <TrendingUp size={16} className="mr-1" />
                                            <span className="text-sm font-medium">{property.expectedReturn}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
