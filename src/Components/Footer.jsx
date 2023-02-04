import { GitHub, LinkedIn } from "@mui/icons-material";
import { Tooltip, Zoom } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto mt-12 font-bold text-black body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:justify-around sm:flex-row">
        <Tooltip
          title="Download Resume"
          TransitionComponent={Zoom}
          followCursor
          enterDelay={300}
          leaveDelay={200}
          placement="top"
        >
          <a
            className="flex items-center justify-center font-medium text-black title-font md:justify-start sm:ml-auto"
            href="/2023_Resume_Tigran_Farmanyan.pdf"
          >
            <span className="ml-3 text-2xl underline">Tigran Farmanyan</span>
          </a>
        </Tooltip>

        <p className="mt-4 font-medium text-black text-md sm:mx-4 sm:px-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0">
          © 2023 tig.dev creations —
          <a
            href="https://github.com/tigranf"
            className="ml-1 text-black"
            rel="noopener noreferrer"
            target="_blank"
          >
            @tigranf
          </a>
        </p>

        <span className="inline-flex justify-center mt-4 sm:mt-0 sm:justify-start sm:ml-auto">
          <a href="https://github.com/tigranf" className="ml-3 text-black">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/tigranf/" className="ml-3 text-black">
            <LinkedIn />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
