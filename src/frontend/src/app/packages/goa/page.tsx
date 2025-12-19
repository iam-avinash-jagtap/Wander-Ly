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
    Waves,
    Palmtree,
    Sunset
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrustSection } from "@/components/home/TrustSection";

const goaItinerary: ItineraryDay[] = [
    {
        day: 1,
        title: "Pune to Goa | Arrival & Beach Sunset",
        location: "Calangute",
        description: "Board your luxury AC sleeper bus from Pune in the evening. Arrive in Goa the next morning, transfer to your hotel. Evening is free to explore the local markets or relax by the beach at sunset.",
        highlights: ["Luxury AC Sleeper Journey", "Smooth Hotel Transfer", "Sunset Beach Vibes"],
        stay: "Premium 3-Star Resort",
        meals: ["Dinner"],
        activities: ["Travel", "Beach Relaxation"]
    },
    {
        day: 2,
        title: "North Goa Sightseeing & Forts",
        location: "North Goa",
        description: "After breakfast, head out for a full-day tour of North Goa. Visit the historic Fort Aguada, followed by the famous beaches of Baga, Calangute, and Anjuna. Enjoy water sports or relax at iconic beach shacks.",
        highlights: ["Fort Aguada History", "Baga & Calangute Beach", "Optional Water Sports"],
        stay: "Premium 3-Star Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Sightseeing", "Adventure"]
    },
    {
        day: 3,
        title: "Explore South Goa OR Dudhsagar Adventure",
        location: "South Goa/Dudhsagar",
        description: "Choose between the heritage-rich South Goa tour (Basilica of Bom Jesus, Miramar Beach) or embark on a thrilling Jeep Safari to the majestic Dudhsagar Waterfalls (optional).",
        highlights: ["Old Goa Heritage", "Miramar Beach Walk", "Majestic Dudhsagar (Optional)"],
        stay: "Premium 3-Star Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Culture", "Nature"]
    },
    {
        day: 4,
        title: "Local Shopping & Departure",
        location: "Panjim/Return",
        description: "Check out from the hotel. Spend your morning shopping for cashews and local handicrafts in Panjim. Board your evening AC bus back to Pune with amazing memories.",
        highlights: ["Cashew & Souvenir Shopping", "Last Beach Glimpse", "Evening Boat Cruise (Optional)"],
        meals: ["Breakfast"],
        activities: ["Shopping", "Departure"]
    }
];

export default function GoaPackagePage() {
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
            <div className="relative h-[70vh] w-full overflow-hidden">
                {/* Hero Grid for Goa */}
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                    <div className="relative h-full col-span-2 row-span-2">
                        <Image src="https://media.easemytrip.com/media/Blog/India/637136726518786264/637136726518786264XJ4q1m.jpg" alt="Goa" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg" alt="Goa" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Fort_aguada.jpg" alt="Goa" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Doodhsagar_Fall.jpg" alt="Goa" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://www.tourmyindia.com/states/goa/image/anjuna-beach-banner.webp" alt="Goa" fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20" />

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                            <span className="bg-orange-600 px-4 py-1.5 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">Budget Favorite</span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display drop-shadow-2xl">
                                Ultimate Goa <br />
                                <span className="text-cyan-400 italic">Beach Escape</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-bold tracking-tight">4 Days / 3 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold tracking-tight">Pune → Goa → Pune</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold tracking-tight">4.8 (850 Reviews)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* In-Page Nav (Sticky) */}
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

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-16">

                        <section id="overview" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] z-0" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-6 font-display">Holiday Overview</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-10 max-w-2xl italic">
                                    Sun, sand, and serenity await you. This Goa package is meticulously crafted for those who want to balance the high-energy vibe of North Goa's beaches with the tranquil heritage of South Goa. Perfect for families, students, and couples alike.
                                </p>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        { l: "Travel Mode", v: "AC Sleeper Bus", c: "text-blue-600" },
                                        { l: "Hotel", v: "3-Star Standard", c: "text-green-600" },
                                        { l: "Best For", v: "Groups & Couples", c: "text-purple-600" },
                                        { l: "Availability", v: "All Year Round", c: "text-orange-600" }
                                    ].map((x, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{x.l}</span>
                                            <span className={cn("text-sm font-bold", x.c)}>{x.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Beach Highlights */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                                <Waves className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-black mb-3">Azure Waters</h3>
                                <p className="text-sm text-blue-900 font-medium italic">We've handpicked the best spots in Baga and Calangute for those who love the sea and water sports.</p>
                            </div>
                            <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
                                <Sunset className="w-10 h-10 text-orange-600 mb-4" />
                                <h3 className="text-xl font-black mb-3">Golden Sunsets</h3>
                                <p className="text-sm text-orange-900 font-medium italic">Experience the legendary Goan sunsets from our recommended beach shacks and elevated fort viewpoints.</p>
                            </div>
                        </section>

                        <section id="itinerary">
                            <h2 className="text-3xl font-black font-display mb-8">Goa Getaway Itinerary</h2>
                            <Itinerary days={goaItinerary} />
                        </section>

                        <section id="inclusions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    What's Included
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Pune ↔ Goa AC Sleeper Bus",
                                        "3 Nights Stay (Double Sharing)",
                                        "Daily Buffet Breakfast",
                                        "Full Day North Goa Tour",
                                        "Professional Driver-Guide",
                                        "Taxes, Tolls & Parking"
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
                                    What's Excluded
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Meals not mentioned in Plan",
                                        "Water Sports & Club Fees",
                                        "Jeep Safari at Dudhsagar",
                                        "Personal Tips & Shopping",
                                        "Travel Insurance"
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

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-40 bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Pricing Starts At</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-gray-900">₹10,999</span>
                                        <span className="text-xs text-gray-400 font-bold italic tracking-tighter">/ person</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <div className="p-5 bg-blue-50/50 rounded-2xl flex items-center gap-5 border border-blue-50">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <div className="text-xs font-black text-blue-900 uppercase tracking-wide">Secure Booking</div>
                                        <div className="text-[10px] font-bold text-blue-700">100% Verified Partners</div>
                                    </div>
                                </div>
                                <div className="p-5 bg-green-50/50 rounded-2xl flex items-center gap-5 border border-green-50">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                    <div className="flex-1">
                                        <div className="text-xs font-black text-green-900 uppercase tracking-wide">Expert Advice</div>
                                        <div className="text-[10px] font-bold text-green-700">24/7 Support in Goa</div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book?package=goa" className="block w-full text-center py-6 bg-blue-600 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1 mb-8">
                                Reserve My Spot
                            </Link>

                            <div className="flex flex-col gap-4">
                                <button className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-gray-900 transition-colors">
                                    <Download className="w-4 h-4" /> Download Itinerary
                                </button>
                                <button className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-gray-900 transition-colors">
                                    <Award className="w-4 h-4" /> Group Discount Available
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Bottom CTA */}
            <motion.div initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl p-6 md:hidden border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] flex items-center justify-between rounded-t-[2.5rem]">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Total Trip</span>
                    <span className="text-2xl font-black text-gray-900">₹10,999</span>
                </div>
                <Link href="/book?package=goa" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-600/20">
                    Book Now
                </Link>
            </motion.div>

            <TrustSection />
            <Footer />
        </main>
    );
}
