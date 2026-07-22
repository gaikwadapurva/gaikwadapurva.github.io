import type { Experience } from "../../data/experience";

import "./ExperienceCard.css";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({
    experience
}: ExperienceCardProps) => {
    return (
        <article className="experience-card">
            <div className="experience-card__header">
                <div>
                    <h3 className="experience-card__role">
                        {experience.role}
                    </h3>

                    <p className="experience-card__company">
                        {experience.company}
                    </p>
                </div>

                <div className="experience-card__meta">
                    <p>{experience.duration}</p>
                    <p>{experience.location}</p>
                </div>
            </div>

            <p className="experience-card__description">
                {experience.description}
            </p>

            <div className="experience-card__section">
                <h4>Project Highlights</h4>

                <ul className="experience-card__highlights">
                    {experience.highlights.map((highlight) => (
                        <li key={highlight}>
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="experience-card__technologies">
                {experience.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="experience-card__technology"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default ExperienceCard;