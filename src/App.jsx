import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import SectionTransition from "./components/SectionTransition";



function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && (
                <Preloader
                    onComplete={() => setLoading(false)}
                />
            )}

            <SectionTransition />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Awards />
            <Footer />
        </>
    );
}

export default App;