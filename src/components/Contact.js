import linkedInLogo from "../assets/linkedIn-logo.png";
import gitLogoW from "../assets/github-logo(w).png";
import twitterLogo from "../assets/twitter-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="py-12  bg-white md:px-8 lg:px-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-800 mt-4">
          Have a question or want to work together? Feel free to reach out!👇
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 md:mb-0">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Email</div>
              <a
                className="text-grey-900 hover:text-blue-600"
                href="mailto:saraswatrajat96@gmail.com"
              >
                saraswatrajat96@gmail.com
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Phone</div>
              <p className="text-gray-700 text-base">+91 7060 322 333</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img src={linkedInLogo} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/rvs9"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img
              src={gitLogoW}
              alt="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8"
            />
          </a>
          <a href="https://twitter.com/rajatsaraswat7">
            <img src={twitterLogo} alt="Twitter" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
