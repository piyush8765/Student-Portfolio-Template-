const About = ({
  title = "About Me",
  name = "Your Name",
  subtitle = "Frontend Developer",
  description = "",
  highlights = [],
  image = "",
  stats = [],
}) => {
  return (
    <section className="bg-gray-900 text-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {title}
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={image}
                alt="about"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl border border-cyan-400/30"
              />
              <div className="absolute -inset-3 border-2 border-cyan-400/40 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              I’m <span className="text-cyan-400">{name}</span>
            </h3>

            <p className="text-cyan-400 mb-4 font-medium">
              {subtitle}
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              {description}
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-gray-800 p-4 rounded-xl border border-cyan-400/20"
                  >
                    <h4 className="text-2xl font-bold text-cyan-400">
                      {stat.value}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition">
                Download CV
              </button>

              <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
