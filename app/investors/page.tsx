"use client";

import { Lock } from "lucide-react";

export default function Investors() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gray-900 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Investor Relations</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Partner with us to generate superior risk-adjusted returns.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Content */}
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Investment Philosophy</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Balvia Properties focuses on acquiring and developing multifamily assets in high-growth markets. Our disciplined approach combines rigorous market analysis, operational expertise, and a commitment to quality to deliver consistent value to our investors.
                        </p>
                        <h3 className="text-xl font-bold mb-4 text-primary">Why Invest with Balvia?</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
                            <li>Proven track record in sunbelt markets.</li>
                            <li>Vertical integration of development and management.</li>
                            <li>Focus on risk mitigation and capital preservation.</li>
                            <li>Transparent reporting and communication.</li>
                        </ul>
                    </div>

                    {/* Login Box */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-secondary/10 rounded-full">
                                    <Lock className="text-secondary" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-primary">Investor Login</h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-6">
                                Access your dashboard, view performance reports, and manage your investments.
                            </p>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full py-3 bg-primary text-white font-medium rounded hover:bg-black transition-colors"
                                >
                                    Sign In
                                </button>
                                <div className="text-center">
                                    <a href="#" className="text-sm text-secondary hover:underline">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
