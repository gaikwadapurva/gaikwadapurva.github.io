import Container from "../ui/Container";
import { ABOUT_STATS } from "../../constants/about";
import "./About.css";

const About = () => {
    return (
        <section
            id="about"
            className="about"
        >
            <Container>
                <div className="about__container">
                    <div className="about__left">
                        <div className="about__header">
                            <p className="about__eyebrow">
                                About Me
                            </p>

                            <h2 className="about__title">
                                Building software that is reliable, scalable, and easy to evolve.
                            </h2>
                        </div>

                        <div className="about__content">
                            <p>
                                I'm a Senior Software Engineer with experience building enterprise-scale applications using Java, Spring Boot, React, TypeScript, and cloud technologies. I enjoy solving complex engineering problems, modernizing legacy systems, and designing software that remains maintainable as products grow.
                            </p>

                            <p>
                                My recent work has focused on frontend modernization, backend services, distributed systems, and improving developer productivity through thoughtful engineering practices.
                            </p>
                        </div>
                    </div>

                    <div className="about__right">
                        <div className="about__stats">
                            {ABOUT_STATS.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="about__stat-card"
                                >
                                    <h3 className="about__stat-value">
                                        {stat.value}
                                    </h3>

                                    <p className="about__stat-label">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;