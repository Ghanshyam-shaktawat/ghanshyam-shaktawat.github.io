import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
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
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-[] before:pr-1 before:text-white"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-[] before:pr-1 before:text-white"
                href="#projects"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-[] before:pr-1 before:text-white"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green before:content-[] before:pr-1 before:text-white"
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
            <a href="https://github.com/Ghanshyam-shaktawat" target="_blank">
              <AiFillLinkedin
                id="big-cursor"
                className="text-black bg-white w-7 h-7 cursor-pointer rounded-full box-content p-1 "
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://github.com/Ghanshyam-shaktawat" target="_blank">
              <DiGithubBadge
                id="big-cursor"
                className="text-black bg-white w-9 h-9 cursor-pointer rounded-full box-content p-0"
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://github.com/Ghanshyam-shaktawat" target="_blank">
              <AiFillInstagram
                id="big-cursor"
                className="text-black bg-white w-7 h-7 cursor-pointer rounded-full box-content p-1"
              />
            </a>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
