//import './App.css'

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-primary text-light pm-3 pr-3 pl-3">
      <Header />
      <main>
        <Hero />
        <About />
                <Experience /> 
        <Projects />

        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
