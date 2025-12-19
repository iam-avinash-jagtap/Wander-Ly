"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Map, Heart, Compass, FileText, Info } from "lucide-react";

const sitemapData = [
    {
        title: "Main Pages",
        icon: <Compass className="w-6 h-6 text-blue-500" />,
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" }, // Assuming about exists or will imply generic
            { label: "Contact Us", href: "/contact" },
            { label: "Partnership", href: "/partnership" }
        ]
    },
    {
        title: "Trip Categories",
        icon: <Map className="w-6 h-6 text-green-500" />,
        links: [
            { label: "Goa Packages", href: "/packages/goa-beaches" },
            { label: "Manali Packages", href: "/packages/manali-adventure" },
            { label: "Kerala Packages", href: "/packages/kerala-backwaters" },
            { label: "Rajasthan Packages", href: "/packages" }, // Generic if specific page not created, or link to list
            { label: "Ladakh Adventure", href: "/packages/ladakh-bike" },
            { label: "Honeymoon Packages", href: "/offers" },
            { label: "Family Tours", href: "/packages/darjeeling" }
        ]
    },
    {
        title: "Information Pages",
        icon: <Info className="w-6 h-6 text-purple-500" />,
        links: [
            { label: "FAQs", href: "/faqs" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Sitemap", href: "/sitemap" }
        ]
    },
    {
        title: "Special Pages",
        icon: <Heart className="w-6 h-6 text-red-500" />,
        links: [
            { label: "Offers & Deals", href: "/offers" },
            { label: "Custom Trip Planner", href: "/book" },
            { label: "Group Tours", href: "/packages" }
        ]
    }
];

export default function SitemapPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-white border-b border-gray-100 pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 text-gray-600">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6">Sitemap</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Easily navigate to any part of our website.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sitemapData.map((section, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link href={link.href} className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                                            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                                            <span className="font-medium">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
