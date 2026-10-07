import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { Typography, Stack, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AchievementCarousel } from "./AchievementCarousel";
import type { AchievementItem } from "@/types/content";

function AchievementsSection() {
    const { t } = useTranslation();
    const achievementItems = t("pages.home.achievements.items", { returnObjects: true }) as AchievementItem[];

    return (
        <BoxSection>
            <FlexBoxBetween
                sx={(theme) => ({
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingY: { xs: 4, sm: 6, md: 10, xl: 12 },
                    paddingX: { xs: 2, sm: 3, md: 4, xl: 6 }, 
                    gap: { xs: 3, sm: 4, md: 6, xl: 8 },
                    width: "100%",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    borderTop: 1,
                    borderBottom: 1,
                    borderColor: "border.main",
                })}
            >
                <Stack spacing={1.5}>
                    <Typography variant="h6">{t("pages.home.achievements.subtitle")}</Typography>
                    <Typography 
                        variant="h2" 
                        color="text.primary"
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
                    >
                        {t("pages.home.achievements.title")}
                    </Typography>
                </Stack>

                <AchievementCarousel items={Array.isArray(achievementItems) ? achievementItems : []} />
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default AchievementsSection;