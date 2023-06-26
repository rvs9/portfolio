import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between h-20">
        <h1 className="text-xl ml-12 font-bold text-black flex-grow">
          Rajat.dev
        </h1>
        <button
          type="button"
          className={`${
            isMenuOpen ? "fixed top-0 right-0 m-4" : "mr-6 md:hidden"
          }`}
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6  text-black ${
              isMenuOpen ? "hidden" : "block"
            } md:hidden`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-6 h-6text-black ${
              isMenuOpen ? "block" : "hidden"
            } md:hidden`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-wrap space-x-4 text-xl font-bold mx-4 text-black`}
        >
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-600"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-600"
              onClick={toggleMenu}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-600"
              onClick={toggleMenu}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Blog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
