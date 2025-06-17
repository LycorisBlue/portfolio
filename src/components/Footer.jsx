import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "#contact", label: "Contact" }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo/Brand */}
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                            Portfolio
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Développeur Full-Stack & Architecte Logiciel
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social) => (
                            <button
                                key={social.label}
                                onClick={() => social.href.startsWith('#') ? scrollToSection(social.href) : window.open(social.href, '_blank')}
                                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                                aria-label={social.label}
                            >
                                <social.icon size={18} className="text-gray-300 hover:text-white transition-colors" />
                            </button>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
                            © {currentYear} Fait avec <Heart size={14} className="mx-1 text-red-400" />
                            <span className="ml-1">Tous droits réservés</span>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 mb-6"></div>

                {/* Additional Info */}
                <div className="text-center">
                    <p className="text-gray-500 text-xs">
                        Conçu et développé avec les dernières technologies web
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;