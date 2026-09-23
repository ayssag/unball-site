import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LeagueCard, type LeagueItem } from "./LeagueCard";

function LeagueSection() {
    const { t } = useTranslation();
    const leagueItems = t("pages.home.league.items", { returnObjects: true }) as LeagueItem[];

    return (
        <BoxSection>
            <FlexBoxBetween sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ width: "100%" }}>
                    <Typography variant="h6">{t("pages.home.league.subtitle")}</Typography>
                    <Typography 
                        variant="h2" 
                        color="text.primary"
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
                    >
                        {t("pages.home.league.title")}
                    </Typography>
                    <Stack 
                        direction={{ xs: "column", md: "row" }} 
                        spacing={3}
                        sx={{ width: "100%" }}
                    >
                        {Array.isArray(leagueItems) && leagueItems.map((item, index) => (
                            <LeagueCard key={item.shortName || index} item={item} />
                        ))}
                    </Stack>
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    );
};

export default LeagueSection;