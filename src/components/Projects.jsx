import { ExternalLink, Github, Award, Star, Calendar, Users, TrendingUp } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "EduNova - Plateforme Éducative",
            category: "Innovation IA",
            description: "Plateforme éducative révolutionnaire avec IA pour le secondaire ivoirien. Personnalisation des contenus, accessibilité hors ligne et support multilingue.",
            tech: ["Intelligence Artificielle", "Flutter", "React", "Node.js"],
            status: "En développement",
            impact: "Transformation de l'éducation nationale",
            date: "2024-2025",
            recognition: "Prix National de l'Excellence 2025",
            github: "https://github.com/LycorisBlue",
            demo: "#"
        },
        {
            title: "RailTrack - Gestion Ferroviaire",
            category: "Infrastructure",
            description: "Solution intelligente pour l'optimisation de l'infrastructure ferroviaire nationale avec géolocalisation et reporting temps réel pour SITARAIL.",
            tech: ["React", "Node.js", "Géolocalisation", "Dashboard"],
            status: "Déployé",
            impact: "70% de réduction du temps administratif",
            date: "2024",
            client: "SITARAIL - Centre Yiri (AGL)",
            github: "https://github.com/LycorisBlue",
            demo: "#"
        },
        {
            title: "SmilePay - Économie Circulaire",
            category: "Fintech",
            description: "Plateforme de transaction interne pour entreprises favorisant l'économie circulaire entre services et employés.",
            tech: ["Flutter", "Sécurité", "Analytics", "Paiement"],
            status: "Actif",
            impact: "Optimisation des flux financiers internes",
            date: "Avril 2024 - Présent",
            client: "Smart Technology",
            github: "https://github.com/LycorisBlue",
            demo: "#"
        },
        {
            title: "O'Secours - Gestion d'Urgences",
            category: "Startup MEDEV",
            description: "Solution révolutionnaire de gestion des urgences avec géolocalisation, suivi temps réel et optimisation des interventions pour sauver des vies.",
            tech: ["Flutter", "React", "Géolocalisation", "IoT"],
            status: "En développement",
            impact: "50 000 personnes touchées par les sinistres/an",
            date: "2024-2025",
            client: "MEDEV Group - Startup",
            github: "https://github.com/LycorisBlue",
            demo: "http://www.medev-group.com"
        },
        {
            title: "ARTCI Signal",
            category: "Sécurité Numérique",
            description: "Application mobile Flutter pour l'ARTCI permettant le signalement d'incidents numériques comme les arnaques, phishing et infractions internet.",
            tech: ["Flutter", "Sécurité", "Signalement", "Mobile"],
            status: "Déployé",
            impact: "Sécurisation de l'espace numérique ivoirien",
            date: "2024",
            client: "ARTCI - Autorité de Régulation",
            github: "https://github.com/LycorisBlue",
            demo: "#"
        },
        {
            title: "ANSUT Digital Fanzone",
            category: "Événementiel",
            description: "Application mobile officielle pour la CAN 2024 organisée par la Côte d'Ivoire, développée pour l'Agence Nationale des Télécommunications.",
            tech: ["Mobile", "Événementiel", "Flutter"],
            status: "Déployé",
            impact: "Application officielle CAN 2024",
            date: "Décembre 2023 - Janvier 2024",
            client: "Agence Nationale Télécommunications",
            github: "https://github.com/LycorisBlue",
            demo: "https://ansut.ci/"
        }
    ];

    const StatusBadge = ({ status }) => {
        const colors = {
            "En développement": "bg-white/10 text-white border-white/20",
            "Déployé": "bg-white/20 text-white border-white/30",
            "Actif": "bg-white/15 text-white border-white/25"
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs border ${colors[status] || "bg-white/10 text-white border-white/20"}`}>
                {status}
            </span>
        );
    };

    const CategoryBadge = ({ category }) => (
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">
            {category}
        </span>
    );

    return (
        <section id="projets" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Projets Récents
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Découvrez mes réalisations concrètes qui transforment les défis en solutions innovantes
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 flex flex-col"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Header */}
                            <div className="p-6 flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <CategoryBadge category={project.category} />
                                        {project.recognition && (
                                            <div className="flex items-center mt-2 text-white">
                                                <Award size={16} className="mr-1" />
                                                <span className="text-xs">{project.recognition}</span>
                                            </div>
                                        )}
                                    </div>
                                    <StatusBadge status={project.status} />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Client/Organization */}
                                {project.client && (
                                    <div className="flex items-center text-gray-300 text-xs mb-3">
                                        <Users size={14} className="mr-2" />
                                        {project.client}
                                    </div>
                                )}

                                {/* Impact */}
                                {project.impact && (
                                    <div className="bg-white/10 border border-white/20 rounded-lg p-3 mb-4">
                                        <div className="flex items-center text-gray-300 text-xs mb-1">
                                            <TrendingUp size={12} className="mr-1" />
                                            Impact
                                        </div>
                                        <p className="text-white text-sm font-medium">{project.impact}</p>
                                    </div>
                                )}

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Date */}
                                <div className="flex items-center text-gray-400 text-xs">
                                    <Calendar size={12} className="mr-1" />
                                    {project.date}
                                </div>
                            </div>

                            {/* Footer avec liens */}
                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-white text-sm"
                                    >
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-white text-sm"
                                    >
                                        <ExternalLink size={16} className="mr-2" />
                                        Voir
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-white mb-4">Intéressé par mes réalisations ?</h3>
                        <p className="text-gray-400 mb-6">
                            Découvrez plus de projets sur mon GitHub ou discutons de votre prochain projet innovant.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/LycorisBlue"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 text-white"
                            >
                                <Github className="mr-2" size={20} />
                                Voir tous mes projets
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 text-white"
                            >
                                <Star className="mr-2" size={20} />
                                Discutons de votre projet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;