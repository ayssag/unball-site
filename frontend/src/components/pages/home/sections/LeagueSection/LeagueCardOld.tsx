import { Card, CardHeader, CardContent, Typography, Box, Stack, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from "@/theme";
import { FlexBoxBetween } from "@/shared/styled";

export type LeagueTrivia = {
    title: string;
    description: string[];
}

export type LeagueItem = {
    name: string;
    shortName: string;
    description: string;
    tags: string[];
    trivia: LeagueTrivia;
}

export type LeagueCardProps = {
    item?: LeagueItem;
}

const defaultItem: LeagueItem = {
    name: "VSSS — VERY SMALL SIZE SOCCER",
    shortName: "VSSS",
    description: "Partidas com robôs cúbicos de 7,5 cm³. Foco no processamento centralizado da visão e em estratégias de movimentação em alta velocidade.",
    tags: ["FÍSICO", "SIMULADO"],
    trivia: {
        title: "VOLUMETRIA MÁXIMA",
        description: ["7,5 cm³"]
    }
};

export function LeagueCard({ item }: LeagueCardProps) {
    const { t } = useTranslation();
    const leagueItems = t("pages.home.league.items", { returnObjects: true }) as LeagueItem[];
    const currentItem = item || (Array.isArray(leagueItems) && leagueItems[0] ? leagueItems[0] : defaultItem);

    return (
        <Card
            sx={{
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: alpha(theme.palette.background.default, 0.4),
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                borderRadius: 0,
                boxShadow: "none",
                overflow: "hidden",
            }}
        >
            {/* Tag Canto Superior Direito com shortName */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    borderLeft: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    paddingX: 2,
                    paddingY: 1,
                    backgroundColor: alpha(theme.palette.background.paper, 0.6),
                    zIndex: 1,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        letterSpacing: "0.5px",
                    }}
                >
                    CAT: {currentItem.shortName}
                </Typography>
            </Box>

            <CardHeader
                title={currentItem.name}
                titleTypographyProps={{
                    variant: "h2",
                    sx: {
                        fontFamily: "'Bungee', system-ui",
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.5rem", sm: "2rem" },
                        lineHeight: 1.2,
                        marginTop: 1,
                        maxWidth: "85%",
                    }
                }}
                sx={{
                    paddingX: { xs: 3, sm: 4 },
                    paddingTop: { xs: 3, sm: 4 },
                    paddingBottom: 0,
                }}
            />

            <CardContent
                sx={{
                    paddingX: { xs: 3, sm: 4 },
                    paddingBottom: { xs: 3, sm: 4 },
                    "&:last-child": { paddingBottom: { xs: 3, sm: 4 } }
                }}
            >
                {/* Lista de Tags */}
                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", marginY: 2.5 }}>
                    {currentItem.tags && currentItem.tags.map((tag, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                                paddingX: 1.5,
                                paddingY: 0.5,
                                backgroundColor: alpha(theme.palette.background.default, 0.3),
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.6875rem",
                                    fontWeight: 700,
                                    color: theme.palette.primary.main,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {tag}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Descrição */}
                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        opacity: 0.9,
                    }}
                >
                    {currentItem.description}
                </Typography>

                {/* Divisor */}
                <Box
                    sx={{
                        width: "100%",
                        borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        marginY: 3,
                    }}
                />

                {/* Seção Trivia (Rodapé) */}
                {currentItem.trivia && (
                    <FlexBoxBetween sx={{ alignItems: "flex-end" }}>
                        <Stack spacing={0.5}>
                            <Typography
                                sx={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.6875rem",
                                    textTransform: "uppercase",
                                    color: alpha(theme.palette.text.primary, 0.7),
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {currentItem.trivia.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'Trispace Variable', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.5rem",
                                    color: theme.palette.primary.main,
                                }}
                            >
                                {Array.isArray(currentItem.trivia.description)
                                    ? currentItem.trivia.description.join(" ")
                                    : currentItem.trivia.description}
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                width: 54,
                                height: 54,
                                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        />
                    </FlexBoxBetween>
                )}
            </CardContent>
        </Card>
    );
}

export default LeagueCard;