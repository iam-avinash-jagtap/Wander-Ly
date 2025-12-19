"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, CheckCircle, XCircle, Info, Plane, Car, Coffee, Heart, Camera, Wifi, Terminal, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[85vh] w-full">
                <Image
                    src="https://img.avianexperiences.com/trek/2d3f1914-76ba-492d-a875-f90361caaaa7?utm_source=chatgpt.com"
                    alt="Rishikesh Couple Retreat"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 md:px-6 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-pink-600 text-white font-bold rounded-full mb-4 text-sm tracking-wider uppercase">
                            Couple's Bliss 💖
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 leading-tight">
                            Rishikesh <br /> Serenity & Adventure
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light mb-8">
                            Peace · Romance · Adventure · Digital-Detox Luxury
                        </p>

                        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                <p className="text-sm text-gray-300 uppercase tracking-widest mb-1">Special Couple Offer</p>
                                <div className="text-4xl md:text-5xl font-black text-white">
                                    ₹50,000 <span className="text-lg font-medium text-gray-300">/ couple</span>
                                </div>
                                <p className="text-xs text-gray-300 mt-2">5 Days / 4 Nights • All Inclusive Feel</p>
                            </div>

                            <Link href="/book?package=rishikesh-retreat" className="px-8 py-5 bg-white text-gray-900 font-bold text-xl rounded-2xl hover:bg-gray-100 transition-colors shadow-2xl">
                                Book Now ➔
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Sticky/Floating DevOps Offer */}
            <motion.div
                className="fixed bottom-8 right-8 z-50 max-w-sm"
                animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.02, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            >
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl border-2 border-green-400 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 rounded-full blur-xl -mr-10 -mt-10"></div>
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="bg-green-500/20 p-3 rounded-xl">
                            <Terminal className="w-8 h-8 text-green-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-green-400 mb-1">DevOps Engineers?</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Offer valid only if <strong className="text-white">both partners</strong> are DevOps Engineers. ID Proof required! 👨‍💻👩‍💻
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Intro */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for the Modern Couple 🌿</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Specially curated for a <strong>DevOps Engineer couple</strong> looking for that perfect balance.
                                Think of it as stable production environment for your mind—calm mornings, structured adventure sprints, and zero-downtime romance.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <Image src="https://media-cdn.tripadvisor.com/media/photo-s/2b/91/5c/e4/caption.jpg?utm_source=chatgpt.com" width={500} height={300} alt="Room" className="rounded-2xl object-cover h-48 w-full" />
                                <Image src="https://i.ytimg.com/vi/KUVBnw4cFRc/hq720.jpg?rs=AOn4CLCalTj_Z36ZMacBDgVVAL-XKep5mw&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&utm_source=chatgpt.com" width={500} height={300} alt="Rafting" className="rounded-2xl object-cover h-48 w-full" />
                            </div>
                        </section>

                        {/* Travel Overview */}
                        <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <Plane className="w-6 h-6 mr-3 text-primary" /> Travel Overview
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center text-gray-700">
                                        <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                                        <span><strong>Route:</strong> Pune → Delhi → Rishikesh → Pune</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Plane className="w-5 h-5 mr-3 text-gray-400" />
                                        <span><strong>Flights:</strong> Pune ✈️ Delhi (Return included)</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Car className="w-5 h-5 mr-3 text-gray-400" />
                                        <span><strong>Transfers:</strong> Private AC Cab (Delhi ↔ Rishikesh)</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center text-gray-700">
                                        <Heart className="w-5 h-5 mr-3 text-gray-400" />
                                        <span><strong>Style:</strong> Spiritual & Romantic Retreat, Riverside Luxury</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Clock className="w-5 h-5 mr-3 text-gray-400" />
                                        <span><strong>Pace:</strong> Relaxed & Romantic</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">🗓️ Romantic Itinerary</h3>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

                                {/* Day 1 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="text-xs font-bold">D1</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Arrival & Serenity</h4>
                                        <p className="text-sm text-gray-600 mb-3">Pune → Delhi → Rishikesh</p>
                                        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                                            <li>Welcome drink & romantic decor 🍷</li>
                                            <li>Riverside walk & sunset views</li>
                                            <li>Overnight at Luxury Riverside Resort</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Day 2 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="text-xs font-bold">D2</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Spirituality & Culture</h4>
                                        <p className="text-sm text-gray-600 mb-3">Ganga Aarti + Old Rishikesh</p>
                                        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                                            <li>Visit Laxman Jhula & Ram Jhula</li>
                                            <li>Café hopping in local markets ☕</li>
                                            <li><strong>VIP Seating</strong> at Triveni Ghat Ganga Aarti</li>
                                            <li>Romantic Dinner</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Day 3 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="text-xs font-bold">D3</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Adventure & Wellness</h4>
                                        <p className="text-sm text-gray-600 mb-3">River Rafting + Yoga</p>
                                        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                                            <li>Morning River Rafting (Couple Stretch) 🛶</li>
                                            <li>Optional Cliff Jumping</li>
                                            <li>Private <strong>Couple Yoga Session</strong> 🧘‍♂️</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Day 4 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="text-xs font-bold">D4</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-lg mb-2 text-primary">The Highlight</h4>
                                        <p className="text-sm text-gray-600 mb-3">Waterfall + Candlelight Dinner</p>
                                        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                                            <li>Trek to Neer Garh Waterfall 🌊</li>
                                            <li>Free afternoon for Spa / Leisure</li>
                                            <li><strong>Private Candlelight Dinner</strong> by the river 🕯️</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Day 5 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="text-xs font-bold">D5</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Farewell</h4>
                                        <p className="text-sm text-gray-600 mb-3">Rishikesh → Delhi → Pune</p>
                                        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                                            <li>Leisure breakfast & Checkout</li>
                                            <li>Drive back to Delhi</li>
                                            <li>Evening flight to Pune ✈️</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>

                    {/* Sidebar / Right Column */}
                    <div className="space-y-8">

                        {/* Why This Package */}
                        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Why This is PERFECT 💡</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-700"><strong>Mental Reset:</strong> Calm environment to unplug from CI/CD pipelines.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-700"><strong>Structured Fun:</strong> Adventure planned precisely, no chaos.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-700"><strong>Connectivity:</strong> Strong Wi-Fi zones if you *really* need to check a deployment (but don't).</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-700"><strong>Premium Value:</strong> Luxury experience under ₹50k.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Inclusions */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusions ✅</h3>
                            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Pune ↔ Delhi Return Flights</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Private AC Cab Transfers</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 4 Nights Luxury Stay</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Daily Breakfast & Dinner</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Candlelight Dinner 🕯️</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Rafting & Yoga Sessions</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusions ❌</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-center"><XCircle className="w-4 h-4 text-red-400 mr-2" /> Lunches</li>
                                <li className="flex items-center"><XCircle className="w-4 h-4 text-red-400 mr-2" /> Personal Expenses</li>
                                <li className="flex items-center"><XCircle className="w-4 h-4 text-red-400 mr-2" /> Travel Insurance</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/48/57/wanderer-gourav-bnqkjirhf1s.jpg?h=500&s=1&w=900&utm_source=chatgpt.com" width={300} height={200} alt="View" className="rounded-xl object-cover h-32 w-full" />
                            <Image src="https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Best_Time_to_Visit_Laxman_Jhula_fa2b5c527f.webp?utm_source=chatgpt.com" width={300} height={200} alt="Laxman Jhula" className="rounded-xl object-cover h-32 w-full" />
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
