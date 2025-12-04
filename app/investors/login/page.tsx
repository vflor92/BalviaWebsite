"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { motion } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';

export default function InvestorLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (login(email, password)) {
            router.push('/investors/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary via-gray-900 to-black flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-2xl p-8 md:p-12 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-primary mb-2">Investor Portal</h1>
                    <p className="text-gray-600">Sign in to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-primary transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="/contact" className="text-sm text-gray-600 hover:text-secondary transition-colors">
                        Need help accessing your account?
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
