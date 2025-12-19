"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Itinerary, ItineraryDay } from "@/components/packages/Itinerary";
import Image from "next/image";
import {
    MapPin,
    Clock,
    Star,
    CheckCircle,
    Calendar,
    Shield,
    XCircle,
    ChevronDown,
    Phone,
    Download,
    Share2,
    Map as MapIcon,
    MessageCircle,
    Award,
    Snowflake,
    Coffee
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrustSection } from "@/components/home/TrustSection";

const himalayasItinerary: ItineraryDay[] = [
    { day: 1, title: "Pune to Delhi to Shimla", location: "Enroute", description: "Start your journey with a morning flight from Pune to Delhi. Meet our representative and board the premium AC Volvo for an overnight journey to the Queen of Hills - Shimla.", highlights: ["Morning Pune Flight", "Premium Volvo Entry", "Overnight Hill Climb"], meals: ["Dinner"], activities: ["Travel"] },
    { day: 2, title: "Shimla & Kufri Exploration", location: "Shimla", description: "Arrive in Shimla and check-in. Visit Kufri for breathtaking Himalayan views and horse riding. Evening stroll at the iconic Ridge, Mall Road, and Christ Church.", highlights: ["Kufri Snow Viewpoint", "Colonial Ridge Walk", "Mall Road Shopping"], stay: "Shimla Standard Hotel", meals: ["Breakfast", "Dinner"], activities: ["Sightseeing", "Photography"] },
    { day: 3, title: "Shimla to Manali Scenic Drive", location: "Kullu Valley", description: "A beautiful drive through the mountains via the Beas River. Stop at Kullu for river rafting and visits to shawl factories. Check-in to your Manali resort by evening.", highlights: ["Riverside Mountain Drive", "Kullu Shawl Factory", "Optional River Rafting"], stay: "Manali Mountain Resort", meals: ["Breakfast", "Dinner"], activities: ["Road Trip", "Adventure"] },
    { day: 4, title: "Snow Adventure at Solang Valley", location: "Solang Valley", description: "Full day excursion to Solang Valley for snow sports. Visit the engineering marvel - Atal Tunnel and the pristine Sissu village in Lahaul Valley.", highlights: ["Solang Snow Activity", "Atal Tunnel Experience", "Lahaul Valley Sightseeing"], stay: "Manali Mountain Resort", meals: ["Breakfast", "Dinner"], activities: ["Snow Sports", "Sightseeing"] },
    { day: 5, title: "Local Manali & Overnight Return", location: "Manali", description: "Visit Hadimba Devi Temple and Old Manali's quirky cafes. Visit Vashisht hot springs. Board your overnight Volvo back to Delhi for your return flight.", highlights: ["Hadimba Forest Temple", "Old Manali Cafe Crawl", "Vashisht Hot Springs"], meals: ["Breakfast"], activities: ["Culture", "Travel"] }
];

export default function HimalayasPackagePage() {
    const [activeTab, setActiveTab] = useState("overview");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="relative h-[72vh] w-full overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                    <div className="relative h-full col-span-2 row-span-2">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" alt="Manali" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero" alt="Shimla" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://himachaltourstravel.com/wp-content/uploads/2023/01/solang-valley-1.jpg" alt="Solang" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/10/mall-road-manali-scaled.jpg" alt="Manali Mall Road" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://indiano.travel/wp-content/uploads/2022/07/The-Mall-Road-is-a-main-pedestrian-street-in-Shimla-town.jpg" alt="Shimla Ridge" fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20" />

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                            <span className="bg-blue-600 px-4 py-1.5 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">Super Saver Deal</span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display drop-shadow-2xl">
                                Shimla & Manali <br />
                                <span className="text-cyan-400 italic font-serif">Mountain Duo</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-bold tracking-tight">5 Days / 4 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold tracking-tight">Pune → Delhi → HP</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold tracking-tight">4.9 (4.5k+ Happy Families)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* In-Page Nav */}
            <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm hidden md:block">
                <div className="container mx-auto px-12 py-4">
                    <div className="flex items-center gap-10 font-bold text-xs uppercase tracking-widest text-gray-400">
                        {["Overview", "Itinerary", "Inclusions", "Reviews"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={cn(
                                    "transition-all hover:text-gray-900 border-b-2 py-2 -mb-4",
                                    activeTab === tab.toLowerCase() ? "text-blue-600 border-blue-600" : "border-transparent"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-16">

                        <section id="overview" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
                            <h2 className="text-3xl font-black mb-6 font-display">Double the Magic</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
                                Why choose when you can have both? Experience the colonial charm of Shimla's Pine forests and the high-altitude adventure of Manali's snow peaks in one seamless, high-value journey.
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { l: "Comfort", v: "Premium Stays", c: "text-blue-600" },
                                    { l: "Pax Type", v: "Family & Honeymoon", c: "text-rose-600" },
                                    { l: "Travel", v: "Luxury AC Volvo", c: "text-green-600" },
                                    { l: "Highlights", v: "Solang & Kufri", c: "text-orange-600" }
                                ].map((x, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{x.l}</span>
                                        <span className={cn("text-sm font-bold", x.c)}>{x.v}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Experience highlights */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div className="bg-sky-50 p-8 rounded-[2.5rem] border border-sky-100">
                                <Snowflake className="w-10 h-10 text-sky-600 mb-4" />
                                <h3 className="text-xl font-black mb-3">Snow Peak Access</h3>
                                <p className="text-sm text-sky-900 font-medium italic">We include Solang Valley and Atal Tunnel access (subject to vibes) to ensure you get your snow fill!</p>
                            </div>
                            <div className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-100">
                                <Coffee className="w-10 h-10 text-stone-600 mb-4" />
                                <h3 className="text-xl font-black mb-3">Cafe Culture</h3>
                                <p className="text-sm text-stone-900 font-medium italic">Handpicked list of Old Manali cafes where you can enjoy the true riverside mountain vibe.</p>
                            </div>
                        </section>

                        <section id="itinerary">
                            <h2 className="text-3xl font-black font-display mb-8">Trip Path</h2>
                            <Itinerary days={himalayasItinerary} />
                        </section>

                    </div>

                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-40 bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Super Saver Price</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-gray-900">₹18,999</span>
                                        <span className="text-xs text-gray-400 font-bold italic">/ head</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 mb-10">
                                <div className="p-4 bg-green-50/50 rounded-2xl flex items-center gap-4">
                                    <Award className="w-6 h-6 text-green-600" />
                                    <div className="text-[10px] font-black text-green-900 uppercase">Highest Value Guarantee</div>
                                </div>
                            </div>
                            <Link href="/book?package=himalayas" className="block w-full text-center py-6 bg-blue-600 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1 mb-8">
                                Reserve Experience
                            </Link>
                            <button className="flex items-center justify-center gap-2 w-full text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                <Download className="w-4 h-4" /> Comprehensive Itinerary PDF
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <motion.div initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl p-6 md:hidden border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] flex items-center justify-between rounded-t-[2.5rem]">
                <div className="flex flex-col">
                    <span className="text-2xl font-black text-gray-900">₹18,999</span>
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase italic">Shimla & Manali Combo</span>
                </div>
                <Link href="/book?package=himalayas" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-600/20">
                    Book Trip
                </Link>
            </motion.div>

            <TrustSection />
            <Footer />
        </main>
    );
}
