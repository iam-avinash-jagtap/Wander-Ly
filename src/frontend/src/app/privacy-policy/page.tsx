"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Lock, Shield, UserCheck, Cookie } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-white border-b border-gray-100 pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 text-green-600">
                        <Lock className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        We respect your privacy and are committed to protecting your personal information.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-12">

                    {/* Information We Collect */}
                    <section className="flex gap-6">
                        <div className="flex-shrink-0 hidden md:block">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <UserCheck className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Name, phone number, email address</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Travel preferences & enquiry details</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Payment-related information (processed securely via third parties)</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="h-px bg-gray-100 w-full"></div>

                    {/* How We Use Your Information */}
                    <section className="flex gap-6">
                        <div className="flex-shrink-0 hidden md:block">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                                <Shield className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>To process bookings and enquiries</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>To communicate trip details & updates</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>To improve our services and customer experience</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="h-px bg-gray-100 w-full"></div>

                    {/* Data Protection */}
                    <section className="flex gap-6">
                        <div className="flex-shrink-0 hidden md:block">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                                <Lock className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                We do <strong className="text-gray-900">not sell or share</strong> your personal data with unauthorized third parties. All sensitive data is handled securely.
                            </p>
                        </div>
                    </section>

                    <div className="h-px bg-gray-100 w-full"></div>

                    {/* Cookies */}
                    <section className="flex gap-6">
                        <div className="flex-shrink-0 hidden md:block">
                            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                                <Cookie className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Our website may use cookies to enhance user experience and analyze traffic. By using our website, you consent to our Privacy Policy.
                            </p>
                        </div>
                    </section>

                </div>

                <p className="text-center text-gray-400 mt-8 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>

            <Footer />
        </main>
    );
}
