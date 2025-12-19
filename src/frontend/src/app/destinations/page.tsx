"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DestinationCard } from "@/components/home/DestinationCard";

const allDestinations = [
    {
        id: 1,
        title: "Ladakh Bike Expedition",
        location: "Leh, Ladakh",
        image: "https://www.go2ladakh.in/app/webroot/js/ckfinder/userfiles/images/Landscape%20in%20Ladakh.jpg?utm_source=chatgpt.com",
        price: "₹49,999",
        rating: 4.9,
        duration: "9 Days",
        category: "Adventure",
        href: "/packages/ladakh",
    },
    {
        id: 2,
        title: "Darjeeling Family Holiday",
        location: "West Bengal",
        image: "https://darjeelingyatra.com/images/local-sightseeing/tiger-hill-500-400.webp?utm_source=chatgpt.com",
        price: "₹29,999",
        rating: 4.8,
        duration: "5 Days",
        category: "Family",
        href: "/packages/darjeeling",
    },
    {
        id: 3,
        title: "Goa Beach Vibes",
        location: "North Goa",
        image: "/images/goa.png",
        price: "₹10,999",
        rating: 4.6,
        duration: "4 Days",
        category: "Beaches",
        href: "/packages/goa",
    },
    {
        id: 4,
        title: "Manali Adventure",
        location: "Manali, Himachal Pradesh",
        image: "/images/himalayas.png",
        price: "₹24,999",
        rating: 4.9,
        duration: "5 Days",
        category: "Adventure",
        href: "/packages/manali-adventure",
    },
    {
        id: 5,
        title: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        image: "/images/kerala.png",
        price: "₹15,499",
        rating: 4.8,
        duration: "4 Days",
        category: "Relaxation",
        href: "/packages/kerala-backwaters",
    },
    {
        id: 6,
        title: "Royal Rajasthan",
        location: "Jaipur, Rajasthan",
        image: "/images/rajasthan.png",
        price: "₹12,999",
        rating: 4.7,
        duration: "3 Days",
        category: "Heritage",
        href: "/packages/rajasthan",
    },
];

export default function DestinationsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black font-display text-gray-900 mb-6 tracking-tighter">The Art of Discovery</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium italic">Choose from our curated selection of boutique destinations and global experiences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allDestinations.map((dest) => (
                        <DestinationCard key={dest.id} {...dest} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
