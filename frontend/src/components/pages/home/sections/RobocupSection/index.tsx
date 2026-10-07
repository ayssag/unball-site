import { 
    Stack, 
    Typography, 
    Grid, 
    alpha 
} from "@mui/material"
import { BoxSection, FlexBoxBetween } from "@/shared/styled"
import { useTranslation } from "react-i18next"
import WorkAreaBadge from "./WorkAreaBadge"
import {
    Visibility,
    Psychology,
    Memory,
    Settings,
    Tune
} from "@mui/icons-material"
import { useState, type ReactNode } from "react"
import WorkAreaDescription from "./WorkAreaDescription"

const iconMap: Record<string, ReactNode> = {
    Visibility: <Visibility />,
    Psychology: <Psychology />,
    Memory: <Memory />,
    Settings: <Settings />,
    Tune: <Tune />,
}

import type { WorkAreaItem } from "@/types/content";

function RobocupSection() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const workAreaItems = t("pages.home.robocup.workAreas.items", { returnObjects: true }) as WorkAreaItem[];

    return (
        <BoxSection>
            <FlexBoxBetween
                sx={(theme) => ({
                    width: "100%",
                    paddingY: { xs: 4, sm: 6, md: 10 },
                    paddingX: { xs: 2, sm: 3, md: 4 }, 
                    gap: { xs: 4, md: 6 },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "stretch", md: "flex-start" },
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    borderTop: 1,
                    borderBottom: 1,
                    borderColor: "border.main",
                })}
            >
                <Stack spacing={2} sx={{ width: "100%", maxWidth: { xs: "100%", md: "50%" } }}>
                    <Typography variant="h6">{t("pages.home.robocup.subtitle")}</Typography>
                    <Typography 
                        variant="h2" 
                        color="text.primary"
                        sx={{ lineHeight: 1.2 }}
                    >
                        {t("pages.home.robocup.title")}
                    </Typography>
                    <Typography
                        color="text.secondary"
                        sx={{
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            lineHeight: 1.6,
                        }}
                    >
                        {t("pages.home.robocup.description")}
                    </Typography>
                </Stack>

                <Stack spacing={2} sx={{ width: "100%", maxWidth: { xs: "100%", md: "50%" } }}>
                    <Typography 
                        variant="h3" 
                        color="primary"
                        sx={{
                            fontSize: { xs: "1.35rem", sm: "1.5rem", md: "1.75rem" }
                        }}
                    >
                        {t("pages.home.robocup.workAreas.title")}
                    </Typography>
                    <Grid container spacing={1.5}>
                        {Array.isArray(workAreaItems) && workAreaItems.map((item, index) => (
                            <Grid key={index} size={{ xs: 6, sm: 4 }}>
                                <WorkAreaBadge
                                    title={item.title}
                                    icon={iconMap[item.icon] || null}
                                    isActive={index === activeIndex}
                                    onClick={() => setActiveIndex(index)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <WorkAreaDescription workArea={workAreaItems[activeIndex]} />
                </Stack>
            </FlexBoxBetween>
        </BoxSection>
    )
}

export default RobocupSection