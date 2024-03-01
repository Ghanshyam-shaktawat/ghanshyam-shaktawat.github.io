export default function Contact() {
  return (
    <section className="bg-d-gray h-screen flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-xl gap-8">
        <span className="text-green text-xl">So what&apos;s next?</span>
        <h2 className="text-5xl font-bold">Get In Touch</h2>
        <p className="text-center w-4/5 text-lg max-w-[800px]">
          Whether you have creative ideas to enhance my portfolio, are
          interested in a collaborative project, or simply want to say hello,
          feel free to reach out. I am always eager to explore new opportunities
          and work with like-minded individuals. My inbox is open, and I look
          forward to connecting with you!
        </p>
        <div className="h-2 mt-4 pointer-events-auto">
          <button className="bg-white font-normal rounded font-sans ">
            <span className="block bg-d-gray py-2 px-wide rounded border-2 text-lg text-white hover:translate-x-[-5px] hover:translate-y-[-5px] duration-200 transition-all ease-in">
              Say Hello!
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
