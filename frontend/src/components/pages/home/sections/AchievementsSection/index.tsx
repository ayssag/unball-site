import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, Panel } from "@/shared/styled";
import type { AchievementItem } from "@/types/content";

import { AchievementCarousel } from "./AchievementCarousel";

function AchievementsSection() {
  const { t } = useTranslation();
  const achievementItems = useTranslatedList<AchievementItem>(
    "pages.home.achievements.items"
  );

  return (
    <BoxSection>
      <Panel
        bordered="y"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingY: { xs: 4, sm: 6, md: 10, xl: 12 },
          paddingX: { xs: 2, sm: 3, md: 4, xl: 6 },
          gap: { xs: 3, sm: 4, md: 6, xl: 8 },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <SectionHeader
          subtitle={t("pages.home.achievements.subtitle")}
          title={t("pages.home.achievements.title")}
          spacing={1.5}
        />

        <AchievementCarousel items={achievementItems} />
      </Panel>
    </BoxSection>
  );
}

export default AchievementsSection;
