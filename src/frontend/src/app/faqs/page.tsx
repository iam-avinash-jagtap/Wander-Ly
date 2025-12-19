"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
    {
        question: "How do I book a trip on your website?",
        answer: "You can book directly through our website by selecting a package and submitting the enquiry form. Our travel expert will contact you to confirm availability and complete the booking."
    },
    {
        question: "Are flight tickets included in all packages?",
        answer: "Not all packages include flights. Each package page clearly mentions whether flights are **included or optional add-ons**."
    },
    {
        question: "Can I customize my trip?",
        answer: "Yes. All trips can be customized based on: Travel dates, Budget, Hotel category, Group size, and Special occasions (honeymoon, family, corporate)."
    },
    {
        question: "Is it safe to travel on adventure trips?",
        answer: "Yes. Adventure trips include: Experienced trip leaders, Backup support (where applicable), and Safety briefings & first-aid kits. However, basic fitness and following instructions is mandatory."
    },
    {
        question: "What is the payment process?",
        answer: "Booking confirmation requires an advance payment. Remaining balance must be cleared before trip start. Payment details will be shared by our team."
    },
    {
        question: "What if I need to cancel my booking?",
        answer: "Cancellation policies vary by package. Please refer to the **Terms of Service** or contact support for exact charges."
    },
    {
        question: "Do you offer customer support during the trip?",
        answer: "Yes. Every trip includes **on-ground support** and a dedicated coordinator."
    }
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-teal-600 py-24 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                        <HelpCircle className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-display mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-teal-50 max-w-2xl mx-auto">Everything you need to know about your journey with Wanderly.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-900 pr-8">{faq.question}</span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <MessageCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                    <p className="text-gray-500 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <a href="/contact" className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors inline-block">
                        Contact Support
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
