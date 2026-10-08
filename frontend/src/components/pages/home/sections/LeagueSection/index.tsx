import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import type { LeagueItem } from "@/types/content";

import { LeagueCard } from "./LeagueCard";

function LeagueSection() {
  const { t } = useTranslation();
  const leagueItems = useTranslatedList<LeagueItem>("pages.home.league.items");

  return (
    <BoxSection>
      <FlexBoxBetween sx={{ width: "100%" }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <SectionHeader
            subtitle={t("pages.home.league.subtitle")}
            title={t("pages.home.league.title")}
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{ width: "100%" }}
          >
            {leagueItems.map((item, index) => (
              <LeagueCard key={item.shortName || index} item={item} />
            ))}
          </Stack>
        </Stack>
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default LeagueSection;
