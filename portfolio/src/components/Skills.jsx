import {
  FaHtml5,
  FaCss3Alt,
  //FaSass,
  FaJsSquare,
  FaReact,
  //FaAngular,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  // SiSpringboot,
  SiMongodb,
  //SiFirebase,
  // SiPostgresql,
  SiCplusplus,
  //SiVscode,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
    //{ name: "SASS", icon: <FaSass />, color: "text-pink-500" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
    { name: "React JS", icon: <FaReact />, color: "text-blue-400" },
    //{ name: "Angular", icon: <FaAngular />, color: "text-red-600" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
    { name: "Next JS", icon: <SiNextdotjs />, color: "text-gray-300" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  ];

  const backendSkills = [
    //{ name: "Springboot", icon: <SiSpringboot />, color: "text-green-600" },
    { name: "Node JS", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express JS", icon: <SiExpress />, color: "text-gray-400" },
    { name: "MySQL", icon: <FaGit />, color: "text-blue-700" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    // { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    // { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-800" },
  ];

  const languageSkills = [
    { name: "C", icon: <FaGit />, color: "text-gray-600" }, // Placeholder icon for C
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "Java", icon: <FaJava />, color: "text-red-600" },
  ];

  const toolSkills = [
    { name: "Git", icon: <FaGit />, color: "text-orange-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
    // { name: "VS Code", icon: <SiVisualstudiocode />, color: "text-blue-600" },
  ];

  const SkillCategory = ({ title, skills }) => (
    <div className="bg-gray-900 bg-opacity-40 border border-gray-600 rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-800 bg-opacity-60 rounded-full px-4 py-2 text-gray-200 text-sm"
          >
            <span className={`${skill.color} text-lg`}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 tracking-wide">
          SKILLS
        </h2>
        <div className="w-24 h-1 mx-auto mb-6 bg-purple-600 rounded"></div>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="Languages" skills={languageSkills} />
          <SkillCategory title="Tools" skills={toolSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
