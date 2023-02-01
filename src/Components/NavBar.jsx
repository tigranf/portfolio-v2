import {
  AppBar,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ maxWidth: 1280, mx: "auto",mt:1 }}
    >
      <Toolbar variant="dense">
        <Box
          sx={{ cursor: "pointer" }}
          className="rounded-full bg-pale-gray "
          onClick={() => navigate("/")}
        >
          <div className="w-14 h-14 m-1 bg-[url(../public/images/logo-mj2-100.png)] bg-no-repeat bg-center bg-contain"></div>
        </Box>
        <Box sx={{ cursor: "pointer" }} pl={1} onClick={() => navigate("/")}>
          <Typography fontWeight={"bold"} variant="h5">
            tig.dev
          </Typography>
        </Box>
        <Stack className="ml-auto" direction={{xs:"column",sm:"row"}} spacing={0}>
          {["Home", "Projects", "Resume", "Contact"].map((text, index) => (
            <ListItem key={index} disablePadding disableGutters>
              <ListItemButton>
                <ListItemText
                  disableTypography
                  primary={text}
                  onClick={() =>
                    text === "Home"
                      ? navigate("/")
                      : navigate("/" + text.toLocaleLowerCase())
                  }
                  className="font-bold "
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
