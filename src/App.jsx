import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;