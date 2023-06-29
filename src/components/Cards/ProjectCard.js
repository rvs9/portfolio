const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-6 md:w-1/2">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-base mb-4">{project.description}</p>
        <div className="flex flex-wrap">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
