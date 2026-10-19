const Projects = ({
  title = "Projects",
  subtitle = "Some of my recent work",
  projects = [],
}) => {
  return (
    <section className="bg-[#0f172a] text-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ===== Section Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {title}
          </h2>
          <p className="text-gray-400 mb-4">
            {subtitle}
          </p>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#030712] rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Empty State ===== */}
        {projects.length === 0 && (
          <div className="text-center mt-16 border border-cyan-400/20 rounded-xl py-10 bg-[#030712]">
            <p className="text-gray-400 text-lg">
              🚀 Exciting projects coming soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
