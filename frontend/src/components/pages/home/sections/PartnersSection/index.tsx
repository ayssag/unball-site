import { Grid,Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection } from "@/shared/styled";
import type { PartnerItem } from "@/types/content";

import { PartnerCard } from "./PartnerCard";

function PartnersSection() {
  const { t } = useTranslation();
  const partnerItems = useTranslatedList<PartnerItem>(
    "pages.home.partners.items"
  );

  return (
    <BoxSection>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <SectionHeader
          subtitle={t("pages.home.partners.subtitle")}
          title={t("pages.home.partners.title")}
        />
        <Grid container spacing={1}>
          {partnerItems.map((item, index) => (
            <Grid key={item.name || index} size={{ xs: 12, sm: 6, md: 3 }}>
              <PartnerCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </BoxSection>
  );
}

export default PartnersSection;
