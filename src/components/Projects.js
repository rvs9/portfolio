import ProjectCard from "./Cards/ProjectCard";
// import pbLogo from "../assets/pbLogo1.png";

const Projects = () => {
  const projects = [
    // {
    //   title: "React E-commerce",
    //   description: "A responsive e-commerce website built with React.",
    //   technologies: ["React", "Redux", "CSS", "JavaScript"],
    //   image:
    //     "https://pwpblog.wpengine.com/wp-content/uploads/2022/08/Ecommerce-Website-Promotion_Final.png",
    //   github: "https://github.com/your-username/project1",
    // },
    {
      title: "Protein Bowl",
      description: "A Protein rich and healthy food chain.",
      technologies: ["React", "Redux", "JavaScript", "Tailwind CSS"],
      image:
        "https://www.proteinbowl.in/static/media/GardenCobb.3c0c8cebeec0fa448585.jpg",
      github: "https://www.proteinbowl.in",
    },
    {
      title: "Weather App",
      description:
        "A mobile weather application that displays current weather data.",
      technologies: ["ReactNative", "REST", "JS", "CSS"],
      image: "https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png",
      github: "https://github.com/rvs9/WeatherApp",
    },
    {
      title: "Food Delivery",
      description:
        "An online food delivery app to order from nearby restaurants.",
      technologies: ["React", "Redux", "CSS", "JavaScript"],
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg",
      github: "https://github.com/rvs9/Swiggy-clone-React",
    },
    // Add more projects here
  ];

  return (
    <section
      id="projects"
      className="py-24 min-h-screen w-full bg-white md:px-8 lg:px-16 w-full flex flex-col items-center "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols- gap-8 mx-10 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
