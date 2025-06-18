import { Code2, Zap, Users } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Code2,
            title: "Innovation",
            description: "J'adopte les technologies émergentes comme Flutter et React pour créer des solutions modernes et performantes qui répondent aux défis actuels."
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimisation constante des architectures et du code pour des applications rapides, scalables et efficaces en production."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Travail en équipe agile avec une communication transparente pour livrer des projets qui dépassent les attentes."
        }
    ];

    return (
        <section id="apropos" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        À propos
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Personal Info */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-2xl font-semibold mb-6 text-white">Qui suis-je ?</h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Localisation</h4>
                                        <p className="text-gray-400 text-sm">Abidjan, Côte d'Ivoire</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Formation</h4>
                                        <p className="text-gray-400 text-sm">Licence en Informatique Développeur d'Application</p>
                                        <p className="text-gray-400 text-xs">École supérieure des hautes études technologiques</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Expérience</h4>
                                        <p className="text-gray-400 text-sm">3+ années en développement Full-Stack</p>
                                        <p className="text-gray-400 text-xs">Spécialisé en architecture logicielle et mobile</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Passion</h4>
                                        <p className="text-gray-400 text-sm">Innovation technologique et solutions créatives</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="space-y-6">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <value.icon size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;