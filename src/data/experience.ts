export interface Experience {
    id: string;
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
        id: "here",
        company: "HERE Technologies",
        role: "Software Engineer II - Full Stack",
        duration: "Feb 2024 – Present",
        location: "Mumbai, Maharashtra, India",
        description:
            "Worked on enterprise geospatial platforms and large-scale mapping systems that power location intelligence, digital maps, and internal engineering workflows.",
        highlights: [
            "Sole-owned the end-to-end modernization of HERE's Enterprise Geographic Information System (EGIS), a legacy Maven/GWT application with multiple modules, to React, TypeScript, and Spring Boot within 3 months, independently driving architecture design, development, integration, and testing, with a target of reducing infrastructure costs by 50% upon production deployment.",
            "Owned frontend development of an internal imagery dashboard used by 2,000–3,000+ employees to monitor millions of crowdsourced images uploaded daily.",
            "Developed Java and Kafka-based backend services for high-volume geospatial data ingestion, decoupling producers and consumers to improve system reliability.",
            "Contributed to technical design reviews for migration strategies and API contracts, evaluating architectural alternatives, implementation approaches, maintainability, and engineering costs.",
            "Mentored junior engineers through technical guidance, code reviews, and knowledge sharing to support engineering development and code quality.",
            "Identified and decommissioned an unused AWS Classic Load Balancer while investigating deployments across EC2, ECS, S3, and Lambda, eliminating unnecessary infrastructure costs."
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
        id: "ria",
        company: "RIA Advisory LLP",
        role: "Software Engineer - Java",
        duration: "Jan 2022 – Jan 2024",
        location: "Mumbai, Maharashtra, India",
        description:
            "Built enterprise digital banking solutions that enabled U.S. financial institutions to streamline online account opening and customer onboarding.",
        highlights: [
            "Developed object-oriented Apex (Java-like) business logic, validations, and integrations for Terafina’s digital account opening platform, supporting onboarding for multiple U.S. banks including First State Bank, Lincoln Savings Bank, SouthState Bank, and People’s Savings Bank.",
            "Engineered bank-specific onboarding workflows using Salesforce Apex and Angular, implementing customized business rules to improve the end-to-end customer onboarding experience.",
            "Investigated and resolved production issues across frontend and backend components, improving reliability while preserving client-specific functionality.",
            "Contributed to design and cross-functional code reviews, evaluating implementation approaches, maintainability, and adherence to engineering standards.",
            "Mentored junior engineers on application architecture and banking onboarding workflows."
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
        id: "itiviti",
        company: "Itiviti (Broadridge)",
        role: "Software Engineer - Full Stack",
        duration: "Jul 2021 – Dec 2021",
        location: "Mumbai, Maharashtra, India",
        description:
            "Developed enterprise trading and capital markets software supporting high-performance financial systems for global investment banking operations.",
        highlights: [
            "Developed Java and Angular onboarding workflow features for FIX Conductor, Itiviti’s FIX counterparty certification and onboarding platform, supporting Goldman Sachs’ trading operations.",
            "Collaborated with cross-functional engineering teams to deliver and troubleshoot features in a financial trading environment, meeting performance, compliance, and code-quality requirements.",
            "Guided junior engineers on development best practices."
        ],
        technologies: [
            "Java",
            "Angular",
            "SQL",
            "Git"
        ]
    },
    {
        id: "medianet",
        company: "Media.net",
        role: "Software Engineer - Product Engineering",
        duration: "Aug 2018 – Jun 2021",
        location: "Mumbai, Maharashtra, India",
        description:
            "Built large-scale advertising technology platforms that processed real-time ad auctions and content monetization for high-traffic web applications.",
        highlights: [
            "Developed Java and JavaScript components for real-time bidding (RTB) solutions across Content Monetization, Header Bidding, and Prebid platforms, supporting programmatic advertising workflows.",
            "Served as the technical point of contact for Demand-Side Platform (DSP), Supply-Side Platform (SSP), and RTB integrations, working with business teams to resolve integration issues.",
            "Ran A/B and AABB experiments on ad formats and bidding strategies, using MySQL and an in-house Hive-based analytics tool to analyze performance and find revenue optimization opportunities.",
            "Investigated and resolved ad-serving issues across HTML, CSS, JavaScript, and backend integrations, using Google Ad Manager for reporting and troubleshooting.",
            "Partnered with Product Managers on product enhancements and feature rollouts, translating technical changes into guidance for business teams across locations.",
            "Mentored junior engineers and conducted technical interviews for Data Analyst and Product Operations Analyst roles."
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