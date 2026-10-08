import { 
    Stack, 
    Typography, 
    Grid
} from "@mui/material"
import { BoxSection, Panel } from "@/shared/styled"
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

import { SectionHeader } from "@/components/common/SectionHeader"
import { useTranslatedList } from "@/hooks/useTranslatedList"

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
    const workAreaItems = useTranslatedList<WorkAreaItem>("pages.home.robocup.workAreas.items");

    return (
        <BoxSection>
            <Panel
                bordered="y"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingY: { xs: 4, sm: 6, md: 10 },
                    paddingX: { xs: 2, sm: 3, md: 4 }, 
                    gap: { xs: 4, md: 6 },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "stretch", md: "flex-start" },
                }}
            >
                <SectionHeader
                    subtitle={t("pages.home.robocup.subtitle")}
                    title={t("pages.home.robocup.title")}
                    description={t("pages.home.robocup.description")}
                    sx={{ width: "100%", maxWidth: { xs: "100%", md: "50%" } }}
                />

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
                        {workAreaItems.map((item, index) => (
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
            </Panel>
        </BoxSection>
    )
}

export default RobocupSection