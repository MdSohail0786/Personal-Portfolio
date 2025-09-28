const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center animate-slide-in-left">
          <p className="text-lg mb-6">
            I am a passionate software engineer with expertise in full-stack
            development, specializing in React, Node.js, and cloud technologies.
            I love creating innovative solutions and bringing ideas to life
            through code.
          </p>
          <p className="text-lg">
            With years of experience in the industry, I've worked on diverse
            projects ranging from web applications to mobile apps, always
            striving for clean, efficient, and scalable code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
