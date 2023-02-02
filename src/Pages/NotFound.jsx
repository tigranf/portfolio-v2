import { Typography } from "@mui/material";
import React from "react";
import AnimatedPage from "../Components/AnimatedPage";

const NotFound = () => {
  return (
    <AnimatedPage>
      <div className="grid place-items-center">
        <Typography variant="h1">NotFound</Typography>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
