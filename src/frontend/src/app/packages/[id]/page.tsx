"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, Star, CheckCircle, Calendar, Shield } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PackageDetailPage() {
    // In a real app, fetch data based on ID. For now static.
    const { id } = useParams();

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src="/images/kerala.png"
                    alt="Destination Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="container mx-auto">
                        <span className="bg-primary px-3 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">Best Seller</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">Majestic Kerala Backwaters</h1>
                        <div className="flex items-center text-gray-200 space-x-6 text-sm md:text-base font-medium">
                            <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> Alleppey, Kerala</div>
                            <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /> 4 Days / 3 Nights</div>
                            <div className="flex items-center"><Star className="w-5 h-5 mr-2 text-accent fill-accent" /> 4.9 (120 Reviews)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Content Left */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold font-display mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Experience the tranquility of God's Own Country with our premium Kerala Backwaters package.
                                Cruise through the serene canals of Alleppey in a luxury traditional houseboat, enjoy authentic Kerala cuisine,
                                and witness mesmerizing sunsets. This trip assumes a relaxed pace, perfect for couples and families looking to unwind.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display mb-6">Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-primary/20 ml-3 pl-8 relative">
                                {[1, 2, 3, 4].map((day) => (
                                    <div key={day} className="relative">
                                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md"></span>
                                        <h3 className="text-lg font-bold mb-2 text-gray-900">Day {day}: Exploration & Leisure</h3>
                                        <p className="text-gray-500">
                                            Detailed activities for day {day}. Includes breakfast, sightseeing, and overnight stay at a premium hotel/houseboat.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display mb-6">What's Included</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Luxury Houseboat Stay", "All Meals (Breakfast, Lunch, Dinner)", "Airport Transfers", "English Speaking Guide", "Sunset Cruise", "Cultural Show"].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <span className="text-sm text-gray-400 block mb-1">Starting from</span>
                                    <span className="text-3xl font-bold text-gray-900">₹15,499</span>
                                    <span className="text-sm text-gray-400"> / person</span>
                                </div>
                                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold uppercase">Available</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Travel Date</span>
                                        <span className="font-semibold text-gray-800">Select Date</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4 border border-gray-100">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div className="flex-1">
                                        <span className="block text-xs font-semibold text-gray-400 uppercase">Free Cancellation</span>
                                        <span className="font-semibold text-gray-800">Up to 24h before</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/book" className="block w-full text-center py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1 mb-4">
                                Book Now
                            </Link>
                            <button className="block w-full text-center py-4 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                Download Brochure
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-400">Need help? Call us at <span className="text-primary font-bold">+91 98765 43210</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
