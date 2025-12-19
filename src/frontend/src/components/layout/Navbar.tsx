"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User, Search, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { navLinks } from "@/data/navigation";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        setMounted(true);
        // Check for logged in user
        const storedUser = localStorage.getItem('tripMitraUser');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent hydration mismatch for theme
    if (!mounted) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-4 text-gray-900 dark:text-white"
                    : "bg-transparent py-6 text-white"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-1">
                    <div className={cn("relative flex items-baseline transition-all duration-300", !isScrolled && "drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]")}>
                        <span className={cn("text-2xl font-black font-display tracking-tight transition-colors", isScrolled ? "text-gray-900 dark:text-white" : "text-white")}>
                            Trip<span className={cn("transition-colors duration-300", isScrolled ? "text-blue-600" : "text-blue-400")}>Mitra</span>
                        </span>
                        <span className="text-2xl font-black font-display text-yellow-500">Aj</span>
                        {/* Underline decoration */}
                        <div className={cn("absolute -bottom-1 left-0 w-1/3 h-1 rounded-full group-hover:w-full transition-all duration-300", isScrolled ? "bg-blue-600" : "bg-white")}></div>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button className="hover:text-accent transition-colors">
                        <Search className="w-5 h-5" />
                    </button>

                    {user ? (
                        <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                                {user.name.charAt(0)}
                            </div>
                            <span className="font-semibold text-sm hidden lg:block">Hi, {user.name.split(' ')[0]}</span>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('tripMitraUser');
                                    setUser(null);
                                    window.location.reload();
                                }}
                                className="text-xs text-red-400 hover:text-red-300 ml-2 font-bold"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className="flex items-center space-x-2 font-medium hover:text-accent transition-colors">
                            <User className="w-5 h-5" />
                            <span>Login</span>
                        </Link>
                    )}

                    <Link
                        href="/book"
                        className={cn(
                            "px-5 py-2 rounded-full font-semibold transition-all hover:shadow-lg",
                            isScrolled
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-white text-primary hover:bg-gray-100"
                        )}
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-gray-200 dark:border-gray-800" />
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="flex items-center space-x-2 font-medium"
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                <span>Toggle Theme</span>
                            </button>
                            <Link href="/login" className="flex items-center space-x-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                                <User className="w-5 h-5" />
                                <span>Login / Sign Up</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
