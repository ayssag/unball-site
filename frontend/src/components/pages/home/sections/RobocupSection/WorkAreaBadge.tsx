import { Stack, Typography, alpha } from "@mui/material";
import type { ReactNode } from "react";
import theme from "@/theme";

export type WorkAreaBadgeProps = {
    title: string;
    icon: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
};

function WorkAreaBadge({ title, icon, isActive, onClick }: WorkAreaBadgeProps) {
    return (
        <Stack
            onClick={onClick}
            spacing={1}
            sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 90, sm: 100, md: 110 },
                justifyContent: "center",
                alignItems: "center",
                paddingX: { xs: 1, sm: 2 },
                paddingY: { xs: 1.5, sm: 2 },
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                border: `1px solid ${isActive ? theme.palette.primary.main : alpha(theme.palette.secondary.main, 0.4)}`,
                transition: "all 0.2s ease-in-out",
                boxSizing: "border-box",
                "&:hover": {
                    borderColor: theme.palette.primary.main,
                    cursor: "pointer",
                },
                "& .MuiSvgIcon-root": { 
                    color: theme.palette.primary.main,
                    fontSize: { xs: 22, sm: 24, md: 28 },
                }
            }}
        >
            {icon}
            <Typography 
                variant="h4" 
                align="center"
                sx={{ 
                    color: theme.palette.text.primary,
                    fontSize: { xs: "0.6rem", sm: "0.625rem" },
                }}
            >
                {title}
            </Typography>
        </Stack>
    );
}

export default WorkAreaBadge;