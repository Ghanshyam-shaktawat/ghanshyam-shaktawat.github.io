import { useState, useRef, useEffect } from "react";
import Topbar from "./components/Topbar";
import Home from "./sections/Home";
import About from "./sections/About";
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
    <div className="scroll-smooth	font-noto">
      <AnimatePresence mode="wait">
        {toogleLoading && <LoadingAnim />}
      </AnimatePresence>
      <div className="scroll-smooth	">
      {!toogleLoading && <Cursor />}
        <div className="scroll-smooth">
          <Topbar />
          <div>
            <Home />
          </div>
          <div id="about">
            {/* <About /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
