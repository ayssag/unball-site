import { Box, Stack, Typography, alpha } from "@mui/material";
import { EmojiEventsOutlined } from "@mui/icons-material";
import theme from "@/theme";
import type { ReactNode } from "react";

export type AchievementItem = {
    id: number | string;
    title: string;
    competition: string;
    year: string | number;
    icon?: string;
};

export type AchievementBadgeProps = {
    achievement: AchievementItem;
    icon?: ReactNode;
};

export function AchievementBadge({ achievement, icon }: AchievementBadgeProps) {
    const { title, competition, year } = achievement;

    return (
        <Stack
            spacing={3}
            sx={{ textAlign: "center" }}
        >
            <Box
                sx={{
                    width: { xs: 140, sm: 170 },
                    height: { xs: 140, sm: 170 },
                    borderRadius: "50%",
                    border: `1px solid ${theme.palette.primary.main}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.background.default,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                        transform: "translateY(-4px)",
                    }
                }}
            >
                {icon || (
                    <EmojiEventsOutlined
                        sx={{
                            fontSize: { xs: 52, sm: 64 },
                            color: theme.palette.primary.main,
                        }}
                    />
                )}
            </Box>

            <Stack spacing={1}>
                <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontSize: "1.25rem" }}
                >
                    {title}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "0.75rem"}}>
                    {competition}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "0.75rem",
                        color: theme.palette.secondary.main,
                    }}
                >
                    {year}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default AchievementBadge;
