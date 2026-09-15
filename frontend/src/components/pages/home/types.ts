export const SelectedSection = {
    Hero: "hero",
    FutebolDeRobos: "futebol-de-robos",
    SobreNos: "sobre-nos",
    Categorias: "categorias",
    Conquistas: "conquistas",
    Publicacoes: "publicacoes",
    Apoiadores: "apoiadores",
    FaleConosco: "fale-conosco"
} as const;

export type SelectedSection = (typeof SelectedSection)[keyof typeof SelectedSection];