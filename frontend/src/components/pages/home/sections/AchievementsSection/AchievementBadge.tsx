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
    isFarSide?: boolean;
    icon?: ReactNode;
    onClick?: () => void;
};

const defaultIcons: Record<string, ReactNode> = {
    trophy: <EmojiEventsOutlined />,
    medal: <WorkspacePremiumOutlined />,
};

export function AchievementBadge({ achievement, isCenter = false, isFarSide = false, icon, onClick }: AchievementBadgeProps) {
    const { title, competition, year } = achievement;

    const renderIcon = () => {
        if (icon) return icon;
        if (achievement.icon && defaultIcons[achievement.icon]) {
            return defaultIcons[achievement.icon];
        }
        return <EmojiEventsOutlined />;
    };

    const getSize = () => {
        if (isCenter) return { xs: 100, sm: 130, md: 150, lg: 175, xl: 208 };
        if (isFarSide) return { xs: 50, sm: 64, md: 72, lg: 76, xl: 96 };
        return { xs: 56, sm: 76, md: 90, lg: 100, xl: 128 };
    };

    const getIconSize = () => {
        if (isCenter) return { xs: 40, sm: 52, md: 64, lg: 72, xl: 88 };
        if (isFarSide) return { xs: 20, sm: 26, md: 30, lg: 32, xl: 40 };
        return { xs: 24, sm: 32, md: 38, lg: 40, xl: 52 };
    };

    return (
        <Stack
            spacing={isCenter ? { xs: 1.5, md: 2.5 } : { xs: 1, md: 1.5 }}
            onClick={onClick}
            sx={{
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                opacity: isCenter ? 1 : isFarSide ? 0.4 : 0.65,
                "&:hover": {
                    opacity: 1,
                    transform: isCenter ? "scale(1.04)" : "scale(0.96)",
                }
            }}
        >
            <Box
                sx={{
                    width: getSize(),
                    height: getSize(),
                    borderRadius: "50%",
                    border: `1px solid ${theme.palette.primary.main}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.background.default,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.3)}`
                    }
                }}
            >
                <Box
                    sx={{
                        color: theme.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "& .MuiSvgIcon-root": { 
                            fontSize: getIconSize() 
                        }
                    }}
                >
                    {renderIcon()}
                </Box>
            </Box>

            <Stack sx={{ display: isCenter ? "flex" : { xs: "none", md: isFarSide ? "none" : "flex" } }}>
                <Typography
                    variant="h3"
                    color="primary"
                    sx={{
                        fontSize: isCenter ? { xs: "1rem", sm: "1.2rem", md: "1.4rem", xl: "1.65rem" } : { xs: "0.85rem", md: "1rem", xl: "1.15rem" }
                    }}
                >
                    {title}
                </Typography>

                <Typography 
                    variant="h4" 
                    sx={{ 
                        fontSize: isCenter ? { xs: "0.7rem", md: "0.8rem", xl: "0.9rem" } : { xs: "0.6rem", md: "0.7rem", xl: "0.8rem" },
                        color: theme.palette.text.primary,
                    }}
                >
                    {competition}
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: isCenter ? { xs: "0.7rem", md: "0.8rem", xl: "0.9rem" } : { xs: "0.6rem", md: "0.7rem", xl: "0.8rem" },
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
