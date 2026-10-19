import React from "react";

const Footer = ({
  isDark,
  brand,
  tagline,
  email,
  phone,
  location,
  socials = []
}) => {
  return (
    <> 
      <style>
        {`
        .footer-wrap {
          position: relative;
          z-index: 1;
        }


        .footer-section {
          padding: 140px 20px 40px;
        }

        .footer-section.dark {
          --bg: #020617;
          --card: rgba(255,255,255,0.06);
          --text: #ffffff;
          --muted: #94a3b8;
          --border: rgba(255,255,255,0.12);
          --accent: linear-gradient(90deg, #38bdf8, #38bdf8 , #38bdf8 );
        }

        .footer-section.light {
          --bg: #f8fafc;
          --card: rgba(255,255,255,0.9);
          --text: #020617;
          --muted: #475569;
          --border: rgba(0,0,0,0.12);
          --accent: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
        }

        .footer-section {
           background: transparent;
          color: var(--text);
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
        }

        /* ===== CTA STRIP ===== */
        .footer-cta {
          margin-bottom: 80px;
          padding: 50px;
          border-radius: 30px;
          background: var(--accent);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .footer-cta h2 {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 900;
        }

        .footer-cta p {
          opacity: 0.9;
        }

        .footer-cta-btn {
          padding: 14px 30px;
          border-radius: 999px;
          border: none;
          background: white;
          color: #020617;
          font-weight: 800;
          cursor: pointer;
        }

        /* ===== MAIN GRID ===== */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
        }

        .footer-brand {
          font-size: 2rem;
          font-weight: 900;
          background: var(--accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          margin-top: 12px;
          color: var(--muted);
          line-height: 1.7;
        }

        .footer-title {
          font-size: 1.2rem;
          margin-bottom: 16px;
        }

        .footer-links a {
          display: block;
          margin-bottom: 10px;
          color: var(--muted);
          text-decoration: none;
        }

        .footer-links a:hover {
          color: var(--text);
        }

        .footer-contact p {
          margin-bottom: 10px;
          color: var(--muted);
        }

        .footer-socials {
          display: flex;
          gap: 14px;
          margin-top: 20px;
        }

        .footer-social-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: transparent;
          color: var(--text);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .footer-social-btn:hover {
          background: var(--accent);
          border-color: transparent;
          color: white;
          transform: translateY(-4px);
        }

        /* ===== BOTTOM BAR ===== */
        .footer-bottom {
          margin-top: 80px;
          padding-top: 30px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-cta {
            text-align: center;
            justify-content: center;
          }

          .footer-bottom {
            justify-content: center;
            text-align: center;
            padding-bottom: 50px;
          }
        }

        
        `}
      </style>

      <div className="footer-wrap">
        

        <footer className={`footer-section ${isDark ? "dark" : "light"}`}>
          <div className="footer-container">

            {/* ===== CTA STRIP ===== */}
            <div className="footer-cta">
              <div>
                <h2>Let’s build something amazing together</h2>
                <p>Have a project or idea? Let’s talk and make it real.</p>
              </div>
              <button
                className="footer-cta-btn"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>

            {/* ===== MAIN GRID ===== */}
            <div className="footer-grid">
              {/* Brand */}
              <div className="footer-card">
                <div className="footer-brand">{brand}</div>
                <p className="footer-tagline">{tagline}</p>

                <div className="footer-socials">
                  {socials.map((s, i) => (
                    <button
                      key={i}
                      className="footer-social-btn"
                      onClick={() => window.open(s.link, "_blank")}
                      title={s.name}
                    >
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="footer-card">
                <div className="footer-title">Quick Links</div>
                <div className="footer-links">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>

              {/* Contact */}
              <div className="footer-card footer-contact">
                <div className="footer-title">Contact</div>
                <p>📧 {email}</p>
                <p>📞 {phone}</p>
                <p>📍 {location}</p>
              </div>
            </div>

            {/* ===== BOTTOM ===== */}
            <div className="footer-bottom">
              <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
              <div>Built with ❤️ using WeboraX</div>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
