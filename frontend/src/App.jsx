import React from 'react';
import ChatBot from "./components/ChatBot";

// Framer Motion
import { motion, useScroll } from 'framer-motion';
// Typing effect
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import my from './assets/my.jpeg';
import talkieePic from './assets/talkiee-signup.png'; 

import image from './assets/image.png'; 
import helmet from './assets/helmet.jpg'; 


import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const personalData = {
  name: "Rishika Rohila",
  email: "ruhelarishika@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/rishika-rohila-a83527260",
    github: "https://github.com/rishikarohila12",
    leetcode: "https://leetcode.com/u/rishroh"
  }
};

const aboutMeText = {
  p1:"I am  currently pursuing my MCA from Graphic Era Hill University, My technical journey is fueled by a passion for solving complex logic and building innovative software solutions that enhance user experience.",
  p2: "My hands-on project experience in the MERN Stack has equipped me with skills in web development, problem-solving, and AI integration. Driven by a passion for technology and a proactive attitude, I focus on continuous improvement and aim to build scalable applications with clean code.",
};

const skillsData = {
  languages: ["JavaScript", "Java", "C", "C++", "Python"],
  frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js", "RESTful APIs"],
  databases: ["MongoDB", "MySQL"],
  core: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"]
};

const projectsData = [
  {
    title: "Talkiee - Real-Time Chat App",
    description: "Built a real-time chat application using Socket.IO, React.js, and JWT authentication for secure data handling.",
    tech: ["MERN Stack", "Socket.IO", "JWT"],
    link: "https://chat-app-brown-pi.vercel.app/login",
    imageUrl: talkieePic
  },
  {
    title: "Image Crafter",
    description: "Created a full-stack AI application using the ClipDrop API. Integrated Razorpay for credit-based payments.",
    tech: ["MERN", "Razorpay", "ClipDrop API"],
    link: "https://image-crafter-theta.vercel.app/",
    imageUrl: image
  },
  {
    title: "SafeRide AI - Helmet & Rider Detection",
    description: "Developed an AI-powered system for helmet detection using YOLOv8 and real-time visualization with Streamlit.",
    tech: ["Python", "YOLOv8", "Streamlit"],
    link: "https://github.com/rishikarohila12/HelmetDetection",
    imageUrl: helmet
  }
];

const internshipData = {
  company: "MahakalInfra Esolution Private Limited",
  role: "Full Stack Web Development Intern",
  date: "July 2024 - December 2024",
  points: [
    "Worked on the Toll Server Management System project using React.js, Node.js, Express.js, and MongoDB.",
    "Optimized API performance and enhanced front-end responsiveness.",
    "Collaborated with team members under Agile methodology to ensure timely module delivery."
  ]
};

const educationData = [
  {
    degree: "M.C.A. (Master of Computer Applications)",
    institution: "Graphic Era Hill University, Dehradun",
    date: "Aug 2024 - Jul 2026 (Expected)",
    score: "CGPA: 8.83/10"
  },
  {
    degree: "B.C.A. (Bachelor of Computer Applications)",
    institution: "Shriram Institute of Management and Technology",
    date: "Oct 2021 - Jul 2024",
    score: "78.5%"
  }
];

const sectionFadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

function AnimatedStars() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-twinkle" style={{ top: '20%', left: '25%', animationDuration: '3s' }}></div>
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ top: '50%', left: '50%', animationDuration: '5s' }}></div>
      <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-twinkle" style={{ top: '70%', left: '10%', animationDuration: '4s' }}></div>
      <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '30%', left: '80%', animationDuration: '6s' }}></div>
      <div className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full animate-twinkle" style={{ top: '80%', left: '70%', animationDuration: '3.5s' }}></div>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }
      `}</style>
    </div>
  );
}

// Navbar
function Navbar() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900/80 backdrop-blur-lg text-gray-100 p-4 sticky top-0 z-50 shadow-lg shadow-indigo-900/30">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-extrabold hover:text-teal-400 transition-colors tracking-tight">
            Rishika Rohila
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-teal-400 transition">Home</a>
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#experience" className="hover:text-teal-400 transition">Experience</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </div>
        </div>
      </nav>
      {/* Scroll Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500 fixed top-[64px] left-0 right-0 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </>
  );
}

// Hero
// Updated Hero Section with Zoom Out effect
function Hero() {
  const [text] = useTypewriter({
    words: ['Developer', 'Coder', 'Tech Enthusiast', 'Problem Solver','Learner','Innovative Thinker'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-gray-100 min-h-screen flex items-center relative overflow-hidden">
      <AnimatedStars />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 z-10">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 leading-tight">
            Hi, I'm {personalData.name}
          </h1>
          <h2 className="text-3xl font-semibold mb-6 text-gray-200">
            A <span className="text-teal-400">{text}</span>
            <Cursor cursorColor="#06b6d4" />
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            I build scalable and secure web applications with a focus on clean code and great user experiences.
          </p>
          
          <div className="flex space-x-6">
            <motion.a whileHover={{ scale: 1.2, y: -5 }} href={personalData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-all">
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -5 }} href={personalData.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-all">
              <FaGithub size={32} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -5 }} href={personalData.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-all">
              <FaCode size={32} />
            </motion.a>
          </div>
        </motion.div>

       {/* 📸 Fixed Zoomed Out Picture */}
<motion.div
  className="md:w-1/2 flex justify-center items-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
    
    <motion.div 
      className="relative bg-slate-900 rounded-full p-1 border-2 border-cyan-500/20 shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={my}
        alt="Rishika Rohila"
        className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-slate-800 shadow-inner"
        // 🛠️ FIX: object-position add kiya hai taaki face center mein rahe aur side se na kate
        style={{ objectPosition: 'center 20%' }} 
      />
    </motion.div>
  </div>
</motion.div>      </div>
    </section>
  );
}
// Section wrapper
function Section({ id, title, children, bgClass = "bg-slate-900" }) {
  return (
    <motion.section
      id={id}
      className={`py-24 ${bgClass} bg-opacity-90 rounded-3xl mx-4 my-4 shadow-xl shadow-indigo-900/20`}
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-500 relative w-min mx-auto tracking-wide">
          {title}
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400"></span>
        </h2>
        {children}
      </div>
    </motion.section>
  );
}

// About
function About() {
  return (
    <Section id="about" title="About Me" bgClass="bg-slate-800/60 backdrop-blur-lg">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-6">{aboutMeText.p1}</p>
        <p className="text-lg text-gray-300 mb-8">{aboutMeText.p2}</p>
        <p className="text-xl text-teal-300 font-bold">
          <span className="font-extrabold">{aboutMeText.achievement}</span>
        </p>
      </div>
    </Section>
  );
}

// Skills
function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-4xl mx-auto bg-slate-800/50 p-8 rounded-2xl shadow-lg backdrop-blur-lg">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <motion.span
                  key={skill}
                  className="bg-slate-900/80 border border-slate-700 text-gray-100 px-4 py-2 rounded-xl font-medium cursor-default shadow-teal-400/20 shadow-md hover:bg-gradient-to-r hover:from-indigo-400 hover:to-teal-400 hover:text-black transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Project Card
function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-slate-900/80 rounded-2xl shadow-lg overflow-hidden group border border-slate-700 backdrop-blur-lg hover:shadow-teal-400/40 transition duration-500"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
        <p className="text-gray-200 mb-4 h-24">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="bg-teal-900 text-teal-300 text-sm px-3 py-1 rounded-full shadow-sm">{t}</span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-block bg-gradient-to-r from-teal-400 to-indigo-500 text-white font-semibold px-4 py-2 rounded-lg hover:from-teal-300 hover:to-indigo-400 transition-shadow shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Demo &rarr;
        </a>
      </div>
    </motion.div>
  );
}

// Projects
function Projects() {
  return (
    <Section id="projects" title="My Projects" bgClass="bg-slate-800/60 backdrop-blur-lg">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

// Experience
function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="bg-slate-900/80 p-8 rounded-2xl shadow-lg mb-12 border-l-8 border-teal-400 backdrop-blur-md"
          whileHover={{ boxShadow: "0 10px 20px -3px rgba(20,184,166,0.3), 0 4px 8px -2px rgba(20,184,166,0.2)" }}
        >
          <h3 className="text-2xl font-bold text-teal-400">{internshipData.role}</h3>
          <p className="text-xl font-semibold text-white mb-2">{internshipData.company}</p>
          <p className="text-gray-400 mb-4">{internshipData.date}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {internshipData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-indigo-500">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map(edu => (
            <motion.div
              key={edu.degree}
              className="bg-slate-900/60 p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 backdrop-blur-md hover:border-teal-400 transition duration-300"
              whileHover={{ boxShadow: "0 10px 15px -3px rgba(168,85,247,0.2), 0 4px 6px -2px rgba(168,85,247,0.1)" }}
            >
              <h3 className="text-xl font-bold text-indigo-400">{edu.degree}</h3>
              <p className="font-semibold text-white mb-1">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-2">{edu.date}</p>
              <p className="text-gray-300">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Contact
function Contact() {
  return (
    <Section id="contact" title="Get In Touch" bgClass="bg-slate-800/70 backdrop-blur-lg">
      <div className="text-center max-w-lg mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          I'm currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.a
          href={`mailto:${personalData.email}`}
          className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold px-8 py-4 rounded-full text-lg hover:from-teal-400 hover:to-indigo-400 transition duration-300 shadow-lg shadow-teal-500/30"
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(6,182,212,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello!
        </motion.a>
      </div>
    </Section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 text-center p-8 mt-20 border-t border-slate-800 shadow-inner">
      <div className="flex justify-center space-x-8 mb-6">
        <a href={personalData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
          <FaLinkedin size={28} />
        </a>
        <a href={personalData.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
          <FaGithub size={28} />
        </a>
        <a href={personalData.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
          <FaCode size={28} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {personalData.name}.</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ChatBot />

      <Footer />

    </div>
  );
}

export default App;
