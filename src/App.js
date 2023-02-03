import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Error from "./Pages/Error";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

const themeOptions = {
  palette: {
    type: "light",
    primary: { main: "#3f51b5" },
    secondary: { main: "#f50057" },
  },
  typography: {
    fontFamily: "Quicksand",
  },
};
const theme = createTheme(themeOptions);

export default function App() {
  const location = useLocation();
  let initial = location.pathname === "/" ? true : false;
  const [loading, setLoading] = useState(initial);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const loader = (
    <div className="absolute top-0 left-0 z-30 grid w-screen h-screen bg-charcoal-gray bg-[radial-gradient(circle,rgba(37,56,61,1)35%,rgba(26,39,43,1)100%)] place-items-center">
      <div className="w-[280px]">
        <SyncLoader
          color={"#DAC7C2"}
          loading={loading}
          // cssOverride={override}
          size={53}
          margin={20}
          speedMultiplier={0.6}
          aria-label="Loader"
        />
      </div>
    </div>
  );

  return (
    <>
      {loading && loader}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="text-pale-gray flex flex-col w-screen min-h-screen bg-[url(../public/images/bm-bg-home.png)] bg-fixed bg-opacity-90 bg-auto bg-top bg-no-repeat">
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route index element={<Home loading={loading} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/error" element={<Error />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
