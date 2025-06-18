import { Smartphone, Monitor, Brain, Cog, Award, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const skillCategories = [
        {
            icon: Smartphone,
            title: "Développement Mobile",
            description: "Spécialisation en applications cross-platform",
            skills: [
                { name: "Flutter", level: 95, experience: "3+ ans", projects: ["EduNova", "SmilePay", "ANSUT Digital"] },
                { name: "React Native", level: 75, experience: "2 ans", projects: ["Projets clients"] },
                { name: "Android Native", level: 70, experience: "1.5 ans", projects: ["Applications natives"] },
                { name: "iOS", level: 65, experience: "1 an", projects: ["Développement iOS"] }
            ]
        },
        {
            icon: Monitor,
            title: "Développement Web",
            description: "Applications web modernes et performantes",
            skills: [
                { name: "React.js", level: 90, experience: "3 ans", projects: ["RailTrack", "LYS Gestion"] },
                { name: "Node.js", level: 85, experience: "3 ans", projects: ["Backends multiples", "APIs"] },
                { name: "JavaScript", level: 92, experience: "3+ ans", projects: ["Tous projets web"] },
                { name: "PHP", level: 75, experience: "2 ans", projects: ["Epsilon TAC", "Projets legacy"] },
                { name: "Tailwind CSS", level: 88, experience: "2 ans", projects: ["Interfaces modernes"] },
                { name: "TypeScript", level: 70, experience: "1.5 ans", projects: ["Projets scalables"] }
            ]
        },
        {
            icon: Brain,
            title: "Intelligence Artificielle",
            description: "IA et solutions intelligentes",
            skills: [
                { name: "Machine Learning", level: 80, experience: "2 ans", projects: ["EduNova", "Personnalisation"] },
                { name: "IA Conversationnelle", level: 75, experience: "1.5 ans", projects: ["EduNova Chatbot"] },
                { name: "Analyse de Données", level: 70, experience: "1.5 ans", projects: ["Analytics projets"] },
                { name: "Vision par Ordinateur", level: 60, experience: "1 an", projects: ["Projets R&D"] }
            ]
        },
        {
            icon: Cog,
            title: "DevOps & Architecture",
            description: "Infrastructure et déploiement",
            skills: [
                { name: "Docker", level: 85, experience: "2 ans", projects: ["Containerisation apps"] },
                { name: "Git/GitHub", level: 95, experience: "3+ ans", projects: ["Tous projets"] },
                { name: "Géolocalisation", level: 80, experience: "2 ans", projects: ["RailTrack", "Bassia Taxi"] },
                { name: "REST APIs", level: 90, experience: "3 ans", projects: ["Backends multiples"] },
                { name: "Microservices", level: 75, experience: "1.5 ans", projects: ["Architecture SITARAIL"] },
                { name: "Firebase", level: 70, experience: "2 ans", projects: ["Apps mobiles"] }
            ]
        }
    ];

    const ActiveIcon = skillCategories[activeCategory].icon;

    const certifications = [
        {
            title: "JavaScript Advanced",
            platform: "Udemy",
            year: "2024",
            verified: true
        },
        {
            title: "Node.js Complete",
            platform: "Udemy",
            year: "2024",
            verified: true
        },
        {
            title: "Flutter Development",
            platform: "W3 Schools",
            year: "2024",
            verified: true
        },
        {
            title: "React.js Expert",
            platform: "Udemy",
            year: "2024",
            verified: true
        }
    ];

    const ProgressBar = ({ level, animated = false }) => (
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div
                className={`h-full bg-gradient-to-r from-white/70 to-white/40 rounded-full transition-all duration-1000 ${animated ? 'animate-pulse' : ''}`}
                style={{ width: `${level}%` }}
            />
        </div>
    );

    const SkillCard = ({ skill, index }) => (
        <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                    <p className="text-gray-400 text-xs">{skill.experience}</p>
                </div>
                <span className="text-white text-xs font-bold">{skill.level}%</span>
            </div>

            <ProgressBar level={skill.level} animated={true} />

            <div className="mt-3">
                <p className="text-gray-400 text-xs mb-2">Projets associés:</p>
                <div className="flex flex-wrap gap-1">
                    {skill.projects.slice(0, 2).map((project, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {project}
                        </span>
                    ))}
                    {skill.projects.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            +{skill.projects.length - 2}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <section id="competences" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Compétences Techniques
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Expertise développée à travers des projets d'innovation et des réalisations concrètes
                    </p>
                </div>

                {/* Navigation des catégories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${activeCategory === index
                                    ? 'bg-white/15 border-white/30 text-white'
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            <category.icon size={20} className="mr-2" />
                            <span className="text-sm font-medium">{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* Contenu de la catégorie active */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
                    <div className="flex items-center mb-6">
                        <ActiveIcon className="text-white mr-4" size={32} />
                        <div>
                            <h3 className="text-2xl font-semibold text-white">
                                {skillCategories[activeCategory].title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {skillCategories[activeCategory].description}
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories[activeCategory].skills.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                {/* Section Certifications */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                        <Award className="text-white mr-4" size={28} />
                        <h3 className="text-xl font-semibold text-white">Certifications</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center justify-center mb-3">
                                    <Award className="text-white mr-2" size={20} />
                                    {cert.verified && (
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                </div>
                                <h4 className="text-white font-medium text-sm mb-1">{cert.title}</h4>
                                <p className="text-gray-300 text-xs mb-1">{cert.platform}</p>
                                <span className="text-gray-400 text-xs">{cert.year}</span>
                            </div>
                        ))}
                    </div>

                    {/* Lien GitHub */}
                    <div className="mt-8 text-center">
                        <a
                            href="https://github.com/LycorisBlue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 text-white"
                        >
                            <Github className="mr-2" size={20} />
                            <span>Voir mes projets sur GitHub</span>
                            <ExternalLink className="ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;