import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import About from './pages/About'
import PersonalAssistant from './pages/PersonalAssistant'
import HireMe from './pages/HireMe'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'


const Home = () => {
  const [isDark, setIsDark] = useState(true)
  const [active, setActive] = useState("home")

  return (
    <div
      style={{
        background: isDark ? "#020617" : "#f8fafc",
        color: isDark ? "#ffffff" : "#020617",
        transition: "0.3s"
      }}
    >
      {/* ================= NAVBAR ================= */}
      <NavBar
        portfolioName="TechHub"
        isDark={isDark}
        setIsDark={setIsDark}
        active={active}
        setActive={setActive}
      />

      {/* ================= HERO ================= */}
     
  <Hero
      name="Piyush Shakya"
      roles={[
        "Frontend Developer",
        "React Developer",
        "MERN Stack Learner",
      ]}
      description="I build modern, responsive and scalable web applications using React and the MERN stack."
      bgImage={"https://img.freepik.com/free-vector/blue-black-abstract-background_1340-17010.jpg?semt=ais_hybrid&w=740&q=80"}
      ctaText="Download CV"
    />

     <About
      title="About Me"
      name="Piyush Shakya"
      subtitle="Frontend Developer | CSE Student"
      image={"https://static.vecteezy.com/system/resources/thumbnails/068/822/642/small/a-little-girl-with-big-eyes-looking-at-the-camera-photo.JPG"}
      description="I am a 3rd year Computer Science Engineering student with a strong interest in frontend development. I love creating modern, responsive and user-friendly web interfaces using React and Tailwind CSS."
      highlights={[
        "3rd Year B.Tech (CSE)",
        "Frontend Developer (React)",
        "Learning MERN Stack",
        "Passionate about UI/UX",
      ]}
      stats={[
        { value: "10+", label: "Projects" },
        { value: "1+", label: "Years Learning" },
        { value: "5+", label: "Technologies" },
        { value: "100%", label: "Dedication" },
      ]}
    />
   
   
{/* ================= why choose us ================= */}
     


    <HireMe
      title="Why Choose Me"
      subtitle="Why you should hire me for your project"
      reasons={[
        {
          icon: "⚡",
          title: "Fast Learner",
          description:
            "I quickly adapt to new technologies and tools to deliver efficient solutions.",
        },
        {
          icon: "🎯",
          title: "Goal Oriented",
          description:
            "I focus on building solutions that align perfectly with project goals.",
        },
        {
          icon: "💻",
          title: "Clean Code",
          description:
            "I write clean, maintainable, and scalable code following best practices.",
        },
        {
          icon: "🤝",
          title: "Team Player",
          description:
            "I collaborate well with teams and communicate ideas clearly.",
        },
        {
          icon: "🚀",
          title: "Modern Tech",
          description:
            "I use modern frameworks like React and Tailwind CSS.",
        },
        {
          icon: "⏱️",
          title: "On-Time Delivery",
          description:
            "I respect deadlines and always deliver work on time.",
        },
      ]}
      ctaTitle="Ready to start your project?"
      ctaDescription="Let’s discuss your idea and build something amazing together."
      ctaButton="Hire Me"
    />



  {/* ================= projects ================== */}

      <Projects
      title="My Projects"
      subtitle="Things I’ve built with passion"
      projects={[
        {
          title: "Portfolio Website",
          description:
            "A modern portfolio website built with React and Tailwind CSS.",
          image: "https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg?semt=ais_hybrid&w=740&q=80",
          tech: ["React", "Tailwind", "Vite"],
          live: "https://your-live-link.com",
          github: "https://github.com/your-repo",
        },
        {
          title: "MERN Blog App",
          description:
            "Full-stack blog application with authentication and CRUD features.",
          image: "https://cdn.prod.website-files.com/6746e4625c4bb3fb49ba7f5b/689313badc27b1bb31152ada_MERN%20Stack%202025_%20Build%20Full%E2%80%91Stack%20Apps%20with%20MongoDB%2C%20Express%2C%20React%20%26%20Node%20(4).png",
          tech: ["React", "Node", "Express", "MongoDB"],
          live: "",
          github: "https://github.com/your-repo",
        },
        {
          title: "Todo App",
          description:
            "Simple todo app with clean UI and local storage support.",
          image: "https://img.freepik.com/free-vector/appointment-booking-with-smartphone_52683-39659.jpg?semt=ais_hybrid&w=740&q=80",
          tech: ["HTML", "CSS", "JavaScript"],
          live: "",
          github: "https://github.com/your-repo",
        },
      ]}
    />


  {/* ================= SKILLS ================= */}
  
   <Skills
      title="My Skills"
      subtitle="Technical proficiency"
      skills={[
        {
          name: "HTML",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxlqmTPx1zm4lpBc4gSKACq8L85CotcVPnA&s",
          level: "Advanced",
          percent: 90,
        },
        {
          name: "CSS",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAc4BswrDj_q0JcxkRYJ09NDHtv5GEfzOzQ&s",
          level: "Advanced",
          percent: 85,
        },
        {
          name: "JavaScript",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_w_jkPUpndXd8L0PGVv0Lip2FILvr_5Crlw&s",
          level: "Intermediate",
          percent: 80,
        },
        {
          name: "React",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXg4n4ygApKipkyKBEJ-zrXqMdaTsqzXNaWg&s",
          level: "Intermediate",
          percent: 75,
        },
        {
          name: "Node.js",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4daold_Q_ZPw7w70asWEcDHQWF8cJE4qXhQ&s",
          level: "Beginner",
          percent: 60,
        },
        {
          name: "MongoDB",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEN6fDm89O6g-B0h3eEPmVlxQyhlU1cNS7tQ&s",
          level: "Beginner",
          percent: 55,
        },
        {
          name: "Express.js",
          icon: "https://images.codingblocks.com/web/express.png",
          level: "Beginner",
          percent: 55,
        },
      ]}
    />
  {/* ================= contact ================= */} 

<Contact
  isDark={isDark}
  title="Let's Build Something Amazing"
  subtitle="Have a project in mind? Let's talk."
  slug="piyush shakya"
  phone="8765419210"
  whatsapp="8767887678"
  location="Lucknow, Uttar Pradesh, India"
  availability="Monday – Saturday<br/>10:00 AM – 8:00 PM"
/>
  {/* ================= footer ================= */}

<Footer
  isDark={isDark}
  brand="piyush shakya"
  tagline="I build premium web experiences, SaaS products and high performance applications."
  email="piyush@example.com"
  phone="+91 9876543210"
  location="Lucknow, Uttar Pradesh, India"
  socials={[
    { name: "GitHub", icon: "🐙", link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: "💼", link: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: "🐦", link: "https://twitter.com/yourusername" }
  ]}
/>

  {/* ================= personal assistant ================= */}


<PersonalAssistant
  ownerName="Piyush shakya"
  role="Full Stack Developer & SaaS Builder"
  location="Lucknow, India"
  experience="2+ years"
  skills={[
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "Android",
    "Tailwind",
    "Express",
    "Firebase"
  ]}
  projects={[
    { title: "WeboraX - SaaS Portfolio Builder" },
    { title: "AI Resume Builder" },
    { title: "IQGalaxy Platform" },
    { title: "Fitness App" }
  ]}
/>


    </div>
  )
}

export default Home
