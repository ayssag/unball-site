import { Box } from "@mui/material";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { useTranslation } from "react-i18next";
import unballLogo from "@/assets/images/logos/unball-logo-vector.svg";
import { SectionHeader } from "@/components/common/SectionHeader";

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
                <SectionHeader
                    subtitle={t("pages.home.about.subtitle")}
                    title={t("pages.home.about.title")}
                    description={t("pages.home.about.description")}
                    sx={{ maxWidth: { md: "50%" } }}
                />
            </FlexBoxBetween>
        </BoxSection>
    )
}

export default AboutSection