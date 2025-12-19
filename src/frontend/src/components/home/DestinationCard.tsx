"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DestinationCardProps {
    title: string;
    location: string;
    image: string;
    price: string;
    rating: number;
    duration: string;
    category?: string;
    href: string;
    className?: string;
}

export function DestinationCard({
    title,
    location,
    image,
    price,
    rating,
    duration,
    category,
    href,
    className
}: DestinationCardProps) {
    return (
        <motion.div
            whileHover={{ y: -12 }}
            className={cn(
                "group relative bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden border border-gray-100 dark:border-gray-800/50 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] transition-all duration-700",
                className
            )}
        >
            <Link href={href}>
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Sophisticated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Top Badges */}
                    <div className="absolute top-6 left-6 flex gap-3">
                        {category && (
                            <span className="bg-white/95 text-primary text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-2xl border border-white/20 backdrop-blur-md group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                {category}
                            </span>
                        )}
                        <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/10">
                            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                            {rating}
                        </span>
                    </div>

                    {/* Interactive Bottom Label (Appear on Hover) */}
                    <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        <div className="flex items-center gap-3 text-white/90 text-[10px] font-black uppercase tracking-[0.3em] bg-white/10 backdrop-blur-2xl px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            Elite Choice
                        </div>
                    </div>
                </div>

                {/* Content Section - Simplified for Luxury Feel */}
                <div className="p-10">
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-3.5 h-3.5 text-accent" />
                            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{location}</span>
                        </div>
                        <h3 className="text-3xl font-black font-display text-primary dark:text-white leading-[1.1] group-hover:text-accent transition-colors duration-500">
                            {title}
                        </h3>
                    </div>

                    {/* Pricing & CTA Row */}
                    <div className="flex items-end justify-between border-t border-gray-50 dark:border-gray-800/50 pt-8 mt-4">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-[9px] font-bold text-secondary/60 uppercase tracking-widest mb-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {duration}
                            </div>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-3xl font-black text-primary dark:text-white tracking-tight">{price}</span>
                                <span className="text-[10px] text-secondary font-black uppercase tracking-tighter opacity-50">/ Head</span>
                            </div>
                        </div>

                        <div className="relative h-14 w-14 bg-primary dark:bg-accent rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:rounded-full group-hover:bg-accent group-hover:rotate-45 shadow-lg group-hover:shadow-accent/40">
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:-rotate-45" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
