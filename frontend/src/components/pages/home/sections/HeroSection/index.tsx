import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import HeroImage from "./HeroImage";
import { SectionHeader } from "@/components/common/SectionHeader";

function HeroSection() {
    const { t } = useTranslation();
    const getPath = useLocalizedPath();

    return (
        <BoxSection>
            <FlexBoxBetween 
                sx={{ 
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 4 },
                    color: "text.primary"
                }}
            >
                <SectionHeader
                    subtitle={t("pages.home.hero.subtitle")}
                    title={t("pages.home.hero.title")}
                    description={t("pages.home.hero.description")}
                    titleVariant="h1"
                    titleColor="primary"
                    spacing={3}
                    sx={{ flex: 1, maxWidth: { md: "50%" } }}
                >
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Button 
                            component={Link} 
                            to={getPath('partners')} 
                            variant="contained"
                        >
                            {t("pages.home.hero.ctaPartners")}
                        </Button>
                        <Button 
                            component={Link} 
                            to={getPath('about')} 
                            variant="outlined"
                        >
                            {t("pages.home.hero.ctaAbout")}
                        </Button>
                    </Box>
                </SectionHeader>

                <HeroImage alt={t("pages.home.hero.imageAlt")} />
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default HeroSection;