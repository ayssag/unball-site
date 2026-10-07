import { Typography, Stack } from "@mui/material";
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
                border: 1,
                borderColor: "border.main",
                backgroundColor: "background.default",
                padding: { xs: 1.5, sm: 3 },
                "& .MuiTypography-root": {
                    textAlign: "center",
                    whiteSpace: "nowrap"
                }
            }}
        >
            <Typography variant="h6" sx={{ fontSize: { xs: "0.55rem", sm: "0.65rem" } }}>{t("pages.home.papers.yearBadgeText")}</Typography>
            <Typography 
                variant="h3" 
                sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.25rem" }
                }}>{year}</Typography>
        </Stack>
    );
}