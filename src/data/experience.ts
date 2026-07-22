export interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string;
    highlights: string[];
    technologies: string[];
}

export const EXPERIENCE: Experience[] = [
    {
        company: "HERE Technologies",
        role: "Software Engineer II - Full Stack",
        duration: "Feb 2024 – Present",
        location: "Mumbai, Maharashtra, India",
        description:
            "Worked on enterprise geospatial platforms and large-scale mapping systems that power location intelligence, digital maps, and internal engineering workflows.",
        highlights: [
            "Designed and developed scalable Java backend services powering enterprise geospatial data processing systems, supporting high-volume production workflows with a focus on performance and reliability.",
            "Designed distributed data processing workflows that improved system throughput, fault tolerance, and operational reliability for large-scale production pipelines.",
            "Led the modernization of a legacy enterprise geospatial asset management platform by defining the migration architecture from GWT to React and TypeScript, reducing infrastructure and maintenance costs by 50% while improving scalability, maintainability, and developer productivity.",
            "Designed and developed the frontend for an internal geospatial imagery management platform, enabling engineering teams to monitor street-level imagery and manage large-scale image collection campaigns using React and TypeScript.",
            "Diagnosed and resolved production issues across cloud-based AWS environments through log analysis, debugging, and root cause analysis, supporting services including EC2, ECS, Lambda, S3, ELB, and AMI-based deployments."
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "React",
            "TypeScript",
            "AWS",
            "MongoDB",
            "REST APIs",
            "GWT"
        ]
    },
    {
        company: "RIA Advisory LLP",
        role: "Software Engineer - Java",
        duration: "Jan 2022 – Jan 2024",
        location: "Mumbai, Maharashtra, India",
        description:
            "Built enterprise digital banking solutions that enabled U.S. financial institutions to streamline online account opening and customer onboarding.",
        highlights: [
            "Developed full-stack digital banking applications using Salesforce, Apex, and Angular, enabling secure online account opening across multiple banking product types.",
            "Optimized backend services and database interactions to improve application responsiveness, system efficiency, and production performance.",
            "Investigated and resolved production issues through performance monitoring, log analysis, and cross-functional collaboration to ensure application reliability."
        ],
        technologies: [
            "Salesforce",
            "Apex",
            "Angular",
            "REST APIs",
            "SQL"
        ]
    },
    {
        company: "Itiviti (Broadridge)",
        role: "Software Engineer - Full Stack",
        duration: "Jul 2021 – Dec 2021",
        location: "Mumbai, Maharashtra, India",
        description:
            "Developed enterprise trading and capital markets software supporting high-performance financial systems for global investment banking operations.",
        highlights: [
            "Developed and enhanced enterprise trading and financial software using Java and Angular for Goldman Sachs, supporting global investment banking workflows.",
            "Collaborated with cross-functional engineering teams to deliver scalable, high-performance features that met production standards and evolving business requirements.",
            "Investigated production issues, optimized application performance, and improved code quality to enhance the reliability and stability of enterprise financial systems."
        ],
        technologies: [
            "Java",
            "Angular",
            "SQL",
            "Git"
        ]
    },
    {
        company: "Media.net",
        role: "Software Engineer - Product Engineering",
        duration: "Aug 2018 – Jun 2021",
        location: "Mumbai, Maharashtra, India",
        description:
            "Built large-scale advertising technology platforms that processed real-time ad auctions and content monetization for high-traffic web applications.",
        highlights: [
            "Developed large-scale advertising technology platforms that processed real-time bidding (RTB) auctions and content monetization for high-traffic web applications.",
            "Engineered and optimized real-time ad serving workflows, improving system reliability and revenue performance through data-driven experimentation and performance tuning.",
            "Analyzed large-scale production datasets using MySQL and Hive to identify infrastructure bottlenecks and drive system performance and revenue optimizations.",
            "Supported distributed advertising platform integrations and resolved production incidents across high-throughput, real-time serving environments.",
            "Automated reporting and operational workflows, reducing manual effort and improving engineering efficiency."
        ],
        technologies: [
            "Java",
            "MySQL",
            "Hive",
            "Distributed Systems",
            "RTB"
        ]
    }
];