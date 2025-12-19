"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Crown, Camera, Sun } from "lucide-react";
import Link from "next/link";

export default function RajasthanPackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg?utm_source=chatgpt.com"
                            alt="Amber Fort"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg?utm_source=chatgpt.com"
                            alt="Hawa Mahal"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mehrangarh_Fort_sanhita.jpg/1200px-Mehrangarh_Fort_sanhita.jpg?utm_source=chatgpt.com"
                            alt="Mehrangarh Fort"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://www.karandesertsafarijaisalmer.com/blog_images/camel-safari-1758705760.webp?utm_source=chatgpt.com"
                            alt="Camel Safari"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg?utm_source=chatgpt.com"
                            alt="Cultural Dance"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Content Left */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Header Info */}
                        <div>
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="bg-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Heritage & Culture</span>
                                <span className="bg-pink-100 text-pink-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Short Getaway</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Royal Rajasthan Tour</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Jaipur → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 3 Days / 2 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Detailed Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-amber-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Arrival in Jaipur | Pink City Exploration</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-amber-500">
                                        <li>Arrival at Jaipur Airport/Railway Station. Hotel Check-in.</li>
                                        <li>Visit **Hawa Mahal**, **City Palace** & **Jantar Mantar**.</li>
                                        <li>Evening exploring local bazaars (Johari/Bapu Bazaar).</li>
                                        <li>Optional: Cultural dinner with folk music. Overnight in Jaipur.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-amber-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Amber Fort & Royal Heritage</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-amber-500">
                                        <li>Breakfast at hotel. Visit majestic **Amber Fort**.</li>
                                        <li>Photo stop at **Jal Mahal**. Afternoon leisure.</li>
                                        <li>Optional: Folk dance/Puppet show or Rajasthani Thali dinner.</li>
                                        <li>Overnight stay in Jaipur.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-amber-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Departure</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-amber-500">
                                        <li>Breakfast & Check-out.</li>
                                        <li>Optional: **Albert Hall Museum** or **Nahargarh Fort**.</li>
                                        <li>Transfer to airport/railway station.</li>
                                        <li>Tour ends with royal memories ✨.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Best Time & Why Choose (New Section) */}
                        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center"><Sun className="w-5 h-5 mr-2" /> Best Time to Visit</h3>
                                <ul className="list-disc list-inside text-amber-800 text-sm">
                                    <li>**Oct–March**: Best weather 🌤️</li>
                                    <li>**Apr–Jun**: Hot but Budget-friendly ☀️</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center"><Crown className="w-5 h-5 mr-2" /> Why This Package?</h3>
                                <p className="text-amber-800 text-sm">
                                    Short & affordable royal getaway. Ideal for first-timers to Rajasthan.
                                </p>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "2 Nights Accommodation (Heritage/Budget Premium)",
                                        "Daily Breakfast",
                                        "Jaipur Sightseeing by AC Vehicle",
                                        "Airport/Railway Station Pickup & Drop",
                                        "All Tolls, Parking & Driver Charges",
                                        "On-trip Assistance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-red-800">Exclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "Pune ↔ Jaipur Flights/Train Tickets",
                                        "Lunch & Dinner",
                                        "Monument Entry Fees",
                                        "Cultural Show Charges",
                                        "Personal Expenses"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-700">
                                            <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <span className="text-sm text-gray-400 block mb-1">Starting from</span>
                                    <span className="text-4xl font-black text-primary">₹12,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-pink-50 text-pink-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-pink-100 flex items-center justify-center">
                                <Camera className="w-4 h-4 mr-2" /> MOST INSTAGRAMMABLE TRIP
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Duration</span>
                                        <span className="font-semibold text-gray-800">3 Days / 2 Nights</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Stay Type</span>
                                        <span className="font-semibold text-gray-800">Heritage Hotel</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=rajasthan" className="block w-full text-center py-4 bg-gradient-to-r from-amber-500 to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 hover:from-pink-600 hover:to-amber-500 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Royal Trip
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Brochure
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Royal Concierge</p>
                                <p className="text-lg font-bold text-gray-800 mt-1">+91 99887 76655</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
