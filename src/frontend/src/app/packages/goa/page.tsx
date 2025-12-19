"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Sun, Music, Palmtree } from "lucide-react";
import Link from "next/link";

export default function GoaPackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://media.easemytrip.com/media/Blog/India/637136726518786264/637136726518786264XJ4q1m.jpg?utm_source=chatgpt.com"
                            alt="Goa Beach"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?h=-1&s=1&w=800&utm_source=chatgpt.com"
                            alt="Baga Beach"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Fort_aguada.jpg?utm_source=chatgpt.com"
                            alt="Fort Aguada"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Doodhsagar_Fall.jpg?utm_source=chatgpt.com"
                            alt="Dudhsagar Falls"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://www.tourmyindia.com/states/goa/image/anjuna-beach-banner.webp?utm_source=chatgpt.com"
                            alt="Anjuna Beach"
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
                                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Budget Friendly</span>
                                <span className="bg-cyan-100 text-cyan-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Nightlife & Chill</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Goa Beach Holiday Package</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Goa → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 4 Days / 3 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Detailed Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Goa | Leisure Day</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-blue-500">
                                        <li>Overnight AC bus from Pune to Goa.</li>
                                        <li>Morning arrival & hotel check-in (subject to availability).</li>
                                        <li>Evening: Beach walk & Sunset views 🌅.</li>
                                        <li>Overnight stay in Goa.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: North Goa Sightseeing</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-blue-500">
                                        <li>Breakfast at hotel. Full-day North Goa tour.</li>
                                        <li>Visit **Baga Beach, Calangute Beach, Anjuna Beach & Fort Aguada**.</li>
                                        <li>Evening free: Tito’s Lane / Night market (optional).</li>
                                        <li>Overnight stay in Goa.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: South Goa OR Dudhsagar (Optional)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-blue-500">
                                        <li><strong>Option 1:</strong> South Goa Tour (Colva Beach, Benaulim Beach, Basilica of Bom Jesus).</li>
                                        <li><strong>Option 2:</strong> Dudhsagar Waterfalls Jeep Safari (Extra cost).</li>
                                        <li>Evening return to hotel. Overnight stay.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Goa → Pune</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-blue-500">
                                        <li>Breakfast & Check-out.</li>
                                        <li>Free time for shopping / beach visit.</li>
                                        <li>Evening / night AC bus to Pune. Tour ends with beach memories ✨.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Best Time & Why Choose (New Section) */}
                        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-cyan-900 mb-2 flex items-center"><Sun className="w-5 h-5 mr-2" /> Best Time to Visit</h3>
                                <ul className="list-disc list-inside text-cyan-800 text-sm">
                                    <li>**Oct–March**: Best weather & nightlife 🌤️</li>
                                    <li>**Jun–Sep**: Monsoon Goa (budget-friendly) 🌿</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-cyan-900 mb-2 flex items-center"><Palmtree className="w-5 h-5 mr-2" /> Why This Package?</h3>
                                <p className="text-cyan-800 text-sm">
                                    Best-selling budget Goa plan. Ideal for friends, students & couples.
                                </p>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "3 Nights Hotel Accommodation (Budget/Standard)",
                                        "Daily Breakfast",
                                        "Pune ↔ Goa AC Sleeper Bus",
                                        "North Goa Sightseeing",
                                        "One South Goa Tour (If Dudhsagar not picked)",
                                        "All Transfers by AC Shared Vehicle",
                                        "Driver, Fuel, Tolls & Parking"
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
                                        "Lunch & Dinner",
                                        "Water Sports & Club Entry",
                                        "Dudhsagar Jeep Safari Charges",
                                        "Personal Expenses",
                                        "Early Check-in / Late Checkout"
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
                                    <span className="text-sm text-gray-400 block mb-1">Budget Holiday</span>
                                    <span className="text-4xl font-black text-primary">₹10,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 text-blue-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-blue-100 flex items-center justify-center">
                                <Music className="w-4 h-4 mr-2" /> NIGHTLIFE SPECIAL
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Season</span>
                                        <span className="font-semibold text-gray-800">All Year Round</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Stay</span>
                                        <span className="font-semibold text-gray-800">Budget 2-3 Star</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=goa-beaches" className="block w-full text-center py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Goa Trip
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Brochure
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Travel Desk</p>
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
