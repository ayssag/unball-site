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
                <Stack
                    spacing={2}
                    sx={{ maxWidth: { md: "50%" } }}>
                    <Typography variant="h6">{t("pages.home.league.subtitle")}</Typography>
                    <Typography variant="h2" color="text.primary">{t("pages.home.league.title")}</Typography>
                    {Array.isArray(leagueItems) && leagueItems.map((item, index) => (
                        <LeagueCard key={item.shortName || index} item={item} />
                    ))}
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    );
};

export default LeagueSection;