"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, Star, CheckCircle, Calendar, Shield, XCircle, Info } from "lucide-react";
import Link from "next/link";

export default function HimalayasPackagePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg?utm_source=chatgpt.com"
                            alt="Manali City"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523&utm_source=chatgpt.com"
                            alt="Shimla"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://himachaltourstravel.com/wp-content/uploads/2023/01/solang-valley-1.jpg?utm_source=chatgpt.com"
                            alt="Solang Valley"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/mall-road-manali-scaled.jpg?fit=1600%2C1067&ssl=1&utm_source=chatgpt.com"
                            alt="Mall Road"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://indiano.travel/wp-content/uploads/2022/07/The-Mall-Road-is-a-main-pedestrian-street-in-Shimla-town.jpg?utm_source=chatgpt.com"
                            alt="Shimla Mall Road"
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
                                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Fixed Departure</span>
                                <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Budget Friendly</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Manali + Shimla Super Saver</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Delhi → Shimla → Manali → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 5 Days / 4 Nights</div>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold font-display mb-4">About This Trip</h2>
                            <p className="text-gray-600 leading-relaxed italic">
                                "Ye plan budget-friendly, fixed-departure style hai (Delhi hub use karke), jo commonly agents ₹18,999 ke aas-paas offer karte hain off-season / early booking me."
                            </p>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-2">Perfect For</h3>
                                    <p className="text-blue-700 text-sm">Friends, Couples, College Groups & First-time Himachal visitors.</p>
                                </div>
                                <div className="p-4 bg-amber-50 rounded-xl">
                                    <h3 className="font-bold text-amber-900 mb-2">Best Time</h3>
                                    <p className="text-amber-700 text-sm">Jan–Feb (Snow) / Jul–Sep (Greenery) for best rates.</p>
                                </div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Delhi → Shimla</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-primary">
                                        <li>Morning flight from Pune to Delhi.</li>
                                        <li>Evening transfer to Volvo bus station in Delhi.</li>
                                        <li>Overnight comfortable Volvo journey to Shimla.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Shimla Arrival & Sightseeing</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-primary">
                                        <li>Morning arrival in Shimla & Hotel Check-in.</li>
                                        <li>Visit <strong>Kufri</strong> (Snow point & Horse riding).</li>
                                        <li>Evening walk at <strong>The Ridge & Mall Road</strong>.</li>
                                        <li>Dinner & Overnight stay in Shimla.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Shimla → Manali (Scenic Drive)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-primary">
                                        <li>Post breakfast, drive to Manali via Kullu Valley.</li>
                                        <li>En-route stop at Kullu Shawl factory & River rafting points.</li>
                                        <li>Evening leisure time at Manali Mall Road.</li>
                                        <li>Dinner & Overnight stay in Manali.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Solang Valley & Adventure</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-primary">
                                        <li>Full day excursion to <strong>Solang Valley</strong>.</li>
                                        <li>Adventure activities: Paragliding, ATV, Zipline (Optional).</li>
                                        <li>Visit <strong>Atal Tunnel & Sissu</strong> (Weather/Road permitting).</li>
                                        <li>Return to Manali hotel for Dinner & Stay.</li>
                                    </ul>
                                </div>

                                {/* Day 5 & 6 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-gray-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 5 & 6: Manali Sightseeing & Return</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-primary">
                                        <li>Morning visit to <strong>Hadimba Devi Temple</strong> & Vashisht Kund.</li>
                                        <li>Explore Old Manali cafes and vibes.</li>
                                        <li>Evening: Board Overnight Volvo from Manali to Delhi.</li>
                                        <li>Next Morning: Arrive in Delhi & catch flight back to Pune.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "2 Nights Manali + 1 Night Shimla (Standard Hotels)",
                                        "Daily Breakfast & Dinner (MAP Plan)",
                                        "Delhi ↔ Shimla/Manali Volvo Tickets",
                                        "Shimla to Manali Transfer by Shared Cab",
                                        "Local Sightseeing by Shared Vehicle",
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
                                        "Adventure Activities (Paragliding, etc.)",
                                        "Rohtang Pass Permit fees",
                                        "Lunches & Personal Expenses",
                                        "Heater charges in winter",
                                        "Flight Seat Selection / Extra Baggage"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-700">
                                            <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Reality Check Note */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                            <div className="flex items-start">
                                <Info className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-amber-900 mb-2">Important Reality Check</h3>
                                    <ul className="list-disc list-inside text-amber-800 space-y-1 text-sm">
                                        <li><strong>₹18,999 price</strong> is valid mostly for Jan-Feb / Jul-Sep or early bird bookings.</li>
                                        <li>Flights included are fixed-timing & non-flexible.</li>
                                        <li>Hotels provided are Budget/Standard (2-3 Star) on twin sharing basis.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <span className="text-sm text-gray-400 block mb-1">Total Package Price</span>
                                    <span className="text-4xl font-black text-primary">₹18,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-green-50 text-green-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-green-100">
                                LIMITED TIME OFFER: SAVE ₹5,000
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Fixed Departures</span>
                                        <span className="font-semibold text-gray-800">Every Friday</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Package Type</span>
                                        <span className="font-semibold text-gray-800">Group / Fixed</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=himalayas" className="block w-full text-center py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-primary transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book This Package
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
