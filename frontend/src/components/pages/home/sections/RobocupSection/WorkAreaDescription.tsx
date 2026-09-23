import { Box, Typography, alpha } from "@mui/material"
import theme from "@/theme"

type WorkAreaDescriptionProps = {
    workArea?: {
        title: string;
        description: string;
    };
}

function WorkAreaDescription({ workArea }: WorkAreaDescriptionProps) {
    if (!workArea) return null;

    return (
        <Box
            sx={{
                justifyContent: "center",
                alignItems: "center",
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 2, sm: 2.5 },
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
            }}
        >
            <Typography 
                variant="h6"
                sx={{ 
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    marginBottom: 1,
                    color: theme.palette.primary.main,
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