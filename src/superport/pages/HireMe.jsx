const HireMe = ({
  title = "Why Choose Me",
  subtitle = "What makes me a good fit",
  reasons = [],
  ctaTitle = "Let’s Work Together",
  ctaDescription = "Have a project in mind or looking for a developer? Let’s connect.",
  ctaButton = "Hire Me",
}) => {
  return (
    <section className="bg-gray-900 text-white py-20" id="hire-me">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {title}
          </h2>
          <p className="text-gray-400 mb-4">
            {subtitle}
          </p>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-cyan-400/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 text-2xl font-bold mb-4">
                {item.icon || index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/10 rounded-3xl p-10 md:p-14 text-center border border-cyan-400/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {ctaTitle}
          </h3>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>

          <button className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition">
            {ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
