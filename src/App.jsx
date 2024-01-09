import { useState, useRef, useEffect } from "react";
import Topbar from "./components/Topbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from './sections/Projects'
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Cursor from "./components/CustomCursor";
import LoadingAnim from "./loader/LoadingAnim";
import { AnimatePresence } from 'framer-motion';
import "./styles/App.css";

function App() {
  const [toogleLoading, setToogleLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setToogleLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="font-noto">
      <AnimatePresence mode="wait">
        {toogleLoading && <LoadingAnim />}
      </AnimatePresence>
      <div className="">
      {!toogleLoading && <Cursor />}
        <main className="">
          <Topbar />
          <div>
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
