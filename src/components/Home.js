import dp from "../assets/DP11.jpg";
import linkedInLogo from "../assets/linkedIn-logo.png";
import gitLogoW from "../assets/github-logo(w).png";
import twitterLogo from "../assets/twitter-logo.png";
import htmlLogo from "../assets/html-icon.svg";
import cssLogo from "../assets/css3-icon.svg";
import jsLogo from "../assets/javascript-icon.svg";
import reactLogo from "../assets/react-icon.svg";
import reduxLogo from "../assets/redux-logo.png";
import tailwindLogo from "../assets/tailwind-icon.svg";
import scccsLogo from "../assets/scss-icon.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="py-12 min-h-screen w-full bg-white md:px-8 lg:px-16"
    >
      <div className="container mx-auto md:mx-36 lg:mx-60 flex flex-col md:flex-row items-center justify-center pt-16">
        <div className="w-full md:w-1/2 text-center md:text-left md:mr-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Front-End React Developer
          </h2>
          <p className="mt-6 text-base md:text-lg">
            Hi, I'm Rajat Saraswat, an experienced Front-end React Developer
            based in Bangalore, India. 📍
          </p>
          <div className="flex mt-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/rajatsaraswat9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-blue-500 hover:text-blue-700"
            >
              <img src={linkedInLogo} alt="LinkedIn" className="h-8 w-8 mr-2" />
            </a>
            <a
              href="https://github.com/rvs9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-blue-500 hover:text-blue-700"
            >
              <img src={gitLogoW} alt="github" className="h-9 w-9 mr-2" />
            </a>
            <a
              href="https://twitter.com/rajatsaraswat7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-blue-500 hover:text-blue-700"
            >
              <img src={twitterLogo} alt="twitter" className="h-10 w-10 mr-2" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={dp}
            alt="profile"
            className="w-full pt-4 max-w-sm mx-auto lg:ml-28 md:ml-0 rounded-full shadow-lg animate-fade-in"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-4 md:mx-36 mt-16 md:flex-row md:items-center md:justify-start">
        <p className="mr-4 lg:ml-24 font-bold text-center md:text-left">Tech Stack |</p>
        <div className="flex flex-wrap items-center justify-center  mt-2">
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={htmlLogo}
              alt="HTML"
              className="h-8 w-8 md:h-8 md:w-8 object-contain"
            />
          </div>
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={cssLogo}
              alt="CSS"
              className="h-8 w-8 md:h-8 md:w-8 object-contain"
            />
          </div>
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={jsLogo}
              alt="JavaScript"
              className="h-8 w-8 md:h-8 md:w-8 object-contain"
            />
          </div>
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={reactLogo}
              alt="React"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={reduxLogo}
              alt="Redux"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={tailwindLogo}
              alt="Tailwind CSS"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="bg-white rounded-full shadow-lg p-2 md:p-4 mx-2 md:mx-1 my-2">
            <img
              src={scccsLogo}
              alt="SCSS"
              className="h-8 w-8 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
