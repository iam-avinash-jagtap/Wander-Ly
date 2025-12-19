"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Heart, Plane, MapPin, Clock, Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Itinerary, ItineraryDay } from "@/components/packages/Itinerary";

const rishikeshItinerary: ItineraryDay[] = [
    {
        day: 1,
        title: "Arrival & Riverside Serenity",
        location: "Rishikesh",
        description: "Begin your journey with a scenic drive to the holy banks of the Ganges. Check into your luxury riverside retreat where a special welcome setup awaits.",
        highlights: ["Romantic Room Decor", "Riverside Welcome Drink", "Sunset Meditation"],
        stay: "Luxury Riverside Resort",
        meals: ["Dinner"],
        activities: ["Relaxation", "Photography"]
    },
    {
        day: 2,
        title: "Culture & Spiritual Connection",
        location: "Triveni Ghat",
        description: "Explore the soul of Rishikesh. Visit mythical bridges and markets before witnessing the world-famous Ganga Aarti from reserved VIP seats.",
        highlights: ["Ram Jhula Exploration", "Café Hopping", "VIP Ganga Aarti"],
        stay: "Luxury Riverside Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Culture", "Sightseeing"]
    },
    {
        day: 3,
        title: "The Adventure Sprint",
        location: "Ganga River",
        description: "A perfect blend of thrill and peace. Tackle the rapids together in a private rafting session, followed by a grounding yoga session by the riverbank.",
        highlights: ["Private River Rafting", "Riverside Yoga Session", "Cliff Jumping (Optional)"],
        stay: "Luxury Riverside Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Adventure", "Wellness"]
    },
    {
        day: 4,
        title: "Waterfall Trails & Starlight Dining",
        location: "Neer Garh",
        description: "Trek to the hidden Neer Garh waterfalls for a refreshing morning. The day ends with a magical private candlelight dinner under the Himalayan stars.",
        highlights: ["Waterfall Trekking", "Spa Afternoon", "Private Candlelight Dinner"],
        stay: "Luxury Riverside Resort",
        meals: ["Breakfast", "Dinner"],
        activities: ["Nature", "Romance"]
    },
    {
        day: 5,
        title: "Farewell Deployment",
        location: "Return Journey",
        description: "A leisure morning for breakfast and reflection. Transfer to Dehradun/Delhi for your flight home, carrying the peace of the mountains with you.",
        highlights: ["Souvenir Shopping", "Leisure Breakfast", "Luxury Transfer"],
        meals: ["Breakfast"],
        activities: ["Shopping", "Departure"]
    }
];

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-sand dark:bg-primary">
            <Navbar />

            {/* Hero Section - Refined for Ultra-Premium Minimalism */}
            <div className="relative h-screen min-h-[800px] w-full overflow-hidden">
                <Image
                    src="https://img.avianexperiences.com/trek/2d3f1914-76ba-492d-a875-f90361caaaa7?utm_source=chatgpt.com"
                    alt="Rishikesh Couple Retreat"
                    fill
                    className="object-cover brightness-50"
                    priority
                />

                {/* Modern Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/95" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        {/* Elegant Minimal Badge */}
                        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 mb-10">
                            <Heart className="w-3.5 h-3.5 text-accent animate-pulse fill-accent" />
                            <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.4em]">
                                The Private Collection: Couple's Retreat
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] font-display tracking-tighter mb-8">
                            RISHIKESH <br />
                            <span className="text-3xl md:text-5xl font-serif italic text-white/40 block mt-4">
                                Serenity found in every step
                            </span>
                        </h1>

                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-wide">
                            A curated 5-day escape designed for couples who seek <span className="text-white italic">absolute silence</span> and <span className="text-white italic">soulful adventure</span>.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            {/* Price Card - Boutique Style */}
                            <div className="bg-white/5 backdrop-blur-2xl px-10 py-6 rounded-[2rem] border border-white/10 flex items-center gap-6">
                                <div className="text-left">
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">Entry Value</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black text-white">₹50,000</span>
                                        <span className="text-[10px] font-bold text-white/30 italic">/ couple</span>
                                    </div>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10" />
                                <div className="text-left">
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">Duration</p>
                                    <span className="text-lg font-bold text-white uppercase tracking-wider">5D / 4N</span>
                                </div>
                            </div>

                            <Link href="/book?package=rishikesh-retreat" className="group px-14 py-8 bg-white text-primary rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] flex items-center gap-4 transition-all duration-500 hover:bg-teal-600 hover:text-white hover:shadow-[0_20px_50px_rgba(13,148,136,0.3)] active:scale-95">
                                Secure This Retreat
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Explore Itinerary</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </div>

            {/* Premium Floating DevOps Badge - Refined */}
            <motion.div
                className="fixed bottom-12 right-12 z-50 max-w-[320px] hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="bg-primary/95 backdrop-blur-3xl text-white p-8 rounded-[2.5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
                    <div className="flex items-start gap-5">
                        <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                            <Terminal className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-2">DevOps Exclusive</h3>
                            <p className="text-[12px] text-white/50 leading-relaxed font-medium">
                                Enrollment verified by professional proof. Restricted to dual-engineer couples.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                    <div className="lg:col-span-2 space-y-32">
                        {/* Intro */}
                        <section>
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Introduction</span>
                            <h2 className="text-5xl font-black text-primary dark:text-white mb-10 font-display">Designed for the <br /> Modern Couple</h2>
                            <p className="text-xl text-secondary leading-relaxed mb-12 italic font-medium">
                                Specially curated for a <strong className="text-primary dark:text-white border-b-2 border-accent/20">DevOps Engineer couple</strong> looking for that perfect balance.
                                Think of it as a stable production environment for your soul—calm mornings, structured adventure sprints, and zero-downtime romance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl">
                                    <Image src="https://media-cdn.tripadvisor.com/media/photo-s/2b/91/5c/e4/caption.jpg?utm_source=chatgpt.com" width={500} height={600} alt="Room" className="object-cover h-[400px] w-full transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                    <span className="absolute bottom-10 left-10 text-white font-black uppercase tracking-widest text-[10px]">Private Balcony Views</span>
                                </div>
                                <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl mt-12 md:mt-24">
                                    <Image src="https://i.ytimg.com/vi/KUVBnw4cFRc/hq720.jpg?rs=AOn4CLCalTj_Z36ZMacBDgVVAL-XKep5mw&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&utm_source=chatgpt.com" width={500} height={600} alt="Rafting" className="object-cover h-[400px] w-full transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                    <span className="absolute bottom-10 left-10 text-white font-black uppercase tracking-widest text-[10px]">Private River Rafting</span>
                                </div>
                            </div>
                        </section>

                        {/* Travel Overview */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 border border-white/20 shadow-2xl">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                                <div>
                                    <h3 className="text-2xl font-black text-primary dark:text-white uppercase tracking-widest text-sm mb-2">Travel Logistics</h3>
                                    <p className="text-secondary text-xs italic font-medium">Seamless movement across the Himalayas.</p>
                                </div>
                                <div className="flex items-center gap-4 bg-primary text-white px-6 py-3 rounded-2xl">
                                    <Plane className="w-5 h-5 text-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Flights Included</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-10">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <MapPin className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Full Route</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Pune → Delhi → Rishikesh → Return</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <Plane className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Transit Class</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Premium Economy Direct Flights</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-10">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <Heart className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Accommodation Style</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Boutique Spiritual & Romantic Luxury</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-xl shrink-0 border border-black/5 dark:border-white/10">
                                            <Clock className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1 block">Project Pace</span>
                                            <span className="text-sm font-black text-primary dark:text-white">Relaxed with Scheduled High-Action Moments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Premium Itinerary */}
                        <section>
                            <div className="mb-20">
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Day-by-Day Deployment</span>
                                <h3 className="text-5xl font-black text-primary dark:text-white mb-4 font-display">The Experience Roadmap</h3>
                                <p className="text-secondary font-medium italic text-lg opacity-70">A five-day sprint through silence and thrill.</p>
                            </div>

                            <Itinerary days={rishikeshItinerary} />
                        </section>
                    </div>

                    <div className="space-y-16">
                        <div className="bg-primary text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-[80px]" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-10 relative z-10">Core Value Proposition</h4>
                            <ul className="space-y-10 relative z-10">
                                {[
                                    "A stable production environment for your mind—zero downtime romance.",
                                    "Adventure programmed with sub-millisecond precision.",
                                    "Riverside high-speed connectivity for essential syncs.",
                                    "Boutique privacy guaranteed through private corridors."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-5">
                                        <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-white/70 italic leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 shadow-3xl">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary dark:text-white mb-10">The Fine Print</h4>
                            <div className="space-y-12">
                                <div>
                                    <h5 className="text-[9px] font-black uppercase tracking-widest text-emerald-500 mb-6">System Inclusions</h5>
                                    <ul className="space-y-4 text-xs text-secondary font-bold">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Premium Flight Tickets (Return)</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Private Chauffeur & Cab</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 4-Star Riverside Luxury Stay</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> All-Inclusive Gourmet Meals</li>
                                    </ul>
                                </div>
                                <div className="h-px bg-black/5 dark:bg-white/5" />
                                <div>
                                    <h5 className="text-[9px] font-black uppercase tracking-widest text-accent mb-6">Excluded Modules</h5>
                                    <ul className="space-y-4 text-xs text-secondary font-bold">
                                        <li className="flex items-center gap-3 opacity-50">• Personal Porterage Services</li>
                                        <li className="flex items-center gap-3 opacity-50">• Insurance Premium Adjustments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Sidebar */}
                        <div className="bg-teal-600 text-white rounded-[3rem] p-12 shadow-[0_30px_60px_rgba(13,148,136,0.2)] text-center">
                            <h4 className="text-2xl font-black mb-4 font-display">Ready for<br />Acclimatization?</h4>
                            <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-10">Limited Slots Available for This Deployment</p>
                            <Link href="/book" className="block w-full py-6 bg-white text-teal-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-colors">
                                Book Your Slot
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
