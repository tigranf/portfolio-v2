import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <Box className="flex flex-wrap mx-auto mb-auto lg:flex-nowrap max-w-7xl">
        <Box className="flex flex-col pt-8 pl-8 sm:pl-24 sm:pt-36">
          <Typography
            fontWeight={700}
            variant="h1"
            fontSize={{ xs: "3.8rem", sm: "7rem" }}
            mb={{ xs: 0, sm: 4 }}
            className=" text-pale-gray"
            sx={{ textShadow: "6px 8px 8px hsl(194, 28%, 9%, 0.5)" }}
          >
            Tigran
            <br /> Farmanyan
          </Typography>
          <motion.div
            className="ml-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 5,
              ease: [0.45, 1.64, 0.41, 0.88],
            }}
          >
            <Typography
              fontSize={{ xs: "2.9rem", sm: "5.2rem" }}
              variant="h2"
              className="sm:text-charcoal-gray"
              sx={{ textShadow: "2px 2px 8px hsl(194, 28%, 9%, 0.4)" }}
            >
              Web Developer
            </Typography>
          </motion.div>
          <motion.div
            className="ml-auto"
            animate={{
              x: -50,
              y: -10,
              rotate: 360,
              scale: 1.2,
            }}
            transition={{
              duration: 1.9,
              ease: [0.45, 1.64, 0.41, 0.88],
              repeat: 1,
              repeatType: "reverse",
              repeatDelay: 2.5,
            }}
          >
            <Button
              onClick={() => navigate("/projects")}
              sx={{
                mt: 4,
                mb: 1,
                ml: { xs: 2, sm: "auto" },
                minWidth: 240,
                minHeight: { sm: 66, xs: 40 },
                height: "8vh",
                transition: "0.333s cubic-bezier(.45,1.64,.41,.88)",
                background:
                  "linear-gradient(to right, hsl(320, 16%, 29%) , hsl(331, 100%, 36%))",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 4px 60px 16px hsl(194, 28%, 16%, 0.5)",
                },
                borderRadius: 50,
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
        </Box>

        <Box className="flex items-center justify-center">
          <img
            className="drop-shadow-xl"
            src="/images/3d-render-mj.png"
            alt="3D render of person crossing arms and smiling"
          />
        </Box>
      </Box>
    </AnimatedPage>
  );
};

export default Home;
