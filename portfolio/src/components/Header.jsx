import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900 shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400 animate-fade-in-up">
          Portfolio
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#hero"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-md">
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
