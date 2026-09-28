import { Box, Typography, alpha } from "@mui/material";
import theme from "@/theme";

export type TagCardProps = {
    tag: string;
}

export function TagCard({ tag }: TagCardProps) {
    return (
        <Box
            sx={{
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                padding: { xs: "4px 8px", sm: "6px 10px" },
                whiteSpace: "nowrap",
                flexShrink: 0,
                display: "inline-block",
            }}
        >
            <Typography 
                variant="h4" 
                color="primary"
                sx={{ 
                    fontSize: { xs: "0.55rem", sm: "0.625rem" }
                }}
            >
                {tag}
            </Typography>
        </Box>
    );
}