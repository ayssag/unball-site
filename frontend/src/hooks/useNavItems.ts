import { useTranslation } from "react-i18next";

import type { RouteKey } from "@/i18n/routesMap";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

export interface NavItem {
  key: RouteKey;
  path: string;
  label: string;
  end?: boolean;
}

export function useNavItems(): NavItem[] {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();

  return [
    { key: "home", path: getPath("home"), label: t("navbar.home"), end: true },
    { key: "about", path: getPath("about"), label: t("navbar.about") },
    { key: "papers", path: getPath("papers"), label: t("navbar.papers") },
    { key: "partners", path: getPath("partners"), label: t("navbar.partners") },
    { key: "contact", path: getPath("contact"), label: t("navbar.contact") },
  ];
}
