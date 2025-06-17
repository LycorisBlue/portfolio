import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
            icon: Mail,
            title: "Email",
            value: "contact@portfolio.dev",
            href: "mailto:contact@portfolio.dev"
        },
        {
            icon: Phone,
            title: "Téléphone",
            value: "+33 1 23 45 67 89",
            href: "tel:+33123456789"
        },
        {
            icon: MapPin,
            title: "Localisation",
            value: "Paris, France",
            href: "#"
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
                        Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Discutons de votre projet</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Que vous ayez un projet web, mobile ou que vous souhaitiez simplement échanger sur vos besoins techniques, je serais ravi de vous accompagner.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={info.title}
                                        href={info.href}
                                        className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 group"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                                            <info.icon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{info.title}</p>
                                        <p className="text-white font-medium">{info.value}</p>
                                    </div>
                            </a>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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
                                placeholder="Votre nom"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
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
                                rows={5}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none"
                                placeholder="Décrivez votre projet..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                        >
                            <span>Envoyer le message</span>
                            <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </section >
    );
};

export default Contact;