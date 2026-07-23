export interface SkillCategory {
    title: string;
    skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Core Concepts",
        skills: [
            "Data Structures & Algorithms",
            "System Design",
            "Performance Optimization",
        ],
    },
    {
        title: "Languages",
        skills: [
            "Java",
            "JavaScript",
            "TypeScript",
            "Apex",
        ],
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            "Spring Boot",
            "Hibernate",
            "React",
            "Angular",
        ],
    },
    {
        title: "Architecture",
        skills: [
            "Microservices",
            "Distributed Systems",
            "REST APIs",
        ],
    },
    {
        title: "Cloud & Platforms",
        skills: [
            "AWS",
            "Salesforce",
        ],
    },
    {
        title: "Databases",
        skills: [
            "MySQL",
            "MongoDB",
        ],
    },
    {
        title: "AI-Assisted Development",
        skills: [
            "GitHub Copilot",
            "ChatGPT",
        ],
    },
    {
        title: "Developer Tools & DevOps",
        skills: [
            "Git",
            "GitHub",
            "Maven",
            "Jenkins",
            "CI/CD",
        ],
    },
];