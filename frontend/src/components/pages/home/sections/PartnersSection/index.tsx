import { Stack, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BoxSection } from "@/shared/styled";
import { PartnerCard, type PartnerItem } from "@/components/pages/home/sections/PartnersSection/PartnerCard";


function PartnersSection() {
    const { t } = useTranslation();
    const partnerItems = t("pages.home.partners.items", { returnObjects: true }) as PartnerItem[];
    
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
                <Grid container spacing={1}>
                    {Array.isArray(partnerItems) && partnerItems.map((item, index) => (
                        <Grid key={item.name || index} size={{ xs: 12, sm: 6, md: 3 }}>
                            <PartnerCard item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </BoxSection>
    )
}

export default PartnersSection;