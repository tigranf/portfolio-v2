import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Error from "./Pages/Error";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Montserrat Alternates",
    h1: {
      fontFamily: "Lato",
    },
    h2: {
      fontFamily: "Lato",
    },
    h3: {
      fontFamily: "Lato",
    },
    h4: {
      fontFamily: "Lato",
    },
    h5: {
      fontFamily: "Lato",
    },
    h6: {
      fontFamily: "Lato",
    },
  },
};
const theme = createTheme(themeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="text-pale-gray flex flex-col w-screen min-h-screen bg-[url(../public/images/bg-home.png)] bg-top bg-no-repeat">
        <NavBar />
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

