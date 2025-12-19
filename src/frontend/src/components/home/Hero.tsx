"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, ShieldCheck, ChevronDown, Compass, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function Hero() {
    const router = useRouter();
    const [searchData, setSearchData] = useState({
        to: "",
        date: "",
    });

    const [activeField, setActiveField] = useState<string | null>(null);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowMonthDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = () => {
        if (!searchData.to) {
            setActiveField('to');
            return;
        }
        setIsSearching(true);
        setTimeout(() => {
            router.push(`/destinations?to=${searchData.to}&when=${searchData.date}`);
            setIsSearching(false);
        }, 1200);
    };

    const selectMonth = (month: string) => {
        setSearchData(prev => ({ ...prev, date: month }));
        setShowMonthDropdown(false);
    };

    return (
        <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Minimalist Background with Deep Contrast */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Premium Global Experiences"
                    fill
                    className="object-cover object-center scale-105 brightness-[0.7]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Trust Badge - More Compact */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
                >
                    <span className="text-white/80 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-teal-400" />
                        Trusted by 10k+ Global Explorers
                    </span>
                </motion.div>

                {/* Headline - Modern Global Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] font-display tracking-tighter">
                        The Art of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-coral-200">
                            Global Discovery
                        </span>
                    </h1>
                    <p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto font-medium italic">
                        Boutique itineraries for seekers of <span className="text-white">authenticity and soul.</span>
                    </p>
                </motion.div>

                {/* The Discovery Bar - Compact Redesign */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-3xl rounded-full p-2 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] border border-white/40 flex flex-col md:flex-row items-center relative z-[100]"
                >
                    {/* Primary Field: Explore Destinations */}
                    <div
                        className={cn(
                            "flex-[1.4] flex items-center px-8 py-3 rounded-full transition-all duration-300 cursor-text group/item relative w-full md:w-auto",
                            activeField === 'to' ? "bg-gray-50" : "hover:bg-gray-50/50"
                        )}
                        onClick={() => setActiveField('to')}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4 shrink-0 transition-colors group-hover/item:bg-primary/10">
                            <Sparkles className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-left flex-1">
                            <label className="block text-[8px] uppercase font-black tracking-[0.2em] mb-0.5 text-gray-400">Where to?</label>
                            <input
                                type="text"
                                placeholder="Goa, Ladakh, Spiti..."
                                value={searchData.to}
                                className="w-full bg-transparent outline-none text-primary font-black placeholder:text-gray-300 text-sm"
                                onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                            />
                        </div>
                        <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gray-100" />
                    </div>

                    {/* Secondary Field: When */}
                    <div
                        ref={dropdownRef}
                        className={cn(
                            "flex-1 flex items-center px-8 py-3 rounded-full transition-all duration-300 cursor-pointer group/item relative w-full md:w-auto",
                            showMonthDropdown ? "bg-gray-50" : "hover:bg-gray-50/50"
                        )}
                        onClick={() => {
                            setActiveField('date');
                            setShowMonthDropdown(!showMonthDropdown);
                        }}
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4 shrink-0 transition-colors group-hover/item:bg-primary/10">
                            <Calendar className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="text-left flex-1">
                            <label className="block text-[8px] uppercase font-black tracking-[0.2em] mb-0.5 text-gray-400">When?</label>
                            <div className="flex items-center justify-between">
                                <span className={cn(
                                    "font-black text-sm",
                                    searchData.date ? "text-primary" : "text-gray-300"
                                )}>
                                    {searchData.date || "Anytime"}
                                </span>
                                <ChevronDown className={cn(
                                    "w-3 h-3 text-gray-300 transition-transform",
                                    showMonthDropdown && "rotate-180"
                                )} />
                            </div>
                        </div>

                        {/* Dropdown Menu - Tighter */}
                        <AnimatePresence>
                            {showMonthDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    className="absolute top-[110%] left-0 right-0 bg-white shadow-2xl rounded-3xl border border-gray-100 p-4 z-[110] grid grid-cols-4 gap-2 min-w-[300px]"
                                >
                                    {MONTHS.map((month) => (
                                        <button
                                            key={month}
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                selectMonth(month);
                                            }}
                                            className={cn(
                                                "py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all",
                                                searchData.date === month
                                                    ? "bg-primary text-white"
                                                    : "hover:bg-gray-50 text-gray-500 hover:text-primary"
                                            )}
                                        >
                                            {month}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* CTA Button */}
                    <div className="p-1 w-full md:w-auto">
                        <button
                            onClick={handleSearch}
                            disabled={isSearching}
                            className={cn(
                                "w-full md:w-auto bg-primary text-white h-14 px-8 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-lg transition-all flex items-center justify-center gap-3 hover:bg-accent active:scale-95 disabled:opacity-70",
                                isSearching && "cursor-not-allowed"
                            )}
                        >
                            {isSearching ? (
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
                                    <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                                </div>
                            ) : (
                                <>
                                    Explore Trips
                                    <Search className="w-4 h-4" strokeWidth={3} />
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CompassIcon({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    );
}
