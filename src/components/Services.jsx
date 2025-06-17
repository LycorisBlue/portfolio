import { Code, Smartphone, Settings, HeadphonesIcon } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Code,
            title: "Développement sur mesure",
            description: "Applications web et mobile conçues selon vos besoins spécifiques",
            features: ["Interface utilisateur moderne", "Backend robuste", "Base de données optimisée"]
        },
        {
            icon: Settings,
            title: "Architecture & Consulting",
            description: "Conception d'architectures logicielles scalables et audit de code",
            features: ["Microservices", "Patterns de conception", "Optimisation performance"]
        },
        {
            icon: Smartphone,
            title: "Solutions mobiles",
            description: "Applications natives et cross-platform pour iOS et Android",
            features: ["Flutter", "React Native", "PWA", "App Store deployment"]
        },
        {
            icon: HeadphonesIcon,
            title: "Maintenance & Support",
            description: "Suivi technique, mises à jour et support continu",
            features: ["Monitoring", "Corrections de bugs", "Évolutions fonctionnelles"]
        }
    ];

    return (
        <section id="services" className="py-24 px-4 bg-gradient-to-b from-white/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Services
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Des solutions complètes pour accompagner votre transformation digitale
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-white/10 rounded-xl mr-4 group-hover:bg-white/20 transition-colors duration-300">
                                    <service.icon size={32} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400 text-sm">{service.description}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <div
                                        key={feature}
                                        className="flex items-center space-x-2 text-sm text-gray-300"
                                        style={{ animationDelay: `${index * 150 + featureIndex * 50}ms` }}
                                    >
                                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;