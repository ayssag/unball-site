import { 
    Box, 
    Stack, 
    Typography, 
    Grid, 
    alpha 
} from "@mui/material"
import { FlexBoxBetween } from "@/shared/styled"
import theme from "@/theme"
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

type WorkAreaItem = {
    title: string;
    icon: string;
    description: string;
}

function RobocupSection() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const workAreaItems = t("pages.home.robocup.workAreas.items", { returnObjects: true }) as WorkAreaItem[];

    return (
        <Box
            sx={{
                paddingX: { xs: 3, sm: 6, md: 12 },
                paddingY: { xs: 4, md: 6 },
            }}
        >
            <FlexBoxBetween
                sx={{
                    paddingY: 22,
                    paddingX: 3, 
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                    borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                }}
            >
                <Stack spacing={2} sx={{ maxWidth: "50%" }}>
                    <Typography variant="h6">{t("pages.home.robocup.subtitle")}</Typography>
                    <Typography variant="h2" color="text.primary">{t("pages.home.robocup.title")}</Typography>
                    <Typography>{t("pages.home.robocup.description")}</Typography>
                </Stack>

                <Stack spacing={2} sx={{ maxWidth: "50%"}}>
                    <Typography variant="h3" color="primary">{t("pages.home.robocup.workAreas.title")}</Typography>
                    <Grid container spacing={2}>
                        {Array.isArray(workAreaItems) && workAreaItems.map((item, index) => (
                            <Grid key={index} size={4}>
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
        </Box>
    )
}

export default RobocupSection