import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Plateforme e-commerce complète avec gestion des stocks, paiements et analytics",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            github: "#",
            demo: "#"
        },
        {
            title: "Mobile Banking App",
            description: "Application mobile de banking avec sécurité avancée et interface intuitive",
            tech: ["Flutter", "Firebase", "Biometric Auth"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
            github: "#",
            demo: "#"
        },
        {
            title: "Analytics Dashboard",
            description: "Dashboard temps réel pour analyser les données avec visualisations interactives",
            tech: ["Vue.js", "D3.js", "Express", "WebSocket"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            github: "#",
            demo: "#"
        },
        {
            title: "Task Management System",
            description: "Système de gestion de tâches collaboratif avec notifications en temps réel",
            tech: ["Next.js", "Prisma", "Socket.io", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projets" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Projets récents
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Découvrez quelques-uns de mes projets les plus récents et innovants
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                    <a
                                        href={project.github}
                                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <Github size={16} className="text-white" />
                                    </a>

                                    <a
                                        href={project.demo}
                                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <ExternalLink size={16} className="text-white" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Projects;