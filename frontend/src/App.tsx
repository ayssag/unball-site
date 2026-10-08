import type { ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import '@/i18n';
import LanguageGuard from '@/i18n/LanguageGuard';
import Navbar from './components/layout/Navbar';
import SystemStatus from './components/layout/SystemStatus';
import Home from './components/pages/home';
import About from './components/pages/about';
import Papers from './components/pages/papers';
import Partners from './components/pages/partners';
import Contact from './components/pages/contact';
import { ROUTES, SUPPORTED_LANGS, type RouteKey } from '@/i18n/routesMap';

const PAGES: Record<RouteKey, ReactElement> = {
  home: <Home />,
  about: <About />,
  papers: <Papers />,
  partners: <Partners />,
  contact: <Contact />,
};

/** Caminho relativo ao segmento `/:lang` (ex.: "/pt/sobre-nos" -> "sobre-nos"). */
const toRelative = (path: string) => path.split('/').slice(2).join('/');

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <SystemStatus />
        <Routes>
          <Route path="/" element={<Navigate to="/pt" replace />} />
          <Route path="/:lang" element={<LanguageGuard />}>
            {ROUTES.map(({ key, paths }) => {
              const element = PAGES[key];
              if (key === 'home') return <Route key={key} index element={element} />;
              return SUPPORTED_LANGS.map((lang) => (
                <Route key={`${key}-${lang}`} path={toRelative(paths[lang])} element={element} />
              ));
            })}
            <Route path="*" element={<Navigate to="/pt" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/pt" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
