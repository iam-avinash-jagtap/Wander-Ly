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
                name: "Traveler", // You could get this from an input field if you wanted to be more realistic
                email: "traveler@tripmitra.com",
                isLoggedIn: true
            };

            // Save to localStorage
            localStorage.setItem('tripMitraUser', JSON.stringify(userData));

            // Redirect to Home
            window.location.href = '/';
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            <Navbar />

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-blue-600 hidden lg:block skew-x-[-10deg] translate-x-20 z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 lg:h-full z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                    alt="Login Background"
                    className="w-full h-full object-cover opacity-20 lg:opacity-100"
                />
                <div className="absolute inset-0 bg-blue-600/20 lg:bg-blue-600/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden"></div>
            </div>

            <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
                <div className="w-full max-w-lg lg:w-1/2 lg:pr-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                                Welcome Back
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                                Plan Your Next <br /> <span className="text-blue-600">Great Escape.</span>
                            </h1>
                            <p className="text-lg text-gray-500 max-w-md">
                                Sign in to access your exclusive deals, saved itineraries, and booking history.
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
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
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-gray-600 font-medium">Remember me</span>
                                </label>
                                <a href="#" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-lg shadow-xl shadow-gray-900/20 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
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
                                <a href="#" className="font-bold text-blue-600 hover:underline">
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
