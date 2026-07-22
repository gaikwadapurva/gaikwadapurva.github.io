import "./Hero.css";
import Container from "../ui/Container";
import Button from "../ui/Button";
import profilePhoto from "../../assets/images/apurva.jpeg";

const Hero = () => {
    return (
        <section
            id="home"
            className="hero"
        >
            <Container>
                <div className="hero__container">
                    <div className="hero__content">
                        <p className="hero__intro">Hi, I'm</p>

                        <h1 className="hero__title">Apurva Gaikwad 👋</h1>

                        <h2 className="hero__subtitle">Senior Software Engineer</h2>

                        <p className="hero__description">
                            Building scalable enterprise applications with Java, Spring Boot, React, TypeScript, and distributed systems—delivering modern, high-performance software from design to production.
                        </p>

                        <div className="hero__actions">
                            <Button
                                variant="primary"
                                href="/Apurva_Gaikwad_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                            </Button>

                            <Button
                                variant="secondary"
                                href="#contact"
                            >
                                Contact Me
                            </Button>
                        </div>

                        <div className="hero__socials">
                            <a href="https://github.com/gaikwadapurva" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>

                            <a href="https://linkedin.com/in/apurva-gaikwad" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>

                            <a href="mailto:gaikwadapurva65@gmail.com">
                                Email
                            </a>
                        </div>
                    </div>

                    <div className="hero__image">
                        <img
                            src={profilePhoto}
                            alt="Apurva Gaikwad"
                            className="hero__profile-image"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
