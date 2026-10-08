import { Stack, Typography } from "@mui/material";
import { Panel } from "@/shared/styled";
import type { ReactNode } from "react";

export type WorkAreaBadgeProps = {
    title: string;
    icon: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
};

function WorkAreaBadge({ title, icon, isActive, onClick }: WorkAreaBadgeProps) {
    return (
        <Stack
            component={Panel}
            bordered="all"
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
                borderColor: isActive ? "primary.main" : "border.main",
                transition: "all 0.2s ease-in-out",
                boxSizing: "border-box",
                "&:hover": {
                    borderColor: "primary.main",
                    cursor: "pointer",
                },
                "& .MuiSvgIcon-root": { 
                    color: "primary.main",
                    fontSize: { xs: 22, sm: 24, md: 28 },
                }
            }}
        >
            {icon}
            <Typography 
                variant="h4" 
                align="center"
                color="text.primary"
                sx={{ 
                    fontSize: { xs: "0.6rem", sm: "0.625rem" },
                }}
            >
                {title}
            </Typography>
        </Stack>
    );
}

export default WorkAreaBadge;