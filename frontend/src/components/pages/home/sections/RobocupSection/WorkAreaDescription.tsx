import { Box, Typography, alpha } from "@mui/material"

import type { WorkAreaItem } from "@/types/content";

export type WorkAreaDescriptionProps = {
    workArea?: Pick<WorkAreaItem, "title" | "description">;
};

function WorkAreaDescription({ workArea }: WorkAreaDescriptionProps) {
    if (!workArea) return null;

    return (
        <Box
            sx={(theme) => ({
                justifyContent: "center",
                alignItems: "center",
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 2, sm: 2.5 },
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                border: 1,
                borderColor: "border.main",
            })}
        >
            <Typography 
                variant="h6"
                color="primary"
                sx={{ 
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    marginBottom: 1,
                }}
            >
                {'>'} {workArea.title}
            </Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" }
                }}
            >
                {workArea.description}
            </Typography>
        </Box>
    )
}

export default WorkAreaDescription