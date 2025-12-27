"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Calendar, User,
    Phone, Mail, Clock, RefreshCw,
    Search, ChevronRight, Inbox, MessageSquare, Tag
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Inquiry {
    _id: string;
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

export default function AdminInquiries() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState<string | null>(null);

    const fetchInquiries = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/inquiries');
            const json = await res.json();
            setInquiries(json.data);
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Could not connect to the server.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const filteredInquiries = inquiries.filter(i =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.phone.includes(searchTerm)
    );

    return (
        <main className="min-h-screen bg-sand dark:bg-primary relative overflow-hidden text-gray-900 dark:text-gray-100">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -mr-40 -mt-40 pointer-events-none" />

            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black font-display text-primary dark:text-white mb-4 leading-tight">
                                Inquiry <span className="font-serif italic text-accent underline decoration-accent/20 underline-offset-8">Journal</span>
                            </h1>
                            <p className="text-secondary/60 text-sm font-black uppercase tracking-[0.3em]">Customer Support View / Total: {inquiries.length}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={fetchInquiries}
                                className="p-4 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all group"
                            >
                                <RefreshCw className={cn("w-5 h-5 text-accent", isLoading && "animate-spin")} />
                            </button>
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-accent transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search inquiries..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-12 pr-6 py-4 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl focus:bg-white dark:focus:bg-primary outline-none font-black text-xs uppercase tracking-widest transition-all w-full md:w-64"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-3xl rounded-[3rem] border border-black/5 dark:border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
                        {isLoading ? (
                            <div className="p-24 flex flex-col items-center justify-center gap-6">
                                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Loading Support Feed...</p>
                            </div>
                        ) : error ? (
                            <div className="p-24 text-center">
                                <p className="text-red-500 font-black uppercase tracking-widest mb-4">{error}</p>
                                <button onClick={fetchInquiries} className="text-accent underline font-black text-xs tracking-widest uppercase">Try Again</button>
                            </div>
                        ) : filteredInquiries.length === 0 ? (
                            <div className="p-24 flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                                    <Inbox className="w-8 h-8 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-black text-primary dark:text-white mb-2">Inbox Empty</h3>
                                <p className="text-secondary/60 text-xs font-black uppercase tracking-widest">No inquiries match your pulse.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-black/5 dark:border-white/5">
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Sender</th>
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Subject</th>
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Message Snippet</th>
                                            <th className="px-8 py-6 text-left text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Timeline</th>
                                            <th className="px-8 py-6 text-right text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/5 dark:divide-white/5">
                                        {filteredInquiries.map((inquiry, idx) => (
                                            <motion.tr
                                                key={inquiry._id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-black uppercase text-xs">
                                                            {inquiry.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-primary dark:text-white text-sm">{inquiry.name}</p>
                                                            <div className="flex items-center gap-2 opacity-60 text-[10px]">
                                                                <Phone className="w-3 h-3" />
                                                                <span>{inquiry.phone}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-2">
                                                        <Tag className="w-3 h-3 text-accent" />
                                                        <span className="font-black text-xs uppercase tracking-wider text-primary dark:text-white">{inquiry.subject}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-start gap-2">
                                                        <MessageSquare className="w-3 h-3 text-gray-400 mt-1" />
                                                        <p className="text-xs text-secondary/70 italic line-clamp-1 max-w-[200px]">"{inquiry.message}"</p>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-2 text-gray-400">
                                                        <Clock className="w-3 h-3" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">{new Date(inquiry.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <button className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:text-white">
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
