import { Close, Inbox, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = (state) => {
    setNavOpen(state);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ maxWidth: 1280, mx: "auto", my: 1 }}
    >
      <Toolbar variant="dense">
        <Box
          sx={{ cursor: "pointer" }}
          className="rounded-full bg-silver "
          onClick={() => navigate("/")}
        >
          <div className="w-9 h-9 m-[6px] bg-[url(../public/images/logo-mj2-100.png)] bg-no-repeat bg-center bg-contain"></div>
        </Box>
        <Box sx={{ cursor: "pointer" }} pl={1} onClick={() => navigate("/")}>
          <Typography fontWeight={"bold"} fontSize={"1.4rem"}>
            tig.dev
          </Typography>
        </Box>

        <Box className="ml-auto ">
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => handleNav(true)}
          >
            <Menu
              className="text-silver"
              fontSize="large"
              sx={{ display: { xs: "block", sm: "none" } }}
            />
          </IconButton>
          <Stack
            className="ml-auto"
            direction={{ xs: "column", sm: "row" }}
            spacing={0}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {["Home", "Projects", "Resume", "Contact"].map((text, index) => (
              <ListItem key={index} disablePadding disableGutters>
                <ListItemButton
                  onClick={() =>
                    text === "Home"
                      ? navigate("/")
                      : navigate("/" + text.toLocaleLowerCase())
                  }
                >
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
        </Box>

        <Stack
          className="ml-auto"
          direction={{ xs: "column", sm: "row" }}
          spacing={0}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            px: 2,
            py: 2,
            background: "linear-gradient(to top right, #23383D, #080808)",
            height: "100%",
            width: "40%",
            minWidth: "200px",
            zIndex: 10,
            display: navOpen ? { xs: "flex", sm: "none" } : "none",
            alignItems: "center",
            borderLeft: "1px solid hsl(207, 6%, 68%, 0.25)",
          }}
        >
          <IconButton className="self-end" onClick={() => handleNav(false)}>
            <Close fontSize="large" className=" text-silver" />
          </IconButton>

          {["Home", "Projects", "Resume", "Contact"].map((text, index) => (
            <ListItem key={index} disableGutters>
              <ListItemButton
                onClick={() =>
                  text === "Home"
                    ? navigate("/")
                    : navigate("/" + text.toLocaleLowerCase())
                }
              >
                <ListItemIcon>
                  <Inbox className="text-silver" />
                </ListItemIcon>
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
