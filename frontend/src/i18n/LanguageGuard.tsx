import { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { SupportedLang } from './routesMap';

const VALID_LANGS: SupportedLang[] = ['pt', 'en'];

export function LanguageGuard() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!lang || !VALID_LANGS.includes(lang as SupportedLang)) {
      // Se a linguagem for inválida, redireciona para a home em PT
      navigate('/pt', { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate, location]);

  return <Outlet />;
}

export default LanguageGuard;
