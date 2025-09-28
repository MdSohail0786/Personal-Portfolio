const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white px-4"
    >
      <div className="md:w-1/2 text-left space-y-6 pl-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-purple-400 animate-fade-in-up">Full-Stack</span>{" "}
          <br />
          <span className="text-purple-400 animate-fade-in-up">Developer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-md">
          Building digital experiences that merge creativity with technology,
          specializing in modern web development and cyber systems.
        </p>
        <a
          href="#contact"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-md transition duration-300"
        >
          Let's Connect
        </a>
        <a
          href="MdSoahil.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ml-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300"
        >
          Resume
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
          <img
            src="pofile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600 opacity-30 rounded-full mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
