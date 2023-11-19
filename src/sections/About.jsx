import {
  DiReact,
  DiDjango,
  DiGit,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiJsBadge,
  DiPython,
} from "react-icons/di";
import { SiTailwindcss, SiThreedotjs, SiVercel } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import MagneticButton from "../components/MagneticButton";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";

export default function About() {
  return (
    <>
      <section className="bg-d-gray h-screen flex flex-col items-center justify-center ">
        <div className="w-[1200px] flex justify-center items-start text-center text-white gap-0">
          <div className="w-4/6 flex flex-col justify-start items-start px-10 gap-10">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="text-4xl font-bold capitalize">About Me</h2>
              <span className="w-full h-1 bg-green" />
            </div>
            <p className="text-left w-5/6 text-base">
              Meet Ghanshyam Singh Shaktawat—an aspiring full-stack developer
              and MCA student at MIT College, Pune. <br /><br />
              My journey began in 2018, sparked by a desire to craft a custom
              WordPress template as a content writer. Since then, I've delved
              into HTML, CSS, various frameworks, and ventured into Django. A
              self-taught developer driven by discipline, my learning path is a
              continuous evolution.
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
                <DiGithubAlt
                  id="big-cursor"
                  className="w-10 h-10 hover:text-green cursor-pointer rounded-full p-1 border-2"
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
      <section className="bg-d-gray h-screen flex flex-col items-center justify-center">
        <div className="w-[800px] flex flex-col gap-2 items-center">
          <p className="uppercase font-medium text-lg">
            "A problem is a wall to break through"
          </p>
          <h2 className="text-5xl font-bold">Skills</h2>
          <span className="h-1 w-[50PX] bg-green " />
          <p className="text-center px-10 mt-4">
            The area of my experties is full stack development (both Frontend
            and Backend). <br />
            <br /> I Enjoy learning new stuff and frameworks. My favourite
            framework is Django & React. I have experience working with some
            other frameworks too like Express.js.
          </p>
          <div className="w-full mt-10">
            <div className="grid grid-cols-6 grid-rows-2 gap-2 gap-y-12">
              <div className="flex flex-col items-center justify-center gap-3 ">
                <DiReact className="w-20 h-20" />
                <p className="text-center">React</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiDjango className="w-20 h-20" />
                <p className="text-center">Django</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <SiTailwindcss className="w-20 h-20" />
                <p className="text-center">Tailwind</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiGit className="w-20 h-20" />
                <p className="text-center">Git</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <SiThreedotjs className="w-20 h-20 p-1" />
                <p className="text-center">Three.js</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiNodejs className="w-20 h-20" />
                <p className="text-center">Nodejs</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiHtml5 className="w-20 h-20" />
                <p className="text-center">Html</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiCss3 className="w-20 h-20" />
                <p className="text-center">css</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiJsBadge className="w-20 h-20 p-1" />
                <p className="text-center">JS</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <DiPython className="w-20 h-20" />
                <p className="text-center">Python</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <BiLogoPostgresql className="w-20 h-20" />
                <p className="text-center">Postgresql</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <SiVercel className="w-20 h-20 p-1" />
                <p className="text-center">Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
