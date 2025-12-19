"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollText, CreditCard, Backpack, Map, AlertTriangle } from "lucide-react";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-white border-b border-gray-100 pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 text-blue-600">
                        <ScrollText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Please read these terms carefully. By accessing and using our website, you agree to the following terms.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Booking & Payments */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Booking & Payments</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Prices are subject to availability and change.</li>
                            <li>• Booking is confirmed only after payment receipt.</li>
                            <li>• Any increase in government taxes or fuel charges must be borne by the customer.</li>
                        </ul>
                    </div>

                    {/* Travel Responsibility */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                            <Backpack className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Responsibility</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Travelers must carry valid ID proof.</li>
                            <li>• We are not responsible for delays due to weather, road conditions, or government restrictions.</li>
                            <li>• Loss or damage to personal belongings is the traveler’s responsibility.</li>
                        </ul>
                    </div>

                    {/* Adventure Activities */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                            <Map className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Adventure Activities</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Participation is voluntary and at your own risk.</li>
                            <li>• Medical fitness is the traveler’s responsibility.</li>
                            <li>• Instructions by guides and coordinators must be followed.</li>
                        </ul>
                    </div>

                    {/* Cancellations & Refunds */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 mb-6">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Cancellations & Refunds</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Cancellation charges apply as per package policy.</li>
                            <li>• Refunds (if applicable) are processed within the defined timeline.</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center text-blue-800 text-sm font-medium">
                    We reserve the right to modify terms at any time without prior notice.
                </div>
            </div>

            <Footer />
        </main>
    );
}
