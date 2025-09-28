const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <p>&copy; 2025 Md Sohail Portfolio. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/md-sohail-389a412a1/"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MdSohail0786"
              className="hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
