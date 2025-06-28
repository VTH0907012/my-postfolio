import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-primary shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-secondary font-mono text-xl">Portfolio</div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-light hover:text-secondary cursor-pointer"
            >
              <span className="text-secondary">01.</span> About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-light hover:text-secondary cursor-pointer"
            >
              <span className="text-secondary">02.</span> Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-light hover:text-secondary cursor-pointer"
            >
              <span className="text-secondary">03.</span> Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-light hover:text-secondary cursor-pointer"
            >
              <span className="text-secondary">04.</span> Skills
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-light hover:text-secondary cursor-pointer"
            >
              <span className="text-secondary">05.</span> Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-light hover:text-secondary"
            >
              <span className="text-secondary">01.</span> About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-light hover:text-secondary"
            >
              <span className="text-secondary">02.</span> Experience
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-light hover:text-secondary"
            >
              <span className="text-secondary">03.</span> Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-light hover:text-secondary"
            >
              <span className="text-secondary">04.</span> Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-light hover:text-secondary"
            >
              <span className="text-secondary">05.</span> Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
