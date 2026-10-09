import "@/i18n";

import { Box } from "@mui/material";
import type { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LanguageGuard from "@/i18n/LanguageGuard";
import { type RouteKey, ROUTES, SUPPORTED_LANGS } from "@/i18n/routesMap";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SystemStatus from "./components/layout/SystemStatus";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Papers from "./components/pages/papers";
import Partners from "./components/pages/partners";

const PAGES: Record<RouteKey, ReactElement> = {
  home: <Home />,
  about: <About />,
  papers: <Papers />,
  partners: <Partners />,
  contact: <Contact />,
};

const toRelative = (path: string) => path.split("/").slice(2).join("/");

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <SystemStatus />
        <Routes>
          <Route path="/" element={<Navigate to="/pt" replace />} />
          <Route path="/:lang" element={<LanguageGuard />}>
            {ROUTES.map(({ key, paths }) => {
              const element = PAGES[key];
              if (key === "home")
                return <Route key={key} index element={element} />;
              return SUPPORTED_LANGS.map((lang) => (
                <Route
                  key={`${key}-${lang}`}
                  path={toRelative(paths[lang])}
                  element={element}
                />
              ));
            })}
            <Route path="*" element={<Navigate to="/pt" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/pt" replace />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
