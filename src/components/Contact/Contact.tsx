import Container from "../ui/Container";
import { CONTACT } from "../../data/contact";
import "./Contact.css";
import { FaGithub, FaGlobeAmericas, FaLinkedin } from "react-icons/fa";

const Contact = () => {

    return (
        <section
            id="contact"
            className="contact"
        >
            <Container>
                <div className="contact__container">

                    <p className="contact__eyebrow">
                        Contact
                    </p>

                    <h2 className="contact__title">
                        Let's build something impactful.
                    </h2>

                    <p className="contact__subtitle">
                        I'm always interested in discussing software engineering,
                        distributed systems, scalable architectures, and exciting
                        opportunities. Whether you're hiring, collaborating, or
                        simply want to connect, I'd love to hear from you.
                    </p>

                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="contact__email"
                    >
                        {CONTACT.email}
                    </a>

                    <div className="contact__socials">

                        <a
                            href={CONTACT.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="contact__social-link"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href={CONTACT.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="contact__social-link"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href={CONTACT.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Portfolio"
                            className="contact__social-link"
                        >
                            <FaGlobeAmericas />
                        </a>

                    </div>

                    <p className="contact__location">
                        {CONTACT.location}
                    </p>

                </div>
            </Container>
        </section>
    );
};

export default Contact;