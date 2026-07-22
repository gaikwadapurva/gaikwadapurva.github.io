import Container from "../ui/Container";
import { CERTIFICATIONS } from "../../data/certifications";
import "./Certifications.css";

const Certifications = () => {

    return (
        <section
            id="certifications"
            className="certifications"
        >
            <Container>
                <div className="certifications__container">

                    <div className="certifications__left">
                        <p className="certifications__eyebrow">
                            Certifications
                        </p>

                        <h2 className="certifications__title">
                            Continuous learning.
                        </h2>

                        <p className="certifications__subtitle">
                            Professional certifications that validate technical expertise,
                            problem-solving ability, and a commitment to continuous learning
                            in software engineering.
                        </p>
                    </div>

                    <div className="certifications__right">
                        {CERTIFICATIONS.map((certification) => (
                            <article
                                key={certification.id}
                                className="certification-card"
                            >
                                <h3 className="certification-card__name">
                                    {certification.name}
                                </h3>

                                <p className="certification-card__issuer">
                                    {certification.issuer}
                                </p>

                                <div className="certification-card__meta">
                                    <span className="certification-card__level">
                                        {certification.level}
                                    </span>

                                    <span className="certification-card__issued-on">
                                        Issued: {certification.issuedOn}
                                    </span>
                                </div>

                                <p className="certification-card__credential-id">
                                    <strong>Credential ID:</strong> {certification.credentialId}
                                </p>

                                <p className="certification-card__description">
                                    {certification.description}
                                </p>

                                <a
                                    href={certification.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certification-card__link"
                                >
                                    Verify Credential ↗
                                </a>
                            </article>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Certifications;