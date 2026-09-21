import { Typography, Stack, Box } from "@mui/material"
import { BoxSection, FlexBoxBetween } from "@/shared/styled"
import { useTranslation } from "react-i18next"
import unballLogo from "@/assets/images/logos/unball-logo-vector.svg"

function AboutSection() {
    const { t } = useTranslation();
    return (
        <BoxSection>
            <FlexBoxBetween
                sx={{
                    width: { xs: "100%", lg: "60%"},
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 4, md: 6 },
                    alignItems: "center"
                }}>
                <Box
                    component="img"
                    src={unballLogo}
                    alt="UnBall Logo"
                    sx={{
                        width: { xs: "180px", sm: "240px", md: "280px" },
                        height: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                    }}
                />
                <Stack
                    spacing={2}
                    sx={{ maxWidth: { md: "50%" } }}>
                    <Typography variant="h6">{t("pages.home.about.subtitle")}</Typography>
                    <Typography variant="h2" color="text.primary">{t("pages.home.about.title")}</Typography>
                    <Typography>{t("pages.home.about.description")}</Typography>
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    )
}

export default AboutSection