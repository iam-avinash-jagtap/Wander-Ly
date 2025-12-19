"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, Check, CreditCard, User, MapPin,
    ChevronRight, ChevronDown, ShieldCheck, Star, ArrowLeft,
    QrCode, Info, CheckCircle, XCircle, Users,
    Sparkles, Phone, Mail, Clock, Download
} from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { packages } from "@/data/packages";

function BookingContent() {
    const searchParams = useSearchParams();
    const packageId = searchParams.get("package");
    const selectedPackage = packageId ? packages[packageId] : null;

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        destination: selectedPackage?.title || "",
        date: "",
        travelers: 1,
        name: "",
        email: "",
        phone: ""
    });
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showPolicies, setShowPolicies] = useState(false);

    useEffect(() => {
        if (selectedPackage) {
            setFormData(prev => ({ ...prev, destination: selectedPackage.title }));
        }
    }, [selectedPackage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step === 3) {
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) return clearInterval(interval);
                const particleCount = 50 * (timeLeft / duration);
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);

            setShowSuccess(true);
        } else {
            setStep((s) => Math.min(s + 1, 3));
        }
    };
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const activePackage = Object.values(packages).find(p => p.title === formData.destination) || selectedPackage;
    const totalPrice = activePackage ? activePackage.price * formData.travelers : 0;

    return (
        <div className="pt-32 pb-24 container mx-auto px-6 relative z-10">
            {/* Step Indicator - Boutique Style - Full Width Above */}
            <div className="mb-12 max-w-7xl mx-auto">
                <div className="flex items-center justify-between relative max-w-4xl px-4 mx-auto">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-100 dark:bg-white/5 rounded-full" />
                    <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary rounded-full transition-all duration-700"
                        animate={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
                    />

                    {[1, 2, 3].map((s) => (
                        <div key={s} className="relative z-10 flex flex-col items-center">
                            <motion.div
                                animate={{
                                    scale: s === step ? 1.2 : 1,
                                    backgroundColor: s <= step ? "#E11D48" : "#F3F4F6"
                                }}
                                className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl border-4 border-white dark:border-primary",
                                    s <= step ? "text-white" : "text-gray-400 font-black"
                                )}
                            >
                                {s < step ? <Check className="w-6 h-6" strokeWidth={3} /> : <span className="text-sm">{s}</span>}
                            </motion.div>
                            <span className={cn(
                                "absolute -bottom-10 text-[10px] uppercase font-black tracking-[0.2em] transition-colors duration-500",
                                s <= step ? "text-primary dark:text-white" : "text-gray-400"
                            )}>
                                {s === 1 ? "Essential" : s === 2 ? "Who" : "Review"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto items-stretch">

                {/* Left Column: Form Section */}
                <div className="lg:w-2/3 flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-gray-900/50 backdrop-blur-3xl rounded-[3rem] border border-black/5 dark:border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col"
                    >
                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h2 className="text-3xl font-black font-display text-primary dark:text-white mb-2 leading-tight">Begin Your <span className="font-serif italic text-accent underline decoration-accent/20 underline-offset-8">Journey</span></h2>
                                            <p className="text-secondary text-sm font-medium italic opacity-60 uppercase tracking-widest">Step 01 / Destination Details</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-8">
                                            <div className="group relative">
                                                <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Select Experience</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-accent opacity-50" strokeWidth={2.5} />
                                                    <select
                                                        name="destination"
                                                        value={formData.destination}
                                                        onChange={handleChange}
                                                        className="w-full pl-16 pr-10 py-4 bg-gray-50/50 dark:bg-white/5 border border-transparent rounded-2xl focus:bg-white dark:focus:bg-primary focus:ring-4 focus:ring-accent/5 focus:border-accent/40 transition-all outline-none font-black text-primary dark:text-white appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled>Where are we going?</option>
                                                        {Object.values(packages).map((pkg) => (
                                                            <option key={pkg.title} value={pkg.title}>{pkg.title}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="relative">
                                                    <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Proposed Date</label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 opacity-50" strokeWidth={2.5} />
                                                        <input
                                                            type="date"
                                                            name="date"
                                                            value={formData.date}
                                                            onChange={handleChange}
                                                            className="w-full pl-16 pr-6 py-4 bg-gray-50/50 dark:bg-white/5 border border-transparent rounded-2xl focus:bg-white dark:focus:bg-primary focus:ring-4 focus:ring-accent/5 transition-all outline-none font-black text-primary dark:text-white"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Seekers</label>
                                                    <div className="relative">
                                                        <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 opacity-50" strokeWidth={2.5} />
                                                        <input
                                                            type="number"
                                                            name="travelers"
                                                            min="1"
                                                            value={formData.travelers}
                                                            onChange={handleChange}
                                                            className="w-full pl-16 pr-6 py-4 bg-gray-50/50 dark:bg-white/5 border border-transparent rounded-2xl focus:bg-white dark:focus:bg-primary focus:ring-4 focus:ring-accent/5 transition-all outline-none font-black text-primary dark:text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h2 className="text-3xl font-black font-display text-primary dark:text-white mb-2 leading-tight">Lead <span className="font-serif italic text-accent underline decoration-accent/20 underline-offset-8">Information</span></h2>
                                            <p className="text-secondary text-sm font-medium italic opacity-60 uppercase tracking-widest">Step 02 / Traveler Details</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="relative">
                                                <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Legal Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-accent opacity-50" strokeWidth={2.5} />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Full Name As per Passport"
                                                        className="w-full pl-16 pr-6 py-4 bg-gray-50/50 dark:bg-white/5 border border-transparent rounded-2xl focus:bg-white dark:focus:bg-primary transition-all outline-none font-black text-primary dark:text-white placeholder:text-gray-300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Direct Mail</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 opacity-50" strokeWidth={2.5} />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="you@luxury.com"
                                                            className="w-full pl-16 pr-6 py-4 bg-gray-50/50 dark:bg-white/5 border border-transparent rounded-2xl focus:bg-white dark:focus:bg-primary transition-all outline-none font-black text-primary dark:text-white placeholder:text-gray-300"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Direct Contact</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 opacity-50" strokeWidth={2.5} />
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="+91 ...."
                                                            className="w-full pl-16 pr-6 py-4 bg-gray-50/50 dark:bg-white/5 border border-transparent rounded-2xl focus:bg-white dark:focus:bg-primary transition-all outline-none font-black text-primary dark:text-white placeholder:text-gray-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h2 className="text-3xl font-black font-display text-primary dark:text-white mb-2 leading-tight">Review & <span className="font-serif italic text-accent underline decoration-accent/20 underline-offset-8">Confirm</span></h2>
                                            <p className="text-secondary text-sm font-medium italic opacity-60 uppercase tracking-widest">Step 03 / Final Verification</p>
                                        </div>

                                        <div className="bg-gray-50/80 dark:bg-white/5 rounded-[2.5rem] p-6 border border-black/5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-sm">
                                                            <Sparkles className="w-5 h-5 text-accent" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Adventure</p>
                                                            <p className="font-black text-primary dark:text-white">{formData.destination}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-sm">
                                                            <Calendar className="w-5 h-5 text-emerald-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Schedule</p>
                                                            <p className="font-black text-primary dark:text-white">{formData.date || "Not set"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-sm">
                                                            <User className="w-5 h-5 text-accent" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lead Traveler</p>
                                                            <p className="font-black text-primary dark:text-white">{formData.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary flex items-center justify-center shadow-sm">
                                                            <CreditCard className="w-5 h-5 text-blue-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol</p>
                                                            <p className="font-black text-primary dark:text-white capitalize">{paymentMethod} / Secured</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Protocol Selection */}
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Payment Protocol</label>
                                                <span className="text-[8px] font-black text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-full border border-accent/10">Encrypted</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    onClick={() => setPaymentMethod('card')}
                                                    className={cn(
                                                        "flex items-center gap-4 p-5 rounded-[2rem] border transition-all relative overflow-hidden group",
                                                        paymentMethod === 'card'
                                                            ? "bg-primary border-primary text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                                                            : "bg-gray-50/50 dark:bg-white/5 border-transparent text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                                                        paymentMethod === 'card' ? "bg-white/20" : "bg-primary/10"
                                                    )}>
                                                        <CreditCard className={cn("w-5 h-5", paymentMethod === 'card' ? "text-white" : "text-primary")} />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-[10px] font-black uppercase tracking-widest">Boutique Card</p>
                                                        <p className="text-[8px] opacity-60 font-medium">VISA / MASTER / AMEX</p>
                                                    </div>
                                                </button>

                                                <button
                                                    onClick={() => setPaymentMethod('upi')}
                                                    className={cn(
                                                        "flex items-center gap-4 p-5 rounded-[2rem] border transition-all relative overflow-hidden group",
                                                        paymentMethod === 'upi'
                                                            ? "bg-accent border-accent text-white shadow-[0_20px_40px_-10px_rgba(225,29,72,0.2)]"
                                                            : "bg-gray-50/50 dark:bg-white/5 border-transparent text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                                                        paymentMethod === 'upi' ? "bg-white/20" : "bg-accent/10"
                                                    )}>
                                                        <QrCode className={cn("w-5 h-5", paymentMethod === 'upi' ? "text-white" : "text-accent")} />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-[10px] font-black uppercase tracking-widest">Instant UPI</p>
                                                        <p className="text-[8px] opacity-60 font-medium">GPay / PhonePe / BHIM</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setShowPolicies(true)}
                                            className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-all flex items-center justify-center gap-3"
                                        >
                                            <Info className="w-4 h-4" /> View Cancellation Policies
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-auto pt-6 flex items-center justify-between">
                                {step > 1 ? (
                                    <button
                                        onClick={prevStep}
                                        className="flex items-center gap-3 text-gray-400 font-black text-[10px] uppercase tracking-widest hover:text-primary transition-all"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Previous
                                    </button>
                                ) : <div />}

                                <button
                                    onClick={nextStep}
                                    className="px-12 py-6 bg-primary dark:bg-accent text-white rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl hover:bg-accent transition-all flex items-center gap-4 group"
                                >
                                    {step === 3 ? "Confirm Invitation" : "Continue"}
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Order Summary (Sidebar) */}
                <div className="lg:w-1/3 flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-primary dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 flex-1 flex flex-col"
                    >
                        <div className="relative h-40 w-full">
                            <Image
                                src={activePackage?.image || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"}
                                fill
                                className="object-cover opacity-60 brightness-[0.4]"
                                alt="Package Preview"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-10">
                                <div className="bg-accent text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-block w-fit mb-4">Selected Pursuit</div>
                                <h3 className="text-white font-black text-3xl font-display leading-[0.9]">{formData.destination || "Destination"}</h3>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between text-white/40 text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-6">
                                    <span>Investment</span>
                                    <span className="text-white text-xl tracking-tight">₹{activePackage?.price?.toLocaleString() || 0} / HD</span>
                                </div>
                                <div className="flex items-center justify-between text-white/40 text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-6">
                                    <span>Seekers</span>
                                    <span className="text-white">{formData.travelers} Persons</span>
                                </div>

                                <div className="pt-8">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Total Value</span>
                                        <span className="text-white text-5xl font-black tracking-tighter">₹{totalPrice.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-12">
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                                    <Clock className="w-5 h-5 text-accent mx-auto mb-3" />
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Experience</p>
                                    <p className="text-[9px] font-bold text-white mt-1">{activePackage?.duration || "—"}</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                                    <Star className="w-5 h-5 text-gold mx-auto mb-3 fill-gold" />
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Level</p>
                                    <p className="text-[9px] font-bold text-white mt-1">Premium</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Support Card - Boutique Style */}
            <div className="group relative bg-[#FCE7F3] dark:bg-accent/10 rounded-[2.5rem] p-10 text-center transition-all duration-700 hover:shadow-2xl">
                <div className="w-16 h-16 bg-white dark:bg-accent rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl group-hover:rotate-12 transition-transform">
                    <Phone className="w-6 h-6 text-accent dark:text-white" />
                </div>
                <h3 className="text-xl font-black text-primary dark:text-white mb-2 font-display">Concierge Support</h3>
                <p className="text-secondary/60 text-[10px] font-black uppercase tracking-widest mb-8">Personal Assistance Available 24/7</p>
                <a href="tel:+918888474060" className="block w-full py-4 bg-primary text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-accent transition-colors">
                    Contact Experts
                </a>
            </div>

            {/* Success Modal - Premium Edit */}
            <AnimatePresence>
                {
                    showSuccess && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/95 backdrop-blur-3xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="bg-white dark:bg-gray-900 rounded-[4rem] p-16 max-w-4xl w-full text-center relative overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.4)]"
                            >
                                <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-accent via-emerald-500 to-blue-500"></div>

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    className="w-40 h-40 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 overflow-hidden relative"
                                >
                                    <Image
                                        src={activePackage?.image || "/images/success.png"}
                                        fill
                                        className="object-cover opacity-60"
                                        alt="success"
                                    />
                                    <Sparkles className="w-12 h-12 text-white relative z-10" />
                                </motion.div>

                                <h2 className="text-5xl md:text-7xl font-black font-display text-primary dark:text-white mb-6 leading-tight tracking-tighter">
                                    Pursuit <span className="font-serif italic text-accent">Confirmed.</span>
                                </h2>
                                <p className="text-secondary/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto italic">
                                    "{formData.name}, your journey to <span className="text-primary font-black dark:text-white">{formData.destination}</span> has been successfully reserved. We are curating the final details for your soul."
                                </p>

                                <div className="flex flex-col md:flex-row justify-center gap-4">
                                    <button onClick={() => window.location.href = '/'} className="px-12 py-5 bg-primary text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl shadow-2xl hover:bg-accent transition-all">
                                        Return to Home
                                    </button>
                                    <button className="px-12 py-5 bg-white border-2 border-primary text-primary font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl hover:bg-gray-50 transition-all">
                                        Print Credentials
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence>

            {/* Policies Modal - Boutique Style */}
            <AnimatePresence>
                {
                    showPolicies && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white dark:bg-gray-900 rounded-[3.5rem] max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
                            >
                                <div className="p-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50/50 dark:bg-white/5">
                                    <div>
                                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-1">Standard Operating Procedures</p>
                                        <h2 className="text-2xl md:text-3xl font-black font-display text-primary dark:text-white">Pursuit Guidelines</h2>
                                    </div>
                                    <button onClick={() => setShowPolicies(false)} className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-primary border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <XCircle className="w-6 h-6 text-gray-400" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                                        <div className="space-y-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                                </div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-primary dark:text-white">Protocol: Green Zone</h3>
                                            </div>
                                            <div className="space-y-8">
                                                {[
                                                    { t: "Flexible Withdrawal", d: "Revoke your pursuit 48hrs prior for a 100% credit refund." },
                                                    { t: "Curated Safety", d: "Elite medical kits and commercial grade vehicles standard." },
                                                    { t: "Verified Seekers", d: "Each pursuit is led by a locally verified expert guide." }
                                                ].map((item, i) => (
                                                    <div key={i} className="group border-l-2 border-emerald-500/20 pl-6 py-2 hover:border-emerald-500 transition-colors">
                                                        <h4 className="font-black text-xs text-primary dark:text-white mb-1 uppercase tracking-wider">{item.t}</h4>
                                                        <p className="text-secondary/60 text-[11px] font-medium leading-relaxed italic">{item.d}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center border border-rose-100">
                                                    <Info className="w-5 h-5 text-rose-500" />
                                                </div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-primary dark:text-white">Protocol: Restricted</h3>
                                            </div>
                                            <div className="space-y-8">
                                                {[
                                                    { t: "Critical Withdrawal", d: "Requests within 48hrs are non-refundable & strictly guarded." },
                                                    { t: "Physical Responsibility", d: "Travelers must verify health criteria for high-pursuit zones." },
                                                    { t: "Divine Interference", d: "Cancellations due to natural forces are non-credited." }
                                                ].map((item, i) => (
                                                    <div key={i} className="group border-l-2 border-rose-500/20 pl-6 py-2 hover:border-rose-500 transition-colors">
                                                        <h4 className="font-black text-xs text-primary dark:text-white mb-1 uppercase tracking-wider">{item.t}</h4>
                                                        <p className="text-secondary/60 text-[11px] font-medium leading-relaxed italic">{item.d}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 bg-gray-50/50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5 text-center">
                                    <button onClick={() => setShowPolicies(false)} className="px-16 py-5 bg-primary text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-accent transition-all">
                                        I Acknowledge These Terms
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-sand dark:bg-primary relative overflow-hidden text-gray-900 dark:text-gray-100">
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none" />

            <Navbar />
            <Suspense fallback={
                <div className="min-h-screen flex flex-col items-center justify-center gap-6">
                    <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Initializing Pursuit System</p>
                </div>
            }>
                <BookingContent />
            </Suspense>
            <Footer />
        </main>
    );
}
