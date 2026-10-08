import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { SUPPORTED_LANGS, type SupportedLang } from "./routesMap";

export function LanguageGuard() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();

  const isValid = SUPPORTED_LANGS.includes(lang as SupportedLang);

  useEffect(() => {
    if (isValid && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [isValid, lang, i18n]);

  if (!isValid) {
    return <Navigate to="/pt" replace />;
  }

  return <Outlet />;
}

export default LanguageGuard;
