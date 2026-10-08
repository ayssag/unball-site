import type { SxProps, Theme } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import React from "react";

export interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  titleVariant?: "h1" | "h2" | "h3";
  titleColor?: "text.primary" | "primary" | "secondary" | string;
  spacing?: number;
  align?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  titleVariant = "h2",
  titleColor = "text.primary",
  spacing = 2,
  align = "left",
  sx,
  children,
}: SectionHeaderProps) {
  const alignmentMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  } as const;

  return (
    <Stack
      component="header"
      spacing={spacing}
      sx={{
        alignItems: alignmentMap[align],
        textAlign: align,
        ...sx,
      }}
    >
      {subtitle && (
        <Typography variant="h6" component="span">
          {subtitle}
        </Typography>
      )}
      <Typography variant={titleVariant} color={titleColor}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary">{description}</Typography>
      )}
      {children}
    </Stack>
  );
}

export default SectionHeader;
