import { useState, useRef, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Anim from "../assets/animation.json";

export default function Home(props) {
  const container = useRef(null);

  return (
    <section className="relative h-screen bg-d-gray flex flex-col justify-center items-center text-left pointer-events-auto">
      <div className="w-[1200px] flex justify-center items-center text-center text-white">
        <div className="w-7/12 flex flex-col items-start text-center text-white gap-4 z-10">
          <p className="uppercase text-2xl font-bold">Hi there, I'M </p>
          <h1
            id="big-cursor"
            className="text-6xl font-black uppercase text-left leading-[4rem] text-green"
          >
            Ghanshyam s.
          </h1>
          <h2 className="capitalize text-5xl font-bold text-[#d9d9d9] leading-[3rem]">
            a full stack web developer
          </h2>
          <p className="max-w-2xl text-lg text-left font-light">
            Master's in Computer Application (MCA) student with a passion for
            coding, gaming, and novels—bridging technology and creativity
            seamlessly.
          </p>
          <div className="h-2 mt-4">
            <button className="bg-green font-normal rounded font-sans ">
              <span className="block bg-d-gray py-2 px-wide rounded border-2 text-lg text-green hover:translate-x-[-4px] hover:translate-y-[-4px] duration-200 transition-all ease-in">
                My Projects
              </span>
            </button>
          </div>
        </div>
        <div className="w-5/12 h-full inline-block relative z-0">
          <Player
            className=""
            src={Anim}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
          {/*add lottie container*/}
        </div>
      </div>
      <div className="absolute bottom-8">
        <span className="border-4 rounded-3xl border-white p-3"></span>
      </div>
      <div className="absolute bottom-10 animate-drop">
        <span className="text-white bottom-6 text-5xl font-semibold">.</span>
      </div>
      {/* <div className="flex flex-col items-center fixed left-2 bottom-2 py-0 px-2 gap-2 pointer-events-auto">
        <MagneticButton>
          <AiFillLinkedin
            id="big-cursor"
            className="w-8 h-8 hover:text-green cursor-pointer"
          />
        </MagneticButton>
        <MagneticButton>
          <DiGithubAlt
            id="big-cursor"
            className="w-8 h-8 hover:text-green cursor-pointer"
          />
        </MagneticButton>
        <MagneticButton>
          <AiFillInstagram
            id="big-cursor"
            className="w-8 h-8 hover:text-green cursor-pointer"
          />
        </MagneticButton>
        <span className="bg-white w-0.5 mt-2 py-20 rounded" />
      </div> */}
      {/* <div className="flex flex-col items-center fixed right-2 bottom-2 py-0 px-2 gap-2 pointer-events-auto">
        <p
          id="big-cursor"
          className="cursor-pointer m-auto writing-mode text-base font-normal hover:text-green"
        >
          ghan6171@gmail.com
        </p>
        <span className="bg-white w-0.5 mt-2 py-14 rounded"></span>
      </div> */}
    </section>
  );
}
