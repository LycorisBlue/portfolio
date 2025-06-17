import { Code2, Zap, Users } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Code2,
            title: "Innovation",
            description: "Utilisation des dernières technologies pour créer des solutions modernes et performantes."
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimisation constante pour des applications rapides et efficaces."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Travail en équipe et communication transparente pour des projets réussis."
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
                    {/* Biography */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Mon parcours</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Passionné par le développement depuis plus de 5 ans, je me spécialise dans la création d'applications web et mobile performantes. Mon expertise couvre l'ensemble du cycle de développement, de la conception d'architecture à la mise en production.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                J'accompagne mes clients dans leurs projets de transformation digitale en proposant des solutions sur mesure, robustes et évolutives. Mon approche privilégie la qualité du code, l'expérience utilisateur et les bonnes pratiques de développement.
                            </p>
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