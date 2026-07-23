import Container from "../ui/Container";
import { SKILL_CATEGORIES } from "../../data/skills";

import "./Skills.css";

const Skills = () => {
    return (
        <section
            id="skills"
            className="skills"
        >
            <Container>
                <div className="skills__container">
                    <div className="skills__header">
                        <p className="skills__eyebrow">
                            Skills
                        </p>

                        <h2 className="skills__title">
                            Technologies I use to build scalable, reliable software.
                        </h2>

                        <p className="skills__description">
                            A collection of the languages, frameworks, tools, and engineering concepts I've worked with throughout my professional journey.
                        </p>
                    </div>

                    <div className="skills__grid">
                        {SKILL_CATEGORIES.map((category) => (
                            <div
                                key={category.title}
                                className="skills__card"
                            >
                                <h3 className="skills__card-title">
                                    {category.title}
                                </h3>

                                <div className="skills__chips">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="skills__chip"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;