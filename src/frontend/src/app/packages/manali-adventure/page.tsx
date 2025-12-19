"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Tent, Mountain, Flame } from "lucide-react";
import Link from "next/link";

export default function ManaliAdventurePackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://voyagersadventure.com/wp-content/uploads/2025/01/Manali-summer-trek-2-scaled-e1741326438267.jpg?utm_source=chatgpt.com"
                            alt="Manali Summer Trek"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://www.kurumatravels.com/wp-content/uploads/2019/02/vashist-jogni-waterfall-solang-valley-trekking-2-1.jpg?utm_source=chatgpt.com"
                            alt="Jogini Waterfall"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://himalayandaredevils.com/storage/uploads/67e2a588dadee.jpg?utm_source=chatgpt.com"
                            alt="Solang Valley"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://media.moxtain.com/blogs/JoginiWaterfall/576/jogini-waterfall-trek.webp?utm_source=chatgpt.com"
                            alt="Waterfall Trek"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://trekthehimalayas.com/images/BeasKundTrek/MobileSlider/45f24f1c-6efb-427d-a87c-0e2bbaf66b10_2.webp?utm_source=chatgpt.com"
                            alt="Beas Kund Trek"
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
                                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Extreme Adventure</span>
                                <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">High Altitude</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Manali Extreme Trekking</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Delhi → Manali → Solang → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 5 Days / 4 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Detailed Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-red-500 border-4 border-red-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Delhi → Manali</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-red-500">
                                        <li>Morning flight from Pune to Delhi.</li>
                                        <li>Evening transfer to overnight Volvo bus to Manali.</li>
                                        <li>Safety briefing regarding high altitude and gear check.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-red-500 border-4 border-red-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Manali Arrival + Jogini Waterfall Trek</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-red-500">
                                        <li>Morning arrival & Check-in. Rest for acclimatization.</li>
                                        <li>Guided **Jogini Waterfall Trek** (6km round trip).</li>
                                        <li>Evening exploration of Old Manali cafes.</li>
                                        <li>Dinner & Overnight stay.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-red-500 border-4 border-red-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Solang Valley + Ridge Trek</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-red-500">
                                        <li>Drive to **Solang Valley** post breakfast.</li>
                                        <li>**Solang Ridge Trek** through alpine meadows.</li>
                                        <li>Optional: Paragliding/ATV.</li>
                                        <li>Evening **Bonfire & Music** 🎶. Dinner & Stay.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-red-500 border-4 border-red-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Hampta Pass Base / Beas Kund Trek</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-red-500">
                                        <li>**Highlight Day:** Choose between Hampta Pass Base or Beas Kund Trek.</li>
                                        <li>Experience glacier-fed rivers and panoramic Himalayan peaks.</li>
                                        <li>Professional trek guide included.</li>
                                        <li>Evening return to hotel. Dinner & Stay.</li>
                                    </ul>
                                </div>

                                {/* Day 5 & 6 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-red-500 border-4 border-red-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 5 & 6: Atal Tunnel Snow Hike + Return</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-red-500">
                                        <li>Drive to **Atal Tunnel** & Sissu for a snow hike/alpine walk.</li>
                                        <li>Evening board Overnight Volvo to Delhi.</li>
                                        <li>Next Morning: Flight Delhi to Pune. Trip ends 🏔️🔥.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* What to Carry (New Section) */}
                        <div className="bg-gray-50 border-l-4 border-gray-800 p-6 rounded-r-xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center"><Tent className="w-5 h-5 mr-2" /> Essential Gear List</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>Trekking shoes with ankle support (Must)</li>
                                    <li>Thermal wear + Down Jacket</li>
                                </ul>
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>Day backpack (20-30L)</li>
                                    <li>Trek pole, gloves, sunglasses & cap</li>
                                </ul>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "3 Nights Premium Adventure Hotel",
                                        "Daily Breakfast & Dinner",
                                        "Pune ↔ Delhi Flights (Fixed)",
                                        "Delhi ↔ Manali Volvo Tickets",
                                        "Certified Trek Guide & Coordinator",
                                        "Bonfire + Music Night",
                                        "Oxygen Support & First Aid"
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
                                        "Personal Trekking Gear",
                                        "Optional Adventure Activities",
                                        "Lunches & Energy Snacks",
                                        "Travel Insurance",
                                        "Any Personal Expenses"
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
                                    <span className="text-sm text-gray-400 block mb-1">Adventure Package</span>
                                    <span className="text-4xl font-black text-primary">₹24,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-red-50 text-red-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-red-100 flex items-center justify-center">
                                <Flame className="w-4 h-4 mr-2" /> POPULAR AMONG TREKKERS
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Best Season</span>
                                        <span className="font-semibold text-gray-800">Apr–Jun & Sep–Oct</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Mountain className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Trek Difficulty</span>
                                        <span className="font-semibold text-gray-800">Moderate</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=manali-adventure" className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 hover:from-orange-600 hover:to-red-600 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Adventure
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Gear Checklist
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Adventure Expert Support</p>
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
