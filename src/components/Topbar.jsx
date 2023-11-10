import { AiFillMail } from "react-icons/ai";

function Topbar() {
  return (
    <div className="h-20 topbar fixed top-0 left-0 right-0 bg-d-gray w-s flex items-center justify-between py-1 px-10 z-50 drop-shadow-md pointer-events-auto">
      <img className="h-12" src="logo.png"></img>
      <div className="flex">
        <a
          className="text-white font-bold px-6 py-2 text-base uppercase hover:text-green"
          aria-current="page"
          href="#"
        >
          Home
        </a>
        <a
          className="text-white font-bold px-6 py-2 text-base uppercase hover:text-green"
          href="#"
        >
          About
        </a>
        <a
          className="text-white font-bold px-6 py-2 text-base uppercase hover:text-green"
          href="#"
        >
          My Projects
        </a>
        <a
          className="text-white font-bold px-6 py-2 text-base uppercase hover:text-green"
          href="#"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Topbar;
