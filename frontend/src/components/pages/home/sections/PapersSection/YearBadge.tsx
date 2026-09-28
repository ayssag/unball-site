import theme from "@/theme";
import { Typography, Stack, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";

export type YearBadgeProps = {
    date: Date;
};

export function YearBadge({ date }: YearBadgeProps) {
    const { t } = useTranslation();
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
            <Typography variant="h6" sx={{ fontSize: { xs: "0.625rem", sm: "0.65rem" } }}>{t("pages.home.papers.yearBadgeText")}</Typography>
            <Typography 
                variant="h3" 
                sx={{
                    color: "primary.main",
                    fontSize: "1.25rem"
                }}>{year}</Typography>
        </Stack>
    );
}