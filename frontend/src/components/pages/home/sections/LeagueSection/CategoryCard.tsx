import { Box, Typography, alpha } from "@mui/material";
import theme from "@/theme";

export type CategoryCardProps = {
    tag: string;
}

export function CategoryCard({ tag }: CategoryCardProps) {
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