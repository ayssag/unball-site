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
            spacing={2}
            sx={{
                width: "100%",
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                paddingX: 2,
                paddingY: 2,
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                border: `1px solid ${isActive ? theme.palette.primary.main : alpha(theme.palette.secondary.main, 0.4)}`,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                    borderColor: theme.palette.primary.main,
                    cursor: "pointer",
                },
                "& .MuiSvgIcon-root": { color: theme.palette.primary.main }
            }}
        >
            {icon}
            <Typography 
                variant="h4" 
                align="center"
                sx={{ color: theme.palette.text.primary }}
            >
                {title}
            </Typography>
        </Stack>
    );
}

export default WorkAreaBadge;