import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Fulgence G MEDI
                    </h1>

                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>

                    <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                        Développeur Full-Stack & Architecte Logiciel
                    </p>

                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Je conçois et développe des solutions web et mobile innovantes avec une approche moderne et une architecture robuste.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        {[
                            { icon: Github, href: "#", label: "GitHub" },
                            { icon: Linkedin, href: "#", label: "LinkedIn" },
                            { icon: Mail, href: "#contact", label: "Contact" }
                        ].map((social, index) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={scrollToContact}
                        className={`group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <span className="flex items-center space-x-2">
                            <span>Travaillons ensemble</span>
                            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={16} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;