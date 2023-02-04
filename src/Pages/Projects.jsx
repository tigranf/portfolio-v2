import { ArrowForward, ShortcutRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "EZ-Site",
    description:
      "EZ-Site is a website for leveraging OpenAI language models to generate basic website layout and content. Solo project born out of a need for website design and content ideas.",
    tech: [
      "React",
      "Material-UI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Git",
    ],
    github: "https://github.com/tigranf/ez-site",
    demo: "https://ez-site.netlify.app/",
    image: "/images/ez-site-home.webp",
  },
  {
    title: "HelperHub",
    description:
      "Full-stack website that allows users to rate and review people who work in the service industry. Leave feedback and comments for those who work for you. Tipping functionality coming soon.",
    tech: [
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Sequelize",
      "EJS",
      "TailwindCSS",
    ],
    github: "https://github.com/tigranf/helper-hub-app",
    demo: "",
    image: "/images/helper-hub-home.webp",
  },
  {
    title: "any number",
    description:
      "A JavaScript focused drag & drop web game inspired by The Price is Right. Custom drag & drop functionality, modal, drop- down, tooltips, CSS animations, and design.",
    tech: ["HTML5", "CSS3", "JavaScript ES6"],
    github: "https://github.com/tigranf/any-number-game",
    demo: "https://any-number.netlify.app/",
    image: "/images/any-number-home.webp",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col max-w-screen-xl mx-auto mb-auto">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.22,
          ease: [0.45, 1.64, 0.41, 0.98],
        }}
      >
        <h2 className="p-2 mb-4 mr-auto font-bold text-center text-9xl font-lato text-pale-gray">
          My Work
        </h2>
      </motion.div>
      <div className="flex flex-col items-stretch justify-center gap-6 p-2 mx-auto mb-auto md:flex-wrap md:flex-row min-h-96 place-items-center md:basis-1">
        {projects.map((project, index) => (
          <motion.div
            className="min-w-[280px]"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.15 + 0.05,
              ease: [0.45, 1.64, 0.41, 0.98],
            }}
          >
            <div className="flex flex-col h-full max-w-sm overflow-hidden rounded shadow-xl bg-[radial-gradient(circle,rgba(37,56,61,1)35%,rgba(26,39,43,1)100%)] bg-charcoal-gray hover:scale-105 transition-all">
              <img
                className="w-full transition-all saturate-[75%] hover:saturate-100"
                src={project.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{project.title}</div>
                <p className="text-base text-very-light-pink">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center px-6 pt-4 pb-2 mt-auto">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 transition-all bg-gray-200 rounded-full hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 px-6 pt-4 pb-6">
                <Button
                  disabled={!project.demo}
                  sx={{
                    minWidth: "40%",
                    minHeight: { sm: 56, xs: 30 },
                    transition: "0.333s cubic-bezier(.45,1.64,.41,.88)",
                    background:
                      "linear-gradient(to right bottom, hsl(310, 6%, 39%), hsl(194, 25%, 28%))",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0px 4px 60px 16px hsl(194, 28%, 16%, 0.5)",
                    },
                    borderRadius: 2,
                    boxShadow: "0px 4px 12px 6px hsl(194, 28%, 16%, 0.5)",
                    filter: !project.demo
                      ? "brightness(70%) contrast(50%) blur(1px)"
                      : "none",
                  }}
                  endIcon={<ArrowForward className="text-silver" />}
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-silver">Demo Site</p>
                </Button>
                <Button
                  sx={{
                    minWidth: "40%",
                    minHeight: { sm: 56, xs: 30 },
                    transition: "0.333s cubic-bezier(.45,1.64,.41,.88)",
                    background:
                      "linear-gradient(to right bottom, hsl(310, 6%, 39%), hsl(194, 25%, 28%))",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0px 4px 60px 16px hsl(194, 28%, 16%, 0.5)",
                    },
                    borderRadius: 2,
                    boxShadow: "0px 4px 12px 6px hsl(194, 28%, 16%, 0.5)",
                  }}
                  endIcon={<ArrowForward className="text-silver" />}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-silver">GitHub</p>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mx-auto"
        animate={{
          y: -40,
          scale: 1.2,
          scaleX: 1.1,
          filter: "brightness(125%) saturate(125%) contrast(125%)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.45, 1.64, 0.41, 0.98],
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 1.8,
        }}
      >
        <Button
          onClick={() => navigate("/contact")}
          sx={{
            ml: { xs: 0, sm: "auto" },
            mt: { xs: 3, md: 4 },
            mb: { xs: 12, md: 7 },
            minWidth: 240,
            minHeight: { sm: 66, xs: 40 },
            height: "9vh",
            transition: "0.333s cubic-bezier(.45,1.64,.41,.88)",
            background:
              "linear-gradient(to right bottom, hsl(310, 6%, 29%), hsl(194, 25%, 18%))",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 4px 60px 16px hsl(194, 28%, 16%, 0.5)",
            },
            borderRadius: 2,
            boxShadow: "0px 4px 12px 6px hsl(194, 28%, 16%, 0.5)",
          }}
        >
          <Typography
            color={"ButtonHighlight"}
            className="flex gap-3"
            fontWeight={"bold"}
            variant="h5"
          >
            Contact Me
            <ShortcutRounded />
          </Typography>
        </Button>
      </motion.div>
    </section>
  );
};

export default Projects;
