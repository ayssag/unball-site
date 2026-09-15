export type SupportedLang = 'pt' | 'en';

export interface RouteDefinition {
  key: string;
  paths: Record<SupportedLang, string>;
}

export const ROUTES: RouteDefinition[] = [
  {
    key: 'home',
    paths: {
      pt: '/pt',
      en: '/en',
    },
  },
  {
    key: 'about',
    paths: {
      pt: '/pt/sobre-nos',
      en: '/en/about',
    },
  },
  {
    key: 'papers',
    paths: {
      pt: '/pt/publicacoes',
      en: '/en/papers',
    },
  },
  {
    key: 'partners',
    paths: {
      pt: '/pt/apoiadores',
      en: '/en/partners',
    },
  },
  {
    key: 'contact',
    paths: {
      pt: '/pt/contato',
      en: '/en/contact',
    },
  },
];

/**
 * Retorna o caminho equivalente no novo idioma com base na rota atual.
 */
export function getEquivalentPath(currentPath: string, targetLang: SupportedLang): string {
  // Encontrar a rota correspondente ao caminho atual
  const matchedRoute = ROUTES.find((route) => {
    return Object.values(route.paths).some((path) => {
      // Casos de rotas exatas ou sem a barra final
      if (path === currentPath) return true;
      if (path === '/pt' && (currentPath === '/pt/' || currentPath === '/pt')) return true;
      if (path === '/en' && (currentPath === '/en/' || currentPath === '/en')) return true;
      return false;
    });
  });

  if (matchedRoute) {
    return matchedRoute.paths[targetLang];
  }

  // Fallback para a home do idioma destino
  return `/${targetLang}`;
}

/**
 * Retorna os slugs de caminho para React Router v7 dada a linguagem
 */
export function getRoutePath(key: string, lang: SupportedLang): string {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return `/${lang}`;
  return route.paths[lang];
}
