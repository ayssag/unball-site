import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { Typography, Stack, alpha } from "@mui/material";
import theme from "@/theme";
import { useTranslation } from "react-i18next";
import { AchievementBadge, type AchievementItem } from "./AchievementBadge";

function AchievementsSection() {
    const { t } = useTranslation();
    const achievementItems = t("pages.home.achievements.items", { returnObjects: true }) as AchievementItem[];

    return (
        <BoxSection>
            <FlexBoxBetween
                sx={{
                    paddingY: 10,
                    paddingX: 3, 
                    gap: 4,
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h6">{t("pages.home.achievements.subtitle")}</Typography>
                    <Typography variant="h2" color="text.primary">{t("pages.home.achievements.title")}</Typography>
                    <Stack
                        direction="row"
                        spacing={{ xs: 4, sm: 6 }}
                    >
                        {Array.isArray(achievementItems) && achievementItems.map((item, index) => (
                            <AchievementBadge key={item.id || index} achievement={item} />
                        ))}
                    </Stack>
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    )
};

export default AchievementsSection;