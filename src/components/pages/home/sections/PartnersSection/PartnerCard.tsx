import { alpha, Box, Typography } from "@mui/material";

import type { PartnerItem } from "@/types/content";

export type PartnerCardProps = {
  item: PartnerItem;
};

export function PartnerCard({ item }: PartnerCardProps) {
  const { type, name, logoUrl, url } = item;

  return (
    <Box
      component={url ? "a" : "div"}
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: alpha(theme.palette.background.default, 0.6),
        border: 1,
        borderColor: "border.main",
        position: "relative",
        width: "100%",
        height: { xs: "160px", sm: "180px", md: "204px" },
        px: { xs: 1.5, sm: 2 },
        py: 4,
        textDecoration: "none",
        color: "text.primary",
        transition:
          "border-color 0.2s ease-in-out, background-color 0.2s ease-in-out",
        "&:hover": url
          ? {
              borderColor: "primary.main",
              backgroundColor: alpha(theme.palette.background.default, 0.8),
            }
          : undefined,
      })}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          p: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "0.55rem", sm: "0.625rem", md: "0.75rem" } }}
        >
          {type}
        </Typography>
      </Box>
      <Box
        component="img"
        src={logoUrl}
        alt={name}
        sx={{
          maxHeight: { xs: "44px", sm: "54px", md: "64px" },
          maxWidth: "80%",
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          p: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
}

export default PartnerCard;
