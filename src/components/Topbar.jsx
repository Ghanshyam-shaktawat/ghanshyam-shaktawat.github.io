import { useState } from "react";

function Topbar() {
  return (
    <div className="h-20 topbar fixed top-0 left-0 right-0 bg-white w-s flex items-center justify-between py-1 px-10 z-50 drop-shadow-md">
      <img className="h-12" src="logo.png"></img>
      <div className="flex">
        <a class="text-black font-bold px-8 py-2 text-base uppercase hover:text-blue" aria-current="page" href="#">
          Home
        </a>
        <a class="text-black font-bold px-8 py-2 text-base uppercase hover:text-blue" href="#">
          About
        </a>
        <a class="text-black font-bold px-8 py-2 text-base uppercase hover:text-blue" href="#">
          My Projects
        </a>
        <a class="text-black font-bold px-8 py-2 text-base uppercase hover:text-blue" href="#">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Topbar;
