import { Button, Typography } from "@mui/material";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";
import { motion } from "framer-motion";

const Home = ({ loading }) => {
  const navigate = useNavigate();
  return (
    <>
      {!loading && (
        <AnimatedPage>
          <div className="flex flex-wrap flex-col-reverse justify-around lg:flex-row gap-8 w-full min-h-[calc(100vh-180px)] mx-auto mb-auto max-w-screen-xl lg:flex-nowrap">
            <div className="flex flex-col justify-center gap-2 mx-auto mb-auto lg:mb-9 lg:basis-7/12">
              <h1 className="mt-auto text-5xl font-bold text-center lg:text-end sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-xl text-pale-gray font-lato whitespace-nowrap md:whitespace-pre-wrap">
                Tigran
                <br />
                Farmanyan
              </h1>
              <motion.div
                className="w-full ml-auto lg:text-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 7,
                  delay: 1.2,
                  ease: [0.45, 1.64, 0.41, 0.88],
                }}
              >
                <h2 className="text-5xl text-center lg:mt-6 lg:text-end sm:text-6xl text-very-light-pink md:text-7xl drop-shadow-lg font-quicksand ">
                  Web Developer
                </h2>
              </motion.div>
              <motion.div
                className="ml-auto mr-auto lg:mr-0"
                animate={{
                  y: -40,
                  scale: 1.2,
                  scaleX: 1.1,
                  filter: "brightness(125%) saturate(125%) contrast(125%)",
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.45, 1.64, 0.41, 0.98],
                  repeat: 1,
                  repeatType: "reverse",
                  repeatDelay: 1.8,
                }}
              >
                <Button
                  onClick={() => navigate("/projects")}
                  sx={{
                    ml: { xs: 0, sm: "auto" },
                    mt: { xs: 6, md: 7 },
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
                    My Work
                    <ShortcutRoundedIcon />
                  </Typography>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center max-w-3xl mx-auto mt-0 w-80 lg:w-full lg:basis-5/12">
              <img
                className="object-scale-down px-16 sm:px-2 drop-shadow-xl"
                src="/images/3d-render-mj.png"
                alt="3D render of person crossing arms and smiling"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.22,
              ease: [0.45, 1.64, 0.41, 0.98],
              delay: 3.3
            }}
          >
            <div className="flex items-center justify-center max-w-3xl mx-auto text-lg font-medium leading-10 text-justify ">
              <p>
                I am an aspiring coder and web developer who is currently
                enrolled in the DigitalCrafts bootcamp for Web Development. I
                was born in Yerevan, Armenia and raised in Texas, where I
                attended Clark High School and Plano East Senior High School. I
                graduated with an International Baccalaureate Diploma. I have
                some background in computer science and programming, having
                studied these subjects both at Plano East Senior High School at
                the University of Texas in Austin for a couple of years before
                having to temporarily interrupt my education. I then worked as a
                Guest Services Coordinator at The Driskill Hotel for six years,
                where I developed my skills in team leadership, customer
                service, and complaint resolution. In my leisure time, I enjoy
                exploring the Texas hill country, playing disc golf, and
                spending time with my wife.
              </p>
            </div>
          </motion.div>
        </AnimatedPage>
      )}
    </>
  );
};

export default Home;
