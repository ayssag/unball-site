import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BoxSection } from "@/shared/styled";

function PartnersSection() {
    const { t } = useTranslation();
    return(
        <BoxSection>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <Typography variant="h6">{t("pages.home.partners.subtitle")}</Typography>
                <Typography 
                    variant="h2" 
                    color="text.primary"
                    sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
                >
                    {t("pages.home.partners.title")}
                </Typography>
            </Stack>
        </BoxSection>
    )
}

export default PartnersSection;