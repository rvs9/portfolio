import Resume from "./Resume";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 min-h-screen w-full bg-gray-100 sm:px-6 md:px-8 lg:px-16 "
    >
      <div className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="w-full md:w-1/2 text-center ">
            <h5 className="text-lg text-blue-600 pb-4 font-bold">ABOUT ME</h5>
            <h2 className="text-4xl font-bold ">
              Experienced Front-end Developer based in Bangalore, India. 📍
            </h2>
            <p className="mt-4 text-left">
              As a front-end developer, I bring a solid set of skills to the
              table, including React, Redux, JavaScript, Tailwind, HTML, CSS,
              and SCSS. My focus is on building responsive and user-friendly web
              applications that hit the mark. I excel in creating responsive and
              user-friendly web applications. With a strong passion for clean
              code and problem-solving, I strive to deliver high-quality
              solutions that meet client requirements.
            </p>

            <p className="mt-4 text-left">
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
