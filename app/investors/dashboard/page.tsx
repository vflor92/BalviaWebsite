"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import InvestorNav from '@/components/InvestorNav';
import { portfolioSummary } from '@/lib/mock-data';
import { TrendingUp, Building2, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InvestorDashboard() {
    const { isAuthenticated, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/investors/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    const stats = [
        {
            label: 'Total Invested',
            value: `$${(portfolioSummary.totalInvested / 1000000).toFixed(2)}M`,
            icon: DollarSign,
            color: 'bg-blue-50 text-blue-600'
        },
        {
            label: 'Current Value',
            value: `$${(portfolioSummary.currentValue / 1000000).toFixed(2)}M`,
            icon: TrendingUp,
            color: 'bg-green-50 text-green-600'
        },
        {
            label: 'Properties',
            value: portfolioSummary.totalProperties.toString(),
            icon: Building2,
            color: 'bg-purple-50 text-purple-600'
        },
        {
            label: 'YTD Distributions',
            value: `$${(portfolioSummary.ytdDistributions / 1000).toFixed(0)}K`,
            icon: DollarSign,
            color: 'bg-amber-50 text-amber-600'
        }
    ];

    const recentUpdates = [
        { date: '2024-12-15', title: 'Q4 Financial Statements Available', property: 'All Properties' },
        { date: '2024-12-01', title: 'Q4 Distributions Processed', property: 'Premier at Katy, Regalia Bella Terra' },
        { date: '2024-11-28', title: 'Construction Milestone Achieved', property: 'Premier at Morton Ranch' },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            <InvestorNav />

            <div className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-serif font-bold text-primary mb-2">
                            Welcome back, {user?.name}
                        </h1>
                        <p className="text-gray-600">Here's an overview of your investment portfolio</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-600">{stat.label}</span>
                                        <div className={`p-2 rounded-lg ${stat.color}`}>
                                            <Icon size={20} />
                                        </div>
                                    </div>
                                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Recent Updates */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-serif font-bold text-primary mb-4">Recent Updates</h2>
                            <div className="space-y-4">
                                {recentUpdates.map((update, index) => (
                                    <div key={index} className="border-l-4 border-secondary pl-4 py-2">
                                        <p className="text-sm text-gray-500">{update.date}</p>
                                        <p className="font-medium text-primary">{update.title}</p>
                                        <p className="text-sm text-gray-600">{update.property}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-serif font-bold text-primary mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <Link
                                    href="/investors/portfolio"
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-secondary hover:bg-gray-50 transition-all group"
                                >
                                    <span className="font-medium text-primary">View Portfolio</span>
                                    <ArrowRight size={20} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                </Link>
                                <Link
                                    href="/investors/documents"
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-secondary hover:bg-gray-50 transition-all group"
                                >
                                    <span className="font-medium text-primary">Download Documents</span>
                                    <ArrowRight size={20} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                </Link>
                                <Link
                                    href="/investors/distributions"
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-secondary hover:bg-gray-50 transition-all group"
                                >
                                    <span className="font-medium text-primary">View Distributions</span>
                                    <ArrowRight size={20} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
