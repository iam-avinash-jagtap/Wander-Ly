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
    TriangleAlert,
    Bike,
    Activity
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrustSection } from "@/components/home/TrustSection";

const ladakhItinerary: ItineraryDay[] = [
    { day: 1, title: "Delhi Arrival & Introduction", location: "Delhi", description: "Arrive in Delhi. Meet the crew and fellow riders. Complete the paperwork and bike allocation. Technical briefing and evening at leisure.", highlights: ["Technical Briefing", "Bike Allocation", "Team Meetup"], stay: "Premium Transit Hotel", meals: ["Dinner"], activities: ["Briefing", "Bike Check"] },
    { day: 2, title: "Delhi to Manali (Overnight)", location: "Enroute", description: "Spend the day in Delhi. Board the luxury Volvo for an overnight journey to Manali. Begin your transition to the cooler Himalayan climate.", highlights: ["Luxury Volvo Transfer", "Climate Transition", "Overnight Journey"], meals: ["Breakfast"], activities: ["Transfer"] },
    { day: 3, title: "Manali to Jispa (140 km)", location: "Jispa", description: "Bike handover in Manali. Riding through the iconic Atal Tunnel and entering the Lahaul Valley. First taste of the high-altitude terrain.", highlights: ["Atal Tunnel Crossing", "Lahaul Valley", "River Crossing"], stay: "Jispa Adventure Camps", meals: ["Breakfast", "Dinner"], activities: ["Biking"] },
    { day: 4, title: "Jispa to Leh (330 km)", location: "Leh", description: "The longest and most challenging day. Cross Baralacha La, Nakee La, and Lachung La passes. Reach the heart of Ladakh by evening.", highlights: ["Baralacha La (16k ft)", "Gata Loops", "Moore Plains"], stay: "Leh Premium Hotel", meals: ["Breakfast", "Dinner"], activities: ["Biking"] },
    { day: 5, title: "Leh (Local & Acclimatization)", location: "Leh", description: "Mandatory rest for your body. Visit Shanti Stupa and Leh Palace. Short test ride to Magnetic Hill and confluence of Indus and Zanskar rivers.", highlights: ["Shanti Stupa", "Magnetic Hill", "Indus-Zanskar Confluence"], stay: "Leh Premium Hotel", meals: ["Breakfast", "Dinner"], activities: ["Local Sightseeing"] },
    { day: 6, title: "Leh to Nubra via Khardung La", location: "Nubra Valley", description: "Conquer one of the highest motorable passes in the world – Khardung La (18,380 ft). Descent into the cold desert of Nubra Valley.", highlights: ["Khardung La (18,380 ft)", "Diskit Monastery", "Double Hump Camel Safari"], stay: "Nubra Deluxe Camps", meals: ["Breakfast", "Dinner"], activities: ["Biking", "Safari"] },
    { day: 7, title: "Nubra to Pangong via Shyok", location: "Pangong Tso", description: "Ride through the adventurous Shyok route. Arrive at the mesmerizing blue Pangong Lake. Campfire under the starlit Himalayan sky.", highlights: ["Shyok River Route", "Pangong Tso Lake", "Starlit Campfire"], stay: "Pangong Luxury Tents", meals: ["Breakfast", "Dinner"], activities: ["Biking", "Campfire"] },
    { day: 8, title: "Pangong to Leh via Chang La", location: "Leh", description: "Witness the sunrise at Pangong. Ride back to Leh via the high Chang La pass. Celebration dinner in Leh.", highlights: ["Pangong Sunrise", "Chang La Pass (17.5k ft)", "Farewell Dinner"], stay: "Leh Premium Hotel", meals: ["Breakfast", "Dinner"], activities: ["Biking"] },
    { day: 9, title: "Departure with Memories", location: "Leh/Delhi", description: "Transfer to Leh airport for your flight back to Delhi/Pune. End of an epic Himalayan odyssey.", highlights: ["Final Fly-out", "Epic Photography", "Certificate Award"], meals: ["Breakfast"], activities: ["Departure"] }
];

export default function LadakhBikePackagePage() {
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
            <div className="relative h-[75vh] w-full overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                    <div className="relative h-full col-span-2 row-span-2">
                        <Image src="https://www.go2ladakh.in/app/webroot/js/ckfinder/userfiles/images/Landscape%20in%20Ladakh.jpg" alt="Ladakh" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://discoverlehladakh.in/wp-content/uploads/2020/06/Khardung-la-pass.jpg" alt="Ladakh Pass" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://sceneloc8.com/wp-content/uploads/2024/12/Pangong-Lake-at-Sunrise.jpg" alt="Pangong Lake" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://mytriphack.com/wp-content/uploads/2018/06/Nubra-sand-dunes.jpg" alt="Nubra" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/3/9/MageneticHIll_getty.jpg" alt="Ladakh Landscape" fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20" />

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                            <span className="bg-orange-600 px-4 py-1.5 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-4 inline-block">Epic Adventure</span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display drop-shadow-2xl">
                                Ladakh Ultimate <br />
                                <span className="text-orange-400 italic font-serif">Bike Expedition</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-bold tracking-tight">9 Days / 8 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold tracking-tight">Delhi → Leh → Delhi</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold tracking-tight">4.9 (1.2k+ Reviews)</span>
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
                        {["Overview", "Medical", "Itinerary", "Inclusions"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={cn(
                                    "transition-all hover:text-gray-900 border-b-2 py-2 -mb-4",
                                    activeTab === tab.toLowerCase() ? "text-orange-600 border-orange-600" : "border-transparent"
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

                        <section id="overview" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative">
                            <h2 className="text-3xl font-black mb-6 font-display">Ride of a Lifetime</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8 italic">
                                From the busy streets of Delhi to the highest motorable passes in the world, this is the definitive Himalayan bike trip. Experience the rugged beauty of Lahaul, the vastness of More Plains, and the surreal blue of Pangong Tso.
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { l: "Difficulty", v: "Expert", c: "text-red-600" },
                                    { l: "Max Altitude", v: "18,380 ft", c: "text-blue-600" },
                                    { l: "Ride Distance", v: "1500+ km", c: "text-green-600" },
                                    { l: "Group Size", v: "Max 15 Bikes", c: "text-purple-600" }
                                ].map((x, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{x.l}</span>
                                        <span className={cn("text-sm font-bold", x.c)}>{x.v}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Medical Advisory */}
                        <section id="medical" className="bg-red-50/50 p-8 md:p-12 rounded-[3.5rem] border border-red-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <TriangleAlert className="w-32 h-32 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-black mb-6 font-display text-red-900">Health & High Altitude</h2>
                            <p className="text-red-800 text-sm mb-8 leading-relaxed">
                                Riding in Ladakh requires peak physical and mental condition. AMS (Acute Mountain Sickness) is a potential risk above 10,000 ft. A mandatory acclimatization day is included in your plan.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-black text-red-900 text-xs uppercase tracking-widest">Key Precautions</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-xs font-bold text-red-800 italic">
                                            <CheckCircle className="w-4 h-4 shrink-0" /> Hydrate: Min 4L water daily.
                                        </li>
                                        <li className="flex gap-3 text-xs font-bold text-red-800 italic">
                                            <CheckCircle className="w-4 h-4 shrink-0" /> No Alcohol: 48 hours before & during.
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-white/50 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Shield className="w-5 h-5 text-green-600" />
                                        <span className="text-xs font-black text-gray-900">Medical Backup Included</span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Full-time Oxygen support & qualified first-aid coordinator.</p>
                                </div>
                            </div>
                        </section>

                        <section id="itinerary">
                            <h2 className="text-3xl font-black font-display mb-8">Guided Ride Itinerary</h2>
                            <Itinerary days={ladakhItinerary} />
                        </section>

                        <section id="inclusions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    </div>
                                    What's Covered
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "RE Himalayan / Scram Bikes",
                                        "Fuel for Entire Trip",
                                        "Back-up Support Vehicle",
                                        "Expert Mechanic & Spares",
                                        "Double Sharing Accommodation",
                                        "Inner Line Permits (Nubra/Pangong)"
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
                                    Out of Pocket
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Bike Security Deposit (Refundable)",
                                        "Personal Riding Gear",
                                        "Lunch during rides",
                                        "Sightseeing Entrance Fees",
                                        "Trip Insurance (Mandatory)"
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
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Expedition Cost</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-gray-900">₹49,999</span>
                                        <span className="text-xs text-gray-400 font-bold italic">/ rider</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 mb-10">
                                <div className="p-4 bg-orange-50/50 rounded-2xl flex items-center gap-4">
                                    <Bike className="w-6 h-6 text-orange-600" />
                                    <div className="text-[10px] font-black text-orange-900 uppercase">Latest Model Himalayan 450</div>
                                </div>
                                <div className="p-4 bg-blue-50/50 rounded-2xl flex items-center gap-4">
                                    <Activity className="w-6 h-6 text-blue-600" />
                                    <div className="text-[10px] font-black text-blue-900 uppercase">96% Completion Rate</div>
                                </div>
                            </div>
                            <Link href="/book?package=ladakh-bike" className="block w-full text-center py-6 bg-orange-600 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-orange-600/20 hover:bg-orange-700 transition-all transform hover:-translate-y-1 mb-8">
                                Reserve My Bike
                            </Link>
                            <button className="flex items-center justify-center gap-2 w-full text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                <Download className="w-4 h-4" /> Biker Gear Checklist PDF
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Bottom CTA */}
            <motion.div initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl p-6 md:hidden border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] flex items-center justify-between rounded-t-[2.5rem]">
                <div className="flex flex-col">
                    <span className="text-xl font-black text-gray-900">₹49,999</span>
                    <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase italic">Self-Ride Fuel Incl.</span>
                </div>
                <Link href="/book?package=ladakh-bike" className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-orange-600/20">
                    Book Trip
                </Link>
            </motion.div>

            <TrustSection />
            <Footer />
        </main>
    );
}
