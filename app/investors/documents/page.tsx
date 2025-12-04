"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import InvestorNav from '@/components/InvestorNav';
import { mockDocuments } from '@/lib/mock-data';
import { Download, FileText, Filter } from 'lucide-react';

export default function Documents() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [selectedProperty, setSelectedProperty] = useState<string>('All');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/investors/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    const properties = ['All', ...Array.from(new Set(mockDocuments.map(d => d.property)))];
    const categories = ['All', ...Array.from(new Set(mockDocuments.map(d => d.category)))];

    const filteredDocuments = mockDocuments.filter(doc => {
        const propertyMatch = selectedProperty === 'All' || doc.property === selectedProperty;
        const categoryMatch = selectedCategory === 'All' || doc.category === selectedCategory;
        return propertyMatch && categoryMatch;
    });

    return (
        <div className="flex min-h-screen bg-gray-50">
            <InvestorNav />

            <div className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Documents</h1>
                        <p className="text-gray-600">Access your financial statements, reports, and tax documents</p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Filter size={20} className="text-gray-600" />
                            <h2 className="font-medium text-primary">Filters</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Property</label>
                                <select
                                    value={selectedProperty}
                                    onChange={(e) => setSelectedProperty(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                                >
                                    {properties.map(prop => (
                                        <option key={prop} value={prop}>{prop}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Documents List */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredDocuments.map((doc) => (
                                        <tr key={doc.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <FileText size={20} className="text-gray-400 mr-3" />
                                                    <span className="text-sm font-medium text-primary">{doc.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{doc.property}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{doc.category}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{doc.date}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{doc.size}</td>
                                            <td className="px-6 py-4">
                                                <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                                                    <Download size={16} />
                                                    <span className="text-sm font-medium">Download</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
