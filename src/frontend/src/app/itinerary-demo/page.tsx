"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Itinerary, ItineraryDay } from "@/components/packages/Itinerary";
import { Snowflake, Smartphone, Activity } from "lucide-react";
import { motion } from "framer-motion";

const demoDays: ItineraryDay[] = [
    {
        day: 1,
        title: "The Himalayan Gateway",
        location: "Kullu Valley",
        description: "Your journey begins in the heart of the Kullu valley. Breathe in the crisp mountain air as we settle into our luxury riverside basecamp.",
        highlights: [
            "Riverside Welcome Dinner",
            "Technical Briefing & Gear Check",
            "Star-gazing session at the campsite"
        ],
        stay: "Himalayan Nomad Luxury Tents",
        meals: ["Dinner"],
        activities: ["Relaxation", "Photography"]
    },
    {
        day: 2,
        title: "Conquering the High Pass",
        location: "Rohtang Pass",
        description: "An early start takes us up to the legendary Rohtang Pass. Witness the transition from lush green forests to stark, snow-capped peaks.",
        highlights: [
            "Crossing 13,058 ft altitude",
            "Glacial stream crossing",
            "Panoramic views of Spiti valley"
        ],
        stay: "Pang Valley Guest House",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: ["Driving", "Adventure"]
    },
    {
        day: 3,
        title: "The Monastic Serenity",
        location: "Spiti Valley",
        description: "Explore the ancient monasteries of Spiti. Experience a culture that has remained unchanged for over a thousand years.",
        highlights: [
            "Visit to Key Monastery",
            "Meditation session with local monks",
            "Traditional Spitian lunch in a village home"
        ],
        stay: "Hotel Spiti Residency",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: ["Culture", "Spirituality"]
    }
];

export default function ItineraryDemoPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gray-50 overflow-hidden relative">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block"
                        >
                            Component Showcase
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black font-display text-gray-900 mb-8 tracking-tight"
                        >
                            The Ultimate <br />
                            <span className="text-orange-600 italic">Itinerary UI</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed italic"
                        >
                            A premium, responsive, and data-driven timeline component designed for modern travel platforms.
                        </motion.p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <Itinerary days={demoDays} />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                                <Snowflake className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black font-display">Scan Ready</h3>
                            <p className="text-gray-500 text-sm italic font-medium">Large day indicators and concise titles allow users to quickly understand the trip pace.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black font-display">Mobile First</h3>
                            <p className="text-gray-500 text-sm italic font-medium">Touch-friendly accordions and responsive layout that works flawlessly on small screens.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black font-display">Data Rich</h3>
                            <p className="text-gray-500 text-sm italic font-medium">Automatic icon generation for stays, meals, and activities based on your JSON structure.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

