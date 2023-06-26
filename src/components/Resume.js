import resumePDF from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-10  bg-gray-100 w-full">
      <div className="mt-6">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
