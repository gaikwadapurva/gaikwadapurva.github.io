import { EXPERIENCE } from "../../data/experience";

import Container from "../ui/Container";
import ExperienceCard from "./ExperienceCard";

import "./Experience.css";

const Experience = () => {
    return (
        <section
            id="experience"
            className="experience"
        >
            <Container>
                <div className="experience__container">
                    <div className="experience__header">
                        <p className="experience__eyebrow">
                            Experience
                        </p>

                        <h2 className="experience__title">
                            Building software across geospatial, fintech, and ad-tech domains.
                        </h2>

                        <p className="experience__subtitle">
                            Over the past 8+ years, I've built enterprise applications,
                            modernized legacy platforms, optimized distributed systems,
                            and delivered production-ready software across multiple industries.
                        </p>
                    </div>

                    <div className="experience__list">
                        {EXPERIENCE.map((experience) => (
                            <ExperienceCard
                                key={`${experience.company}-${experience.role}`}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Experience;