import { Stack, Typography } from "@mui/material";
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
                <Stack
                    direction={{ xs: "column", md: "row" }} 
                    spacing={1}
                    sx={{ 
                        width: "100%", 
                        justifyContent: "center"
                    }}
                >
                    {Array.isArray(partnerItems) && partnerItems.map((item, index) => (
                        <PartnerCard key={item.name || index} item={item} />
                    ))}
                </Stack>
            </Stack>
        </BoxSection>
    )
}

export default PartnersSection;