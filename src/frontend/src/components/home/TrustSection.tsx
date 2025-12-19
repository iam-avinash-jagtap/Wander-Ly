"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Heart,
    Star,
    Clock,
    ArrowRight,
    MessageSquare,
    CheckCircle2,
    Undo2,
    Headset,
    PhoneCall
} from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Amit Deshmukh",
        location: "Pune, MH",
        text: "Arrey, I was initially very tensed about booking Ladakh online, but Wanderly's support was simply top-class! The bike was pakka A-one condition, and the full ride was absolutely makkhan.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Priya Sharma",
        location: "Mumbai, MH",
        text: "The Kedarnath yatra was handled so professionally, really. Mere parents felt very safe and the pace was perfect for senior citizens. Total peace of mind for family trips!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Rahul & Sneha",
        location: "New Delhi, DL",
        text: "Goa beach vibes were just too good! No 'chupay huye' hidden costs, everything was crystal clear like a mirror. 100% 'paisa vasool' experience, no doubt!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    }
];

const badges = [
    { icon: ShieldCheck, title: "Verified Operator", desc: "Government recognized travel partner" },
    { icon: Headset, title: "24/7 Support", desc: "Real humans, no bots, anytime support" },
    { icon: Undo2, title: "Easy Refund", desc: "Transparent cancellation & instant refunds" },
    { icon: Heart, title: "Family Safe", desc: "Curated experiences for all age groups" }
];

export const TrustSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-12">

                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block"
                    >
                        Trust is Our Heritage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black font-display text-gray-900 leading-tight tracking-tight mb-8"
                    >
                        Why 10,000+ Indian Families <br />
                        <span className="text-orange-600 italic">Pre-book with Us</span>
                    </motion.h2>
                </div>

                {/* Badges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
                    {badges.map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <badge.icon className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-black mb-2 text-gray-900">{badge.title}</h3>
                            <p className="text-sm text-gray-500 font-medium italic">{badge.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Real Photos & Testimonials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

                    {/* Photos Wall */}
                    <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image src="/t-ladakh.png" alt="Happy Travelers" fill className="object-cover" unoptimized />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-gray-900 uppercase">Ladakh Rider Group</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="relative h-36 rounded-[2rem] overflow-hidden shadow-xl">
                                <Image src="/t-kedarnath.png" alt="Kedarnath Yatra" fill className="object-cover" unoptimized />
                            </div>
                            <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-xl">
                                <Image src="/t-goa.png" alt="Goa Family" fill className="object-cover object-top" unoptimized />
                            </div>
                        </motion.div>
                    </div>

                    {/* Testimonials */}
                    <div className="lg:col-span-5 space-y-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex gap-6 items-start"
                            >
                                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-orange-100">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                                    </div>
                                    <p className="text-sm text-gray-600 font-medium italic mb-2">"{t.text}"</p>
                                    <div className="text-[10px] font-black uppercase text-gray-400">
                                        {t.name} • <span className="text-orange-600">{t.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Refund & Contact Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Refund Clarity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-orange-600 p-10 md:p-12 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl shadow-orange-600/20"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Undo2 className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-6 font-display">Zero-Risk Booking</h3>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-bold italic">Full Refund if cancelled 30 days before trip</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-bold italic">Instant WhatsApp Refund Updates</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-bold italic">No Questions Asked Rescheduling</span>
                                </li>
                            </ul>
                            <div className="text-[10px] font-black text-white/60 uppercase tracking-widest border-t border-white/20 pt-6">
                                *Conditions apply. See our Refund Policy for details.
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Visibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-900 p-10 md:p-12 rounded-[4rem] text-white flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-3xl font-black mb-2 font-display">Need Clarity?</h3>
                            <p className="text-gray-400 text-sm font-medium italic mb-10">Don't book unless you are 100% sure. Speak to our travel experience experts directly.</p>

                            <div className="space-y-8 mb-12">
                                <a href="tel:+918888474060" className="flex items-center gap-6 group max-w-fit">
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                        <PhoneCall className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Direct Line</span>
                                        <span className="text-2xl font-black group-hover:text-orange-600 transition-colors">+91 88884 74060</span>
                                    </div>
                                </a>
                                <a href="https://wa.me/918888474060" className="flex items-center gap-6 group max-w-fit">
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">WhatsApp Chat</span>
                                        <span className="text-2xl font-black group-hover:text-green-500 transition-colors">Chat with our Guide</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden relative bg-gray-800">
                                        <Image src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="Team" fill />
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Our Support Team is Online Now</span>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};
