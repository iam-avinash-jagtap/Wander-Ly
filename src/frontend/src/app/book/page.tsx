"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Check, CreditCard, User, MapPin, ChevronRight, ShieldCheck, Star, ArrowLeft, QrCode, Info, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { packages } from "@/data/packages";

// Wrapper for search params to avoid hydration issues
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
    const [isGeneratingTicket, setIsGeneratingTicket] = useState(false);
    const [showPolicies, setShowPolicies] = useState(false);

    // Update destination if package changes or loads later
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
            // Trigger Success
            const duration = 10 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // since particles fall down, start a bit higher than random
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);

            setShowSuccess(true);
        } else {
            setStep((s) => Math.min(s + 1, 3));
        }
    };
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const downloadTicket = async () => {
        setIsGeneratingTicket(true);
        try {
            const ticketElement = document.getElementById('ticket-content');
            if (!ticketElement) {
                throw new Error("Ticket template not found in DOM");
            }

            // Small delay to ensure rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(ticketElement, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff', // Ensure white background
                logging: false
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`TripMitra_Ticket_${formData.name.replace(/\s+/g, '_') || 'Travel'}.pdf`);

        } catch (err) {
            console.error("Ticket generation failed:", err);
            // Fallback: Try a simpler alert or retry logic
            alert("Could not generate ticket. Please ensure all details are filled and try again.");
        } finally {
            setIsGeneratingTicket(false);
        }
    };

    // Determine active package based on form selection or URL param
    const activePackage = Object.values(packages).find(p => p.title === formData.destination) || selectedPackage;
    const totalPrice = activePackage ? activePackage.price * formData.travelers : 0;

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

                {/* Left Column: Form Section */}
                <div className="lg:w-2/3">
                    {/* Progress Bar */}
                    <div className="mb-10">
                        <div className="flex items-center justify-between relative max-w-md mx-auto lg:mx-0">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-100 rounded-full z-0"></div>
                            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>

                            {[1, 2, 3].map((s) => (
                                <div key={s} className="relative z-10">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ring-4 ${s <= step ? "bg-primary text-white ring-blue-50" : "bg-white text-gray-400 border border-gray-200 ring-transparent"
                                            }`}
                                    >
                                        {s < step ? <Check className="w-5 h-5" /> : s}
                                    </div>
                                    <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold whitespace-nowrap ${s <= step ? "text-primary" : "text-gray-400"}`}>
                                        {s === 1 ? "Trip Details" : s === 2 ? "Your Info" : "Payment"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[500px] relative">
                        <div className="p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">Start Your Adventure 🌍</h2>

                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Select Destination / Package</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                                                    <select
                                                        name="destination"
                                                        value={formData.destination}
                                                        onChange={handleChange}
                                                        className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled>Select a Destination</option>
                                                        {Object.values(packages).map((pkg) => (
                                                            <option key={pkg.title} value={pkg.title}>{pkg.title}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2">Travel Date</label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="date"
                                                            name="date"
                                                            value={formData.date}
                                                            onChange={handleChange}
                                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2">Travelers</label>
                                                    <div className="relative">
                                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="number"
                                                            name="travelers"
                                                            min="1"
                                                            value={formData.travelers}
                                                            onChange={handleChange}
                                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
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
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">Who is Traveling? ✈️</h2>

                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your Name"
                                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="name@example.com"
                                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 98765 43210"
                                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">Payment Details 💳</h2>

                                        {/* Payment Method Tabs */}
                                        <div className="flex space-x-4 mb-6">
                                            <button
                                                onClick={() => setPaymentMethod('card')}
                                                className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${paymentMethod === 'card' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-400'}`}
                                            >
                                                <CreditCard className="w-8 h-8 mb-2" />
                                                <span className="font-bold">Card Payment</span>
                                            </button>
                                            <button
                                                onClick={() => setPaymentMethod('upi')}
                                                className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${paymentMethod === 'upi' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-100 hover:border-gray-200 text-gray-400'}`}
                                            >
                                                <QrCode className="w-8 h-8 mb-2" />
                                                <span className="font-bold">UPI / QR</span>
                                            </button>
                                        </div>

                                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 min-h-[300px]">
                                            {paymentMethod === 'card' && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                                                        <div className="relative">
                                                            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none font-medium" />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                                                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none font-medium" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                                                            <input type="password" placeholder="123" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none font-medium" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-2">Card Holder Name</label>
                                                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none font-medium" />
                                                    </div>
                                                </motion.div>
                                            )}

                                            {paymentMethod === 'upi' && (
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6">
                                                    <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block">
                                                        {/* Placeholder QR Code */}
                                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=tripmitra@upi&pn=TripMitra" alt="UPI QR" className="w-40 h-40 mix-blend-multiply" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 mb-2">Scan with any UPI App</p>
                                                        <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm, etc.</p>
                                                    </div>
                                                    <div className="relative max-w-xs mx-auto">
                                                        <div className="absolute inset-x-0 h-px bg-gray-300 top-1/2"></div>
                                                        <span className="relative bg-gray-50 px-2 text-sm text-gray-500 font-medium">OR</span>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Enter UPI ID</label>
                                                        <input type="text" placeholder="username@okhdfcbank" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none font-medium" />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => setShowPolicies(true)}
                                                className="text-sm text-gray-500 underline hover:text-primary transition-colors flex items-center"
                                            >
                                                <Info className="w-4 h-4 mr-1" /> View Booking Policies, Cancellation Rules & Responsibilities
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="mt-12 flex items-center justify-between">
                                {step > 1 ? (
                                    <button
                                        onClick={prevStep}
                                        className="flex items-center text-gray-500 font-bold hover:text-gray-900 transition-colors"
                                    >
                                        <ArrowLeft className="w-5 h-5 mr-2" /> Back
                                    </button>
                                ) : <div></div>}

                                <button
                                    onClick={nextStep}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all flex items-center"
                                >
                                    {step === 3 ? "Complete Booking" : "Continue"} <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Order Summary (Sidebar) */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-8">
                        {/* Selected Package Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="relative h-48 w-full">
                                <img
                                    src={selectedPackage?.image || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="Package Preview"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <div>
                                        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 uppercase tracking-wider mb-2 inline-block">Chosen Package</span>
                                        <h3 className="text-white font-bold text-xl leading-tight">{formData.destination || "Select a Destination"}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="flex items-center">
                                            <User className="w-5 h-5 text-primary mr-3" />
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase">Guests</p>
                                                <p className="font-bold text-gray-900">{formData.travelers} Person(s)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="flex items-center">
                                            <Calendar className="w-5 h-5 text-primary mr-3" />
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase">Date</p>
                                                <p className="font-bold text-gray-900">{formData.date || "Not Selected"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-green-600 mb-2">
                                            <ShieldCheck className="w-4 h-4 mr-2" />
                                            <span className="text-xs font-bold uppercase">Secure Booking</span>
                                        </div>
                                        <div className="flex items-center text-yellow-600">
                                            <Star className="w-4 h-4 mr-2 fill-current" />
                                            <span className="text-xs font-bold uppercase">Best Price Guaranteed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="bg-blue-600 rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold mb-2 relative z-10">Need Help?</h3>
                            <p className="text-blue-100 mb-6 text-sm relative z-10">Our travel experts are just a call away to assist you.</p>
                            <a href="tel:+918888474060" className="inline-block bg-white text-blue-800 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors relative z-10">
                                +91 88884 74060
                            </a>
                        </div>
                    </div>
                </div>

            </div>


            {/* Hidden Ticket Template for PDF Generation */}
            <div className="fixed top-0 left-[-1000px] z-[-50] w-[800px] font-sans text-gray-900 bg-white" id="ticket-content">
                <div className="p-8 border-b-8 border-primary bg-gray-50">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Trip<span className="text-primary">Mitra</span></h1>
                            <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">Official Travel Document</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-400 font-mono">BOOKING ID</p>
                            <p className="text-2xl font-bold font-mono text-gray-900">{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-gray-900 rounded-3xl overflow-hidden mb-8 shadow-sm">
                        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
                            <span className="font-bold uppercase tracking-widest text-sm">Boarding Pass</span>
                            <span className="font-mono text-xs">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="p-8 grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Passenger</p>
                                <p className="text-2xl font-bold text-gray-900 capitalize">{formData.name || "Traveler"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Destination</p>
                                <p className="text-2xl font-bold text-primary capitalize">{formData.destination || "Not Selected"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Travel Date</p>
                                <p className="text-xl font-bold text-gray-900">{formData.date || "TBD"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Guests</p>
                                <p className="text-xl font-bold text-gray-900">{formData.travelers} Person(s)</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 border-t font-mono text-sm border-dashed border-gray-300">
                            <div className="flex justify-between mb-2">
                                <span>Package Base Price</span>
                                <span>₹{activePackage?.price}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                                <span>Total Paid</span>
                                <span>₹{totalPrice.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-8">
                        <div className="col-span-2 space-y-2">
                            <h3 className="font-bold text-gray-900 uppercase text-sm">Package Inclusions</h3>
                            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                                <li>Accommodation in Premium Hotels/Camps</li>
                                <li>Breakfast and Dinner included</li>
                                <li>Expert Tour Guide & Support</li>
                                <li>All Local Transport & Transfers</li>
                            </ul>
                        </div>
                        <div className="border-l pl-8 flex flex-col justify-center items-center text-center">
                            <div className="w-24 h-24 bg-gray-900 text-white flex items-center justify-center p-2 mb-2">
                                <QrCode className="w-full h-full" />
                            </div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Scan for Details</p>
                        </div>
                    </div>

                    <div className="text-[10px] text-gray-400 leading-relaxed border-t pt-4">
                        <p className="font-bold text-gray-600 mb-1">TERMS & CONDITIONS</p>
                        <p>1. This ticket is non-transferable and must be presented at the time of check-in along with a valid government ID.</p>
                        <p>2. TripMitra acts as an agent. We are not responsible for delays caused by weather, strikes, or acts of God.</p>
                        <p>3. Cancellations made within 48 hours of departure are non-refundable.</p>
                        <p>4. Please reach the boarding point 30 minutes prior to departure.</p>
                        <p className="mt-2 text-primary font-bold">Safe Travels with TripMitra!</p>
                    </div>
                </div>


            </div>

            {/* Success Popup */}
            {
                showSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
                        <div className="bg-white rounded-3xl p-12 max-w-2xl w-full shadow-2xl transform scale-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                            <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <span className="text-6xl">🎉</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 leading-tight">
                                Congratulations! <br /> You're Going to <span className="text-primary">{formData.destination || "Your Dream Destination"}</span>!
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                                "Get ready for the adventure of a lifetime! Your bags should be packed by now! 🎒✨"
                            </p>

                            <div className="flex justify-center space-x-4">
                                <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                                    Return to Home
                                </button>

                            </div>
                        </div>
                    </div>

                )
            }

            {/* Policies Modal */}
            {
                showPolicies && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Trip Policies & Guidelines</h2>
                                    <p className="text-sm text-gray-500">Please review our responsibilities and your safety zones.</p>
                                </div>
                                <button onClick={() => setShowPolicies(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* GREEN ZONE - SAFE */}
                                    <div className="space-y-6">
                                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                                            <h3 className="flex items-center text-lg font-bold text-green-800 mb-2">
                                                <ShieldCheck className="w-6 h-6 mr-2" /> Green Zone (Safe & Permitted)
                                            </h3>
                                            <p className="text-sm text-green-700">Everything we cover and allow for your peace of mind.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="bg-green-100 p-2 rounded-full mr-3 shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">Flexible Cancellation</h4>
                                                    <p className="text-xs text-gray-600 mt-1">Full refund (minus tax) if cancelled more than <strong>48 hours</strong> before departure.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-green-100 p-2 rounded-full mr-3 shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">TripMitra Responsibilities</h4>
                                                    <p className="text-xs text-gray-600 mt-1">Verified Hotels, Commercial License Vehicles, 24/7 Support Manager, and Verified Drivers.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-green-100 p-2 rounded-full mr-3 shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">Medical Support</h4>
                                                    <p className="text-xs text-gray-600 mt-1">Basic First Aid kits available in all vehicles. On-call doctor assistance for emergencies.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RED ZONE - DANGER/RESTRICTED */}
                                    <div className="space-y-6">
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                                            <h3 className="flex items-center text-lg font-bold text-red-800 mb-2">
                                                <Info className="w-6 h-6 mr-2" /> Red Zone (Risks & Restrictions)
                                            </h3>
                                            <p className="text-sm text-red-700">Important restrictions and cancellation penalties.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                                                    <XCircle className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">Late Cancellation Policy</h4>
                                                    <p className="text-xs text-gray-600 mt-1">
                                                        Cancellations within <strong>48 hours</strong> of departure are <span className="font-bold text-red-600">Non-Refundable</span> due to pre-bookings.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                                                    <XCircle className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">Health Declarations</h4>
                                                    <p className="text-xs text-gray-600 mt-1">TripMitra is not liable for undisclosed health issues (Heart conditions, Asthma, etc.). Travel is at own risk.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="bg-red-100 p-2 rounded-full mr-3 shrink-0">
                                                    <XCircle className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">Force Majeure</h4>
                                                    <p className="text-xs text-gray-600 mt-1">No refunds for delays/cancellations due to natural calamities (snow, landslides) or political strikes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                                    <p className="text-sm text-blue-700 mb-2">By proceeding with "Complete Booking", you acknowledge that you have read and agreed to these terms.</p>
                                    <button onClick={() => setShowPolicies(false)} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                        I Understand & Agree
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-gray-50 relative">
            {/* Background Texture/Image */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <img
                    src="https://www.transparenttextures.com/patterns/cubes.png"
                    alt="pattern"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-gray-400">Loading Booking...</div>}>
                <BookingContent />
            </Suspense>
            <Footer />
        </main>
    );
}
