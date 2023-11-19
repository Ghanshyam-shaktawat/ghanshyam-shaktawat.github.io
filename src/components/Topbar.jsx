import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";
import MagneticButton from "../components/MagneticButton";

function Topbar() {
  return (
    <header className="h-20 topbar fixed top-2 left-0 right-0 z-40 flex justify-center pointer-events-auto px-6">
      <div className="bg-d-gray/40 max-w-[1200px] w-full flex items-center justify-between rounded-lg border-2 border-gray p-0 backdrop-blur-md">
        <div className="px-2 h-full flex items-center border-r-2 border-gray rounded-l-lg">
          <img
            className="h-16 pointer-events-auto"
            id="big-cursor"
            src="logo.png"
          />
        </div>
        <div className="">
          <ol className="flex gap-4">
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-['01.'] before:pr-1 before:text-green"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-['02.'] before:pr-1 before:text-green"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-['03.'] before:pr-1 before:text-green"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-['04.'] before:pr-1 before:text-green"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ol>
        </div>
        <div className="flex items-center pe-6 gap-4 pointer-events-auto box-content	">
          {/* TODO app button links */}
          <MagneticButton>
            <AiFillLinkedin
              id="big-cursor"
              className="w-7 h-7 hover:text-green cursor-pointer rounded-full box-content p-1 border-2 border-green "
            />
          </MagneticButton>
          <MagneticButton>
            <DiGithubAlt
              id="big-cursor"
              className="w-7 h-7 hover:text-green cursor-pointer rounded-full box-content p-1 border-2 border-green"
            />
          </MagneticButton>
          <MagneticButton>
            <AiFillInstagram
              id="big-cursor"
              className="w-7 h-7 hover:text-green cursor-pointer rounded-full box-content p-1 border-2 border-green"
            />
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
