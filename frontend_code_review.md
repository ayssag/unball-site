# Revisão do frontend: redundâncias, inconsistências e melhorias

Base: `frontend/src` (cerca de 3 mil linhas). As prioridades estão marcadas como 🔴 alta, 🟡 média e 🟢 baixa.

---

## 1. Tema MUI (`theme.ts`)

### 🔴 1.1 Importação direta de `theme` em vez de `useTheme` ou callbacks do `sx`
Muitos componentes fazem `import theme from "@/theme"` e usam `theme.palette...` dentro do `sx`. Isso ignora o `ThemeProvider` (o tema não muda em runtime, não dá para testar nem usar modo claro/escuro) e gera imports repetidos.

Arquivos: [SystemStatus](file:///home/ayssag/Dev/unball-site/frontend/src/components/layout/SystemStatus/index.tsx), [Navbar](file:///home/ayssag/Dev/unball-site/frontend/src/components/layout/Navbar/index.tsx), [TagCard](file:///home/ayssag/Dev/unball-site/frontend/src/components/common/TagCard.tsx), [PartnerCard](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/PartnersSection/PartnerCard.tsx), [RobocupSection](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/RobocupSection/index.tsx), [WorkAreaBadge](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/RobocupSection/WorkAreaBadge.tsx), [WorkAreaDescription](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/RobocupSection/WorkAreaDescription.tsx), [LeagueCard](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/LeagueSection/LeagueCard.tsx), [CarouselArrow](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/AchievementsSection/CarouselArrow.tsx), [AchievementsSection](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/AchievementsSection/index.tsx), [AchievementBadge](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/AchievementsSection/AchievementBadge.tsx), [YearBadge](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/PapersSection/YearBadge.tsx), [PaperCard](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/PapersSection/PaperCard.tsx), [ContactForm](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/ContactSection/ContactForm.tsx).

Já [HeroImage](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/HeroSection/HeroImage.tsx) usa `useTheme()` e os styled components usam `({ theme })`. Ou seja, existem três padrões diferentes no mesmo projeto.

```diff
-import theme from "@/theme";
-sx={{ color: theme.palette.primary.main, border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}` }}
+sx={(theme) => ({ color: "primary.main", border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}` })}
```
Para cores simples, use os atalhos de string (`"primary.main"`, `"background.default"`, `"text.primary"`).

### 🔴 1.2 A borda `alpha(secondary.main, 0.4)` se repete mais de 20 vezes
É o principal token visual do site, mas aparece copiado e colado em quase todos os arquivos (às vezes com 0.2 ou 0.3, sem critério claro). A sugestão é criar tokens no tema:

```ts
// theme.ts
declare module "@mui/material/styles" {
  interface Palette { border: { main: string; subtle: string } }
  interface PaletteOptions { border?: { main: string; subtle: string } }
}
palette: { border: { main: alpha('#40A5FF', 0.4), subtle: alpha('#40A5FF', 0.2) } }
```
Assim, o uso vira `border: 1, borderColor: "border.main"`.

### 🟡 1.3 Fontes repetidas como strings soltas
A string `"'Space Mono', monospace"` aparece em cerca de 10 lugares, e `"'Bungee', system-ui"` aparece duplicada entre `typography` e `MuiCssBaseline` (essa sobrescrita em `h1`–`h6` do CssBaseline é redundante, porque o `Typography` já aplica as fontes). O ideal é exportar constantes (`fonts.mono`, `fonts.display`) ou criar uma variante tipográfica `mono`/`terminal`.

### 🟡 1.4 Tamanhos responsivos repetidos e `responsiveFontSizes`
- O trecho `sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}` no `h2` aparece em 5 seções. Isso deveria ficar no tema (via `theme.typography.h2[breakpoint]` ou `responsiveFontSizes(theme)`).
- A escala `{ xs: "0.55rem", sm: "0.625rem" }` no `h4` também se repete em TagCard, LeagueCard e YearBadge.

### 🟡 1.5 Outros problemas no tema
- `MuiTextField: {}` está vazio e deve ser removido. Melhor ainda: mover os estilos de [StyledTextField](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/ContactSection/StyledTextField.tsx) para cá.
- Há cores fixas no código fora da paleta: `#C55B14` e `#833e10ff` (botão contained), `#9CA3AF`, `#A0B4C8` e `#5C82A6` (formulário), além de `#07192E` no `index.css`, que duplica `background.default`.
- `borderRadius: 0` se repete em Card, Button e assim por diante. É mais simples usar `shape: { borderRadius: 0 }` no tema.
- O valor `text.secondary` (`#F4F7F6`) é mais claro que o `text.primary`, o que inverte a semântica do MUI.
- `import { alpha } from "@mui/material"` e `createTheme` vêm de `"@mui/material/styles"`. É melhor padronizar a origem.

### 🟢 1.6 Hifenização duplicada
As propriedades `hyphens`, `word-break` e `overflow-wrap` estão definidas tanto no [index.css](file:///home/ayssag/Dev/unball-site/frontend/src/index.css) quanto no `MuiCssBaseline`. Mantenha só um dos dois (de preferência o CssBaseline, levando o grid do `body` junto).

---

## 2. Componentes duplicados (falta de abstração)

### 🔴 2.1 Cabeçalho de seção (subtítulo, título e descrição)
Todas as seções repetem o mesmo bloco:
```tsx
<Typography variant="h6">{t("...subtitle")}</Typography>
<Typography variant="h2" color="text.primary" sx={{ fontSize: {...} }}>{t("...title")}</Typography>
```
Sugestão: criar um componente `components/common/SectionHeader.tsx`.
```tsx
type Props = { subtitle: string; title: string; description?: string; spacing?: number };
export function SectionHeader({ subtitle, title, description, spacing = 2 }: Props) { ... }
```

### 🔴 2.2 Painel com borda e fundo translúcido
Os estilos `backgroundColor: alpha(paper, 0.4)` + `border...` + `borderTop/Bottom` aparecem em RobocupSection, AchievementsSection, WorkAreaBadge e WorkAreaDescription. A ideia é criar um `Panel` ou `OutlinedBox` styled em `shared/styled.tsx`, com uma variante `bordered="y"`.

### 🔴 2.3 Card padrão
[LeagueCard](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/LeagueSection/LeagueCard.tsx#L35-L45) e [PaperCard](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/PapersSection/PaperCard.tsx#L34-L44) têm exatamente o mesmo `sx`. Isso pode ir para o tema via `MuiCard.styleOverrides.root` ou virar um `StyledCard`.

### 🟡 2.4 Lista de tags
O trecho `item.tags && item.tags.map((tag, index) => <TagCard key={index} />)` dentro de `Box flex wrap gap 1` aparece duplicado. Sugestão: um componente `TagList` em `common/`.

### 🟡 2.5 Cálculo do idioma atual
A linha `(i18n.language?.startsWith("en") ? "en" : "pt") as SupportedLang` se repete em Navbar, HeroSection, PapersSection e, de forma parecida, em LanguageSwitch. Dá para criar um hook:
```ts
// i18n/useLocalizedPath.ts
export function useCurrentLang(): SupportedLang { ... }
export function useLocalizedPath() { const lang = useCurrentLang(); return (key: RouteKey) => getRoutePath(key, lang); }
```

### 🟡 2.6 Badges com ícone
`iconMap` (RobocupSection) e `defaultIcons` (AchievementBadge) fazem a mesma coisa: transformam uma string do i18n em um ícone. Podem ser unificados em `shared/icons.ts`.

---

## 3. TypeScript

### 🔴 3.1 Dados de domínio vindos do i18n com cast inseguro
O padrão `t("...items", { returnObjects: true }) as XItem[]` seguido de `Array.isArray(...)` aparece em 5 lugares. Há dois caminhos:
- **(a)** Mover os dados estruturados (parceiros, papers, conquistas, ligas) para `src/data/*.ts` tipados e deixar no i18n só o texto traduzível.
- **(b)** No mínimo, criar um helper tipado:
```ts
export function useTranslatedList<T>(key: string): T[] {
  const { t } = useTranslation();
  const v = t(key, { returnObjects: true });
  return Array.isArray(v) ? (v as T[]) : [];
}
```
Isso elimina todos os `Array.isArray` espalhados.

Também vale ativar o tipo seguro do i18next (`declare module "i18next" { interface CustomTypeOptions { resources: { translation: typeof pt } } }`), o que garante autocomplete e erro de compilação para chaves inexistentes. Além disso, a estrutura `en` deve ser tipada como `typeof pt` para garantir paridade entre os idiomas.

### 🔴 3.2 Tipos mentirosos
- `PaperItem.date: Date`: no i18n o valor é uma string, e o próprio código faz `new Date(item.date)`. O tipo correto é `date: string`.
- `LeagueTrivia.description: string[] | string`: é melhor normalizar os dados para um único formato.

### 🟡 3.3 Tipos espalhados e arquivo vazio
- `shared/types.js` está **vazio** e ainda é `.js` num projeto TypeScript. Remova o arquivo ou transforme em `types.ts` e concentre ali `PartnerItem`, `PaperItem`, `LeagueItem`, `AchievementItem` e `WorkAreaItem`.
- O tipo `WorkAreaDescriptionProps` redefine parte de `WorkAreaItem`. Use `Pick<WorkAreaItem, "title" | "description">`.

### 🟡 3.4 Rotas tipadas
`getRoutePath(key: string)` aceita qualquer string. Declare `ROUTES` com `as const satisfies ...` e derive `type RouteKey = typeof ROUTES[number]["key"]`. A lista `VALID_LANGS` no [LanguageGuard](file:///home/ayssag/Dev/unball-site/frontend/src/i18n/LanguageGuard.tsx#L6) duplica `SupportedLang`, então exporte `SUPPORTED_LANGS = ['pt','en'] as const` e derive o tipo dele.

### 🟢 3.5 Props opcionais sem necessidade
`item?: X` com `if (!item) return null` aparece em PartnerCard, LeagueCard e PaperCard. Como quem chama sempre passa o item, ele deveria ser obrigatório.

### 🟢 3.6 Estilo de declaração inconsistente
- Há `React.FC` (LanguageSwitch), arrow `const Navbar = () =>` e `function X()` (a maioria). Padronize em `function`.
- Alguns arquivos exportam como named e default ao mesmo tempo, outros só um dos dois (LeagueCard e YearBadge não têm default). Escolha um padrão; named exports facilitam refatoração.
- `React.ChangeEvent` é usado sem `import type React` em [ContactForm](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/ContactSection/ContactForm.tsx#L36).

---

## 4. React

### 🔴 4.1 Rotas duplicadas em `App.tsx`
[App.tsx](file:///home/ayssag/Dev/unball-site/frontend/src/App.tsx#L28-L38) declara cada página duas vezes (pt/en) na mão, enquanto `ROUTES` em [routesMap.ts](file:///home/ayssag/Dev/unball-site/frontend/src/i18n/routesMap.ts) já contém essa informação. Gere as rotas a partir de `ROUTES`, adicionando `element` ou `component` a cada definição. Assim, uma rota nova passa a ser alterada em um único lugar.

### 🟡 4.2 `routesMap.getEquivalentPath`
Os casos especiais fixos para `/pt` e `/en` podem ser trocados por uma normalização da barra final (`path.replace(/\/$/, "")`), que funciona para qualquer rota.

### 🟡 4.3 `LanguageGuard`
- Há uma linha mal formatada (`if (...) {      navigate(...)`).
- `location` está nas dependências do efeito sem ser usada. Remova junto com o `useLocation`.
- Em vez de `useEffect` + `navigate`, é mais idiomático retornar `<Navigate to="/pt" replace />` direto no render.
- `LanguageSwitch` chama `i18n.changeLanguage` **e** navega, e o Guard chama de novo. A responsabilidade deveria ficar só no Guard.

### 🟡 4.4 Navbar
- A prop `isTop` nunca é passada, então a lógica `isScrolled` é código morto.
- `handleScroll` com if/else pode virar `setScrolled(window.scrollY > 80)`. O listener deveria ser `{ passive: true }`.
- `<nav style>` e `<h2 style>` usam inline style. O ideal é `Box component="nav" sx` e `Typography variant="h2" component="span"`. Além disso, um `h2` na navbar quebra a hierarquia de headings para SEO.
- `MenuList` e `MenuItem` são componentes de **menu/ARIA de menu**, não de navegação. Para um nav, use `Stack`, `List` ou `Button component={NavLink}`.
- O texto `"Logo da UnBall"` e o `aria-label="open menu"` estão fixos no código, fora do i18n.
- As constantes mágicas `80` (altura da navbar), `top: 80` no SystemStatus e `zIndex` 1090/1100 deveriam vir do tema (`theme.zIndex.appBar` e um token `navbarHeight`).

### 🟡 4.5 SystemStatus
- `window.pageXOffset` está obsoleto e é redundante com `scrollX`.
- Os dois ramos do efeito repetem a mesma estrutura. Dá para extrair hooks `useMousePosition()` e `useScrollPosition()` em `src/hooks/`.
- `useMediaQuery(theme.breakpoints.up("md"))` usa o tema importado, quando o certo é `useMediaQuery((t) => t.breakpoints.up("md"))`.
- O `rAF` não é cancelado antes de cada novo agendamento, então vários frames podem se acumular. Faça um throttle com uma flag ou cancele o anterior.

### 🟡 4.6 HeroImage
- O `ResizeObserver` já cobre o redimensionamento, então o `window.addEventListener("resize")` é redundante.
- O componente recebe as props `label` e `sx`, mas nunca as usa.
- O `alt` está fixo em português, fora do i18n.
- A prop `width` tem um default inline. Mova os defaults para constantes fora do componente para evitar novos objetos a cada render.

### 🟡 4.7 AchievementBadge e Carousel
- As funções `getSize`, `getIconSize` e `renderIcon` são recriadas a cada render e `getSize()` é chamada duas vezes. Use um mapa constante `SIZES = { center, side, far }` e derive uma `variant: "center" | "side" | "far"` em vez de dois booleanos (`isCenter` e `isFarSide` permitem um estado inválido).
- [CarouselArrow](file:///home/ayssag/Dev/unball-site/frontend/src/components/pages/home/sections/AchievementsSection/CarouselArrow.tsx#L7-L14) tem duas props equivalentes (`side` e `direction`). Fique só com uma. Falta também um `aria-label`.
- O Carousel com menos de 5 itens repete itens (a mesma key aparece em offsets diferentes), o que vale tratar.

### 🟡 4.8 ContactForm
- A validação repete 4 vezes o `requiredField`. A segunda verificação de `invalidEmailFormat` refaz toda a lógica. Dá para iterar sobre `REQUIRED_FIELDS` e extrair `validate(formData): Errors` para uma função pura (`contactValidation.ts`) ou um hook `useContactForm`.
- `errors` usa `Record<string,string>` misturando campos com a chave `form`. Melhor tipar `Partial<Record<keyof FormData, string>>` e manter `formError` separado.
- Os textos de fallback em `t(key, "fallback")` duplicam o dicionário pt e tendem a ficar desatualizados. Remova, já que o `fallbackLng` já resolve.
- Os subjects estão fixos no código. Use `SUBJECTS.map(...)`.
- O `setTimeout` simula o envio e não é limpo no unmount. Marque com `// TODO` e trate o cleanup.
- O trecho `alpha("#000", 0.25)` deveria usar `theme.palette.common.black` ou `theme.shadows`.
- O `ColoredCircle` (botões estilo macOS) pode ir para `common/` caso seja reaproveitado no terminal.

### 🟢 4.9 Keys com índice
Há `key={index}` em listas de tags e work areas, e `item.name || index` em outros lugares. Prefira um `id` estável vindo dos dados.

### 🟢 4.10 `WorkAreaBadge` clicável sem acessibilidade
É um `Stack` com `onClick`, sem `role="button"`, `tabIndex` ou suporte a teclado. Use `ButtonBase` (ou `CardActionArea`) do MUI. O mesmo vale para o `AchievementBadge`.

---

## 5. Uso do MUI

| Problema | Onde | Sugestão |
|---|---|---|
| `FlexBoxBetween` usado onde não há "between" (com `flexDirection: column`, `alignItems` sobrescrito) | AchievementsSection, LeagueSection, AboutSection | Usar `Stack` com `direction` responsivo |
| `Box sx={{ display: "flex", flexDirection: "column", gap }}` | HeroSection | `Stack spacing` |
| `Stack sx={{ display: "block" }}` | YearBadge | Isso anula o propósito do Stack; usar `Box` |
| `paddingX` / `paddingY` / `px` / `py` misturados | vários | Padronizar com a forma curta (`px`, `py`) |
| `padding: { xs: "4px 8px" }` em px | TagCard | Usar spacing (`px: 1, py: 0.5`) |
| `boxSizing: "border-box"` repetido | vários | O CssBaseline já aplica isso globalmente |
| `<svg style>` e `<span style>` inline | HeroImage, SystemStatus | `Box component="svg" sx` / `Typography component="span" color="success.main"` |
| `TextBadge` usa `color: "text.main"` | TextBadge | Esse token não existe; o correto é `text.primary` |
| `LeagueSection` envolve um único `Stack` num `FlexBoxBetween` | LeagueSection | Wrapper desnecessário |
| Overrides de `StyledTextField` com seletores `.MuiInput-underline` | StyledTextField | Mover para `MuiInput`/`MuiTextField` no tema; o rótulo customizado pode usar `InputLabel shrink` |

---

## 6. Organização e estrutura

- 🟡 **Arquivos vazios:** `App.css`, `Footer/index.tsx` e `shared/types.js`. Remova ou implemente.
- 🟡 **`AboutSection.tsx`** é um arquivo solto, enquanto todas as outras seções são pastas com `index.tsx`. Padronize.
- 🟡 **Imports:** `PartnersSection` usa um caminho absoluto longo para um arquivo irmão (`@/components/pages/home/sections/PartnersSection/PartnerCard`). Use `./PartnerCard`. Defina também uma ordem padrão (libs, depois `@/`, depois relativos), que o ESLint consegue aplicar com `import/order` ou `simple-import-sort`.
- 🟡 **Formatação inconsistente:** há aspas simples e duplas, ponto e vírgula ausente (RobocupSection, AboutSection, theme.ts), indentação de 2 e de 4 espaços. Adicione **Prettier** e `.editorconfig`.
- 🟢 Estrutura sugerida:
```
src/
  app/ (App.tsx, routes.tsx)
  components/common/ (SectionHeader, Panel, TagList, StyledCard, IconBadge)
  components/layout/
  features|pages/
  data/ (dados estruturados tipados)
  hooks/ (useCurrentLang, useScrollPosition, useMousePosition)
  i18n/
  theme/ (index.ts, palette.ts, typography.ts, components.ts, augmentation.d.ts)
  types/
```

---

## 7. Plano de ação sugerido (por ordem de impacto)

1. Criar tokens no tema (border, fontes, h2 responsivo, Card/Button/TextField overrides) e remover `import theme` dos componentes.
2. Extrair `SectionHeader`, `Panel`, `TagList` e `useCurrentLang`/`useLocalizedPath`.
3. Gerar as rotas a partir de `ROUTES` e tipar `RouteKey`/`SupportedLang`.
4. Tipar o i18n (`CustomTypeOptions`) e criar `useTranslatedList` ou mover os dados para `data/`.
5. Refatorar ContactForm (validação pura e constantes) e AchievementBadge (variant e mapas de tamanho).
6. Fazer a limpeza: arquivos vazios, código morto (`isTop`, props não usadas, listener `resize`), Prettier e ordem de imports.
