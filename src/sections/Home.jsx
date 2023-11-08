export default function Home() {
  return (
    <div className="relative h-screen bg-white pt-10 flex flex-col justify-center items-center snap-start">
      <div className="flex flex-col justify-center items-center gap-4 text-center text-dark-blue">
        <h2 className="uppercase text-4xl font-bold">Hi!</h2>
        <h1 className="text-5xl font-black text-red-600 uppercase tracking-wide">
          I'M Ghanshyam Singh Shaktawat
        </h1>
        <p className="max-w-3xl text-xl">
          I am a full stack web developer with experience in building web
          applications with React, Django, Node.js and Tailwind. I simply love
          what I Do.
        </p>
        <button className="bg-blue py-4 px-wide text-xl mt-4 text-white font-bold uppercase rounded shadow-xl hover:shadow-2xl shadow-gray-50">
          Projects
        </button>
      </div>
      <div className="absolute bottom-8">
        <span className="border-4 rounded-3xl border-black p-3"></span>
      </div>
    </div>
  );
}
