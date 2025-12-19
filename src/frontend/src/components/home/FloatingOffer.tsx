"use client";

import { motion } from "framer-motion";
import { Tag, Sparkles } from "lucide-react";
import Link from "next/link";

export const FloatingOffer = () => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="fixed bottom-12 right-12 z-50 pointer-events-auto"
        >
            <Link href="/offers">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer"
                >
                    {/* Glowing effect background centered on India Red */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-accent/40 rounded-full blur-2xl"
                    />

                    {/* Main Badge - Premium Design */}
                    <div className="relative flex items-center gap-4 bg-primary text-white pl-8 pr-10 py-5 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4)] border border-white/10 overflow-hidden group">
                        {/* Slide animation on hover */}
                        <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out -z-1" />

                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative z-10"
                        >
                            <Tag className="w-5 h-5" />
                        </motion.div>

                        <div className="flex flex-col relative z-10">
                            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/60 mb-1">Exclusive</span>
                            <span className="text-[11px] font-black tracking-widest uppercase flex items-center gap-2">
                                Seasonal Deals <Sparkles className="w-3 h-3 text-gold fill-gold" />
                            </span>
                        </div>

                        {/* Minimal Indicator */}
                        <div className="absolute top-4 right-6 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
};
