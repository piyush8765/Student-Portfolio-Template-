import { useEffect, useState } from "react";

const Hero = ({
  name = "piyush",
  roles = [],
  description = "",
  bgImage = "",
  ctaText = "Download CV",
}) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // 🔁 Auto typing / rewriter effect
  useEffect(() => {
    if (!roles.length) return;

    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const clearTimeoutId = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(clearTimeoutId);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="text-cyan-400">{name}</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 h-10">
          {text}
          <span className="text-cyan-400 animate-pulse">|</span>
        </h2>

        <p className="text-gray-200 max-w-2xl mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition">
            {ctaText}
          </button>

          <button className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
