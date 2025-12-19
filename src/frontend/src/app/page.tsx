"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { DestinationCard } from "@/components/home/DestinationCard";
import { FloatingOffer } from "@/components/home/FloatingOffer";
import { TravelCategories } from "@/components/home/TravelCategories";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Shield } from "lucide-react";
import Image from "next/image";

import { trendingDestinations } from "@/data/destinations";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {


  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FloatingOffer />
      {/* Spacing adjusted after removing search box */}
      <div className="py-24 bg-white/30 dark:bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">

          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Best Selling</span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black font-display text-primary dark:text-white mt-6 leading-tight"
              >
                Trending Destinations
              </motion.h2>
            </div>
            <a href="/destinations" className="hidden md:flex items-center px-8 py-3 rounded-full border border-primary text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all shadow-sm">
              View All <ArrowRight className="w-4 h-4 ml-3" />
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {trendingDestinations.map((dest) => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>

          {/* Mobile View All */}
          <div className="md:hidden mt-8 text-center">
            <a href="/destinations" className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-white font-black uppercase tracking-widest text-[10px]">
              View All <ArrowRight className="w-4 h-4 ml-3" />
            </a>
          </div>

        </div>
      </div>

      <TravelCategories />

      <TrustSection />

      <Footer />
    </main>
  );
}
