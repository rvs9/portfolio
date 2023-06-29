import Resume from "./Resume";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 bg-gray-100 md:px-8 lg:px-16 min-h-screen w-full"
    >
      <div className="container mx-auto">
        {/* <div className="flex flex-col  md:flex-row items-center justify-center pt-16 ">
          <img
            src={aboutImg}
            alt="profile"
            className="w-full max-w-sm mx-auto md:ml-0 rounded shadow-lg animate-fade-in"
          />
        </div> */}
        <div className="flex flex-col md:flex-row items-center justify-center pt-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h5 className="text-md text-blue-600 py-4 font-bold">ABOUT ME</h5>
            <h2 className="text-4xl font-bold">
              A dedicated Front-end Developer based in Bangalore, India. 📍
            </h2>
            <p className="mt-4">
              As a junior front-end developer, I bring a solid set of skills to
              the table, including React, Redux, JavaScript, Tailwind, HTML,
              CSS, and SCSS. My focus is on building responsive and
              user-friendly web applications that hit the mark. I excel in
              creating responsive and user-friendly web applications. With a
              strong passion for clean code and problem-solving, I strive to
              deliver high-quality solutions that meet client requirements.
            </p>

            <p className="mt-4">
              But it's not just about the technical stuff. I pride myself on
              being a strong communicator and a team player. I love diving into
              fast-paced environments and tackling challenging projects that
              push me to grow. Clean code and problem-solving are my jam, and
              I'm committed to delivering high-quality solutions that meet
              client needs.
            </p>
            <Resume />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
