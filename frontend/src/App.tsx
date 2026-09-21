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
