import { EXPERIENCE } from "../../data/experience";
import Container from "../ui/Container";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import { useRef, useState } from "react";

const Experience = () => {
    const [expandedExperienceId, setExpandedExperienceId] = useState<
        string | null
    >(EXPERIENCE[0].id);

    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const handleToggle = (experienceId: string) => {
        if (expandedExperienceId === experienceId) {
            setExpandedExperienceId(null);
            return;
        }

        setExpandedExperienceId(experienceId);

        setExpandedExperienceId(experienceId);

        setTimeout(() => {
            const card = cardRefs.current[experienceId];

            if (!card) {
                return;
            }

            const header = document.querySelector(".header") as HTMLElement | null;

            const navbarHeight = header?.offsetHeight ?? 80;

            const top = card.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }, 350);
    };

    const handleExpandAnimationComplete = (experienceId: string) => {
        const card = cardRefs.current[experienceId];

        if (!card) {
            return;
        }

        const navbarHeight = 80;

        const top =
            card.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return (
        <section id="experience" className="experience">
            <Container>
                <div className="experience__container">
                    <div className="experience__left">
                        <p className="experience__eyebrow">Experience</p>

                        <h2 className="experience__title">
                            Building software across geospatial, fintech, and ad-tech domains.
                        </h2>

                        <p className="experience__subtitle">
                            Over the past 8+ years, I've built enterprise applications,
                            modernized legacy platforms, optimized distributed systems, and
                            delivered production-ready software across multiple industries.
                        </p>
                    </div>

                    <div className="experience__right">
                        {EXPERIENCE.map((experience) => (
                            <div
                                key={experience.id}
                                ref={(element) => {
                                    cardRefs.current[experience.id] = element;
                                }}
                            >
                                <ExperienceCard
                                    experience={experience}
                                    isExpanded={expandedExperienceId === experience.id}
                                    onToggle={handleToggle}
                                    onExpandAnimationComplete={handleExpandAnimationComplete}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Experience;
