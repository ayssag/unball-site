import {
    Box,
    Stack,
    Card,
    CardHeader,
    CardContent,
    Typography,
    alpha
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { CategoryCard } from "./CategoryCard";
import theme from "@/theme";
import { FlexBoxBetween } from "@/shared/styled";

type LeagueTrivia = {
    title: string;
    description: string[] | string;
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

export function LeagueCard({ item }: LeagueCardProps) {
    const { t } = useTranslation();
    const leagueItems = t("pages.home.league.items", { returnObjects: true }) as LeagueItem[];
    const currentItem = item || (Array.isArray(leagueItems) && leagueItems.length > 0 ? leagueItems[0] : undefined);

    if (!currentItem) return null;

    return (
        <Card
            sx={{
                padding: 2,
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                borderRadius: 0,
                position: "relative"
            }}
        >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "fit-content",
                        padding: 1,
                        backgroundColor: theme.palette.background.default,
                        border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    }}
                >
                    <Typography variant="h4">
                        CAT:{currentItem.shortName}
                    </Typography>
                </Box>
            <CardHeader
                title={
                    <Typography variant="h3" sx={{ mt: 2 }}>
                        {currentItem.name}
                    </Typography>
                }
                subheader={
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                        {currentItem.tags && currentItem.tags.map((tag, index) => (
                            <CategoryCard tag={tag} key={index} />
                        ))}
                    </Stack>
                }
            />
            <CardContent>
                <Typography>{currentItem.description}</Typography>
            </CardContent>
            {currentItem.trivia && (
                <Box
                    sx={{ borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}` }}
                >
                    <CardContent>
                        <FlexBoxBetween>
                            <Stack spacing={1}>
                                <Typography variant="h4" sx={{ fontWeight: 400 }}>{currentItem.trivia.title}</Typography>
                                <Typography 
                                    variant="h4"
                                    color="primary"
                                    sx={{ fontSize: "1.25rem", textTransform: "none" }}
                                >
                                    {Array.isArray(currentItem.trivia.description) 
                                        ? currentItem.trivia.description.join(" ") 
                                        : currentItem.trivia.description}
                                </Typography>
                            </Stack>
                            <Box
                                sx={{
                                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                                    backgroundColor: theme.palette.background.default, 
                                    width: "4rem", 
                                    height: "4rem"
                                }}
                            >

                            </Box>
                        </FlexBoxBetween>
                    </CardContent>
                </Box>
            )}
        </Card>
    );
}