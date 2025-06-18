// src/components/Contact.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulation d'envoi
        toast({
            title: "Message envoyé !",
            description: "Je vous répondrai dans les plus brefs délais.",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Téléphone",
            value: "+225 05 75 63 5710",
            href: "tel:+22505756357​10"
        },
        {
            icon: MapPin,
            title: "Localisation",
            value: "Abidjan, Cocody - Côte d'Ivoire",
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: Mail,
            title: "Email Pro",
            value: "g.fulgence.medi@hotmail.com",
            href: "mailto:g.fulgence.medi@hotmail.com"
        }
    ];

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Contact
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins en développement web et mobile
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Travaillons ensemble</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Développeur Full-Stack spécialisé en React, Flutter et Node.js. Que vous ayez besoin d'une application web, mobile ou d'une architecture complète, je serais ravi de vous accompagner dans la réalisation de vos projets.
                            </p>

                            {/* Informations de contact principales */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-all duration-300">
                                                <IconComponent className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">{info.title}</p>
                                                <p className="text-white font-medium">{info.value}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Liens sociaux/professionnels */}
                            <div className="border-t border-white/10 pt-6">
                                <h4 className="text-lg font-semibold text-white mb-4">Liens professionnels</h4>
                                <div className="space-y-3">
                                    {socialLinks.map((link, index) => {
                                        const IconComponent = link.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={link.href}
                                                target={link.href.startsWith('http') ? "_blank" : "_self"}
                                                rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                                                className="flex items-center p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                                            >
                                                <IconComponent className="text-white mr-3 group-hover:scale-110 transition-transform" size={18} />
                                                <div>
                                                    <p className="text-xs text-gray-400">{link.title}</p>
                                                    <p className="text-white text-sm">{link.value}</p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                                    placeholder="Votre nom complet"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Adresse email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none"
                                    placeholder="Décrivez votre projet ou vos besoins..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group"
                            >
                                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer avec info supplémentaire */}
                <div className="mt-16 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Prêt à démarrer votre projet ?</h4>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        En tant que développeur Full-Stack basé à Abidjan, je combine expertise technique et compréhension des enjeux locaux pour créer des solutions innovantes adaptées à vos besoins.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center">
                            <Mail className="mr-2" size={16} />
                            g.fulgence.medi@hotmail.com
                        </span>
                        <span className="flex items-center">
                            <Phone className="mr-2" size={16} />
                            +225 05 75 63 5710
                        </span>
                        <span className="flex items-center">
                            <MapPin className="mr-2" size={16} />
                            Abidjan, Côte d'Ivoire
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;