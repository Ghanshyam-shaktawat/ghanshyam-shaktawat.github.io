import { useState, useRef, useEffect } from "react";
import Topbar from "./components/Topbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Cursor from "./components/CustomCursor";
import { motion } from "framer-motion";
import "./styles/App.css";

function App() {

  return (
    <div className="">
      <Cursor />
      <div>
        <Topbar />
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
