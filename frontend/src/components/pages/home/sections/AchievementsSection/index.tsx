import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { alpha } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AchievementCarousel } from "./AchievementCarousel";
import type { AchievementItem } from "@/types/content";
import { SectionHeader } from "@/components/common/SectionHeader";

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
                <SectionHeader
                    subtitle={t("pages.home.achievements.subtitle")}
                    title={t("pages.home.achievements.title")}
                    spacing={1.5}
                />

                <AchievementCarousel items={Array.isArray(achievementItems) ? achievementItems : []} />
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default AchievementsSection;