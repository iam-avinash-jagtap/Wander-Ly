"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MoveRight, Star, ShieldCheck, TrendingUp, Handshake, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnershipPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                    alt="Partnership Handshake"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gray-900/70" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500 text-blue-300 font-bold rounded-full mb-6 text-sm tracking-widest uppercase backdrop-blur-md">
                            Official Collaboration
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-display">
                            Partnering with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Excellence</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
                            TripMitra is proud to announce our exclusive strategic partnership with <strong>BMW India</strong>.
                            Together, we are redefining luxury travel experiences.
                        </p>

                        <button onClick={() => document.getElementById('contract')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl flex items-center mx-auto gap-3">
                            View Partner Contract <MoveRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Partnership Details */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-2xl"></div>
                            <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
                                    alt="BMW Logo"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-contain p-12"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 font-display">Drive the Extraordinary.</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                This partnership brings the sheer driving pleasure of BMW to your TripMitra journeys.
                                Select premium packages now include optional <strong>BMW X-Series transfers</strong>
                                for airport pickups and inter-city travel, ensuring your adventure begins the moment
                                you step out of your door.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-1">Premium Safety</h3>
                                    <p className="text-sm text-gray-500">5-Star rated safety standards for all luxury transfers.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <Star className="w-8 h-8 text-yellow-500 mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-1">Elite Comfort</h3>
                                    <p className="text-sm text-gray-500">Experience world-class comfort with BMW luxury interiors.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Row */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-black text-gray-900 mb-2">50+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide font-bold">BMW Fleet Size</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-gray-900 mb-2">12</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide font-bold">Cities Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide font-bold">Concierge Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-gray-900 mb-2">100%</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide font-bold">Luxury Guarantee</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contract Section */}
            <section id="contract" className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center mb-16">
                        <Handshake className="w-16 h-16 text-blue-400 mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4">Official Partnership Contract</h2>
                        <p className="text-gray-400 text-center max-w-2xl">This agreement solidifies the strategic alliance between TripMitra and BMW India, committed to delivering unparalleled travel experiences.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden relative">
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 bg-[#f8f9fa] opacity-50 pointer-events-none mix-blend-multiply"></div>

                        {/* Contract Header */}
                        <div className="p-12 border-b-2 border-gray-100 flex justify-between items-start relative z-10">
                            <div>
                                <h3 className="text-2xl font-serif font-black text-gray-900 uppercase tracking-widest mb-1">Memorandum of Understanding</h3>
                                <p className="text-gray-500 text-sm font-mono">REF: TM-BMW-2025-XA</p>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Effective Date</div>
                                <div className="font-mono font-bold">January 01, 2025</div>
                            </div>
                        </div>

                        {/* Contract Body */}
                        <div className="p-12 space-y-8 font-serif text-lg leading-relaxed text-gray-800 relative z-10">
                            <p>
                                <span className="font-bold">THIS AGREEMENT</span> is made and entered into by and between <span className="font-bold border-b border-gray-300">TripMitra Travels Pvt Ltd.</span> ("Company") and <span className="font-bold border-b border-gray-300">BMW India Private Limited</span> ("Partner").
                            </p>
                            <p>
                                <span className="font-bold">WHEREAS</span>, the Company specializes in premium travel curation, and the Partner is a world leader in luxury automobiles;
                            </p>
                            <p>
                                <span className="font-bold">NOW, THEREFORE</span>, the parties agree to a strategic partnership to integrate BMW luxury transfer services into TripMitra's premium holiday packages across 12 major Indian cities.
                            </p>
                        </div>

                        {/* Signatures */}
                        <div className="bg-gray-50 p-12 grid grid-cols-2 gap-12 border-t-2 border-gray-100 relative z-10">
                            <div>
                                <div className="h-24 flex items-end mb-4">
                                    {/* Brand Logo as Signature */}
                                    <div className="flex items-baseline transform -rotate-2 origin-bottom-left grayscale opacity-80">
                                        <span className="text-3xl font-black font-display text-gray-900 tracking-tight">
                                            Trip<span className="text-gray-700">Mitra</span>
                                        </span>
                                        <span className="text-3xl font-black font-display text-gray-500">Aj</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-400 pt-2">
                                    <p className="font-bold text-gray-900 text-sm uppercase">Avi Jagtap</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">CEO, TripMitra</p>
                                </div>
                            </div>
                            <div>
                                <div className="h-24 flex items-end mb-4 justify-end">
                                    <div className="text-4xl font-script text-blue-900 opacity-60">Vikram Pawah</div>
                                </div>
                                <div className="border-t border-gray-400 pt-2 text-right">
                                    <p className="font-bold text-gray-900 text-sm uppercase">Vikram Pawah</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">President, BMW Group India</p>
                                </div>
                            </div>
                        </div>

                        {/* Stamp */}
                        <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 opacity-20 pointer-events-none">
                            <div className="w-40 h-40 border-4 border-red-600 rounded-full flex items-center justify-center rotate-[-15deg]">
                                <div className="text-center">
                                    <div className="text-red-600 font-black uppercase text-xs tracking-widest">Official Seal</div>
                                    <div className="text-red-600 font-black text-xl">APPROVED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
