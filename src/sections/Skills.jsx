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

export default function Skills() {
  return (
    <>
      <section className="bg-d-gray min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-[800px] w-full flex flex-col gap-2 items-center">
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
      </section>{" "}
    </>
  );
}
