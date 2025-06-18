// src/components/Footer.jsx
import { Github, Linkedin, Mail, Heart, Globe, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/LycorisBlue",
            label: "GitHub"
        },
        {
            icon: Globe,
            href: "https://fulgencemedi.medev-group.com/",
            label: "Portfolio"
        },
        {
            icon: Mail,
            href: "#contact",
            label: "Contact"
        }
    ];

    const quickLinks = [
        { name: "Accueil", href: "#accueil" },
        { name: "À propos", href: "#apropos" },
        { name: "Parcours", href: "#parcours" },
        { name: "Ma Startup", href: "#startup" },
        { name: "Compétences", href: "#competences" },
        { name: "Projets", href: "#projets" }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section principale */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* À propos */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                            Fulgence MEDI
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Développeur Full-Stack & Architecte Logiciel spécialisé en React, Flutter et Node.js.
                            Basé à Abidjan, je conçois des solutions innovantes pour les entreprises et startups africaines.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-400">
                                <MapPin size={14} className="mr-2" />
                                Abidjan, Cocody - Côte d'Ivoire
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Mail size={14} className="mr-2" />
                                g.fulgence.medi@hotmail.com
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Phone size={14} className="mr-2" />
                                +225 05 75 63 5710
                            </div>
                        </div>
                    </div>

                    {/* Navigation rapide */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Développement Web</li>
                            <li>Applications Mobile</li>
                            <li>Architecture Logicielle</li>
                            <li>Consulting Technique</li>
                            <li>Formation & Mentoring</li>
                            <li>Solutions IoT</li>
                        </ul>
                    </div>
                </div>

                {/* Technologies utilisées */}
                <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 text-center">Technologies Maîtrisées</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "React.js", "Flutter", "Node.js", "JavaScript", "TypeScript",
                            "PHP", "Docker", "Git", "Tailwind CSS", "MongoDB", "PostgreSQL"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                {/* Section bottom */}
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                            © {currentYear} Fulgence MEDI. Fait avec <Heart size={14} className="mx-1 text-white" />
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Tous droits réservés.
                        </p>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((social) => (
                            <button
                                key={social.label}
                                onClick={() => social.href.startsWith('#') ?
                                    scrollToSection(social.href) :
                                    window.open(social.href, '_blank')
                                }
                                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                                aria-label={social.label}
                            >
                                <social.icon size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                            </button>
                        ))}
                    </div>

                    {/* Statut */}
                    <div className="text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end mb-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-400 text-sm font-medium">Disponible pour nouveaux projets</span>
                        </div>
                        <p className="text-gray-500 text-xs">
                            Basé à Abidjan • Télétravail possible
                        </p>
                    </div>
                </div>

                {/* Divider final */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8 mb-6"></div>

                {/* Info supplémentaire */}
                <div className="text-center">
                    <p className="text-gray-500 text-xs mb-2">
                        Portfolio conçu et développé avec React + Vite • Design moderne et responsive
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                        <span>🚀 Performances optimisées</span>
                        <span>📱 Mobile-first</span>
                        <span>🎨 Glassmorphism Design</span>
                        <span>⚡ Animations fluides</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;