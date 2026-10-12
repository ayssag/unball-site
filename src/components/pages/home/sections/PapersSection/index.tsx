import { Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { BoxSection } from "@/shared/styled";
import type { PaperItem } from "@/types/content";

import { PaperCard } from "./PaperCard";

function PapersSection() {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();
  const paperItems = useTranslatedList<PaperItem>("domain.papers.items");

  const hasMore = paperItems.length > 2;
  const displayedItems = paperItems.slice(0, 2);

  return (
    <BoxSection>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <SectionHeader
          subtitle={t("pages.home.papers.subtitle")}
          title={t("pages.home.papers.title")}
        />
        <Stack spacing={3} sx={{ width: "100%" }}>
          {displayedItems.map((item, index) => (
            <PaperCard key={item.title || index} item={item} />
          ))}
        </Stack>
        {hasMore && (
          <Box sx={{ display: "flex", pt: 2 }}>
            <Button component={Link} to={getPath("papers")} variant="outlined">
              {t("pages.home.papers.ctaMore")}
            </Button>
          </Box>
        )}
      </Stack>
    </BoxSection>
  );
}

export default PapersSection;
