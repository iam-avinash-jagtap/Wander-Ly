"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Umbrella, CloudRain } from "lucide-react";
import Link from "next/link";

export default function KeralaPackagePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/60/42/caption.jpg?h=-1&s=1&w=1200&utm_source=chatgpt.com"
                            alt="Kerala Backwaters Houseboat"
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
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/15/20/f7/varkala-cliff.jpg?h=-1&s=1&w=1200&utm_source=chatgpt.com"
                            alt="Varkala Cliff"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full md:col-span-2">
                        <Image
                            src="https://lp-cms-production.imgix.net/2020-11/f8ccb1f5c85e6cba4b70b879ac5f4e13-chinese-fishing-nets.jpg?utm_source=chatgpt.com"
                            alt="Chinese Fishing Nets"
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
                                <span className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Bestseller</span>
                                <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Couples & Family</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Kerala Backwaters Bliss</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Kochi → Munnar → Alleppey → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 4 Days / 3 Nights</div>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold font-display mb-4">About This Trip</h2>
                            <p className="text-gray-600 leading-relaxed italic">
                                "Ye plan backwaters focus ke saath short & smooth hai—perfect for first Kerala trip / couple / relaxed vacation. Pune se flight + local cab/houseboat flow rakha gaya hai."
                            </p>
                            <div className="mt-6">
                                <h3 className="font-bold text-gray-800 mb-3 flex items-center"><Umbrella className="w-5 h-5 mr-2 text-teal-600" /> Best Time to Visit</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                                        <span className="font-bold text-yellow-900 block mb-1">Oct – March</span>
                                        <span className="text-yellow-700 text-sm">Best weather 🌤️, ideal for sightseeing.</span>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                        <span className="font-bold text-green-900 block mb-1">Jun – Sep (Monsoon)</span>
                                        <span className="text-green-700 text-sm">Greenest views + romantic vibe 🌧️ (Budget friendly).</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Kochi → Munnar</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Morning flight from Pune to <strong>Kochi</strong>.</li>
                                        <li>Scenic drive to <strong>Munnar</strong> (approx 4–5 hrs).</li>
                                        <li>En-route visit waterfalls & lush tea gardens.</li>
                                        <li>Evening leisure walk & sunset views. Dinner & stay in Munnar.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Munnar Sightseeing</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Full-day sightseeing tour post breakfast.</li>
                                        <li>Visit Tea Gardens & Mattupetty Dam.</li>
                                        <li>Explore <strong>Eravikulam National Park</strong> (Nilgiri Tahr sightings).</li>
                                        <li>Visit Echo Point. Dinner & overnight stay in Munnar.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Munnar → Alleppey (Houseboat Stay)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Drive to <strong>Alleppey</strong> & check-in to Private/Shared Houseboat.</li>
                                        <li>Enjoy a traditional <strong>Backwater Cruise</strong> with lunch.</li>
                                        <li>Witness mesmerizing sunset on the canals 🌴.</li>
                                        <li>Dinner & overnight stay on the Houseboat.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Alleppey → Kochi → Pune</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-teal-500">
                                        <li>Morning breakfast on houseboat & Check-out (~9 AM).</li>
                                        <li>Drive back to Kochi.</li>
                                        <li>Optional: Quick visit to <strong>Fort Kochi & Chinese Fishing Nets</strong>.</li>
                                        <li>Evening flight back to Pune. Trip ends with beautiful memories ✨.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-teal-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "2 Nights Munnar Hotel (2–3★)",
                                        "1 Night Alleppey Houseboat",
                                        "Daily Breakfast & Dinner",
                                        "Houseboat Meals: Lunch + Dinner + Breakfast",
                                        "All Transfers & Sightseeing by AC Cab",
                                        "Driver, fuel, tolls, parking"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-red-800">Exclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "Entry tickets (parks, boating add-ons)",
                                        "Lunch on non-houseboat days",
                                        "Personal expenses & Shopping",
                                        "Camera fees, tips",
                                        "Any extra meals not mentioned"
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
                                    <span className="text-4xl font-black text-primary">₹15,499</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-teal-50 text-teal-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-teal-100">
                                MOST POPULAR FOR COUPLES
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Duration</span>
                                        <span className="font-semibold text-gray-800">4 Days / 3 Nights</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Package Type</span>
                                        <span className="font-semibold text-gray-800">Private AC Cab</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=kerala" className="block w-full text-center py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:from-emerald-600 hover:to-teal-500 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book This Trip
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Itinerary PDF
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Questions? Expert available 24/7</p>
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
