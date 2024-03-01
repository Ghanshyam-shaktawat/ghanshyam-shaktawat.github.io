// import {
//   DiReact,
//   DiDjango,
//   DiGit,
//   DiHtml5,
//   DiCss3,
//   DiNodejs,
//   DiJsBadge,
//   DiPython,
// } from "react-icons/di";
// import { SiTailwindcss, SiThreedotjs, SiVercel } from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";
import MagneticButton from "../components/MagneticButton";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";

export default function About() {
  return (
    <>
      <section className="bg-d-gray h-screen flex flex-col items-center justify-center ">
        <div className="max-w-[1200px] w-full flex justify-center items-start text-center text-white gap-0">
          <div className="w-4/6 flex flex-col justify-start items-start px-10 gap-10">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="text-4xl font-bold capitalize">About Me</h2>
              <span className="w-full h-1 bg-green" />
            </div>
            <p className="text-left w-5/6 text-base">
              Meet Ghanshyam Singh Shaktawat—an aspiring full-stack developer
              and MCA student at MIT College, Pune. <br />
              <br />
              My journey began in 2018, sparked by a desire to craft a custom
              WordPress template as a content writer. Since then, I&apos;ve
              delved into HTML, CSS, various frameworks, and ventured into
              Django. A self-taught developer driven by discipline, my learning
              path is a continuous evolution.
              <br />
              <br />
              Beyond coding, I find joy in video games, fiction novels, and the
              rhythm of City Pop music—a multifaceted journey of technology,
              creativity, and personal passions.
            </p>
            <div className="flex items-center pe-6 gap-2 pointer-events-auto box-content	">
              <p>Follow me to know more:</p>
              {/* TODO add links for social apps */}
              <MagneticButton>
                <DiGithubBadge
                  id="big-cursor"
                  className="w-10 h-10 hover:text-green cursor-pointer rounded-full p-0 border-2"
                />
              </MagneticButton>
              <MagneticButton>
                <AiFillLinkedin
                  id="big-cursor"
                  className="w-10 h-10 hover:text-green cursor-pointer rounded-full p-1 border-2 "
                />
              </MagneticButton>
              <MagneticButton>
                <AiFillInstagram
                  id="big-cursor"
                  className="w-10 h-10 hover:text-green cursor-pointer rounded-full p-1 border-2"
                />
              </MagneticButton>
            </div>
          </div>
          <div className="w-2/6 mt-10 pointer-events-auto">
            <div className="rounded-md border-2 border-green w-fit">
              <img
                id="big-cursor"
                src="Gopal.webp"
                alt="ghanshyam shaktawat"
                className="w-80 rounded-md translate-x-[-12px] translate-y-[12px] hover:translate-x-[-20px] hover:translate-y-[20px] duration-100 transition-all ease-in"
              />
            </div>
          </div>
          {/* <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl font-bold capitalize">About Me</h2>
            <span className="w-[50px] h-1 bg-green" />
          </div>
          <p>
            Hi, i am your frue Since beginning i decided to become a full stack
            developer. Its almost been 3 years. Thinking back, i have always
            wanted to become a full stack developer.
          </p> */}
        </div>
      </section>
    </>
  );
}
