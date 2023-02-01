import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box className="flex flex-wrap mx-auto mb-auto lg:flex-nowrap max-w-7xl">
      <Box className="flex flex-col pt-8 pl-8 sm:pl-24 sm:pt-36">
        <Typography
          fontWeight={700}
          variant="h1"
          fontSize={{ xs: "3.8rem", sm: "7rem" }}
          mb={{ xs: 0, sm: 4 }}
          className=" text-pale-gray"
        >
          Tigran
          <br /> Farmanyan
        </Typography>
        <Typography
          fontSize={{ xs: "2.9rem", sm: "5.2rem" }}
          variant="h2"
          className="sm:text-charcoal-gray"
        >
          Web Developer
        </Typography>
        <Button
        onClick={() => navigate("/projects")}
          sx={{
            mt: 4,
            mb:1,
            ml: { xs: 2, sm: "auto" },
            minWidth: 240,
            minHeight: { sm: 66, xs: 40 },
            height: "8vh",
            transition: "0.333s cubic-bezier(.45,1.64,.41,.88)",
            background:
              "linear-gradient(to right, hsl(320, 16%, 29%) , hsl(331, 100%, 36%))",
            "&:hover": {
              transform: "scale(1.1)",
            },
            borderRadius: 50,
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
      </Box>
      <Box className="grid place-items-center">
        <img src="/images/3d-render-mj.png" alt="3D render of person crossing arms and smiling" />
      </Box>
    </Box>
  );
};

export default Home;
