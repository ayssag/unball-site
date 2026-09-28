import { Stack, Typography } from "@mui/material";
import { BoxSection } from "@/shared/styled";
import { useTranslation } from "react-i18next";
import { PaperCard, type PaperItem } from "./PaperCard";

function PapersSection() {
    const { t } = useTranslation();
    const paperItems = t("pages.home.papers.items", { returnObjects: true }) as PaperItem[];

    return (
        <BoxSection>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <Typography variant="h6">{t("pages.home.papers.subtitle")}</Typography>
                <Typography 
                    variant="h2" 
                    color="text.primary"
                    sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
                >
                    {t("pages.home.papers.title")}
                </Typography>
                <Stack 
                    spacing={3}
                    sx={{ width: "100%" }}
                >
                    {Array.isArray(paperItems) && paperItems.map((item, index) => (
                        <PaperCard key={item.title || index} item={item} />
                    ))}
                </Stack>
            </Stack>
        </BoxSection>
    )
};

export default PapersSection;