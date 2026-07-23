import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
};

export default App;