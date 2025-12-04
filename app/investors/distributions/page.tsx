"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import InvestorNav from '@/components/InvestorNav';
import { mockDistributions, portfolioSummary } from '@/lib/mock-data';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function Distributions() {
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
                        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Distributions</h1>
                        <p className="text-gray-600">Track your distribution history and returns</p>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-600">YTD Distributions</span>
                                <div className="p-2 rounded-lg bg-green-50 text-green-600">
                                    <DollarSign size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-primary">
                                ${(portfolioSummary.ytdDistributions / 1000).toFixed(1)}K
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-600">Total Distributions</span>
                                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                    <TrendingUp size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-primary">
                                ${(mockDistributions.reduce((sum, d) => sum + d.amount, 0) / 1000).toFixed(1)}K
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-600">Avg. Distribution</span>
                                <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                                    <DollarSign size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-primary">
                                ${(mockDistributions.reduce((sum, d) => sum + d.amount, 0) / mockDistributions.length / 1000).toFixed(1)}K
                            </p>
                        </div>
                    </div>

                    {/* Distributions Table */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-serif font-bold text-primary">Distribution History</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {mockDistributions.map((dist) => (
                                        <tr key={dist.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-600">{dist.date}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-primary">{dist.property}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {dist.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-green-600 text-right">
                                                ${dist.amount.toLocaleString()}
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
