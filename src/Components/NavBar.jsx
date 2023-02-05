import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ListItemIcon, Stack } from "@mui/material";
import {
  Code,
  ContactPage,
  Description,
  Home,
  Menu,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const drawerWidth = 240;
const navItems = [
  { text: "Home", icon: <Home className="text-silver" /> },
  { text: "Projects", icon: <Code className="text-silver" /> },
  { text: "Resume", icon: <Description className="text-silver" /> },
  { text: "Contact", icon: <ContactPage className="text-silver" /> },
];

function NavBar({ window }) {
  const [open, setOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setOpen((prevState) => !prevState);
  };

  const handleNavLink = (text) => {
    switch (text) {
      case "Home":
        navigate("/");
        break;
      case "Projects":
        navigate("/projects");
        break;
      case "Contact":
        navigate("/contact");
        break;
      case "Resume":
        setResumeModalOpen(true);
        break;
      default:
        break;
    }
  };

  const drawer = (
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
        width: drawerWidth,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        borderLeft: "1px solid hsl(207, 6%, 68%, 0.25)",
        textAlign: "center",
      }}
      onClick={handleNav}
    >
      <Stack width={drawerWidth} className="text-pale-gray">
        {navItems.map(({ text, icon }, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={() => handleNavLink(text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={text}
                className="text-xl font-bold"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </Stack>
    </Stack>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={{ maxWidth: 1280, mx: "auto", my: 1 }}
      >
        <Toolbar variant="dense">
          <Box
            sx={{ cursor: "pointer" }}
            className="rounded-full bg-silver"
            onClick={() => navigate("/")}
          >
            <div className="w-16 h-16 m-[2px] bg-[url(../public/images/logo-mj2-100.webp)] bg-no-repeat bg-center bg-contain"></div>
          </Box>
          <Box sx={{ cursor: "pointer", textDecoration: 'underline'  }} pl={1} onClick={() => navigate("/")}>
            <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
              tig.dev
            </Typography>
          </Box>

          <Box className="ml-auto">
            <Stack
              spacing={0}
              flexDirection="row"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {navItems.map(({ text }, index) => (
                <ListItem key={index} disablePadding disableGutters>
                  <ListItemButton onClick={() => handleNavLink(text)}>
                    <ListItemText
                      disableTypography
                      primary={text}
                      className="font-bold "
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Stack>
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleNav}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu className="text-silver" fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          anchor={"right"}
          variant="temporary"
          open={open}
          onClose={handleNav}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <ResumeModal
        resumeModalOpen={resumeModalOpen}
        setResumeModalOpen={(open) => setResumeModalOpen(open)}
      />
    </Box>
  );
}

export default NavBar;
