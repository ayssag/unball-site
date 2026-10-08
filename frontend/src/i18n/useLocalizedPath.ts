import { useTranslation } from "react-i18next";

import { getRoutePath, type RouteKey, type SupportedLang } from "./routesMap";

export function useCurrentLang(): SupportedLang {
  const { i18n } = useTranslation();
  return i18n.language?.startsWith("en") ? "en" : "pt";
}

export function useLocalizedPath() {
  const lang = useCurrentLang();
  return (key: RouteKey) => getRoutePath(key, lang);
}
