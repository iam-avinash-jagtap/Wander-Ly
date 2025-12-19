"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Clock, MapPin, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "Ladakh Bike Expedition Diaries",
        category: "Adventure",
        image: "https://peopleoftheplanet.com/wp-content/uploads/2018/10/the-highest-road-in-the-world-snow.png",
        excerpt: "Riding through the highest motorable road in the world isn't just a trip; it's a test of endurance and spirit.",
        date: "Jan 12, 2025",
        readTime: "8 min read"
    },
    {
        title: "Goa Beyond Nightlife",
        category: "Culture",
        image: "https://images.squarespace-cdn.com/content/v1/61dbf74b4e8da975a808dcff/b45f2af3-0212-42ae-96f8-82fd6215be20/Archer-in-water-against-mountains-Nubra-Valley-Ladakh-India.JPG?utm_source=chatgpt.com", // Using alternative visually striking image for variety
        excerpt: "Discover specific hidden beaches, spice plantations, and the quiet Portuguese heritage that most tourists miss.",
        date: "Jan 05, 2025",
        readTime: "5 min read"
    },
    {
        title: "Kerala Backwaters: Slow Travel Guide",
        category: "Relaxation",
        image: "https://img1.wsimg.com/isteam/ip/dd7bf207-c00c-4b95-a0a3-ff510508d271/houseboat.jpeg",
        excerpt: "Why spending a night on a houseboat in Alleppey might be the most peaceful experience of your life.",
        date: "Dec 28, 2024",
        readTime: "6 min read"
    },
    {
        title: "Himalayan Treks & Weather Realities",
        category: "Trekking",
        image: "https://voyagersadventure.com/wp-content/uploads/2025/01/Manali-summer-trek-2-scaled-e1741326438267.jpg",
        excerpt: "Preparing for the unpredictable weather of the Himalayas. What to pack and what to leave behind.",
        date: "Dec 15, 2024",
        readTime: "10 min read"
    },
    {
        title: "Rajasthan: A Riot of Colors",
        category: "Heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Thar_Desert_Sunset_Rajasthan_India.jpg",
        excerpt: "Exploring the forts, dunes, and vibrant markets of the Land of Kings.",
        date: "Nov 30, 2024",
        readTime: "7 min read"
    },
    {
        title: "Pangong Lake at Sunrise",
        category: "Photography",
        image: "https://sceneloc8.com/wp-content/uploads/2024/12/Pangong-Lake-at-Sunrise.jpg",
        excerpt: "The changing shades of blue: A photographer's guide to capturing Pangong Tso.",
        date: "Nov 20, 2024",
        readTime: "4 min read"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1506880648420-aafaa650d147?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBzdW5yaXNlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000"
                    alt="Blog Cover"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                <div className="relative z-10 container mx-auto px-4 text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-6">
                            Travel Diary ✍️
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-display">
                            Stories, Sunrises & <br /> <span className="text-yellow-400">Best Clicks.</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Welcome to our Travel Blog, where journeys turn into stories and moments turn into memories. This is not a generic blog. This is our diary.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-16 container mx-auto px-4">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Why Our Blog Is Different</h2>
                        <ul className="space-y-4">
                            {[
                                "Written by travellers, not writers",
                                "Experience-first content",
                                "Honest pros & cons",
                                "Practical insights (weather, health)",
                                "Real emotions from the road"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700">
                                    <span className="p-1 bg-green-100 text-green-600 rounded-full"><ArrowRight className="w-4 h-4" /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2 relative h-64 w-full rounded-2xl overflow-hidden shadow-lg group">
                        <Image
                            src="https://peopleoftheplanet.com/wp-content/uploads/2019/03/guthries-camp-fire-photo-article-cover.png"
                            alt="Campfire Story"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <p className="text-white text-xl font-bold font-serif italic text-center px-4">"If a story here inspires your next trip — we’ve done our job right."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Latest Stories</h2>
                        <div className="flex gap-2">
                            <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold cursor-pointer">All</span>
                            <span className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-bold border border-gray-200 cursor-pointer hover:bg-gray-100">Adventure</span>
                            <span className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-bold border border-gray-200 cursor-pointer hover:bg-gray-100 hidden md:block">Heritage</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative">
                                                <Image src="https://media.flytographer.com/uploads/2023/06/How-it-works-Flytographer-photographer-001.jpg" alt="Author" fill className="object-cover" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">Team Wanderly</span>
                                        </div>
                                        <span className="p-2 bg-gray-50 rounded-full text-gray-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
                    <h2 className="text-4xl font-bold font-display mb-6">Travel is not a product. <br /> <span className="text-yellow-400">It’s a story.</span></h2>
                    <p className="text-gray-400 mb-8 text-lg">We’re glad you’re reading ours. Join our newsletter to get these stories delivered to your inbox.</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm" />
                        <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
