import { Smartphone, Monitor, Server, Cog } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            icon: Monitor,
            title: "Développement Web",
            skills: ["TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "SASS"]
        },
        {
            icon: Smartphone,
            title: "Développement Mobile",
            skills: ["Flutter", "React Native", "iOS", "Android", "PWA", "Ionic"]
        },
        {
            icon: Server,
            title: "Backend & Base de données",
            skills: ["Node.js", "Laravel", "Python", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            icon: Cog,
            title: "Architecture & DevOps",
            skills: ["Docker", "AWS", "CI/CD", "Microservices", "REST API", "GraphQL"]
        }
    ];

    return (
        <section id="competences" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Compétences
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 opacity-50"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Une expertise technique complète pour répondre à tous vos besoins de développement
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/10 rounded-xl mr-4 group-hover:bg-white/20 transition-colors duration-300">
                                    <category.icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill}
                                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                                        style={{ animationDelay: `${index * 200 + skillIndex * 50}ms` }}
                                    >
                                        {skill}
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

export default Skills;