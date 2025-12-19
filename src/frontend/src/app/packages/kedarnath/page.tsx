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
    HeartPulse,
    ThermometerSnowflake,
    Mountain
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrustSection } from "@/components/home/TrustSection";

const kedarnathItinerary: ItineraryDay[] = [
    { day: 1, title: "Pune to Delhi to Haridwar", location: "Haridwar", description: "Arrive in Delhi via morning flight. Board the evening Volvo to Haridwar. Reach the holy city early next morning. Check-in and relax.", highlights: ["Morning Flight from Pune", "Evening AC Volvo Transfer", "Gateway to Gods Entrance"], meals: ["Dinner"], activities: ["Travel"] },
    { day: 2, title: "Haridwar to Guptkashi", location: "Guptkashi", description: "A scenic drive towards the Himalayas. Witness the holy confluences at Devprayag (Alaknanda & Bhagirathi) and Rudraprayag. Reach Guptkashi by evening.", highlights: ["Devprayag Confluence", "Rudraprayag Viewpoint", "Hill Road Drive"], stay: "Guptkashi Deluxe Camps/Hotel", meals: ["Breakfast", "Dinner"], activities: ["Sightseeing"] },
    { day: 3, title: "Kedarnath Trek & Divine Darshan", location: "Kedarnath", description: "Drive to Gaurikund. Start the 16km trek to Kedarnath. Option for Pony/Doli available. Attend the evening Sandhya Aarti at the ancient temple. Overnight stay at the base camp.", highlights: ["Mandakini River Views", "16km Sacred Trekking", "Evening Sandhya Aarti"], stay: "Kedarnath Base Camp Tents", meals: ["Breakfast", "Dinner"], activities: ["Trekking", "Darshan"] },
    { day: 4, title: "Abhishek & Descent to Guptkashi", location: "Guptkashi", description: "Early morning Abhishek Darshan. Trek back down to Gaurikund. Driver will pick you up and transfer back to Guptkashi for a well-deserved rest.", highlights: ["Morning Abhishek Ritual", "Valley Descent", "Post-trek Recovery"], stay: "Guptkashi Deluxe Camps/Hotel", meals: ["Breakfast", "Dinner"], activities: ["Darshan", "Trekking"] },
    { day: 5, title: "Guptkashi to Badrinath", location: "Badrinath", description: "Drive to the second Dham - Badrinath. Visit the last Indian village, Mana. Evening Darshan at Badrinath temple and a holy dip in the Tapt Kund.", highlights: ["Visit Mana Village", "Joshimath Stop-over", "Tapt Kund Holy Dip"], stay: "Badrinath Standard Hotel", meals: ["Breakfast", "Dinner"], activities: ["Road Trip", "Darshan"] },
    { day: 6, title: "Blessings & Return Journey", location: "Return", description: "Morning prayers. Drive back to Haridwar. Board your return overnight travel to Delhi for your flight back to Pune.", highlights: ["Morning Badrinath Aarti", "Long Scenic Return", "Yatra Completion Certificate"], meals: ["Breakfast"], activities: ["Travel"] }
];

export default function KedarnathPackagePage() {
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

            {/* Spiritual Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                    <div className="relative h-full col-span-2 row-span-2">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg" alt="Kedarnath" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Badrinath_Temple_%2C_Uttarakhand.jpg/1200px-Badrinath_Temple_%2C_Uttarakhand.jpg" alt="Badrinath" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1746518171First-Indian-Village-Mana.jpg" alt="Mana" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Dhauliganga_at_Vishnuprayag.jpg" alt="Vishnuprayag" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://www.sacredyatra.com/wp-content/uploads/2018/04/Kedarnath-Trek-Route-Map.jpg" alt="Trek" fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-black/30" />

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                            <span className="bg-amber-600 px-4 py-1.5 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">Spiritual Masterpiece</span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display drop-shadow-2xl">
                                Divine Kedarnath <br />
                                <span className="text-amber-400 italic">& Badrinath Dham</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold tracking-tight">6 Days / 5 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-bold tracking-tight">Pune → Uttarakhand</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold tracking-tight">5.0 (2.5k+ Yatri Reviews)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-16">

                        <section id="overview" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-6 font-display">Sacred Journey</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
                                    Experience the spiritual energy of the Garhwal Himalayas. This yatra is designed for comfort and connectivity, ensuring a smooth pilgrimage to two of India's most sacred residences of Lord Shiva and Lord Vishnu.
                                </p>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        { l: "Theme", v: "Spiritual Yatra", c: "text-amber-600" },
                                        { l: "Pax Type", v: "Family & Senior Friendly", c: "text-green-600" },
                                        { l: "Trek", v: "16 km (Supported)", c: "text-blue-600" },
                                        { l: "Season", v: "May – Oct", c: "text-orange-600" }
                                    ].map((x, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{x.l}</span>
                                            <span className={cn("text-sm font-bold", x.c)}>{x.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Health Advisory */}
                        <section id="health" className="bg-orange-50/50 p-8 md:p-12 rounded-[3.5rem] border border-orange-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <HeartPulse className="w-32 h-32 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-black mb-6 font-display text-orange-900">Yatri Health Support</h2>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ThermometerSnowflake className="w-5 h-5 text-blue-500" />
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-900">Extreme Cold Advisory</span>
                                    </div>
                                    <p className="text-sm text-gray-600 italic leading-relaxed font-medium">
                                        Temperatures at Kedarnath can drop to 2°C even in summer. Mandatory heavy woolens and thermals are required for all yatris.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mountain className="w-5 h-5 text-green-600" />
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-900">Physical Fitness</span>
                                    </div>
                                    <p className="text-sm text-gray-600 italic leading-relaxed font-medium">
                                        The 16km trek is strenuous. We provide 24/7 coordination for Pony and Helicopter bookings to ensure safety for elders.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="itinerary">
                            <h2 className="text-3xl font-black font-display mb-8">Daily Darshan Plan</h2>
                            <Itinerary days={kedarnathItinerary} />
                        </section>

                        <section id="inclusions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    Everything Included
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "5 Nights Stay in 3-Star Hotels/Camps",
                                        "Morning Tea, Breakfast & Sattvic Dinner",
                                        "Safe Tempo Traveller for entire Yatra",
                                        "Airport Transfers & Local Support",
                                        "All Inner State Entry Permits",
                                        "Expert Yatra Coordinator on Call"
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
                                    Not Covered
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Pony / Helicopter / Doli Charges",
                                        "Pune ↔ Delhi Flights",
                                        "Personal VIP Darshan Tickets",
                                        "Lunch & Personal Shopping",
                                        "Any Personal Expenses"
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
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Exclusive Yatra Package</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-gray-900">₹24,999</span>
                                        <span className="text-xs text-gray-400 font-bold italic tracking-tighter">/ yatri</span>
                                    </div>
                                </div>
                                <div className="bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 flex items-center gap-1.5 animate-bounce">
                                    <span className="text-[10px] font-black text-orange-700 uppercase">Selling Fast</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <div className="p-5 bg-amber-50/50 rounded-2xl flex items-center gap-5 border border-amber-50">
                                    <Award className="w-6 h-6 text-amber-600" />
                                    <div>
                                        <div className="text-xs font-black text-amber-900 uppercase">A+ Rated Service</div>
                                        <div className="text-[10px] font-bold text-amber-700">Highest Rating in Pune</div>
                                    </div>
                                </div>
                                <Link href="/book?package=kedarnath" className="block w-full text-center py-6 bg-amber-600 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-amber-600/20 hover:bg-amber-700 transition-all transform hover:-translate-y-1">
                                    Book Yatra Slot
                                </Link>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                    <Download className="w-4 h-4" /> Yatra Guide PDF (Marathi/Hindi)
                                </button>
                                <button className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                    <MessageCircle className="w-4 h-4" /> Ask Our Pandit Support
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Bottom CTA */}
            <motion.div initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl p-6 md:hidden border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] flex items-center justify-between rounded-t-[2.5rem]">
                <div className="flex flex-col">
                    <span className="text-2xl font-black text-gray-900">₹24,999</span>
                    <span className="text-[10px] font-black text-amber-600 tracking-widest uppercase italic">Yatra Full Package</span>
                </div>
                <Link href="/book?package=kedarnath" className="bg-amber-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-amber-600/20">
                    Book Yatra
                </Link>
            </motion.div>

            <TrustSection />
            <Footer />
        </main>
    );
}
