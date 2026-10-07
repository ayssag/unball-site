import { Stack, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BoxSection } from "@/shared/styled";
import { PartnerCard } from "@/components/pages/home/sections/PartnersSection/PartnerCard";
import type { PartnerItem } from "@/types/content";
import { SectionHeader } from "@/components/common/SectionHeader";

function PartnersSection() {
    const { t } = useTranslation();
    const partnerItems = t("pages.home.partners.items", { returnObjects: true }) as PartnerItem[];
    
    return(
        <BoxSection>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <SectionHeader
                    subtitle={t("pages.home.partners.subtitle")}
                    title={t("pages.home.partners.title")}
                />
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