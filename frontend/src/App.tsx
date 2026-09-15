import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import '@/i18n';
import LanguageGuard from '@/i18n/LanguageGuard';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Papers from './components/pages/papers';
import Partners from './components/pages/partners';
import Contact from './components/pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'background.default',
          backgroundImage: `
            linear-gradient(rgba(64, 165, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 165, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <Navbar isTop={true} />
        <Routes>
          <Route path="/" element={<Navigate to="/pt" replace />} />
          <Route path="/:lang" element={<LanguageGuard />}>
            <Route index element={<Home />} />
            <Route path="sobre-nos" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="publicacoes" element={<Papers />} />
            <Route path="papers" element={<Papers />} />
            <Route path="apoiadores" element={<Partners />} />
            <Route path="partners" element={<Partners />} />
            <Route path="contato" element={<Contact />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/pt" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/pt" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
