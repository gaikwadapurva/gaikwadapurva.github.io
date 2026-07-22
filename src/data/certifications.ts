export interface Certification {
    id: string;
    name: string;
    issuer: string;
    level: string;
    issuedOn: string;
    credentialId: string;
    credentialUrl: string;
    description: string;
}

export const CERTIFICATIONS: Certification[] = [
    {
        id: "codechef-foundation-dsa",
        name: "CodeChef Certificate in Data Structures & Algorithms",
        issuer: "CodeChef",
        level: "Foundation Level",
        issuedOn: "3 April 2022",
        credentialId: "eb2b13c",
        credentialUrl: "https://www.codechef.com/certificates/public/eb2b13c",
        description:
            "Successfully passed the Foundation Level Exam, demonstrating proficiency in core data structures, algorithms, complexity analysis, and problem-solving."
    }
];