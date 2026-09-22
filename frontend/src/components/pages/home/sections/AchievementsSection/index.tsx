import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { Typography, alpha } from "@mui/material";
import theme from "@/theme";
import { useTranslation } from "react-i18next";

function AchievementsSection() {
    const { t } = useTranslation();

    return (
        <BoxSection>
            <FlexBoxBetween
                sx={{
                    paddingY: 22,
                    paddingX: 3, 
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                }}
            >
                <Typography variant="h6">{t("pages.home.achievements.subtitle")}</Typography>
                <Typography variant="h2" color="text.primary">{t("pages.home.achievements.title")}</Typography>
            </FlexBoxBetween>
        </BoxSection>
    )
};

export default AchievementsSection;