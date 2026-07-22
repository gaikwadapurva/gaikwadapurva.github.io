import { useEffect, useState } from "react";
import Container from "../ui/Container";
import "./Footer.css";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight * 0.5);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className={`footer ${isVisible ? "footer--visible" : ""}`}>
            <Container>
                <div className="footer__container">

                    <p className="footer__copyright">
                        © 2026 Apurva Gaikwad
                    </p>

                    <button
                        type="button"
                        className="footer__back-to-top"
                        onClick={scrollToTop}
                    >
                        Back to Top ↑
                    </button>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;