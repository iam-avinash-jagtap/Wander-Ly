import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin, Github } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-xl text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-3xl font-black font-display tracking-tight text-white">
                                    Trip<span className="text-blue-500">Mitra</span>
                                </span>
                                <span className="text-3xl font-black font-display text-yellow-500">Aj</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Discover the soul of India with premium travel experiences.
                            From the Himalayas to Kerala, we curate journeys that inspire.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href={footerLinks.brand.github} icon={<Github className="w-5 h-5" />} />
                            <SocialLink href={footerLinks.brand.linkedin} icon={<Linkedin className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {footerLinks.explore.map((link) => (
                                <FooterLink key={link.href} href={link.href} label={link.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Support</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <FooterLink key={link.href} href={link.href} label={link.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>{footerLinks.contact.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>{footerLinks.contact.phone}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>{footerLinks.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} TripMitraAj. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 hover:text-accent transition-colors">
                {label}
            </Link>
        </li>
    );
}
