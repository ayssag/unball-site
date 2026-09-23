import { Box, Stack, Typography, alpha } from "@mui/material";
import { EmojiEventsOutlined, WorkspacePremiumOutlined } from "@mui/icons-material";
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
    isCenter?: boolean;
    icon?: ReactNode;
    onClick?: () => void;
};

const defaultIcons: Record<string, ReactNode> = {
    trophy: <EmojiEventsOutlined />,
    medal: <WorkspacePremiumOutlined />,
};

export function AchievementBadge({ achievement, isCenter = false, icon, onClick }: AchievementBadgeProps) {
    const { title, competition, year } = achievement;

    const renderIcon = () => {
        if (icon) return icon;
        if (achievement.icon && defaultIcons[achievement.icon]) {
            return defaultIcons[achievement.icon];
        }
        return <EmojiEventsOutlined />;
    };

    return (
        <Stack
            spacing={isCenter ? 3 : 2}
            onClick={onClick}
            sx={{
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                transform: isCenter ? "scale(1)" : "scale(0.92)"
            }}
        >
            <Box
                sx={{
                    width: isCenter ? 192 : 128,
                    height: isCenter ? 192 : 128,
                    borderRadius: "50%",
                    border: `1px solid ${theme.palette.primary.main}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.background.default,
                    "&:hover": {
                    boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.2)}`
                }
                }}
            >
                <Box
                    sx={{
                        color: theme.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "& .MuiSvgIcon-root": { fontSize: isCenter ? 80 : 48 }
                    }}>
                    {renderIcon()}
                </Box>
            </Box>

            <Stack>
                <Typography
                    variant="h3"
                    color="primary"
                    sx={{
                        alignItems: "center",
                        fontSize: isCenter ? "1.5rem" : "1.25rem"                    }}
                >
                    {title}
                </Typography>

                <Typography 
                    variant="h4" 
                    sx={{ 
                        fontSize: isCenter ? "0.875rem" : "0.75rem",
                        color: theme.palette.text.primary,
                    }}
                >
                    {competition}
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: isCenter ? "0.875rem" : "0.75rem",
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
