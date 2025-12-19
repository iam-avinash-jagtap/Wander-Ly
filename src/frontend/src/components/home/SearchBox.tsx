"use client";

import { useState } from "react";
import {
    Plane, Hotel, Home, Palmtree, Train, Bus, Car,
    MapPin, Calendar, Users, ChevronDown, Repeat
} from "lucide-react";
import { cn } from "@/lib/utils";

const searchCategories = [
    { id: "flights", icon: Plane, label: "Flights" },
    { id: "hotels", icon: Hotel, label: "Hotels" },
    { id: "homestays", icon: Home, label: "Homestays" },
    { id: "packages", icon: Palmtree, label: "Holiday Packages" },
    { id: "trains", icon: Train, label: "Trains" },
    { id: "buses", icon: Bus, label: "Buses" },
    { id: "cabs", icon: Car, label: "Cabs" },
];

export function SearchBox() {
    const [activeCategory, setActiveCategory] = useState("flights");

    return (
        <div className="glass-card rounded-2xl shadow-2xl max-w-6xl w-full mx-auto relative z-20 border border-white/40 pb-10 overflow-hidden">

            {/* Top Icon Navigation */}
            <div className="flex items-center justify-center p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-t-xl border-b border-white/20 overflow-x-auto no-scrollbar">
                <div className="flex space-x-8 min-w-max px-4">
                    {searchCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "flex flex-col items-center space-y-1 group transition-all duration-200 px-2 py-1 border-b-2",
                                activeCategory === cat.id
                                    ? "text-primary border-primary"
                                    : "text-gray-600 hover:text-primary dark:text-gray-300 border-transparent"
                            )}
                        >
                            <cat.icon className={cn(
                                "w-6 h-6 mb-1 transition-transform group-hover:scale-110",
                                activeCategory === cat.id ? "text-primary" : "text-gray-500 group-hover:text-primary"
                            )} />
                            <span className="text-xs font-bold uppercase tracking-wide">{cat.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Inputs Container */}
            <div className="p-8">
                {/* Radio Options (One Way / Round Trip) - Visible mostly for Flight/Train */}
                <div className="flex items-center space-x-6 mb-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    <label className="flex items-center space-x-2 cursor-pointer bg-white/50 px-3 py-1 rounded-full hover:bg-white transition-colors">
                        <input type="radio" name="tripType" defaultChecked className="text-primary focus:ring-primary accent-primary" />
                        <span>One Way</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer bg-white/50 px-3 py-1 rounded-full hover:bg-white transition-colors">
                        <input type="radio" name="tripType" className="text-primary focus:ring-primary accent-primary" />
                        <span>Round Trip</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer bg-white/50 px-3 py-1 rounded-full hover:bg-white transition-colors">
                        <input type="radio" name="tripType" className="text-primary focus:ring-primary accent-primary" />
                        <span>Multi City</span>
                    </label>
                </div>

                {/* Main Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-200/50 dark:border-gray-600/50 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200/50 dark:divide-gray-600/50 bg-white/60 dark:bg-black/60 backdrop-blur-sm shadow-inner">

                    {/* From */}
                    <div className="col-span-1 md:col-span-1 p-5 hover:bg-white/80 dark:hover:bg-gray-800 transition-colors cursor-pointer relative group">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">From</span>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">DEL</div>
                        <div className="text-sm font-medium text-gray-600 truncate group-hover:text-black dark:group-hover:text-white">Delhi, India</div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">IGI Airport</span>
                    </div>

                    {/* To */}
                    <div className="col-span-1 md:col-span-1 p-5 hover:bg-white/80 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">To</span>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">BOM</div>
                        <div className="text-sm font-medium text-gray-600 truncate group-hover:text-black dark:group-hover:text-white">Mumbai, India</div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">Chhatrapati Shivaji Int'l</span>
                    </div>

                    {/* Departure */}
                    <div className="col-span-1 md:col-span-1 p-5 hover:bg-white/80 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Departure</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="text-3xl font-black text-gray-900 dark:text-white">24</span>
                            <span className="text-lg font-medium text-gray-900 dark:text-white">Oct'25</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium group-hover:text-black dark:group-hover:text-white">Thursday</div>
                    </div>

                    {/* Return */}
                    <div className="col-span-1 md:col-span-1 p-5 hover:bg-white/80 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Return</span>
                        <div className="text-sm text-gray-400 mt-2 font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300">
                            Tap to add a return date for bigger discounts
                        </div>
                    </div>

                    {/* Travelers */}
                    <div className="col-span-1 md:col-span-1 p-5 hover:bg-white/80 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Travellers & Class</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="text-3xl font-black text-gray-900 dark:text-white">1</span>
                            <span className="text-lg font-medium text-gray-900 dark:text-white">Traveller</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium group-hover:text-black dark:group-hover:text-white">Economy/Premium Economy</div>
                    </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center -mb-16 mt-8">
                    <button
                        onClick={() => window.location.href = '/packages'}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl font-bold py-4 px-20 rounded-full shadow-lg hover:shadow-blue-500/50 transform transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider border border-white/20"
                    >
                        Search Flights
                    </button>
                </div>
            </div>
        </div>
    );
}
