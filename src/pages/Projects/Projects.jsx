import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Myntra Clone",
    description:
      "A full-stack clone of the Myntra E-commerce website built using the MERN stack. It replicates essential e-commerce features with a modern, responsive design.",
    src: "myntra.jpg",
    link: "/src/assets/images/myntra.png",
    color: "#E91E63",
    githubLink: "https://github.com/iamrishi007/myntra",
    liveLink: "https://venerable-lamington-38eaad.netlify.app/",
    skills: [
      "React",
      "Chakra UI",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "bcryptjs",
      "JWT",
    ],
  },
  {
    title: "Gemini AI Chatbot",
    description:
      "An intelligent chatbot built with the MERN stack and Gemini API, providing users with real-world AI-driven responses and a seamless interactive experience.",
    src: "https://raw.githubusercontent.com/iamrishi007/fitbit-project/refs/heads/main/client/public/fitbit.png", // replace with your project thumbnail
    link: "https://github.com/iamrishi007/Gemini-AI-Chatbot/blob/main/client/src/assets/Screenshot%202025-01-25%20191422.png?raw=true",
    color: "#00C49F", // teal/green theme
    githubLink: "https://github.com/iamrishi007/Gemini-AI-Chatbot",
    liveLink: "https://teal-bienenstitch-4ec3d1.netlify.app/",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "MERN Stack"
    ],
  },

  {
    title: "Fitbit E-commerce Website Clone",
    description:
      "A full-stack e-commerce website inspired by Fitbit’s platform. Includes user authentication, JWT-based login, secure password hashing, and a responsive UI built with React and Chakra UI.",
    src: "fitbit.jpg", // replace with your project image file
    link: "https://raw.githubusercontent.com/iamrishi007/fitbit-project/refs/heads/main/client/public/fitbit.png",
    color: "#4CAF50", // Fitbit green theme
    githubLink: "https://github.com/iamrishi007/fitbit-project",
    liveLink: "https://myfitbit.netlify.app/",
    skills: [
      "React",
      "Chakra UI",
      "Axios",
      "JWT Decode",
      "Node.js",
      "Express.js",
      "MongoDB",
      "bcryptjs",
      "JWT",
      "Netlify",
      "Render"
    ],
  },

  {
    title: "Hack Society – DSA Practice Platform",
    description:
      "A full-stack web application designed for practicing Data Structures and Algorithms (DSA) problems with secure authentication, categorized question sets, and an integrated code editor for solving problems in-browser.",
    src: "hack.jpg", // you can replace with your actual project thumbnail
    link: "/src/assets/images/hack society.png", // put your project screenshot in assets
    color: "#ff9800", // orange accent for DSA vibe
    githubLink: "https://github.com/iamrishi007/Hack_Society_Project",
    liveLink: "https://hacksociety.netlify.app/",
    skills: [
      "React.js",
      "Chakra UI",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt"
    ],
  },
  {
    title: "Zappos Clone",
    description:
      "A full-stack MERN E-commerce application inspired by Zappos. Features secure user authentication, product listing with filtering & sorting, add-to-cart functionality, and a responsive UI built with Chakra UI.",
    src: "zappos.png", // replace with your actual project thumbnail
    link: "/src/assets/images/zoppose.png", // project screenshot in assets
    color: "#1e90ff", // blue accent reflecting e-commerce theme
    githubLink: "https://github.com/iamrishi007/Zappos_Clone",
    liveLink: "https://zopposclone.netlify.app/",
    skills: [
      "React.js",
      "Chakra UI",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs"
    ],
  }

];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                skills={project.skills}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  skills,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                {description}
              </p>

              {/* Skills Section */}
              {skills && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    🛠 Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded bg-pink-500/10 text-pink-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  skills: PropTypes.array,
};
