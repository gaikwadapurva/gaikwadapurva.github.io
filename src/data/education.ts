export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    duration: string;
}

export const EDUCATION: Education[] = [
    {
        id: "cdac",
        degree: "Post Graduate e-Diploma in Advanced Computing (PG-eDAC)",
        institution: "Centre for Development of Advanced Computing (C-DAC), ACTS Pune",
        location: "Pune, Maharashtra, India",
        duration: "Sep 2020 – Apr 2021"
    },
    {
        id: "be",
        degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
        institution: "University of Mumbai",
        location: "Mumbai, Maharashtra, India",
        duration: "Aug 2014 – May 2018"
    }
];