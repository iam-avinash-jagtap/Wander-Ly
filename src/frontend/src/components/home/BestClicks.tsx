"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const bestClicks = [
    { id: 1, image: "/images/shimla.png", location: "Mall Road, Manali", desc: "Winter evenings" },
    { id: 2, image: "/images/himalayas.png", location: "Pangong Tso, Ladakh", desc: "Crystal clear waters" },
    { id: 3, image: "/images/kerala.png", location: "Alleppey, Kerala", desc: "Serene backwaters" },
    { id: 4, image: "/images/rajasthan.png", location: "Udaipur, Rajasthan", desc: "City of Lakes" },
    { id: 5, image: "/images/goa.png", location: "Palolem Beach, Goa", desc: "Sunset vibes" },
    { id: 6, image: "/images/himalayas.png", location: "Solang Valley", desc: "Adventure awaits" },
    { id: 7, image: "/images/kerala.png", location: "Munnar Tea Gardens", desc: "Lush greenery" },
    { id: 8, image: "/images/shimla.png", location: "Rohtang Pass", desc: "Snow paradise" },
    { id: 9, image: "/images/rajasthan.png", location: "Jaisalmer Fort", desc: "Golden city" },
    { id: 10, image: "/images/hero-taj.png", location: "Taj Mahal, Agra", desc: "Eternal love" },
];

export function BestClicks() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
                        Best Clicks
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        A glimpse into the mesmerizing beauty of India through our lens.
                    </p>
                </div>

                {/* Masonry-style Grid (simulated with columns) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {bestClicks.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-auto w-full">
                                <Image
                                    src={item.image}
                                    alt={item.location}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex items-center text-white space-x-2 mb-1">
                                        <MapPin className="w-4 h-4 text-accent" />
                                        <span className="font-bold">{item.location}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
