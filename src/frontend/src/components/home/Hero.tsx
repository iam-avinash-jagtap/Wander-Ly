"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function Hero() {
    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-white/30 bg-black/30 backdrop-blur-md shadow-2xl ring-1 ring-white/10">
                        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                        <span className="text-white font-bold text-xs tracking-[0.2em] uppercase shadow-black drop-shadow-md">
                            #1 Travel Agency in India
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-9xl font-black font-display text-white mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter leading-[0.9]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Live The <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-sm filter brightness-110">Extraordinary</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Curating timeless journeys to the world's most exquisite destinations.
                    Your adventure begins where the ordinary ends.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-20 pb-12 md:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link href="/destinations" className="group relative px-10 py-5 bg-white text-gray-900 font-black text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_50px_-10px_rgba(255,255,255,0.6)] border border-white hover:border-blue-200">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <span className="relative flex items-center tracking-tight">
                            Explore Destinations <Compass className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform duration-500 text-blue-600" />
                        </span>
                    </Link>

                    <Link href="/contact" className="group px-10 py-5 bg-black/20 backdrop-blur-xl border border-white/40 text-white font-bold text-lg rounded-full transition-all hover:bg-black/40 hover:scale-105 hover:border-white/80 ring-1 ring-white/10 hover:ring-white/30 shadow-lg">
                        <span className="flex items-center tracking-tight">
                            Plan Your Journey <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                    </Link>
                </motion.div>
            </div>


        </div>
    );
}
