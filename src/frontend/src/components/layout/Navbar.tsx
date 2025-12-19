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
        const storedUser = localStorage.getItem('wanderlyUser');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-white/95 dark:bg-primary/95 backdrop-blur-2xl py-5 border-b border-gray-100 dark:border-white/5 shadow-sm"
                    : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo - Modern Global Style */}
                <Link href="/" className="group flex items-center">
                    <div className="relative flex items-center">
                        <span className={cn(
                            "text-xl font-black font-display tracking-[0.25em] transition-colors duration-500 uppercase",
                            isScrolled ? "text-primary dark:text-white" : "text-white"
                        )}>
                            Wanderly
                        </span>

                        {/* Subtle dot accent */}
                        <div className={cn(
                            "ml-1 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500",
                            isScrolled ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}></div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent",
                                isScrolled ? "text-primary/70 dark:text-white/70" : "text-white/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className={cn(
                            "p-2.5 rounded-2xl transition-all duration-300 border",
                            isScrolled
                                ? "border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-primary dark:text-white"
                                : "border-white/10 hover:bg-white/10 text-white"
                        )}
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    {user ? (
                        <div className={cn(
                            "flex items-center gap-4 pl-4 border-l",
                            isScrolled ? "border-gray-100 dark:border-white/10" : "border-white/10"
                        )}>
                            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-black text-xs shadow-xl">
                                {user.name.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className={cn("text-[10px] font-black uppercase tracking-widest", isScrolled ? "text-primary dark:text-white" : "text-white")}>
                                    Welcome, {user.name.split(' ')[0]}
                                </span>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('wanderlyUser');
                                        window.location.reload();
                                    }}
                                    className="text-[9px] font-bold text-accent hover:underline text-left"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className={cn(
                                "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors",
                                isScrolled ? "text-primary/80 dark:text-white/80 hover:text-accent" : "text-white hover:text-accent"
                            )}
                        >
                            <User className="w-4 h-4" />
                            <span>Login</span>
                        </Link>
                    )}

                    <Link
                        href="/book"
                        className={cn(
                            "px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 shadow-xl active:scale-95",
                            isScrolled
                                ? "bg-primary text-white hover:bg-accent hover:shadow-accent/20"
                                : "bg-white text-primary hover:bg-accent hover:text-white hover:shadow-accent/40"
                        )}
                    >
                        Plan My Trip
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "lg:hidden p-2.5 rounded-2xl transition-colors",
                        isScrolled ? "text-primary dark:text-white" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Premium Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white dark:bg-primary rounded-[3rem] shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-10 space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-black font-display text-primary dark:text-white hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-gray-100 dark:bg-white/5" />
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.2em]"
                                >
                                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    Switch Mode
                                </button>
                                <Link
                                    href="/login"
                                    className="px-8 py-4 bg-accent text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
