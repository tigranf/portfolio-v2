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
          <div className="flex flex-wrap flex-col-reverse justify-around lg:flex-row gap-8 w-full min-h-[calc(100vh-180px)] mx-auto mb-20 md:mb-8 max-w-screen-xl lg:flex-nowrap">
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
                  duration: 1,
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
                    variant="body1"
                    fontSize={"1.6rem"}
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
                src="/images/3d-render-mj.webp"
                alt="3D render of person crossing arms and smiling"
              />
            </div>
          </div>
          <motion.div
            className="py-8 bg-charcoal-gray-2"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.22,
              ease: [0.45, 1.64, 0.41, 0.98],
              delay: 0.5,
            }}
          >
            {/* <Divider variant="middle" sx={{mb:4, mx: 'auto', background: '#c1cace'}} className='max-w-xl' /> */}
            <div className="flex items-center justify-center max-w-3xl mx-auto text-xs font-semibold leading-10 text-justify md:text-xl ">
              <p className="px-4">
                I am an aspiring coder and{" "}
                <span className="text-bold text-very-light-pink">
                  web developer
                </span>{" "}
                who completed the{" "}
                <span className="text-bold text-very-light-pink">
                  DigitalCrafts
                </span>{" "}
                bootcamp for Web Development. I was born & raised in{" "}
                <span className="text-bold text-very-light-pink">
                  Yerevan, Armenia
                </span>{" "}
                and moved to{" "}
                <span className="text-bold text-very-light-pink">Texas</span>,
                where I attended{" "}
                <span className="text-bold text-very-light-pink">
                  high school{" "}
                </span>
                and graduated with an{" "}
                <span className="text-bold text-very-light-pink">
                  International Baccalaureate Diploma{" "}
                </span>
                where I first discovered my passion. From childhood, I was
                fascinated with computers so I enjoyed learning{" "}
                <span className="text-bold text-very-light-pink">
                  computer science
                </span>{" "}
                and programming, both in high school and at the{" "}
                <span className="text-bold text-very-light-pink">
                  University of Texas at Austin
                </span>{" "}
                for a couple of years before having to temporarily interrupt my
                education. I then worked as a{" "}
                <span className="text-bold text-very-light-pink">
                  Guest Services Coordinator
                </span>{" "}
                at{" "}
                <span className="text-bold text-very-light-pink">
                  The Driskill Hotel
                </span>{" "}
                for six years, where I developed my skills in{" "}
                <span className="text-bold text-very-light-pink">
                  team leadership
                </span>
                ,{" "}
                <span className="text-bold text-very-light-pink">
                  customer service
                </span>
                , and{" "}
                <span className="text-bold text-very-light-pink">
                  complaint resolution
                </span>
                . In my leisure time, I enjoy exploring the Texas{" "}
                <span className="text-bold text-very-light-pink">
                  hill country
                </span>
                , playing{" "}
                <span className="text-bold text-very-light-pink">
                  disc golf
                </span>
                , and spending time with my{" "}
                <span className="text-bold text-very-light-pink">wife</span>.
                Check out my work and thanks for stopping by!
              </p>
            </div>
          </motion.div>
        </AnimatedPage>
      )}
    </>
  );
};

export default Home;
