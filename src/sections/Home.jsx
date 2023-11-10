import { useState, useRef } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Home(props) {
  return (
    <div className="relative h-screen bg-d-gray pt-10 flex flex-col justify-center items-center pointer-events-auto">
      <div className="flex flex-col justify-center items-center gap-4 text-center text-white">
        <h2 className="uppercase text-3xl font-bold">Hi there &#x1F44B;,</h2>
        <h1
          id="big-cursor"
          className="text-5xl font-black uppercase tracking-wide"
        >
          I'M <span className="text-green">Ghanshyam</span> shaktawat
        </h1>
        <p className="max-w-3xl text-xl" onMouseEnter={props.move}>
          I am a full stack web developer with experience in building web
          applications with React, Django, Node.js and Tailwind. I simply love
          what I do.
        </p>

        <button className="bg-green py-3 px-wide text-xl mt-4 text-black font-bold uppercase rounded shadow-xl hover:shadow-2xl shadow-gray-50 pointer-events-auto">
          Projects
        </button>
      </div>
      <div className="absolute bottom-8">
        <span className="border-4 rounded-3xl border-white p-3"></span>
      </div>
      <div className="absolute bottom-10 animate-drop">
        <span className="text-white bottom-6 text-5xl font-semibold">.</span>
      </div>
      <div className="flex flex-col items-center absolute left-4 py-2 px-2 flex flex-col gap-6 pointer-events-auto">
        {/* <span className="bg-white w-1 py-32 rounded"></span> */}
        <MagneticButton>
          <AiFillLinkedin
            id="big-cursor"
            className="w-10 h-10 hover:text-green"
          />
        </MagneticButton>
        <MagneticButton>
          <AiFillGithub
            id="big-cursor"
            className="w-10 h-10 hover:text-green"
          />
        </MagneticButton>
        <MagneticButton>
          <AiFillInstagram
            id="big-cursor"
            className="w-10 h-10 hover:text-green"
          />
        </MagneticButton>
        {/* <span className="bg-white w-1 py-16 rounded"></span> */}
      </div>
    </div>
  );
}
