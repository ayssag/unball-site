import { Box, Typography, alpha } from "@mui/material";
import theme from "@/theme";

export type TagCard = {
    tag: string;
}

export function TagCard({ tag }: TagCard) {
    return (
        <Box
            sx={{
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                padding: 1,
            }}
        >
            <Typography variant="h4" color="primary">{tag}</Typography>
        </Box>
    )
}