"use client";

import { motion } from "framer-motion";
import {
    Mountain,
    Heart,
    Users,
    Bike,
    Zap,
    Wallet,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
    {
        name: "Adventure",
        icon: Mountain,
        color: "from-blue-500/10 to-transparent",
        accent: "text-blue-500",
        description: "Trekking & Rafting",
        count: "40+ Trips"
    },
    {
        name: "Honeymoon",
        icon: Heart,
        color: "from-rose-500/10 to-transparent",
        accent: "text-rose-500",
        description: "Romantic Escapes",
        count: "25+ Trips"
    },
    {
        name: "Family",
        icon: Users,
        color: "from-orange-500/10 to-transparent",
        accent: "text-orange-500",
        description: "Grand Getaways",
        count: "55+ Trips"
    },
    {
        name: "Bike Trips",
        icon: Bike,
        color: "from-slate-700/10 to-transparent",
        accent: "text-slate-800",
        description: "Ladakh & Spiti",
        count: "15+ Trips"
    },
    {
        name: "Spiritual",
        icon: Zap,
        color: "from-amber-400/10 to-transparent",
        accent: "text-amber-600",
        description: "Peace & Temples",
        count: "30+ Trips"
    },
    {
        name: "Budget",
        icon: Wallet,
        color: "from-emerald-500/10 to-transparent",
        accent: "text-emerald-600",
        description: "Pocket Friendly",
        count: "20+ Trips"
    }
];

export const TravelCategories = () => {
    return (
        <section className="py-20 bg-sand dark:bg-primary/40 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-black text-[9px] uppercase tracking-[0.4em] mb-2 block"
                        >
                            Curated Collections
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-primary dark:text-white font-display leading-tight"
                        >
                            Explore by <span className="font-serif italic text-accent font-medium">Boutique Categories</span>
                        </motion.h2 >
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/destinations?category=${cat.name.toLowerCase()}`}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-white dark:bg-gray-900/40 backdrop-blur-3xl rounded-[2rem] p-8 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-white dark:group-hover:bg-primary">
                                        <cat.icon className={cn("w-6 h-6 transition-colors duration-500", cat.accent)} strokeWidth={1.5} />
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="font-black text-lg text-primary dark:text-white mb-1 font-display">{cat.name}</h3>
                                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4 opacity-70">{cat.description}</p>
                                    </div>

                                    <div className="relative z-10 mt-auto">
                                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-[8px] font-black text-primary/40 dark:text-white/40 uppercase tracking-widest group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                            {cat.count}
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
