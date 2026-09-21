import { Box, Typography, alpha } from "@mui/material"
import theme from "@/theme"

type WorkAreaDescriptionProps = {
    workArea: {
        title: string;
        description: string;
    };
}

function WorkAreaDescription({ workArea }: WorkAreaDescriptionProps) {
    return (
        <Box
            sx={{
                justifyContent: "center",
                alignItems: "center",
                paddingX: 2,
                paddingY: 2,
                backgroundColor: alpha(theme.palette.background.paper, 0.4),
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
            }}
        >
            <Typography variant="h6">{'>'} {workArea.title}</Typography>
            <Typography>{workArea.description}</Typography>
        </Box>
    )
}

export default WorkAreaDescription