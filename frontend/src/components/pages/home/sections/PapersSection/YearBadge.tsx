import theme from "@/theme";
import { Typography, Stack, alpha } from "@mui/material";

export type YearBadgeProps = {
    date: Date;
};

export function YearBadge({ date }: YearBadgeProps) {
    const year: number = date.getFullYear();

    return (
       <Stack
            sx={{
                display: "block",
                width: "fit-content",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                backgroundColor: theme.palette.background.default,
                padding: 3,
                "& .MuiTypography-root": {
                    textAlign: "center",
                    whiteSpace: "nowrap"
                }
            }}
       >
            <Typography variant="h6" sx={{ fontSize: { xs: "0.625rem", sm: "0.65rem" } }}>ANO</Typography>
            <Typography 
                variant="h3" 
                sx={{
                    color: "primary.main",
                    fontSize: "1.25rem"
                }}>{year}</Typography>
       </Stack>
    );
}