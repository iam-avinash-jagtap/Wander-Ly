"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, Globe, Instagram, Facebook, Twitter, Linkedin, X, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.phone || !formData.email || !formData.subject || !formData.message) {
            setError("Please fill in all required fields.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            console.log("Submitting inquiry:", formData);
            const response = await fetch('/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send inquiry');
            }

            // Success
            setShowModal(true);
            setFormData({
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (err: any) {
            console.error("Submission error:", err);
            setError(err.message || "Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section with Parallax-like Background */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e2586c?q=80&w=2070&auto=format&fit=crop"
                    alt="Contact Support"
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 text-white border border-white/30">24/7 Support</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6 drop-shadow-2xl">Let's Plan Your Trip</h1>
                    <p className="text-gray-100 max-w-2xl mx-auto text-xl font-medium drop-shadow-lg">Have queries? Need a custom itinerary? We are here to help you craft the perfect getaway.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information Column */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Info Card */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>

                            <h2 className="text-2xl font-bold font-display text-gray-900 mb-8 relative z-10">Contact Details</h2>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="font-bold text-gray-900 text-lg">Head Office</h3>
                                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                            004 Travel Tower, Viman Nagar,<br />
                                            Pune, Maharashtra 411014
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="font-bold text-gray-900 text-lg">Phone Number</h3>
                                        <p className="text-gray-500 text-sm mt-1 mb-2">Mon-Sat from 9am to 8pm</p>
                                        <a href="tel:+918888474060" className="text-green-700 font-bold hover:underline text-lg block">+91 88884 74060</a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="font-bold text-gray-900 text-lg">Email Support</h3>
                                        <p className="text-gray-500 text-sm mt-1 mb-2">We reply within 24 hours</p>
                                        <a href="mailto:avijagtap0493@gmail.com" className="text-purple-700 font-bold hover:underline block break-all">avijagtap0493@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Card */}
                        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <h3 className="text-xl font-bold mb-6 relative z-10">Follow Our Journey</h3>
                            <div className="flex space-x-4 relative z-10">
                                <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                                <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                                <SocialIcon icon={<Twitter className="w-5 h-5" />} />
                                <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 h-full">
                            <h2 className="text-3xl font-bold font-display text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-gray-500 mb-8">Fill out the form below and our travel experts will get in touch soon.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name || ""}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone || ""}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email || ""}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                        <select
                                            name="subject"
                                            value={formData.subject || ""}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium cursor-pointer"
                                        >
                                            <option value="" disabled>Select a topic</option>
                                            <option value="Booking Enquiry">Booking Enquiry</option>
                                            <option value="Custom Package">Custom Package</option>
                                            <option value="Support">Support / Complaint</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message || ""}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium resize-none"
                                        placeholder="Tell us about your travel plans, dates, and preferences..."
                                    ></textarea>
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold flex items-center gap-2 animate-shake">
                                        <XCircle className="w-4 h-4" />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-orange-500/30 hover:from-red-600 hover:to-orange-600 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-gray-400 text-sm mt-4">We respect your privacy. No spam.</p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[400px] relative group">
                    {/* Using an image as a placeholder for the map to ensure visual appeal without API key issues */}
                    <Image
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                        alt="Location Map"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 transform group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6 text-red-600 animate-bounce" />
                            <span className="font-bold text-gray-900">Get Directions to our Pune Office</span>
                        </div>
                    </div>
                </div>

            </div>
            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                Thank you for reaching out. We have received your query and will respond shortly with the perfect plan for you.
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </main>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
            {icon}
        </a>
    )
}
