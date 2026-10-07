import { Box, Typography } from "@mui/material";

export type TagCardProps = {
    tag: string;
}

export function TagCard({ tag }: TagCardProps) {
    return (
        <Box
            sx={{
                border: 1,
                borderColor: "border.main",
                px: { xs: 1, sm: 1.25 },
                py: { xs: 0.5, sm: 0.75 },
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