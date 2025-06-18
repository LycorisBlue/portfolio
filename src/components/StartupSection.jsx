// src/components/StartupSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    Users,
    Trophy,
    Target,
    Star,
    CheckCircle,
    ArrowRight,
    Lightbulb,
    Globe,
    Zap,
    Heart,
    Shield,
    Leaf
} from "lucide-react";
import {
    startupInfo,
    values,
    projects,
    partners,
    teamMembers,
    achievements,
    businessModel,
    futureGoals
} from "../data/startupData.js";

const StartupSection = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Présentation', icon: Building2 },
        { id: 'projects', label: 'Projets', icon: Zap },
        { id: 'team', label: 'Équipe', icon: Users },
        { id: 'partners', label: 'Partenaires', icon: Globe },
        { id: 'achievements', label: 'Distinctions', icon: Trophy }
    ];

    const StatCard = ({ label, value, icon: Icon }) => (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
                <Icon className="text-white" size={20} />
                <span className="text-2xl font-bold text-white">{value}</span>
            </div>
            <p className="text-gray-400 text-sm">{label}</p>
        </div>
    );

    const ProjectBadge = ({ project }) => (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center text-2xl">
                    {project.badge.icon}
                </div>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white">
                    {project.badge.text}
                </span>
            </div>

            <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

            <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-gray-300">
                    {project.status}
                </span>
                <ArrowRight className="text-gray-400 group-hover:text-white transition-colors" size={16} />
            </div>
        </div>
    );

    const TeamMember = ({ member }) => (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white border border-white/20">
                {member.initial}
            </div>
            <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
            <p className="text-gray-400 text-sm mb-2">{member.role}</p>
            <p className="text-gray-400 text-xs mb-3">{member.specialization}</p>
            <div className="flex flex-wrap gap-1 justify-center">
                {member.expertise.map((skill, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    const PartnerCard = ({ partner }) => (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center mr-4 text-lg font-bold text-white border border-white/20">
                    {partner.logo}
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-white">{partner.name}</h4>
                    <p className="text-gray-400 text-sm">{partner.type}</p>
                </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">{partner.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300">
                    {partner.relationship}
                </span>
                <span className="text-xs text-gray-400">
                    {partner.projects.length} projet{partner.projects.length > 1 ? 's' : ''}
                </span>
            </div>
        </div>
    );

    const ValueIcon = ({ title }) => {
        const iconMap = {
            "Innovation & Excellence": Lightbulb,
            "Engagement & Impact Social": Heart,
            "Fiabilité & Sécurité": Shield,
            "Collaboration & Esprit d'Équipe": Users,
            "Développement Durable": Leaf,
            "Accessibilité & Inclusion Technologique": Globe
        };
        return iconMap[title] || Star;
    };

    const OverviewContent = () => (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{startupInfo.name}</h3>
                <p className="text-xl text-gray-400 mb-6">{startupInfo.tagline}</p>
                <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                    {startupInfo.description}
                </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <StatCard label="Projets complétés" value={startupInfo.stats.projectsCompleted} icon={CheckCircle} />
                <StatCard label="Clients actifs" value={startupInfo.stats.activeClients} icon={Users} />
                <StatCard label="Membres équipe" value={startupInfo.stats.teamMembers} icon={Users} />
                <StatCard label="Années d'activité" value={startupInfo.stats.yearsActive} icon={Target} />
                <StatCard label="Secteurs servis" value={startupInfo.stats.sectorsServed} icon={Globe} />
                <StatCard label="Projets innovation" value={startupInfo.stats.innovationProjects} icon={Lightbulb} />
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Target className="text-gray-400 mr-3" size={24} />
                        Notre Mission
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{startupInfo.mission}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Star className="text-gray-400 mr-3" size={24} />
                        Notre Vision
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{startupInfo.vision}</p>
                </div>
            </div>

            {/* Valeurs */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-6 text-center">Nos Valeurs</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {values.map((value, index) => {
                        const IconComponent = ValueIcon({ title: value.title });
                        return (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center mb-2">
                                    <IconComponent className="text-gray-400 mr-3" size={20} />
                                    <h5 className="text-white font-medium text-sm">{value.title}</h5>
                                </div>
                                <p className="text-gray-400 text-xs">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const ProjectsContent = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-white mb-4">Nos Projets Innovants</h4>
                <p className="text-gray-400">Solutions technologiques transformant les secteurs clés</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectBadge key={project.id} project={project} />
                ))}
            </div>
        </div>
    );

    const TeamContent = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-white mb-4">Notre Équipe Fondatrice</h4>
                <p className="text-gray-400">Professionnels expérimentés unis par une vision commune</p>
            </div>

            {/* Première ligne - 3 premiers membres */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
                {teamMembers.slice(0, 3).map((member) => (
                    <TeamMember key={member.id} member={member} />
                ))}
            </div>

            {/* Deuxième ligne - 2 derniers membres centrés */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {teamMembers.slice(3, 5).map((member) => (
                    <TeamMember key={member.id} member={member} />
                ))}
            </div>
        </div>
    );

    const PartnersContent = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-white mb-4">Nos Partenaires</h4>
                <p className="text-gray-400">Collaborations stratégiques pour un impact maximal</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                    <PartnerCard key={index} partner={partner} />
                ))}
            </div>
        </div>
    );

    const AchievementsContent = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-white mb-4">Distinctions & Réalisations</h4>
                <p className="text-gray-400">Reconnaissance de notre impact et innovation</p>
            </div>

            {/* Réalisations */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center mb-4">
                            <Trophy className="text-gray-400 mr-3" size={24} />
                            <span className="text-sm px-3 py-1 bg-white/10 rounded-full text-gray-300">{achievement.year}</span>
                        </div>
                        <h5 className="text-lg font-semibold text-white mb-2">{achievement.title}</h5>
                        <p className="text-gray-400">{achievement.description}</p>
                    </div>
                ))}
            </div>

            {/* Objectifs futurs */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h5 className="text-xl font-semibold text-white mb-6 text-center">Roadmap & Objectifs</h5>
                <div className="space-y-6">
                    {futureGoals.map((goal, index) => (
                        <div key={index} className="border-l-2 border-gray-400 pl-6 relative">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                            <h6 className="text-lg font-semibold text-white mb-2">{goal.year}</h6>
                            <ul className="space-y-1">
                                {goal.objectives.map((objective, objIndex) => (
                                    <li key={objIndex} className="text-gray-400 flex items-center">
                                        <CheckCircle className="text-gray-400 mr-2" size={16} />
                                        {objective}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewContent />;
            case 'projects': return <ProjectsContent />;
            case 'team': return <TeamContent />;
            case 'partners': return <PartnersContent />;
            case 'achievements': return <AchievementsContent />;
            default: return <OverviewContent />;
        }
    };

    return (
        <section id="startup" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header & Tabs */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Ma Startup
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        MEDEV GROUP - Innovation au service des communautés et organisations
                    </p>
                </div>

                <div className="flex flex-wrap justify-center mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-white/20 text-white border border-white/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <IconComponent className="mr-2" size={18} />
                                <span className="font-medium">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Container with Framer Motion */}
                <div className="h-[700px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 overflow-y-auto custom-scrollbar p-8"
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Contact Footer */}
                <div className="mt-12 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Intéressé par nos solutions ?</h4>
                    <p className="text-gray-400 mb-6">Contactez-nous pour découvrir comment MEDEV GROUP peut transformer votre organisation</p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span>📧 {startupInfo.email}</span>
                        <span>📱 {startupInfo.phone}</span>
                        <span>📍 {startupInfo.location}</span>
                        <span>🌐 {startupInfo.website}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartupSection;