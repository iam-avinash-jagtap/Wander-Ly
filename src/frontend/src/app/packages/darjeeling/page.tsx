"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Sunrise, Coffee, TrainFront } from "lucide-react";
import Link from "next/link";

export default function DarjeelingPackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://darjeelingyatra.com/images/local-sightseeing/tiger-hill-500-400.webp?utm_source=chatgpt.com"
                            alt="Tiger Hill Sunrise"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0e/5b/5e/darjeeling-himalayan.jpg?h=-1&s=1&w=1200&utm_source=chatgpt.com"
                            alt="Toy Train"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://www.darjeeling-tourism.com/darj_i000a1a.jpg?utm_source=chatgpt.com"
                            alt="Tea Gardens"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://samaaratea.com/cdn/shop/articles/598493502-revised-blog-07.jpg?v=1710919714&utm_source=chatgpt.com"
                            alt="Tea Leaves"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Peace_Pagoda%2C_Darjeeling_-_Dec_2006-2.jpg?utm_source=chatgpt.com"
                            alt="Peace Pagoda"
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
                                <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Family Holiday</span>
                                <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Hills & Heritage</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Darjeeling Family Getaway 🌄</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Bagdogra → Darjeeling → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 5 Days / 4 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Detailed Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-green-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Bagdogra → Darjeeling</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-green-500">
                                        <li>Flight Pune to Bagdogra via Delhi.</li>
                                        <li>Scenic drive to Darjeeling (3-4 hrs).</li>
                                        <li>Evening leisure walk at Mall Road. Overnight in Darjeeling.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-green-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Tiger Hill Sunrise & Sightseeing</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-green-500">
                                        <li>Early morning **Tiger Hill Sunrise** (Kanchenjunga views).</li>
                                        <li>Visit **Batasia Loop** & Ghoom Monastery.</li>
                                        <li>Himalayan Mountaineering Institute. Overnight Stay.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-green-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Toy Train + Tea Gardens</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-green-500">
                                        <li>**Joy Ride** on UNESCO Darjeeling Himalayan Railway (Toy Train).</li>
                                        <li>Tea Estate visit & **Tea Tasting**.</li>
                                        <li>Peaceful afternoon at **Japanese Peace Pagoda**. Overnight Stay.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-green-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Local Markets & Leisure</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-green-500">
                                        <li>Breakfast & Leisurely exploration.</li>
                                        <li>Shopping at **Chowrasta (Mall Road)** for souvenirs.</li>
                                        <li>Optional: Cafe hopping. Farewell Dinner.</li>
                                    </ul>
                                </div>

                                {/* Day 5 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-green-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 5: Darjeeling → Bagdogra → Pune</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-green-500">
                                        <li>Breakfast & Check-out.</li>
                                        <li>Drive back to Bagdogra Airport.</li>
                                        <li>Flight to Pune. Tour ends with happy memories.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Best Time & Why Choose (New Section) */}
                        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center"><Sunrise className="w-5 h-5 mr-2" /> Best Time to Visit</h3>
                                <ul className="list-disc list-inside text-green-800 text-sm">
                                    <li>**Mar–May**: Pleasant weather & blooms 🌸</li>
                                    <li>**Oct–Dec**: Clear mountain views 🍂</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center"><Coffee className="w-5 h-5 mr-2" /> Why This Package?</h3>
                                <p className="text-green-800 text-sm">
                                    Gentle pace, kid & senior friendly, iconic experiences like Toy Train & Tea Estates.
                                </p>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "Pune ↔ Bagdogra Return Flights",
                                        "4 Nights Hotel (3-Star Family Friendly)",
                                        "Daily Breakfast & Dinner",
                                        "Airport Transfers & Sightseeing (AC Cab)",
                                        "Toy Train Joy Ride (Subject to Avail)",
                                        "All Tolls, Parking & Driver Charges"
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
                                        "Lunches",
                                        "Entry Tickets",
                                        "Personal Expenses",
                                        "Camera Fees",
                                        "Any extra activities"
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
                                    <span className="text-sm text-gray-400 block mb-1">Family Package</span>
                                    <span className="text-4xl font-black text-primary">₹29,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-green-50 text-green-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-green-100 flex items-center justify-center">
                                <TrainFront className="w-4 h-4 mr-2" /> BEST FOR FAMILIES
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Season</span>
                                        <span className="font-semibold text-gray-800">Spring & Autumn</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Comfort</span>
                                        <span className="font-semibold text-gray-800">Relaxed Pace</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=darjeeling-family" className="block w-full text-center py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 hover:from-teal-600 hover:to-green-500 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Family Trip
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Brochure
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Family Travel Expert</p>
                                <p className="text-lg font-bold text-gray-800 mt-1">+91 88884 74060</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
