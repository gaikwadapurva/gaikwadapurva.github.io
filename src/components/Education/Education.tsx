import Container from "../ui/Container";
import { EDUCATION } from "../../data/education";
import "./Education.css";

const Education = () => {

    return (
        <section
            id="education"
            className="education"
        >
            <Container>
                <div className="education__container">

                    <div className="education__left">
                        <p className="education__eyebrow">
                            Education
                        </p>

                        <h2 className="education__title">
                            Academic background.
                        </h2>

                        <p className="education__subtitle">
                            Built a strong foundation in computer science, software engineering,
                            algorithms, databases, and system design through a Bachelor of
                            Engineering in Computer Engineering.
                        </p>
                    </div>

                    <div className="education__right">
                        {EDUCATION.map((education) => (
                            <article
                                key={education.id}
                                className="education-card"
                            >
                                <h3 className="education-card__degree">
                                    {education.degree}
                                </h3>

                                <p className="education-card__institution">
                                    {education.institution}
                                </p>

                                <p className="education-card__location">
                                    {education.location}
                                </p>

                                <p className="education-card__duration">
                                    {education.duration}
                                </p>
                            </article>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Education;