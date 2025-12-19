"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Map, Heart, Compass, Users } from "lucide-react";

const teamImages = [
    "https://s3.amazonaws.com/gattravelblog/wp-content/uploads/2019/03/25095602/india-taj-mahal.jpg",
    "https://businessfirst.travel/wp-content/uploads/2024/06/group-travel-for-corporate-teams-corporate-travel-management-brisbane.jpg",
    "https://cdn.motor1.com/images/mgl/jpwyg/s1/royal-enfield-s-moto-himalaya.jpg",
    "https://media.flytographer.com/uploads/2023/06/How-it-works-Flytographer-photographer-001.jpg",
    "https://etimg.etb2bimg.com/photo/115526809.cms"
];

const galleryImages = [
    "https://i.ytimg.com/vi/aYVz0XaKCcI/hq720.jpg?rs=AOn4CLAUMT87tPyxNaXbWE5hn4c-w5_8UQ&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD",
    "https://indiannewsandtimes.com/wp-content/uploads/2024/11/1732200009160.jpg",
    "https://i.pinimg.com/736x/89/69/76/8969768b6e036018d68150314c64d144.jpg",
    "https://www.gorspa.org/wp-content/uploads/iStock-coronavirus3.jpg",
    "https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743792125-MO6VDQKEOWXNBKQTOXE0/image-asset.jpeg"
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                    alt="Travel Team Adventure"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-display leading-tight">
                            Journeys Built With <br /> <span className="text-yellow-400">Passion, Not Just Packages.</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                            We are not just a travel company — we are travellers, planners, riders, photographers, and storytellers.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div>
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Real People. Real Journeys.</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Every itinerary on our website is created by people who have actually been there, felt the cold winds, missed sunsets, fixed bikes on mountain roads, waited for perfect sunrises, and celebrated trips like milestones.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                        {[
                            { icon: Compass, label: "Adventure Expeditions" },
                            { icon: Heart, label: "Honeymoon Escapes" },
                            { icon: Users, label: "Family Holidays" },
                            { icon: Map, label: "Premium Tours" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-teal-600">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <span className="font-bold text-gray-900">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Philosophy Section - Image Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-gray-900 font-display">
                                “If our team hasn’t lived it, <br /> <span className="text-teal-600">we don’t sell it.”</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                All photos you see across our website are best clicks from our own team, captured during real trips from actual destinations we operate. No stock promises. Only real journeys.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                                        <Camera className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-800">Ground-level trip research</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <Heart className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-800">Safety-first approach</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 flex-shrink-0">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-800">Human support, not scripts</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform translate-y-4 hover:-translate-y-2 transition-transform duration-500">
                                    <Image src={teamImages[0]} alt="Taj Mahal" fill className="object-cover" />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-500">
                                    <Image src={teamImages[2]} alt="Moto Himalaya" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-500">
                                    <Image src={teamImages[3]} alt="Photographer" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform -translate-y-4 hover:-translate-y-6 transition-transform duration-500">
                                    <Image src={teamImages[4]} alt="Team" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Strip */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Growing With Every Journey</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Every trip helps us grow — as a team and as humans. Your memories become part of our story.</p>
                </div>

                <div className="flex gap-4 min-w-full overflow-x-auto pb-8 snap-x px-4 no-scrollbar">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="relative min-w-[300px] h-[400px] rounded-3xl overflow-hidden flex-shrink-0 snap-center shadow-md group">
                            <Image
                                src={img}
                                alt={`Memory ${idx}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Promise Section */}
            <section className="py-24 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold font-display mb-8">Our Promise</h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Whether it’s a couple starting their married life, a family making memories,
                        a solo traveler chasing mountains, or a group of engineers escaping production alerts...
                        <br /><br />
                        <span className="text-white font-bold text-2xl">We promise clarity, care, and unforgettable experiences.</span>
                    </p>

                    <a href="/contact" className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-colors shadow-lg shadow-blue-900/50">
                        Start Your Journey
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
