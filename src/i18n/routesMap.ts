export const SUPPORTED_LANGS = ["pt", "en"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export interface RouteDefinition {
  key: string;
  paths: Record<SupportedLang, string>;
}

export const ROUTES = [
  {
    key: "home",
    paths: {
      pt: "/pt",
      en: "/en",
    },
  },
  {
    key: "about",
    paths: {
      pt: "/pt/sobre-nos",
      en: "/en/about",
    },
  },
  {
    key: "papers",
    paths: {
      pt: "/pt/publicacoes",
      en: "/en/papers",
    },
  },
  {
    key: "partners",
    paths: {
      pt: "/pt/apoiadores",
      en: "/en/partners",
    },
  },
  {
    key: "contact",
    paths: {
      pt: "/pt/contato",
      en: "/en/contact",
    },
  },
] as const satisfies readonly RouteDefinition[];

export type RouteKey = (typeof ROUTES)[number]["key"];

/**
 * Retorna o caminho equivalente no novo idioma com base na rota atual.
 */
export function getEquivalentPath(
  currentPath: string,
  targetLang: SupportedLang
): string {
  // Normaliza a barra final (ex.: "/pt/" -> "/pt")
  const normalized =
    currentPath.length > 1 ? currentPath.replace(/\/$/, "") : currentPath;

  const matchedRoute = ROUTES.find((route) =>
    Object.values<string>(route.paths).includes(normalized)
  );

  if (matchedRoute) {
    return matchedRoute.paths[targetLang];
  }

  // Fallback para a home do idioma destino
  return `/${targetLang}`;
}

/**
 * Retorna os slugs de caminho para React Router v7 dada a linguagem
 */
export function getRoutePath(key: RouteKey, lang: SupportedLang): string {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return `/${lang}`;
  return route.paths[lang];
}
