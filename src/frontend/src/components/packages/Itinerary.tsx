"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    MapPin,
    Utensils,
    Hotel,
    Car,
    Camera,
    Moon,
    Sun,
    Info,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    highlights?: string[];
    location?: string;
    stay?: string;
    meals?: string[]; // e.g., ["Breakfast", "Lunch", "Dinner"]
    activities?: string[];
    image?: string;
}

interface ItineraryProps {
    days: ItineraryDay[];
    className?: string;
}

export const Itinerary: React.FC<ItineraryProps> = ({ days, className }) => {
    const [expandedDay, setExpandedDay] = useState<number | null>(1);

    return (
        <div className={cn("max-w-4xl mx-auto space-y-6", className)}>
            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[2.25rem] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-gray-200 hidden md:block" />

                <div className="space-y-6">
                    {days.map((item, index) => (
                        <motion.div
                            key={item.day}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div
                                className={cn(
                                    "bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden",
                                    expandedDay === item.day
                                        ? "shadow-xl shadow-gray-200/50 border-orange-100 ring-1 ring-orange-100/50"
                                        : "shadow-sm border-gray-100 hover:border-gray-200"
                                )}
                            >
                                <button
                                    onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                                    className="w-full text-left p-5 md:p-8 flex items-center justify-between group"
                                >
                                    <div className="flex items-start md:items-center gap-4 md:gap-8">
                                        {/* Day Badge */}
                                        <div className={cn(
                                            "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 transition-colors duration-300",
                                            expandedDay === item.day
                                                ? "bg-orange-600 text-white shadow-lg shadow-orange-200"
                                                : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                                        )}>
                                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-tighter leading-none mb-1">Day</span>
                                            <span className="text-xl md:text-2xl font-black leading-none">{item.day}</span>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            {item.location && (
                                                <div className="flex items-center gap-1.5 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-1.5">
                                                    <MapPin className="w-3 h-3" />
                                                    {item.location}
                                                </div>
                                            )}
                                            <h3 className={cn(
                                                "text-lg md:text-2xl font-black font-display tracking-tight transition-colors duration-300",
                                                expandedDay === item.day ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                                            )}>
                                                {item.title}
                                            </h3>

                                            {/* Summary Icons (Visible when collapsed) */}
                                            <AnimatePresence mode="wait">
                                                {expandedDay !== item.day && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 10 }}
                                                        className="flex items-center gap-4 mt-3"
                                                    >
                                                        {item.stay && <Hotel className="w-4 h-4 text-gray-300" />}
                                                        {item.meals && item.meals.length > 0 && <Utensils className="w-4 h-4 text-gray-300" />}
                                                        {item.activities && item.activities.length > 0 && <Camera className="w-4 h-4 text-gray-300" />}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className={cn(
                                        "ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                                        expandedDay === item.day ? "bg-orange-50 text-orange-600 rotate-180" : "bg-gray-50 text-gray-300 group-hover:text-gray-500"
                                    )}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedDay === item.day && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-10 md:px-32 md:pb-12 border-t border-gray-50 pt-8">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                    {/* Description & List */}
                                                    <div className="space-y-8">
                                                        <p className="text-gray-600 leading-relaxed text-lg font-medium italic">
                                                            {item.description}
                                                        </p>

                                                        {item.highlights && item.highlights.length > 0 && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Day Highlights</h4>
                                                                <ul className="grid grid-cols-1 gap-3">
                                                                    {item.highlights.map((point, i) => (
                                                                        <li key={i} className="flex gap-3 text-sm font-bold text-gray-700 items-start">
                                                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                                            {point}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Day Meta Info (Stay, Food, etc) */}
                                                    <div className="space-y-6">
                                                        <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 space-y-6">
                                                            {item.stay && (
                                                                <div className="flex items-start gap-4">
                                                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                                                                        <Hotel className="w-5 h-5 text-blue-500" />
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Stay</span>
                                                                        <span className="text-sm font-bold text-gray-800">{item.stay}</span>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {item.meals && item.meals.length > 0 && (
                                                                <div className="flex items-start gap-4">
                                                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                                                                        <Utensils className="w-5 h-5 text-orange-500" />
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Meals Included</span>
                                                                        <div className="flex flex-wrap gap-2 mt-1">
                                                                            {item.meals.map(meal => (
                                                                                <span key={meal} className="px-2 py-0.5 bg-white text-[10px] font-black rounded-md border border-gray-100 text-gray-600">
                                                                                    {meal}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {item.activities && item.activities.length > 0 && (
                                                                <div className="flex items-start gap-4">
                                                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                                                                        <Camera className="w-5 h-5 text-purple-500" />
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Focus</span>
                                                                        <div className="flex flex-wrap gap-2 mt-1">
                                                                            {item.activities.map(act => (
                                                                                <span key={act} className="text-xs font-bold text-gray-700">{act}</span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="p-5 bg-orange-50/30 rounded-3xl border border-orange-50 flex items-center gap-4">
                                                            <Info className="w-5 h-5 text-orange-400" />
                                                            <p className="text-[10px] font-bold text-orange-800 leading-tight uppercase tracking-tight">
                                                                Tip: Carry an extra powerbank for today as we'll be in remote valley areas.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
