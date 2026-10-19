const Skills = ({
  title = "Skills",
  subtitle = "Technologies & tools I work with",
  skills = [],
}) => {
  return (
    <section className="bg-gray-900 text-white py-20" id="skills">
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

        {/* ===== Skills Grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-950 border border-cyan-400/10 rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain group-hover:scale-110 transition"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold mb-1">
                {skill.name}
              </h3>

              {/* Level */}
              {skill.level && (
                <p className="text-sm text-gray-400 mb-3">
                  {skill.level}
                </p>
              )}

              {/* Progress Bar */}
              {skill.percent !== undefined && (
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 bg-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ===== Empty State ===== */}
        {skills.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            Skills will be added soon 🚀
          </p>
        )}
      </div>
    </section>
  );
};

export default Skills;
