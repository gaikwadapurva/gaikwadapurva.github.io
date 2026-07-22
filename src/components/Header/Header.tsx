import "./Header.css";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import Container from "../ui/Container";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <a className="header__logo" href="/">
                        AG
                    </a>

                    <nav className="header__nav">
                        {NAVIGATION_ITEMS.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
