import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeroImage from "@/assets/images/unbolinha/bolinha_sentado.png";
import { FlexBoxBetween } from "@/shared/styled";
import { getRoutePath, type SupportedLang } from "@/i18n/routesMap";

function HeroSection() {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.startsWith('en') ? 'en' : 'pt') as SupportedLang;

    return (
        <FlexBoxBetween 
            sx={{ 
                paddingX: 12,
                color: "text.primary"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3
                }}
            >
                <Typography variant="h1" color="primary">{t('pages.home.title')}</Typography>
                <Typography>Somos a UnBall, uma equipe de futebol de robôs e projeto de extensão formado por estudantes da Universidade de Brasília que compete nas categorias da Robocup Brasil.</Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button 
                        component={Link} 
                        to={getRoutePath('partners', currentLang)} 
                        variant="contained"
                    >
                        SEJA UM APOIADOR
                    </Button>
                    <Button 
                        component={Link} 
                        to={getRoutePath('about', currentLang)} 
                        variant="outlined"
                    >
                        CONHEÇA A EQUIPE
                    </Button>
                </Box>
            </Box>
            <Box>
                <img src={HeroImage} alt="UnBolinha, Mascote da UnBall" width={500} />
            </Box>
        </FlexBoxBetween>
    );
}

export default HeroSection;