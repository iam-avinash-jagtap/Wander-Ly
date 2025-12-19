"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer"; // Assuming Footer component exists
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API verification delay
        setTimeout(() => {
            // Mock successful login
            const userData = {
                name: "Traveler",
                email: "traveler@wanderly.com",
                isLoggedIn: true
            };

            // Save to localStorage
            localStorage.setItem('wanderlyUser', JSON.stringify(userData));

            // Redirect to Home
            window.location.href = '/';
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            <Navbar />

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[55vw] h-full bg-primary hidden lg:block skew-x-[-6deg] translate-x-32 z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 lg:h-full z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Boutique Discovery"
                    className="w-full h-full object-cover opacity-25 lg:opacity-100 contrast-125"
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden"></div>

                {/* Desktop Quote */}
                <div className="absolute bottom-20 left-20 right-20 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <p className="text-white/60 text-sm font-black uppercase tracking-[0.3em] mb-4">Wanderly Collection</p>
                        <h2 className="text-4xl text-white font-serif italic leading-tight">
                            "To travel is to discover that everyone is wrong about other countries."
                        </h2>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
                <div className="w-full max-w-lg lg:w-1/2 lg:pr-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-teal-100/50">
                                Global Explorer Login
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter font-display leading-[0.9]">
                                The Art of <br /> <span className="text-teal-600">Discovery.</span>
                            </h1>
                            <p className="text-lg text-gray-500 max-w-md font-medium italic">
                                Sign in to access your curated journeys, boutique itineraries, and exclusive global experiences.
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                                    <span className="text-gray-600 font-medium">Remember me</span>
                                </label>
                                <a href="#" className="font-bold text-teal-600 hover:text-teal-700 hover:underline">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center py-5 bg-gray-900 hover:bg-teal-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-gray-900/20 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing In...
                                    </span>
                                ) : (
                                    <>Sign In <ArrowRight className="w-5 h-5 ml-2" /></>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500">
                                Don't have an account? {' '}
                                <a href="#" className="font-bold text-teal-600 hover:underline">
                                    Create one for free
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
