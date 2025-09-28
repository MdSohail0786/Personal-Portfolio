const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A Personal Portfolio with React and Node.js.",
      image: "portfolio.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://ff48bqng-5173.inc1.devtunnels.ms/",
    },
    {
      title: "BookStore Web-App",
      description:
        "A bookStore app built with full-Stack Based React and node js.",
      image: "bookStore.png",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "https://ff48bqng-5174.inc1.devtunnels.ms/",
    },
    {
      title: "LEZARAV AGENCY CLONE",
      description:
        "Real-time Clone based on AI & ML using html,css,javaScript.",
      image: "lezarav.png",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://ff48bqng-5500.inc1.devtunnels.ms/",
    },
    {
      title: "SOCIAL MEDIA",
      description: "Real-time social medai using javascrit and React.",
      image: "social.media.png",
      technologies: ["React", "API", "Chart.js"],
      link: "https://social-media-teal-xi.vercel.app/",
    },
    {
      title: "Chatting App",
      description: "Real-time Chatting app using html,css and javaScript.",
      image: "chatting.png",
      technologies: ["React", "API", "Chart.js"],
      link: "https://chatting-app-kohl-delta.vercel.app/",
    },
    {
      title: "Food Delivery",
      description: "Real-time food-delivery app using  React.",
      image: "food.png",
      technologies: ["React", "API", "Chart.js"],
      link: "https://food-express-beta.vercel.app/",
    },
    {
      title: "Currency Converter",
      description:
        "Real-time Currency Converter app using html,css and javaScript.",
      image: "currency-cvt.png",
      technologies: ["React", "API", "Chart.js"],
      link: "https://currecny-exchnage.vercel.app/",
    },
    {
      title: "Calculator App",
      description: "Real-time calculator app using html,css and javaScript.",
      image: "calculator.png",
      technologies: ["React", "API", "Chart.js"],
      link: "https://calculator-five-teal-40.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in-up">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-right">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <div className="mb-3">
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-600 text-white px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
