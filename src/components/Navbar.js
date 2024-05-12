import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showHomeLink = location.pathname === "/blog";

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between h-20">
        <Link className="text-xl ml-12 font-bold text-black flex-grow" to="/">
          Rajat.dev
        </Link>

        <button type="button" onClick={toggleMenu} className="mr-6 md:hidden">
          <svg
            className={`w-6 h-6 text-black ${isMenuOpen ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... */}
          </svg>
          <svg
            className={`w-6 h-6 text-black ${isMenuOpen ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... */}
          </svg>
        </button>
        <ul className="hidden md:flex flex-wrap space-x-4 text-xl font-bold mx-4 text-black">
          {showHomeLink ? (
            <li>
              <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-blue-600"
              >
                Home
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-600"
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
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <Link to="blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-600"
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="text-xl font-bold text-black mt-2">
            {showHomeLink ? (
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block py-2 px-4 hover:bg-blue-100"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block py-2 px-4 hover:bg-blue-100"
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
                    className="block py-2 px-4 hover:bg-blue-100"
                    onClick={toggleMenu}
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="blogs"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block py-2 px-4 hover:bg-blue-100"
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
                    className="block py-2 px-4 hover:bg-blue-100"
                    onClick={toggleMenu}
                  >
                    Contact
                  </ScrollLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
