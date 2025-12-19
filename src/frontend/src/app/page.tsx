"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { DestinationCard } from "@/components/home/DestinationCard";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Shield } from "lucide-react";
import Image from "next/image";

import { trendingDestinations } from "@/data/destinations";

export default function Home() {


  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Spacing adjusted after removing search box */}
      <div className="py-20 bg-white/30 dark:bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">

          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-secondary dark:text-green-400 font-bold uppercase tracking-wider text-sm bg-white/50 px-3 py-1 rounded-full">Best Selling</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mt-4 drop-shadow-sm">
                Trending Destinations
              </h2>
            </div>
            <a href="/destinations" className="hidden md:flex items-center px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/50 hover:bg-white transition-all text-primary font-bold shadow-sm hover:shadow-md">
              View All <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingDestinations.map((dest) => (
              <DestinationCard key={dest.id} {...dest} className="glass-card border border-white/40" />
            ))}
          </div>

          {/* Mobile View All */}
          <div className="md:hidden mt-8 text-center">
            <a href="/destinations" className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-primary font-bold shadow-lg hover:bg-white transition-all">
              View All <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-white/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">Why Travel With Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">We ensure your journey is seamless, safe, and memorable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-white/20 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100/80 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gray-900 dark:text-white">Premium Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">Top-rated hotels, handpicked itineraries, and luxury transport for a comfortable journey.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-white/20 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-100/80 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gray-900 dark:text-white">100% Safe & Secure</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">Your safety is our priority. We offer 24/7 support and secure payment options.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-white/20 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-100/80 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-gray-900 dark:text-white">Best Price Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">We offer the most competitive prices for luxury packages with no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
