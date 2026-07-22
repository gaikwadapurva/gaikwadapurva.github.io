import About from "./components/About";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Certifications />
        </>
    );
};

export default App;