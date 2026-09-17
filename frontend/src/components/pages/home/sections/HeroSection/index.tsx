import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FlexBoxBetween } from "@/shared/styled";
import { getRoutePath, type SupportedLang } from "@/i18n/routesMap";
import HeroImage from "./HeroImage";

function HeroSection() {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.startsWith('en') ? 'en' : 'pt') as SupportedLang;

    return (
        <FlexBoxBetween 
            sx={{ 
                paddingX: { xs: 3, sm: 6, md: 12 },
                paddingY: { xs: 4, md: 6 },
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 6, md: 4 },
                alignItems: "center",
                color: "text.primary"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    flex: 1,
                    maxWidth: { md: "50%" }
                }}
            >
                <Typography variant="h6">{t("pages.home.hero.subtitle")}</Typography>
                <Typography variant="h1" color="primary">{t("pages.home.hero.title")}</Typography>
                <Typography>{t("pages.home.hero.description")}</Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button 
                        component={Link} 
                        to={getRoutePath('partners', currentLang)} 
                        variant="contained"
                    >
                        {t("pages.home.hero.ctaPartners")}
                    </Button>
                    <Button 
                        component={Link} 
                        to={getRoutePath('about', currentLang)} 
                        variant="outlined"
                    >
                        {t("pages.home.hero.ctaAbout")}
                    </Button>
                </Box>
            </Box>

            <HeroImage />
        </FlexBoxBetween>
    );
}

export default HeroSection;