"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
    title: string;
    location: string;
    image: string;
    price: string;
    rating: number;
    duration: string;
    category?: string;
    href: string;
    className?: string;
}

export function DestinationCard({
    title,
    location,
    image,
    price,
    rating,
    duration,
    category,
    href,
    className
}: DestinationCardProps) {
    return (
        <div className={cn("group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1", className)}>
            <Link href={href}>
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center shadow-sm">
                        <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                        <span className="text-xs font-bold text-gray-800">{rating}</span>
                    </div>
                    {category && (
                        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide">
                            {category}
                        </div>
                    )}
                </div>

                <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-primary transition-colors">
                                {title}
                            </h3>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center text-gray-500 text-xs mb-4 space-x-4">
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{duration}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Starting from</span>
                            <span className="text-lg font-bold text-primary">{price}</span>
                        </div>
                        <div role="button" className="text-sm font-semibold text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer">
                            View Details
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
