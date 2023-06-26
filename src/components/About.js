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
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in React, Redux, JavaScript, Tailwind, HTML, CSS, and
              SCSS. I excel in creating responsive and user-friendly web
              applications. With a strong passion for clean code and
              problem-solving, I strive to deliver high-quality solutions that
              meet client requirements.
            </p>

            <p className="mt-4">
              In addition to my technical skills, I am a strong communicator and
              a collaborative team player. I thrive in fast-paced environments
              and enjoy working on challenging projects that push my limits and
              allow me to continuously learn and grow. I am constantly seeking
              new opportunities to expand my knowledge and stay up-to-date with
              the latest trends and advancements in web development.
            </p>
            <Resume />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
