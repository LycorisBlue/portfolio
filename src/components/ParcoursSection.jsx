import { Award, Lightbulb, Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, Star } from "lucide-react";

const ParcoursSection = () => {
    const distinctions = [
        {
            title: "Prix National de l'Excellence 2025",
            organization: "République de Côte d'Ivoire",
            description: "Reconnaissance officielle pour l'innovation technologique et l'impact social",
            date: "2025",
            type: "national"
        }
    ];

    const projetsInnovation = [
        {
            title: "EduNova - Plateforme Éducative",
            organization: "Projet Personnel",
            description: "Plateforme éducative révolutionnaire avec IA pour le secondaire ivoirien. Personnalisation des contenus, accessibilité hors ligne et support multilingue.",
            impact: "Transformation de l'éducation nationale",
            tech: ["IA", "Flutter", "React", "Node.js"],
            date: "2024-2025",
            status: "En développement"
        },
        {
            title: "RailTrack - Gestion Ferroviaire",
            organization: "SITARAIL - Centre Yiri (AGL)",
            description: "Solution intelligente pour l'optimisation de l'infrastructure ferroviaire nationale avec géolocalisation et reporting temps réel.",
            impact: "70% de réduction du temps administratif",
            tech: ["React", "Node.js", "Géolocalisation", "Dashboard"],
            date: "2024",
            status: "Déployé"
        },
        {
            title: "SmilePay - Économie Circulaire",
            organization: "Smart Technology",
            description: "Plateforme de transaction interne pour entreprises favorisant l'économie circulaire entre services et employés.",
            impact: "Optimisation des flux financiers internes",
            tech: ["Flutter", "Sécurité", "Analytics"],
            date: "Avril 2024 - Présent",
            status: "Actif"
        }
    ];

    const experiences = [
        {
            title: "Arise - Digitalisation Télécommunications",
            organization: "Agence Nationale du Service Universel TIC",
            description: "Système de digitalisation des listes de présence pour optimiser les coûts et l'efficacité des réunions.",
            location: "Abidjan",
            date: "Juin 2024 - Présent",
            tech: ["Digitalisation", "Optimisation"]
        },
        {
            title: "FloodGuard - Surveillance des Inondations",
            organization: "MEDEV",
            description: "Plateforme de surveillance avancée des zones humides et prévention des inondations pour communautés sûres.",
            location: "Abidjan",
            date: "Mars - Avril 2024",
            tech: ["Surveillance", "IoT", "Prévention"]
        },
        {
            title: "MaCoop - Gestion Coopérative",
            organization: "Tuloss Solution",
            description: "Application permettant la création et gestion de coopératives avec système d'information intégré.",
            location: "Abidjan",
            date: "Février - Mai 2024",
            tech: ["Gestion", "Coopératives"]
        },
        {
            title: "ANSUT Digital Fanzone",
            organization: "Agence Nationale Télécommunications",
            description: "Application mobile officielle pour la CAN organisée par la Côte d'Ivoire.",
            location: "Abidjan",
            date: "Décembre 2023 - Janvier 2024",
            tech: ["Mobile", "Sports", "Événementiel"]
        },
        {
            title: "LYS Gestion",
            organization: "Simplon.co",
            description: "Système de gestion des commandes avec interface back-office pour traitement des requêtes clients.",
            location: "Abidjan, Cocody",
            date: "Novembre - Décembre 2023",
            tech: ["Gestion", "Back-office"]
        },
        {
            title: "Bassia Taxi (Backend)",
            organization: "Simplon.co",
            description: "Système backend pour simplifier les indications de lieux aux chauffeurs de taxi.",
            location: "Abidjan, Cocody",
            date: "Octobre - Novembre 2023",
            tech: ["Backend", "Géolocalisation"]
        }
    ];

    const formations = [
        {
            title: "Licence en Informatique Développeur d'Application",
            organization: "École supérieure des hautes études technologiques",
            location: "Abidjan",
            date: "Septembre 2022 - Juillet 2023",
            type: "diplome"
        },
        {
            title: "Développeur Web/Mobile & IoT",
            organization: "Simplon.co",
            location: "Abidjan",
            date: "Depuis Juillet 2023",
            type: "formation"
        },
        {
            title: "Certifications JavaScript, Node.js, Flutter, React",
            organization: "Udemy, W3 Schools",
            location: "En ligne",
            date: "2024",
            type: "certification"
        }
    ];

    const TimelineItem = ({ children, isLast = false }) => (
        <div className="relative">
            <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full border-2 border-white/30 flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-6 flex-1">{children}</div>
            </div>
            {!isLast && (
                <div className="absolute left-4 top-8 w-0.5 h-full bg-white/20"></div>
            )}
        </div>
    );

    const StatusBadge = ({ status }) => {
        const colors = {
            "En développement": "bg-white/10 text-white border-white/20",
            "Déployé": "bg-white/20 text-white border-white/30",
            "Actif": "bg-white/15 text-white border-white/25"
        };

        return (
            <span className={`px-2 py-1 rounded-full text-xs border ${colors[status] || "bg-white/10 text-white border-white/20"}`}>
                {status}
            </span>
        );
    };

    return (
        <section id="parcours" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Parcours Professionnel
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Mon cheminement de l'innovation à la reconnaissance nationale
                    </p>
                </div>

                {/* Container avec hauteur fixe et scroll */}
                <div className="h-[600px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    <div className="h-full overflow-y-auto custom-scrollbar p-6">
                        <div className="space-y-12">
                            {/* Distinctions & Reconnaissances */}
                            <div>
                                <div className="flex items-center mb-6 sticky top-0 bg-black/80 backdrop-blur-sm py-2 -mx-6 px-6 border-b border-white/10">
                                    <Award className="text-white mr-3" size={24} />
                                    <h3 className="text-xl font-semibold text-white">Distinctions & Reconnaissances</h3>
                                </div>
                                <div className="space-y-4">
                                    {distinctions.map((item, index) => (
                                        <TimelineItem key={index} isLast={index === distinctions.length - 1}>
                                            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h4 className="text-base font-semibold text-white flex items-center">
                                                            <Star className="text-white mr-2" size={16} />
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-gray-300 text-sm">{item.organization}</p>
                                                    </div>
                                                    <span className="text-gray-300 text-sm font-medium">{item.date}</span>
                                                </div>
                                                <p className="text-gray-400 text-sm">{item.description}</p>
                                            </div>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </div>

                            {/* Projets Innovation & Impact */}
                            <div>
                                <div className="flex items-center mb-6 sticky top-0 bg-black/80 backdrop-blur-sm py-2 -mx-6 px-6 border-b border-white/10">
                                    <Lightbulb className="text-white mr-3" size={24} />
                                    <h3 className="text-xl font-semibold text-white">Projets Innovation & Impact</h3>
                                </div>
                                <div className="space-y-4">
                                    {projetsInnovation.map((projet, index) => (
                                        <TimelineItem key={index} isLast={index === projetsInnovation.length - 1}>
                                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex-1">
                                                        <h4 className="text-base font-semibold text-white">{projet.title}</h4>
                                                        <p className="text-gray-300 text-sm">{projet.organization}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <StatusBadge status={projet.status} />
                                                        <p className="text-gray-400 text-xs mt-1">{projet.date}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 text-sm mb-2">{projet.description}</p>
                                                {projet.impact && (
                                                    <div className="bg-white/10 border border-white/20 rounded-lg p-2 mb-2">
                                                        <p className="text-gray-300 text-sm font-medium">Impact: {projet.impact}</p>
                                                    </div>
                                                )}
                                                <div className="flex flex-wrap gap-1">
                                                    {projet.tech.map((tech) => (
                                                        <span key={tech} className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </div>

                            {/* Expériences Professionnelles */}
                            <div>
                                <div className="flex items-center mb-6 sticky top-0 bg-black/80 backdrop-blur-sm py-2 -mx-6 px-6 border-b border-white/10">
                                    <Briefcase className="text-white mr-3" size={24} />
                                    <h3 className="text-xl font-semibold text-white">Expériences Professionnelles</h3>
                                </div>
                                <div className="space-y-4">
                                    {experiences.map((exp, index) => (
                                        <TimelineItem key={index} isLast={index === experiences.length - 1}>
                                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h4 className="text-base font-semibold text-white">{exp.title}</h4>
                                                        <p className="text-gray-300 text-sm">{exp.organization}</p>
                                                        {exp.location && (
                                                            <p className="text-gray-400 text-xs flex items-center mt-1">
                                                                <MapPin size={12} className="mr-1" />
                                                                {exp.location}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <span className="text-gray-400 text-sm">{exp.date}</span>
                                                </div>
                                                <p className="text-gray-400 text-sm mb-2">{exp.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {exp.tech.map((tech) => (
                                                        <span key={tech} className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </div>

                            {/* Formation & Diplômes */}
                            <div>
                                <div className="flex items-center mb-6 sticky top-0 bg-black/80 backdrop-blur-sm py-2 -mx-6 px-6 border-b border-white/10">
                                    <GraduationCap className="text-white mr-3" size={24} />
                                    <h3 className="text-xl font-semibold text-white">Formation & Diplômes</h3>
                                </div>
                                <div className="space-y-4">
                                    {formations.map((formation, index) => (
                                        <TimelineItem key={index} isLast={index === formations.length - 1}>
                                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h4 className="text-base font-semibold text-white">{formation.title}</h4>
                                                        <p className="text-gray-300 text-sm">{formation.organization}</p>
                                                        {formation.location && (
                                                            <p className="text-gray-400 text-xs flex items-center mt-1">
                                                                <MapPin size={12} className="mr-1" />
                                                                {formation.location}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <span className="text-gray-400 text-sm">{formation.date}</span>
                                                </div>
                                            </div>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles pour la scrollbar personnalisée */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 3px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </section>
    );
};

export default ParcoursSection;