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
    Tent,
    Mountain,
    Flame
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrustSection } from "@/components/home/TrustSection";

const manaliAdventureItinerary: ItineraryDay[] = [
    { day: 1, title: "Pune to Delhi to Manali", location: "Enroute", description: "Board your morning flight to Delhi. Spend the afternoon exploring Connaught Place. Evening transfer to the luxury Volvo for a scenic overnight climb to Manali.", highlights: ["Morning Flight Journey", "Delhi Stop-over", "Overnight Luxury Volvo"], meals: ["Dinner"], activities: ["Travel"] },
    { day: 2, title: "Arrival & Jogini Waterfall Trek", location: "Manali", description: "Arrive in Manali. Check-in to your premium adventure hotel. After a rest, embark on a 6km guided trek to the mesmerizing Jogini Waterfalls through Pine forests.", highlights: ["Riverside Check-in", "6km Guided Pine Trek", "Jogini Waterfall Dip"], stay: "Premium Adventure Resort", meals: ["Breakfast", "Dinner"], activities: ["Trekking", "Nature"] },
    { day: 3, title: "Solang Valley Ridge Trek", location: "Solang Valley", description: "Drive to Solang Valley. Today we avoid the crowds and trek the Solang Ridge. Panoramic views of snow peaks. Optional paragliding for adrenaline junkies.", highlights: ["Off-track Ridge Route", "Snow Peak Panoramas", "High-altitude Vibes"], stay: "Premium Adventure Resort", meals: ["Breakfast", "Dinner"], activities: ["Trekking", "Photography"] },
    { day: 4, title: "Beas Kund Glacier Trek", location: "Beas Kund", description: "The ultimate trek of the trip. Reach the source of the Beas river. Glacier-fed small lakes surrounded by Shitidhar, Ladakhi, and Friendship peaks.", highlights: ["Glacier Source Encounter", "Amphitheater of Peaks", "Technical Alpine Trek"], stay: "Premium Adventure Resort", meals: ["Breakfast", "Dinner"], activities: ["Trekking", "Adventure"] },
    { day: 5, title: "Atal Tunnel & Sissu Snow Walk", location: "Lahaul Valley", description: "Experience the engineering marvel of Atal Tunnel. Explore Sissu in Lahaul Valley. Evening board the return Volvo to Delhi.", highlights: ["Atal Tunnel Crossing", "Lahaul Valley Exploration", "Sissu Lake Visit"], meals: ["Breakfast"], activities: ["Sightseeing", "Return Travel"] }
];

export default function ManaliAdventurePackagePage() {
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

            {/* Adventure Hero Section */}
            <div className="relative h-[72vh] w-full overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                    <div className="relative h-full col-span-2 row-span-2">
                        <Image src="https://voyagersadventure.com/wp-content/uploads/2025/01/Manali-summer-trek-2-scaled-e1741326438267.jpg" alt="Manali" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://www.kurumatravels.com/wp-content/uploads/2019/02/vashist-jogni-waterfall-solang-valley-trekking-2-1.jpg" alt="Waterfalls" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://himalayandaredevils.com/storage/uploads/67e2a588dadee.jpg" alt="Solang" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://media.moxtain.com/blogs/JoginiWaterfall/576/jogini-waterfall-trek.webp" alt="Trek" fill className="object-cover" />
                    </div>
                    <div className="relative h-full hidden md:block">
                        <Image src="https://trekthehimalayas.com/images/BeasKundTrek/MobileSlider/45f24f1c-6efb-427d-a87c-0e2bbaf66b10_2.webp" alt="Glacier" fill className="object-cover" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/20" />

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                            <span className="bg-red-600 px-4 py-1.5 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">Extreme Adventure</span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display drop-shadow-2xl">
                                Manali Ultimate <br />
                                <span className="text-red-400 italic font-serif">Summit Series</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-bold tracking-tight">5 Days / 4 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold tracking-tight">Delhi → Manali → Lahaul</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold tracking-tight">4.9 (3.2k+ Adventure Seekers)</span>
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
                            <h2 className="text-3xl font-black mb-6 font-display">Trek the Giants</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-10 italic">
                                This isn't your average sightseeing tour. We go where the tourists don't. From the glacier-fed Beas Kund to the hidden Solang Ridge, this trip is designed for those who want to earn their Himalayan views.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { l: "Trek Focus", v: "Glacier & Ridgeline", c: "text-red-600" },
                                    { l: "Pax Type", v: "Youth & Active Adult", c: "text-blue-600" },
                                    { l: "Guide", v: "Certified Expert", c: "text-green-600" },
                                    { l: "Highlights", v: "Atal Tunnel Hike", c: "text-orange-600" }
                                ].map((x, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{x.l}</span>
                                        <span className={cn("text-sm font-bold", x.c)}>{x.v}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gear Checklist Section */}
                        <section id="gear" className="bg-gray-900 p-8 md:p-12 rounded-[3.5rem] text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Tent className="w-48 h-48" />
                            </div>
                            <h2 className="text-3xl font-black mb-8 font-display">Essential Mountain Gear</h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                <ul className="space-y-4">
                                    <li className="flex gap-4 text-sm font-bold italic text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        High-Ankle Trekking Shoes (Mandatory)
                                    </li>
                                    <li className="flex gap-4 text-sm font-bold italic text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        3-Layer Clothing (Thermal, Fleece, Down)
                                    </li>
                                </ul>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 text-sm font-bold italic text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        25L Daypack with Rain Cover
                                    </li>
                                    <li className="flex gap-4 text-sm font-bold italic text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        UV-Protected Sunglasses & Sunscreen
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="itinerary">
                            <h2 className="text-3xl font-black font-display mb-8">Adventure Itinerary</h2>
                            <Itinerary days={manaliAdventureItinerary} />
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
                                        "3 Nights Premium Adventure Resort",
                                        "Breakfast & High-Protein Dinners",
                                        "Certified Alpine Trekking Guide",
                                        "Overnight Volvo (Delhi ↔ Manali)",
                                        "Private 4x4 Support Vehicle",
                                        "Bonfire & Acoustic Night"
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
                                        "Adventure Activity Fees (Paragliding)",
                                        "Personal Trekking Gear Rental",
                                        "Lunch & Extra Snacks",
                                        "Pune ↔ Delhi Flights",
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
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Total Adventure Package</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-gray-900">₹24,999</span>
                                        <span className="text-xs text-gray-400 font-bold italic">/ climber</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10">
                                <div className="p-5 bg-red-50/50 rounded-2xl flex items-center gap-5 border border-red-50">
                                    <Flame className="w-6 h-6 text-red-600" />
                                    <div>
                                        <div className="text-xs font-black text-red-900 uppercase">Popular Demand</div>
                                        <div className="text-[10px] font-bold text-red-700">Daily Bonfire Included</div>
                                    </div>
                                </div>
                            </div>
                            <Link href="/book?package=manali" className="block w-full text-center py-6 bg-red-600 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all transform hover:-translate-y-1 mb-8">
                                Claim My Adventure
                            </Link>

                            <div className="flex flex-col gap-4">
                                <button className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                    <Download className="w-4 h-4" /> Trek Itinerary PDF
                                </button>
                                <button className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-900">
                                    <Shield className="w-4 h-4" /> Safety Protocols
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
                    <span className="text-[10px] font-black text-red-600 tracking-widest uppercase italic">Full Extreme Trek</span>
                </div>
                <Link href="/book?package=manali" className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-red-600/20">
                    Book Now
                </Link>
            </motion.div>

            <TrustSection />
            <Footer />
        </main>
    );
}
