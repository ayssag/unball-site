/**
 * Tipos de domínio do conteúdo do site.
 *
 * Estes formatos descrevem os objetos estruturados lidos dos arquivos de
 * tradução (`t(key, { returnObjects: true })`) e são compartilhados entre
 * seções e componentes.
 */

export type AchievementIcon = "trophy" | "medal";

export type AchievementItem = {
  id: number | string;
  title: string;
  competition: string;
  year: number | string;
  icon?: AchievementIcon;
};

export type LeagueTrivia = {
  title: string;
  description: string;
};

export type LeagueItem = {
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  trivia?: LeagueTrivia;
};

export type PaperItem = {
  title: string;
  authors: string[];
  /** Data em formato ISO (ex.: "2024-05-10"), convertida com `new Date()`. */
  date: string;
  abstract: string;
  url: string;
  tags: string[];
  ctaText: string;
};

export type PartnerItem = {
  type: string;
  name: string;
  logoUrl: string;
  url?: string;
};

export type WorkAreaItem = {
  title: string;
  /** Chave do ícone em `iconMap` (RobocupSection). */
  icon: string;
  description: string;
};
