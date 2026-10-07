import { Stack, Button, Box } from "@mui/material";
import { BoxSection } from "@/shared/styled";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getRoutePath, type SupportedLang } from "@/i18n/routesMap";
import { PaperCard } from "./PaperCard";
import type { PaperItem } from "@/types/content";
import { SectionHeader } from "@/components/common/SectionHeader";

function PapersSection() {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.startsWith('en') ? 'en' : 'pt') as SupportedLang;
    const paperItems = t("pages.home.papers.items", { returnObjects: true }) as PaperItem[];

    const hasMore = Array.isArray(paperItems) && paperItems.length > 2;
    const displayedItems = Array.isArray(paperItems) ? paperItems.slice(0, 2) : [];

    return (
        <BoxSection>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <SectionHeader
                    subtitle={t("pages.home.papers.subtitle")}
                    title={t("pages.home.papers.title")}
                />
                <Stack 
                    spacing={3}
                    sx={{ width: "100%" }}
                >
                    {displayedItems.map((item, index) => (
                        <PaperCard key={item.title || index} item={item} />
                    ))}
                </Stack>
                {hasMore && (
                    <Box sx={{ display: "flex", pt: 2 }}>
                        <Button
                            component={Link}
                            to={getRoutePath("papers", currentLang)}
                            variant="outlined"
                        >
                            {t("pages.home.papers.ctaMore")}
                        </Button>
                    </Box>
                )}
            </Stack>
        </BoxSection>
    );
};

export default PapersSection;