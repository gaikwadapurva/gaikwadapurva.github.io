import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
        </>
    );
};

export default App;