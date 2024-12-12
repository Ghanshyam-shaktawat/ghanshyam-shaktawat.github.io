import { useState, useRef, useEffect } from "react";
import Topbar from "./components/Topbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contactls from "./sections/Contact";
import Cursor from "./components/CustomCursor";
import LoadingAnim from "./loader/LoadingAnim";
import { AnimatePresence } from "framer-motion";
import "./styles/App.css";

function App() {
  const [toogleLoading, setToogleLoading] = useState(true);
  const scrollAboutRef = useRef(null);
  const scrollContactRef = useRef(null);
  const scrollSkillsRef = useRef(null);
  const scrollProjectsRef = useRef(null);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setToogleLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const scrollToAbout = () => {
    scrollAboutRef.current.scrollIntoView();
  };

  const scrollToProjects = () => {
    scrollProjectsRef.current.scrollIntoView();
  };

  const scrollToExperience = () => {
    scrollSkillsRef.current.scrollIntoView();
  };

  const scrollToContact = () => {
    scrollContactRef.current.scrollIntoView({ bahaviour: "smooth" });
  };

  return (
    <div className="font-noto">
      <AnimatePresence mode="wait">
        {toogleLoading && <LoadingAnim />}
      </AnimatePresence>
      {!toogleLoading && (
        <div className="">
          <Cursor />
          <main className="">
            <Topbar
              scrollToAbout={scrollToAbout}
              scrollToExperience={scrollToExperience}
              scrollToProjects={scrollToProjects}
              scrollToContact={scrollToContact}
            />
            <div>
              <Home />
            </div>
            <div id="about" ref={scrollAboutRef}>
              <About />
            </div>
            <div id="skills" ref={scrollSkillsRef}>
              <Skills />
            </div>
            <div id="projects" ref={scrollProjectsRef}>
              <Projects />
            </div>
            <div id="contact" ref={scrollContactRef}>
              <Contactls />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
