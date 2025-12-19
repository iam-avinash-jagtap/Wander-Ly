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
    Sunrise,
    Coffee,
    TrainFront
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrustSection } from "@/components/home/TrustSection";

const darjeelingItinerary: ItineraryDay[] = [
    {
        day: 1,
        title: "Pune to Bagdogra to Darjeeling",
        location: "Bagdogra/Darjeeling",
        description: "Arrive at Bagdogra airport. Meet our representative and enjoy a scenic 3-4 hour uphill drive to Darjeeling. Check-in and enjoy an evening walk at the Mall Road.",
        highlights: ["Scenic Mountain Drive", "Mall Road Evening Walk", "Relaxed Check-in"],
        stay: "3-Star Family Luxury Resort",
        meals: ["Dinner"],
        activities: ["Travel", "Leisure"]
    },
    {
        day: 2,
        title: "Tiger Hill Sunrise & Local Gems",
        location: "Tiger Hill",
        description: "Early morning visit to Tiger Hill to witness the sunrise over Mount Kanchenjunga. Visit Batasia Loop, Ghoom Monastery, and the Himalayan Mountaineering Institute.",
        highlights: ["Kanchenjunga Sunrise View", "Ghoom Monastery Heritage", "Technical Mountaineering Expo"],
        stay: "3-Star Family Luxury Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Sightseeing", "Photography"]
    },
    {
        day: 3,
        title: "Toy Train Joyride & Tea Estates",
        location: "Happy Valley",
        description: "Experience the UNESCO Heritage Toy Train joyride. Later, visit a world-famous tea estate to understand the tea-making process followed by a tasting session.",
        highlights: ["UNESCO Toy Train Ride", "Tea Plantation Tour", "Premium Tea Tasting"],
        stay: "3-Star Family Luxury Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Heritage", "Sensory Experience"]
    },
    {
        day: 4,
        title: "Local Markets & Cafe Culture",
        location: "Chowrasta",
        description: "A free day to explore the local culture. Visit the Japanese Peace Pagoda and spend the afternoon at Chowrasta. Perfect for souvenir shopping and cafe hopping.",
        highlights: ["Peace Pagoda Serenity", "Iconic Chowrasta Market", "Local Cafe Exploration"],
        stay: "3-Star Family Luxury Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Shopping", "Culture"]
    },
    {
        day: 5,
        title: "Farewell to the Hills",
        location: "Return",
        description: "Enjoy your final Himalayan breakfast. Drive back to Bagdogra airport for your flight to Pune via Delhi with lifelong memories of the hills.",
        highlights: ["Final Hill Road Descent", "Souvenir Gifting", "Memorable Return Journey"],
        meals: ["Breakfast"],
        activities: ["Travel"]
    }
];

export default function DarjeelingPackagePage() {
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
                        <Image src="https://darjeelingyatra.com/images/local-sightseeing/tiger-hill-500-400.webp" alt="Tiger Hill" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0e/5b/5e/darjeeling-himalayan.jpg" alt="Toy Train" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://www.darjeeling-tourism.com/darj_i000a1a.jpg" alt="Tea Garden" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Peace_Pagoda%2C_Darjeeling_-_Dec_2006-2.jpg" alt="Peace Pagoda" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://samaaratea.com/cdn/shop/articles/598493502-revised-blog-07.jpg" alt="Tea Tasting" fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20" />

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                            <span className="bg-green-600 px-4 py-1.5 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">Family Holiday</span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display drop-shadow-2xl">
                                Darjeeling Heritage <br />
                                <span className="text-emerald-400 italic">Hill Getaway</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-bold tracking-tight">5 Days / 4 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold tracking-tight">Pune → Bagdogra → Darjeeling</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold tracking-tight">4.9 (1.5k+ Happy Families)</span>
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
                                    activeTab === tab.toLowerCase() ? "text-emerald-600 border-emerald-600" : "border-transparent"
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
                            <h2 className="text-3xl font-black mb-6 font-display">Hills & Heritage</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
                                Step into the colonial elegance of Darjeeling. From the rhythmic chug of the UNESCO Toy Train to the golden sunrise over Tiger Hill and the aromatic tea estates, this family getaway is a sensory masterpiece designed at a gentle pace for all ages.
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { l: "Comfort", v: "Relaxed Pace", c: "text-emerald-600" },
                                    { l: "Pax Type", v: "Kid & Senior Friendly", c: "text-blue-600" },
                                    { l: "Travel", v: "Private AC Cab", c: "text-green-600" },
                                    { l: "Highlights", v: "Toy Train & Tea", c: "text-orange-600" }
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
                            <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
                                <Sunrise className="w-10 h-10 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-black mb-3">Tiger Hill Dawn</h3>
                                <p className="text-sm text-emerald-900 font-medium italic">We arrange the earliest entries to ensure you get the perfect spot for the Kanchenjunga sunrise spectacle.</p>
                            </div>
                            <div className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-100">
                                <Coffee className="w-10 h-10 text-stone-600 mb-4" />
                                <h3 className="text-xl font-black mb-3">Tea Sommelier</h3>
                                <p className="text-sm text-stone-900 font-medium italic">Private walkthrough of century-old tea factories followed by a guided tasting of the "Champagne of Teas".</p>
                            </div>
                        </section>

                        <section id="itinerary">
                            <h2 className="text-3xl font-black font-display mb-8">Detailed Journey Plan</h2>
                            <Itinerary days={darjeelingItinerary} />
                        </section>

                        <section id="inclusions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    Inclusions
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Pune ↔ Bagdogra Return Flights",
                                        "4 Nights Hotel (3-Star Family Friendly)",
                                        "Daily Breakfast & Dinner",
                                        "Airport Transfers & Sightseeing (AC Cab)",
                                        "Toy Train Joy Ride Experience",
                                        "Professional Driver-Cum-Guide"
                                    ].map(item => (
                                        <li key={item} className="flex gap-4 text-sm font-medium text-gray-600 italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                                        <XCircle className="w-5 h-5 text-red-600" />
                                    </div>
                                    Exclusions
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Lunches during Sightseeing",
                                        "Entry Tickets for Monuments",
                                        "Personal Expenses & Tips",
                                        "Camera & Professional Photo Fees",
                                        "Travel Insurance (Recm.)"
                                    ].map(item => (
                                        <li key={item} className="flex gap-4 text-sm font-medium text-gray-600 italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                    </div>

                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-40 bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Family Package Pricing</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-gray-900">₹29,999</span>
                                        <span className="text-xs text-gray-400 font-bold italic">/ per person</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 mb-10">
                                <div className="p-4 bg-emerald-50/50 rounded-2xl flex items-center gap-4">
                                    <Award className="w-6 h-6 text-emerald-600" />
                                    <div className="text-[10px] font-black text-emerald-900 uppercase">Top Rated Family Holiday</div>
                                </div>
                            </div>
                            <Link href="/book?package=darjeeling" className="block w-full text-center py-6 bg-emerald-600 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all transform hover:-translate-y-1 mb-8">
                                Book Family Yatra
                            </Link>
                            <button className="flex items-center justify-center gap-2 w-full text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                <Download className="w-4 h-4" /> Download Hill Station Brochure
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Bottom CTA */}
            <motion.div initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl p-6 md:hidden border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] flex items-center justify-between rounded-t-[2.5rem]">
                <div className="flex flex-col">
                    <span className="text-2xl font-black text-gray-900">₹29,999</span>
                    <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase italic border-b border-emerald-100 pb-1">Darjeeling Special</span>
                </div>
                <Link href="/book?package=darjeeling" className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-emerald-600/20">
                    Book Trip
                </Link>
            </motion.div>

            <TrustSection />
            <Footer />
        </main>
    );
}
