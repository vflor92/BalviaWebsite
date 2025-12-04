"use client";

import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, FileText, DollarSign, LogOut } from 'lucide-react';

export default function InvestorNav() {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    const navItems = [
        { href: '/investors/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/investors/portfolio', label: 'Portfolio', icon: Briefcase },
        { href: '/investors/documents', label: 'Documents', icon: FileText },
        { href: '/investors/distributions', label: 'Distributions', icon: DollarSign },
    ];

    return (
        <div className="bg-primary text-white w-64 min-h-screen p-6 flex flex-col">
            <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold mb-1">Balvia Properties</h2>
                <p className="text-gray-300 text-sm">Investor Portal</p>
            </div>

            <div className="mb-8 pb-6 border-b border-gray-700">
                <p className="text-sm text-gray-400 mb-1">Welcome back,</p>
                <p className="font-medium">{user?.name}</p>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-secondary text-white'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <button
                onClick={logout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors mt-auto"
            >
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </div>
    );
}
