// src/data/startupData.js

export const startupInfo = {
    name: "MEDEV GROUP",
    tagline: "L'innovation au service des communautés et des organisations",
    description: "Startup fondée par cinq jeunes passionnés de technologie. Nous concevons des produits technologiques innovants adaptés aux réalités africaines et offrons des services numériques personnalisés pour accompagner les organisations dans leur transformation digitale.",
    mission: "Fournir des solutions numériques innovantes, accessibles et efficaces. Encourager et promouvoir l'innovation locale en technologie. Contribuer au développement durable à travers des projets.",
    vision: "Devenir un leader africain de l'innovation technologique en offrant des solutions numériques durables et accessibles qui transforment les organisations et améliorent la qualité de vie des communautés.",
    founded: "2024",
    website: "https://medev-group.com",
    email: "contacts@medev-group.com",
    phone: "07 89 776 028",
    location: "Abidjan, Côte d'Ivoire",

    // Statistiques clés
    stats: {
        projectsCompleted: 6,
        activeClients: 4,
        teamMembers: 5,
        yearsActive: 1,
        sectorsServed: 4,
        innovationProjects: 5
    }
};

export const values = [
    {
        title: "Innovation & Excellence",
        description: "Créer des solutions technologiques de pointe"
    },
    {
        title: "Engagement & Impact Social",
        description: "Contribuer positivement aux communautés"
    },
    {
        title: "Fiabilité & Sécurité",
        description: "Garantir la protection et la stabilité"
    },
    {
        title: "Collaboration & Esprit d'Équipe",
        description: "Travailler ensemble vers un objectif commun"
    },
    {
        title: "Développement Durable",
        description: "Solutions respectueuses de l'environnement"
    },
    {
        title: "Accessibilité & Inclusion Technologique",
        description: "Rendre la technologie accessible à tous"
    }
];

export const projects = [
    {
        id: 1,
        name: "O'Secours",
        category: "Innovation Sociale",
        description: "Système d'alerte et de gestion d'interventions d'urgence en temps réel",
        badge: {
            color: "bg-red-500",
            icon: "🚨",
            text: "Urgences"
        },
        features: [
            "Application mobile citoyens",
            "Application mobile secouristes",
            "Application web centres de contrôle",
            "Géolocalisation automatique",
            "Suivi temps réel des interventions"
        ],
        clients: ["Institutions publiques", "Entreprises privées", "Citoyens"],
        status: "En développement",
        impact: "Réduction des temps de réponse d'urgence"
    },
    {
        id: 2,
        name: "Nautilus",
        category: "EdTech",
        description: "Plateforme unifiée de gestion universitaire révolutionnant l'administration académique",
        badge: {
            color: "bg-blue-500",
            icon: "🎓",
            text: "Éducation"
        },
        features: [
            "Portail web étudiants",
            "Application web administration",
            "Portail web professeurs",
            "Gestion automatisée avec IA",
            "Communication WhatsApp Business"
        ],
        clients: ["Universités", "Grandes écoles"],
        status: "SaaS actif",
        impact: "Automatisation des tâches répétitives universitaires"
    },
    {
        id: 3,
        name: "RailTrack",
        category: "Infrastructure",
        description: "Système de surveillance et gestion d'infrastructure ferroviaire avec solution personnalisée",
        badge: {
            color: "bg-green-500",
            icon: "🚂",
            text: "Transport"
        },
        features: [
            "Application mobile interactive",
            "Application web de gestion",
            "Géolocalisation précise",
            "Reporting temps réel"
        ],
        clients: ["SITARAIL"],
        status: "Livré juillet 2025",
        impact: "70% de réduction du temps administratif"
    },
    {
        id: 4,
        name: "ARTCI Signal",
        category: "Cybersécurité",
        description: "Système d'alerte d'incidents de cybercriminalité et harcèlement en ligne",
        badge: {
            color: "bg-purple-500",
            icon: "🔒",
            text: "Sécurité"
        },
        features: [
            "Application mobile/web",
            "Signalement d'incidents",
            "Plateforme accessible aux citoyens",
            "Pont entre citoyens et ARTCI"
        ],
        clients: ["ARTCI - Institution publique"],
        status: "En développement",
        impact: "Sécurisation de l'espace numérique ivoirien"
    },
    {
        id: 5,
        name: "Weather Stations",
        category: "IoT & Monitoring",
        description: "Système électronique IoT de capteurs connectés pour surveillance météorologique",
        badge: {
            color: "bg-yellow-500",
            icon: "🌦️",
            text: "IoT"
        },
        features: [
            "Capteurs connectés à dashboard",
            "Collecte temps réel (pluie, température, niveau d'eau)",
            "Gestion proactive des risques",
            "Planification infrastructure ferroviaire"
        ],
        clients: ["SITARAIL"],
        status: "Prototype fonctionnel",
        impact: "Prévention des risques météorologiques"
    }
];

export const partners = [
    {
        name: "SITARAIL",
        type: "Infrastructure",
        description: "Compagnie ferroviaire ivoirienne",
        projects: ["RailTrack", "Weather Stations"],
        relationship: "Client B2B",
        logo: "S"
    },
    {
        name: "ARTCI",
        type: "Régulation",
        description: "Autorité de Régulation des Télécommunications de Côte d'Ivoire",
        projects: ["ARTCI Signal"],
        relationship: "Client B2G",
        logo: "A"
    },
    {
        name: "Universités Partenaires",
        type: "Éducation",
        description: "Établissements d'enseignement supérieur",
        projects: ["Nautilus"],
        relationship: "Clients B2B",
        logo: "U"
    },
    {
        name: "Institutions Publiques",
        type: "Gouvernement",
        description: "Services publics et d'urgence",
        projects: ["O'Secours"],
        relationship: "Clients B2G",
        logo: "I"
    },
    {
        name: "Smart Technology",
        type: "Entreprise",
        description: "Partenaire technologique",
        projects: ["Solutions personnalisées"],
        relationship: "Partenaire",
        logo: "S"
    }
];

export const teamMembers = [
    {
        id: 1,
        name: "Edgar Kouassi",
        role: "CEO",
        specialization: "Géomaticien, Développeur GIS Full-Stack",
        initial: "E",
        description: "Visionnaire et leader technique spécialisé dans les systèmes d'information géographique",
        expertise: ["GIS", "Leadership", "Vision stratégique"]
    },
    {
        id: 2,
        name: "Daniel Boua",
        role: "Product Lead",
        specialization: "UX/UI Designer",
        initial: "D",
        description: "Expert en expérience utilisateur et design de produits numériques",
        expertise: ["UX/UI Design", "Product Management", "Design Thinking"]
    },
    {
        id: 3,
        name: "Fulgence Medi",
        role: "CTO",
        specialization: "Architecte Logiciel, Développeur Full-Stack",
        initial: "F",
        description: "Architecte technique et développeur full-stack expert en solutions web et mobile",
        expertise: ["Architecture logicielle", "Full-Stack Development", "Innovation technique"]
    },
    {
        id: 4,
        name: "Paul Tiene",
        role: "CTO IoT",
        specialization: "Ingénieur Électrique, Développeur Systèmes IoT",
        initial: "P",
        description: "Spécialiste des systèmes embarqués et solutions IoT",
        expertise: ["IoT", "Systèmes embarqués", "Électronique"]
    },
    {
        id: 5,
        name: "Sanle Valent",
        role: "Market Analyst",
        specialization: "Chef de Projet IT, Testeur",
        initial: "S",
        description: "Analyste marché et chef de projet spécialisé en gestion de projets IT",
        expertise: ["Analyse marché", "Gestion de projet", "Testing & QA"]
    }
];

export const achievements = [
    {
        title: "2ᵉ Prix National d'Excellence",
        description: "Distinction nationale, deuxième Prix National d'Excellence",
        year: "2024",
        type: "award"
    },
    {
        title: "Prix Coup de Cœur AGL – Hackathon PangaeaX",
        description: "Prix Coup de Cœur AGL pour l'application de gestion des crises d’inondation lors du Hackathon PangaeaX Côte d'Ivoire",
        year: "2024",
        type: "award"
    },
    {
        title: "Incubation au Centre Yiri / AGL",
        description: "Intégration au programme d'incubation du centre Yiri d'Africa Global Logistics",
        year: "2024 - 2025",
        type: "incubation"
    },
    {
        title: "Hackathon MASS",
        description: "Participation au Hackathon pré-MASS organisé par l'Agence Spatiale Africaine à Abidjan",
        year: "2025",
        type: "event"
    }
];


export const businessModel = {
    productRevenue: {
        description: "Licences annuelles et frais d'accès",
        examples: ["O'Secours", "Nautilus"],
        model: "SaaS + Licences"
    },
    serviceRevenue: {
        description: "Développement sur mesure et consulting",
        examples: ["Applications personnalisées", "Transformation digitale", "IoT", "Cybersécurité"],
        model: "Services à la demande"
    },
    targetMarkets: {
        description: "Marché cible principal : Afrique de l'Ouest",
        focus: ["Côte d'Ivoire", "Expansion régionale prévue"],
        sectors: ["Éducation", "Infrastructure", "Services publics", "Urgences"]
    }
};

export const futureGoals = [
    {
        year: "2025",
        objectives: [
            "Lancement officiel Nautilus & O'Secours",
            "Livraison projets SITARAIL et ARTCI",
            "Consolidation de l'équipe technique"
        ]
    },
    {
        year: "2026",
        objectives: [
            "Expansion clientèle universitaire",
            "Développement nouveaux produits IoT",
            "Renforcement partenariats institutionnels"
        ]
    },
    {
        year: "2029",
        objectives: [
            "Leadership innovation technologique en Afrique",
            "Expansion Afrique francophone",
            "Solutions IA intégrées dans tous nos produits"
        ]
    }
];