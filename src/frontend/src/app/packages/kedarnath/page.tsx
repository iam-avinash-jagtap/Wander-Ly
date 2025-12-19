"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, CheckCircle, Calendar, Shield, XCircle, Info, ThermometerSnowflake, HeartPulse, Mountain } from "lucide-react";
import Link from "next/link";

export default function KedarnathPackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner Grid */}
            <div className="relative pt-24 pb-8 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="md:col-span-2 md:row-span-2 relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg?utm_source=chatgpt.com"
                            alt="Kedarnath Temple"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Badrinath_Temple_%2C_Uttarakhand.jpg/1200px-Badrinath_Temple_%2C_Uttarakhand.jpg?utm_source=chatgpt.com"
                            alt="Badrinath Temple"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1746518171First-Indian-Village-Mana.jpg?utm_source=chatgpt.com"
                            alt="Mana Village"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Dhauliganga_at_Vishnuprayag.jpg?utm_source=chatgpt.com"
                            alt="Vishnuprayag"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-full">
                        <Image
                            src="https://www.sacredyatra.com/wp-content/uploads/2018/04/Kedarnath-Trek-Route-Map.jpg?utm_source=chatgpt.com"
                            alt="Trek Route"
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
                                <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Spiritual Yatra</span>
                                <span className="bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">High Altitude</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">Divine Kedarnath & Badrinath</h1>
                            <div className="flex flex-wrap items-center text-gray-600 space-x-6 text-sm md:text-base font-medium border-b border-gray-200 pb-8">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> Pune → Delhi → Haridwar → Kedarnath → Badrinath → Pune</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> 6 Days / 5 Nights</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-3xl font-bold font-display mb-8">Day-wise Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-dashed border-gray-300 ml-4 pl-10 relative">
                                {/* Day 1 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 1: Pune → Delhi → Haridwar</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Morning flight form Pune to Delhi.</li>
                                        <li>Evening transfer to Haridwar via Overnight Volvo/Train.</li>
                                        <li>Overnight journey to the gateway of Gods.</li>
                                    </ul>
                                </div>

                                {/* Day 2 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 2: Haridwar → Guptkashi</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Morning arrival in Haridwar & drive to Guptkashi.</li>
                                        <li>Witness confluences at Devprayag & Rudraprayag.</li>
                                        <li>Dinner & Overnight stay in Guptkashi.</li>
                                    </ul>
                                </div>

                                {/* Day 3 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 3: Guptkashi → Kedarnath Trek</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Early morning drive to Gaurikund.</li>
                                        <li>Start 16KM Trek to **Kedarnath** (Pony/Doli/Helicopter optional).</li>
                                        <li>Evening **Darshan** & Aarti at Kedarnath Temple.</li>
                                        <li>Basic overnight stay near the temple.</li>
                                    </ul>
                                </div>

                                {/* Day 4 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 4: Kedarnath → Guptkashi</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Early morning Abhishek/Darshan.</li>
                                        <li>Trek down to Gaurikund.</li>
                                        <li>Drive back to Guptkashi for dinner & rest.</li>
                                    </ul>
                                </div>

                                {/* Day 5 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 5: Guptkashi → Badrinath</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Scenic drive to **Badrinath via Joshimath**.</li>
                                        <li>Visit Vishnuprayag en-route.</li>
                                        <li>Evening **Badrinath Darshan** & Tapt Kund holy dip.</li>
                                        <li>Overnight stay in Badrinath.</li>
                                    </ul>
                                </div>

                                {/* Day 6 */}
                                <div className="relative group">
                                    <span className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-50 group-hover:scale-125 transition-transform"></span>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Day 6: Badrinath → Haridwar → Return</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-orange-500">
                                        <li>Early morning Darshan & visit **Mana Village** (Last Indian Village).</li>
                                        <li>Drive back to Haridwar.</li>
                                        <li>Overnight travel to Delhi & subsequent Flight to Pune.</li>
                                        <li>Yatra concludes with blessings. 🙏</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Health & Safety Warnings (New Section) */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl shadow-sm">
                            <div className="flex items-start mb-6">
                                <HeartPulse className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold text-red-900">Health & Safety Advisory</h3>
                                    <p className="text-red-700 mt-1">This yatra involves high altitude trekking (11,755 ft+). Please configure yourself mentally and physically.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-red-900 flex items-center mb-2"><ThermometerSnowflake className="w-5 h-5 mr-2" /> Low Temperature Precautions</h4>
                                    <ul className="list-disc list-inside text-sm text-red-800 space-y-2">
                                        <li>Temperatures can drop below 0°C at night.</li>
                                        <li>**Must Carry:** Heavy woolens, thermals, gloves, and caps.</li>
                                        <li>Carry a windcheater/raincoat as weather is unpredictable.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-900 flex items-center mb-2"><Mountain className="w-5 h-5 mr-2" /> Health Tips</h4>
                                    <ul className="list-disc list-inside text-sm text-red-800 space-y-2">
                                        <li>Start cardio exercises 1 month prior.</li>
                                        <li>Carry personal medical kit (Paracetamol, Diamox for AMS, Volini).</li>
                                        <li>Drink plenty of warm water to stay hydrated.</li>
                                        <li>Avoid alcohol and smoking strictly during Yatra.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h2 className="text-xl font-bold font-display mb-4 text-green-800">Inclusions</h2>
                                <ul className="space-y-3">
                                    {[
                                        "5 Nights Accommodation (Budget + Base Camps)",
                                        "Daily Breakfast & Dinner",
                                        "Shared Tempo Traveller/Cab for Yatra",
                                        "Kedarnath Trek Assistance",
                                        "Driver, Fuel, Tolls, Parking",
                                        "Basic Tour Coordinator Support"
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
                                        "Helicopter / Pony / Doli Charges",
                                        "Pune ↔ Delhi Flights (Optional Add-on)",
                                        "VIP Darshan Tickets",
                                        "Lunch & Personal Expenses",
                                        "Medical / Travel Insurance"
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
                                    <span className="text-sm text-gray-400 block mb-1">Total Yatra Cost</span>
                                    <span className="text-4xl font-black text-primary">₹24,999</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                            </div>

                            <div className="bg-orange-50 text-orange-800 text-xs font-bold px-4 py-2 rounded-lg mb-6 text-center border border-orange-100">
                                SLOTS FILLING FAST FOR MAY-JUNE
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Season</span>
                                        <span className="font-semibold text-gray-800">May – Oct 2025</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Difficulty</span>
                                        <span className="font-semibold text-gray-800">Moderate to Tough</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=kedarnath" className="block w-full text-center py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:from-red-600 hover:to-orange-500 transition-all transform hover:-translate-y-1 mb-4 text-lg">
                                Book Yatra Now
                            </Link>
                            <button className="block w-full text-center py-4 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Download Yatra Guide
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Yatra Expert Support</p>
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
