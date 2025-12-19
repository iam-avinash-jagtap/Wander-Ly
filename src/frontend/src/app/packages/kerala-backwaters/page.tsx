"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Send, Heart, Sun } from "lucide-react";
import Link from "next/link";

export default function KeralaBackwatersPackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/60/42/caption.jpg?h=-1&s=1&w=1200&utm_source=chatgpt.com"
                            alt="Kerala Houseboat"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/95/2c/a0/tea-gardens.jpg?h=500&s=1&w=900&utm_source=chatgpt.com"
                            alt="Munnar Tea Gardens"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://lp-cms-production.imgix.net/2020-11/f8ccb1f5c85e6cba4b70b879ac5f4e13-chinese-fishing-nets.jpg?utm_source=chatgpt.com"
                            alt="Chinese Fishing Nets"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full md:col-span-2">
                        <Image
                            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/76/bd/bb.jpg?utm_source=chatgpt.com"
                            alt="Kerala Nature"
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
                                <span className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Premium Budget</span>
                                <span className="bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Honeymoon Special</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Kerala - God's Own Country</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Kochi → Munnar → Alleppey → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 4 Days / 3 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Detailed Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-teal-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Kochi → Munnar</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Morning flight from Pune to **Kochi**.</li>
                                        <li>Scenic 4-5 hr drive to **Munnar**.</li>
                                        <li>En-route stop at **Cheeyappara & Valara Waterfalls**.</li>
                                        <li>Hotel check-in, evening leisure walk & sunset view.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-teal-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Munnar Sightseeing</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Full-day sightseeing: **Tea Gardens, Tea Museum, Mattupetty Dam**.</li>
                                        <li>Visit Echo Point & Photo Point.</li>
                                        <li>Optional: Eravikulam National Park.</li>
                                        <li>Dinner & Overnight in Munnar.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-teal-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Munnar → Alleppey (Houseboat Stay)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Drive to Alleppey & Check resident into **Houseboat** by 12 PM.</li>
                                        <li>Backwater cruise through serene canals & villages.</li>
                                        <li>**All Meals Included**: Lunch, Tea/Snacks, Dinner.</li>
                                        <li>Witness a magical sunset 🌅. Overnight mainly on Houseboat.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-teal-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Alleppey → Kochi → Pune</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Breakfast on Houseboat & Checkout by 9 AM.</li>
                                        <li>Drive to Kochi. Optional: **Fort Kochi & Chinese Fishing Nets**.</li>
                                        <li>Evening flight back to Pune. Trip ends with peaceful memories ✨.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Best Time & Type (New Section) */}
                        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-teal-900 mb-2 flex items-center"><Sun className="w-5 h-5 mr-2" /> Best Time to Visit</h3>
                                <ul className="list-disc list-inside text-teal-800 text-sm">
                                    <li>**Oct–March**: Best weather 🌤️</li>
                                    <li>**Jun–Sep**: Lush green (Monsoon) 🌧️</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-teal-900 mb-2 flex items-center"><Heart className="w-5 h-5 mr-2" /> Ideal For</h3>
                                <p className="text-teal-800 text-sm">
                                    Couples, Honeymooners, Nature Lovers seeking relaxation.
                                </p>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "2 Nights Munnar Hotel (Premium Budget)",
                                        "1 Night Alleppey Houseboat Stay",
                                        "All Meals on Houseboat (L/S/D/B)",
                                        "Daily Breakfast & Dinner at Hotel",
                                        "Pune ↔ Kochi Flights",
                                        "All Transfers by AC Cab",
                                        "Driver allowances, tolls & parking"
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
                                        "Lunch on Day 1 & Day 2",
                                        "Entry Tickets (Parks, Museums)",
                                        "Personal Expenses & Shopping",
                                        "Camera Fees & Tips",
                                        "Any extra activities not mentioned"
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
                                    <span className="text-sm text-gray-400 block mb-1">Premium Budget Package</span>
                                    <span className="text-4xl font-black text-primary">₹15,499</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-teal-50 text-teal-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-teal-100 flex items-center justify-center">
                                <Send className="w-4 h-4 mr-2" /> MOST BOOKED FOR HONEYMOON
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Season</span>
                                        <span className="font-semibold text-gray-800">Year Round</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Accommodation</span>
                                        <span className="font-semibold text-gray-800">3 Star + Houseboat</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=kerala-backwaters" className="block w-full text-center py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:from-emerald-600 hover:to-teal-500 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Kerala Trip
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Itinerary PDF
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Kerala Expert Support</p>
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
