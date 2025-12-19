"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, Mountain, Wind, Snowflake, Bike, TriangleAlert, Activity } from "lucide-react";
import Link from "next/link";

export default function LadakhBikePackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://www.go2ladakh.in/app/webroot/js/ckfinder/userfiles/images/Landscape%20in%20Ladakh.jpg?utm_source=chatgpt.com"
                            alt="Ladakh Landscape"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://discoverlehladakh.in/wp-content/uploads/2020/06/Khardung-la-pass.jpg?utm_source=chatgpt.com"
                            alt="Khardung La"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://sceneloc8.com/wp-content/uploads/2024/12/Pangong-Lake-at-Sunrise.jpg?utm_source=chatgpt.com"
                            alt="Pangong Lake"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://mytriphack.com/wp-content/uploads/2018/06/Nubra-sand-dunes.jpg?utm_source=chatgpt.com"
                            alt="Nubra Sand Dunes"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/3/9/MageneticHIll_getty.jpg.rend.hgtvcom.1280.960.suffix/1583790287108.jpeg?utm_source=chatgpt.com"
                            alt="Magnetic Hill"
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
                                <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Ultimate Biking</span>
                                <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">High Altitude</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Ladakh Ultimate Bike Expedition 🏍️</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Delhi → Manali → Leh → Nubra → Pangong → Delhi</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 9 Days / 8 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Detailed Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Delhi | Trip Kick-off</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Flight from Pune to Delhi. Airport pickup & check-in.</li>
                                        <li>Evening: Team introduction, Route briefing & Safety discussion.</li>
                                        <li>**Bike allocation** & paperwork. Overnight in Delhi.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Delhi → Manali (Overnight Transfer)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Morning leisure. Evening departure towards Manali via Volvo/Traveller.</li>
                                        <li>Overnight journey. (Acclimatization starts).</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Manali → Jispa | First Ride Begins 🏍️</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Breakfast & **Bike Handover**. Start Himalayan Ride!</li>
                                        <li>Ride through **Atal Tunnel** & Lahaul Valley.</li>
                                        <li>Riding distance: ~140 km. Overnight in Jispa.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Jispa → Leh (High Altitude Day)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Cross legendary passes: **Baralacha La, Nakee La, Lachung La**.</li>
                                        <li>Scenic halt at Moore Plains.</li>
                                        <li>Riding distance: ~330 km. Overnight in Leh.</li>
                                    </ul>
                                </div>

                                {/* Day 5 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 5: Leh (Acclimatization + Local Ride)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Rest & Acclimatization Day. Local sightseeing.</li>
                                        <li>Visit **Magnetic Hill, Gurudwara Pathar Sahib, Shanti Stupa**.</li>
                                        <li>Short test ride. Overnight in Leh.</li>
                                    </ul>
                                </div>

                                {/* Day 6 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 6: Leh → Nubra Valley via Khardung La</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Ride to **Khardung La** (18,380 ft). Descend into Nubra Valley.</li>
                                        <li>Visit Diskit Monastery & Hunder Sand Dunes.</li>
                                        <li>Riding distance: ~130 km. Overnight in Nubra.</li>
                                    </ul>
                                </div>

                                {/* Day 7 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 7: Nubra Valley → Pangong Lake</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Ride via **Shyok route** (Adventure stretch).</li>
                                        <li>Reach **Pangong Lake**. Sunset & Stargazing 🌌.</li>
                                        <li>Riding distance: ~150 km. Overnight near Pangong.</li>
                                    </ul>
                                </div>

                                {/* Day 8 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 8: Pangong → Leh via Chang La</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Ride back to Leh via **Chang La Pass**.</li>
                                        <li>Evening leisure & bike inspection. Overnight in Leh.</li>
                                    </ul>
                                </div>

                                {/* Day 9 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 9: Leh → Delhi → Pune (Trip Ends)</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Morning flight Leh to Delhi. Connect flight to Pune.</li>
                                        <li>Trip ends with **epic Himalayan memories** 🏔️🔥.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Medical Advisory (New Section) */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <div className="flex items-start">
                                <TriangleAlert className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-red-900 mb-2">Medical Precautions & Health Advisory</h3>
                                    <p className="text-red-800 text-sm mb-3">Ladakh altitude ranges from 10,000 to 18,000 ft. **Risk of AMS (Acute Mountain Sickness) is real.**</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-bold text-red-900 text-sm">Symptoms:</h4>
                                            <ul className="list-disc list-inside text-red-800 text-xs">
                                                <li>Headache, Nausea, Dizziness</li>
                                                <li>Breathlessness, Loss of appetite</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-900 text-sm">Mandatory Precautions:</h4>
                                            <ul className="list-disc list-inside text-red-800 text-xs">
                                                <li>Hydrate (3-4L water/day). No alcohol (48hrs).</li>
                                                <li>Consult doctor for Diamox.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "Pune ↔ Delhi Return Flights",
                                        "Delhi ↔ Manali Transfers",
                                        "Bike Rental (Delhi → Delhi)",
                                        "Fuel for Entire Route",
                                        "Inner Line Permits & Stays (8 Nights)",
                                        "Backup Support Vehicle & Mechanic",
                                        "Oxygen Cylinder & First Aid"
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
                                        "Bike Security Deposit (Refundable)",
                                        "Lunches & Snacks",
                                        "Riding Gear (Helmet, Jacket, Gloves)",
                                        "Bike Damage Cost (If Any)",
                                        "Personal Expenses & Tips"
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
                                    <span className="text-sm text-gray-400 block mb-1">Expedition Cost</span>
                                    <span className="text-4xl font-black text-primary">₹49,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-orange-50 text-orange-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-orange-100 flex items-center justify-center">
                                <Bike className="w-4 h-4 mr-2" /> BIKERS DREAM TRIP
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Season</span>
                                        <span className="font-semibold text-gray-800">Jun – Sep 2025</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Activity className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Level</span>
                                        <span className="font-semibold text-gray-800">Intermediate - Expert</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=ladakh-bike" className="block w-full text-center py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:from-red-600 hover:to-orange-600 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Bike Trip
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Gear Checklist
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Expedition Captain</p>
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
