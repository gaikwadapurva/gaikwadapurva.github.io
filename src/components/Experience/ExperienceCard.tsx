import type { Experience } from "../../data/experience";
import "./ExperienceCard.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

interface ExperienceCardProps {
    experience: Experience;
    isExpanded: boolean;
    onToggle: (experienceId: string) => void;
    onExpandAnimationComplete: (experienceId: string) => void;
}

const ExperienceCard = ({
    experience,
    isExpanded,
    onToggle,
    onExpandAnimationComplete,
}: ExperienceCardProps) => {
    return (
        <article className="experience-card">
            <header className="experience-card__header">
                <div>
                    <h3 className="experience-card__role">{experience.role}</h3>

                    <p className="experience-card__company">{experience.company}</p>
                </div>

                <div className="experience-card__meta">
                    <p>{experience.duration}</p>
                    <p>{experience.location}</p>
                </div>

                <button
                    type="button"
                    className="experience-card__toggle"
                    onClick={() => onToggle(experience.id)}
                    aria-label={isExpanded ? "Collapse experience" : "Expand experience"}
                >
                    {isExpanded ? <FiMinus /> : <FiPlus />}
                </button>
            </header>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        className="experience-card__content"
                        initial={{
                            opacity: 0,
                            height: 0
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto"
                        }}
                        exit={{
                            opacity: 0,
                            height: 0
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        onAnimationComplete={() => {

                            if (isExpanded) {
                                onExpandAnimationComplete(experience.id);
                            }

                        }}
                    >
                        <p className="experience-card__description">
                            {experience.description}
                        </p>

                        <div className="experience-card__section">
                            <h4 className="experience-card__section-title">
                                Project Highlights
                            </h4>

                            <ul className="experience-card__highlights">
                                {experience.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
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
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
};

export default ExperienceCard;
