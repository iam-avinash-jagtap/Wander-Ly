"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Calendar, User, MapPin,
    Phone, Mail, Clock, RefreshCw,
    Search, Filter, ChevronRight, Inbox
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Booking {
    _id: string;
    name: string;
    phone: string;
    email?: string;
    destination: string;
    travelDate?: string;
    createdAt: string;
}

export default function AdminBookings() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState<string | null>(null);

    const fetchBookings = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/bookings');
            const data = await response.json();
            if (data.success) {
                setBookings(data.data);
            } else {
                setError(data.message || "Failed to fetch bookings");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Could not connect to the server.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const filteredBookings = bookings.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.phone.includes(searchTerm)
    );

    return (
        <main className="min-h-screen bg-sand dark:bg-primary relative overflow-hidden text-gray-900 dark:text-gray-100">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -mr-40 -mt-40 pointer-events-none" />

            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black font-display text-primary dark:text-white mb-4 leading-tight">
                                Booking <span className="font-serif italic text-accent underline decoration-accent/20 underline-offset-8">Dashboard</span>
                            </h1>
                            <p className="text-secondary/60 text-sm font-black uppercase tracking-[0.3em]">Administrator View / Total: {bookings.length}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={fetchBookings}
                                className="p-4 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all group"
                            >
                                <RefreshCw className={cn("w-5 h-5 text-accent", isLoading && "animate-spin")} />
                            </button>
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search bookings..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-12 pr-6 py-4 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl focus:bg-white dark:focus:bg-primary outline-none font-black text-xs uppercase tracking-widest transition-all w-full md:w-64"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-3xl rounded-[3rem] border border-black/5 dark:border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
                        {isLoading ? (
                            <div className="p-24 flex flex-col items-center justify-center gap-6">
                                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Loading Pursuit Data...</p>
                            </div>
                        ) : error ? (
                            <div className="p-24 text-center">
                                <p className="text-red-500 font-black uppercase tracking-widest mb-4">{error}</p>
                                <button onClick={fetchBookings} className="text-accent underline font-black text-xs tracking-widest uppercase">Try Again</button>
                            </div>
                        ) : filteredBookings.length === 0 ? (
                            <div className="p-24 flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                                    <Inbox className="w-8 h-8 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-black text-primary dark:text-white mb-2">No Bookings Found</h3>
                                <p className="text-secondary/60 text-xs font-black uppercase tracking-widest">Start sharing your experiences to get leads.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-black/5 dark:border-white/5">
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Traveler</th>
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Pursuit</th>
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Schedule</th>
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Contact</th>
                                            <th className="px-8 py-6 text-right text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/5 dark:divide-white/5">
                                        {filteredBookings.map((booking, idx) => (
                                            <motion.tr
                                                key={booking._id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black uppercase text-xs">
                                                            {booking.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-primary dark:text-white text-sm">{booking.name}</p>
                                                            <p className="text-[10px] font-medium text-gray-400 italic">ID: {booking._id.slice(-6).toUpperCase()}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-3">
                                                        <MapPin className="w-4 h-4 text-accent" />
                                                        <span className="font-bold text-sm text-primary dark:text-white">{booking.destination}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2 text-primary dark:text-white">
                                                            <Calendar className="w-3 h-3 text-emerald-500" />
                                                            <span className="text-xs font-black uppercase tracking-wider">{booking.travelDate ? new Date(booking.travelDate).toLocaleDateString() : 'Unscheduled'}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <Clock className="w-3 h-3" />
                                                            <span className="text-[9px] font-medium uppercase tracking-widest">Booked {new Date(booking.createdAt).toLocaleDateString()}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 text-xs">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="w-3 h-3 text-blue-500" />
                                                            <a href={`tel:${booking.phone}`} className="font-bold hover:text-accent transition-colors">{booking.phone}</a>
                                                        </div>
                                                        {booking.email && (
                                                            <div className="flex items-center gap-2 opacity-60">
                                                                <Mail className="w-3 h-3" />
                                                                <span className="truncate max-w-[150px]">{booking.email}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <button className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white">
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
