function Topbar() {
  return (
    <div className="h-20 topbar fixed top-0 left-0 right-0 bg-d-gray w-s flex items-center justify-between py-1 px-16 z-40 pointer-events-auto">
      <img
        className="h-14 pointer-events-auto"
        id="big-cursor"
        src="logo.png"
      ></img>
      <div className="flex gap-4">
        <a
          className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green"
          aria-current="page"
          href="#"
        >
          Home
        </a>
        <a
          className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green"
          href="#about"
        >
          About
        </a>
        <a
          className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green"
          href="#"
        >
          Projects
        </a>
        <a
          className="text-white font-semibold px-4 py-2 text-sm uppercase hover:text-green"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Topbar;
