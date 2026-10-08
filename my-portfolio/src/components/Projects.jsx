const projects = [
  {
    title: "Travel Website",
    description:
      "Responsive travel platform with destinations, hotels and booking features.",
  },
  {
    title: "Blog Management System",
    description:
      "CRUD blog platform with authentication and content management.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-5">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;