"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
    Award
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PackageDetailPage() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("overview");
    const [expandedDay, setExpandedDay] = useState<number | null>(1);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const itinerary = [
        { day: 1, title: "Arrival & Traditional Welcome", desc: "Arrive at Cochin International Airport. Our representative will drive you to Alleppey. Check-in to your luxury houseboat and enjoy a traditional Kerala lunch as you begin your cruise through the serene backwaters." },
        { day: 2, title: "Deep Backwater Exploration", desc: "Wake up to the sounds of nature. Today we explore the narrower canals of the Vembanad Lake. Experience village life along the banks and enjoy a special candle-lit dinner on the deck." },
        { day: 3, title: "Vembanad Lake & Local Culture", desc: "After breakfast, witness local fishing techniques. Visit a historic temple near the shore. Evening cultural performance (Kathakali) on the houseboat." },
        { day: 4, title: "Farewell & Departure", desc: "Enjoy a final breakfast on the water. Checkout and private transfer back to Cochin for your return flight with beautiful memories." }
    ];

    const faqs = [
        { q: "Is this trip suitable for senior citizens?", a: "Yes, this is a relaxed-pace trip with minimal walking and private transfers, making it ideal for seniors." },
        { q: "What kind of food is served on the boat?", a: "Freshly prepared authentic Kerala cuisine (Veg & Non-Veg). Special dietary requirements including Jain food can be catered if informed in advance." },
        { q: "Is there Wi-Fi on the houseboat?", a: "Most premium houseboats provide Wi-Fi, though connectivity may be intermittent in remote parts of the backwaters." }
    ];

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="relative h-[65vh] w-full overflow-hidden">
                <Image
                    src="/images/kerala.png"
                    alt="Kerala Backwaters"
                    fill
                    className="object-cover transition-transform duration-[10s] hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

                {/* Floating Actions */}
                <div className="absolute top-24 right-4 md:right-12 flex flex-col gap-3">
                    <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all">
                        <Award className="w-5 h-5" />
                    </button>
                </div>

                <div className="absolute bottom-12 inset-x-0">
                    <div className="container mx-auto px-4 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <nav className="flex text-gray-300 text-xs font-bold uppercase tracking-widest mb-4 space-x-2">
                                <Link href="/" className="hover:text-white">Home</Link>
                                <span>/</span>
                                <Link href="/destinations" className="hover:text-white">Destinations</Link>
                                <span>/</span>
                                <span className="text-white">Kerala</span>
                            </nav>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display">
                                Majestic Kerala <br />
                                <span className="text-orange-400">Backwaters</span>
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-bold">4 Days / 3 Nights</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <MapPin className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm font-bold">In & Out Alleppey</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm font-bold">4.9 (128 Reviews)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Section Navigation (Sticky) */}
            <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm hidden md:block">
                <div className="container mx-auto px-12 py-4">
                    <div className="flex items-center gap-8 font-bold text-sm text-gray-400">
                        {["Overview", "Itinerary", "Inclusions", "FAQs", "Reviews"].map((tab) => (
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

                    {/* Main Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Overview */}
                        <section id="overview" className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-black mb-6 font-display">The Experience</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                Immerse yourself in the tranquility of "God's Own Country". This curated 4-day journey isn't just a holiday; it's a deep dive into the soul of rural Kerala. You'll spend your nights in a private, ultra-luxury houseboat carved from traditional teak wood, featuring air-conditioned suites and a dedicated chef.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { icon: Shield, label: "Safety First", sub: "Sanitized Boats" },
                                    { icon: CheckCircle, label: "Top Rated", sub: "120+ Bookings" },
                                    { icon: Calendar, label: "Flexible", sub: "Free Reschedule" },
                                    { icon: Phone, label: "Guided", sub: "24/7 Support" }
                                ].map((item, i) => (
                                    <div key={i} className="text-center md:text-left">
                                        <item.icon className="w-6 h-6 text-orange-600 mb-2 mx-auto md:mx-0" />
                                        <div className="text-sm font-black text-gray-900 leading-none mb-1">{item.label}</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-display">{item.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Itinerary Accordion */}
                        <section id="itinerary">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-black font-display">Daily Plan</h2>
                                <MapIcon className="w-6 h-6 text-blue-500 cursor-pointer hover:scale-110 transition-transform" />
                            </div>
                            <div className="space-y-4">
                                {itinerary.map((item) => (
                                    <div key={item.day} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                        <button
                                            onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                                            className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex flex-col items-center justify-center shrink-0">
                                                    <span className="text-[10px] font-black uppercase text-orange-600">Day</span>
                                                    <span className="text-lg font-black text-orange-600 leading-none">{item.day}</span>
                                                </div>
                                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", expandedDay === item.day && "rotate-180")} />
                                        </button>
                                        <AnimatePresence>
                                            {expandedDay === item.day && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                >
                                                    <div className="px-8 pb-8 md:px-24 text-gray-500 leading-relaxed text-base">
                                                        <div className="pt-2 border-t border-gray-50">
                                                            {item.desc}
                                                            <div className="mt-4 flex gap-4">
                                                                <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-600 px-2 py-1 rounded">Lunch Included</span>
                                                                <span className="text-[10px] font-bold uppercase bg-green-50 text-green-600 px-2 py-1 rounded">Sightseeing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <section id="inclusions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-green-50/50 p-8 rounded-[2rem] border border-green-100">
                                <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                    Inclusions
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "3 Nights in Luxury Private Houseboat",
                                        "Traditional Welcome with Coconut Water",
                                        "All Meals (Chef-prepared Kerala cuisine)",
                                        "Private Airport Transfers",
                                        "24x7 Assistant on Call",
                                        "Complimentary Village Canoe Trip"
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm text-gray-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-50/50 p-8 rounded-[2rem] border border-red-100">
                                <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                                    <XCircle className="w-6 h-6 text-red-600" />
                                    Exclusions
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Flight / Train Tickets",
                                        "Personal Expenses (Shopping/Tips)",
                                        "Any meals not mentioned",
                                        "Insurance Coverage",
                                        "Entry fees to historic sites"
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm text-gray-600 font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Reviews */}
                        <section id="reviews" className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-black font-display">Real Stories</h2>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-gray-900">4.9/5</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Based on 128 Reviews</div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { name: "Rahul Sharma", text: "The houseboat was massive and clean. Chef prepared the best Karimeen Pollichathu I've ever had. 100% recommended for families.", rating: 5 },
                                    { name: "Priya Patel", text: "So peaceful. The evening cultural performance was a great addition. Everything was seamless from pickup to drop.", rating: 5 }
                                ].map((review, i) => (
                                    <div key={i} className="pb-8 border-b border-gray-50 last:border-0 last:pb-0">
                                        <div className="flex gap-1 mb-2">
                                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                                        </div>
                                        <p className="text-gray-600 italic mb-3 font-medium">"{review.text}"</p>
                                        <div className="text-xs font-bold text-gray-900">— {review.name}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Desktop Sticky (4 cols) */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-40 bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Total Package</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-gray-900">₹15,499</span>
                                        <span className="text-xs text-gray-400 font-bold italic">/ person</span>
                                    </div>
                                </div>
                                <div className="bg-green-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-green-100">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-green-700 uppercase">Saving 15%</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4 group cursor-pointer hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-[10px] font-black tracking-widest text-gray-400 uppercase">Date</span>
                                        <span className="font-bold text-gray-900">Check Availability</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4 group cursor-pointer hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-[10px] font-black tracking-widest text-gray-400 uppercase">Support</span>
                                        <span className="font-bold text-gray-900">Talk to Expert</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book" className="block w-full text-center py-5 bg-orange-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-orange-600/20 hover:bg-orange-500 transition-all transform hover:-translate-y-1 mb-6">
                                Reserve My Space
                            </Link>

                            <button className="flex items-center justify-center gap-2 w-full py-4 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
                                <Download className="w-4 h-4" /> Download PDF Brochure
                            </button>

                            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-center gap-6 grayscale opacity-50">
                                <Shield className="w-6 h-6" />
                                <CheckCircle className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Bar - Visible only on scrolled and mobile */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: scrolled ? 0 : 100 }}
                className="fixed bottom-0 inset-x-0 z-50 bg-white p-4 md:hidden border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] flex items-center justify-between"
            >
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Best Price</span>
                    <span className="text-xl font-black text-gray-900">₹15,499</span>
                </div>
                <Link href="/book" className="bg-orange-600 text-white px-8 py-3 rounded-xl font-black text-sm shadow-lg shadow-orange-600/20">
                    Book Now
                </Link>
            </motion.div>

            <Footer />
        </main>
    );
}
